#!/usr/bin/env python3
"""
check-site.py — 网页自检脚本
===========================
在提交前跑一遍，能提前发现绝大多数低级错误。

用法：
    python tools/check-site.py

检查内容：
  1. 所有 JS / CSS 文件括号是否配平
  2. index.html 引用的资源是否都存在
  3. site-data.js 的 nav id 与 index.html 的 section id 是否对应
  4. site-data.js 里各板块字段是否合法（必填项缺失会警告）
  5. 图片路径是否存在
"""

import os
import re
import sys
import json

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Windows 控制台默认 GBK，中文/符号可能编码失败 → 强制 UTF-8
try:
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')
    sys.stderr.reconfigure(encoding='utf-8', errors='replace')
except Exception:
    pass

errors = []
warnings = []
infos = []


# ---------- 工具函数 ----------
def strip_js(text):
    """按词法剥离 JS 注释与字符串，避免误判括号。"""
    out = []
    i, n = 0, len(text)
    while i < n:
        c = text[i]
        if c in '"\'':
            quote = c
            out.append('""')
            i += 1
            while i < n:
                if text[i] == '\\':
                    i += 2
                    continue
                if text[i] == quote:
                    i += 1
                    break
                i += 1
            continue
        if c == '/' and i + 1 < n and text[i + 1] == '/':
            while i < n and text[i] != '\n':
                i += 1
            continue
        if c == '/' and i + 1 < n and text[i + 1] == '*':
            i += 2
            while i + 1 < n and not (text[i] == '*' and text[i + 1] == '/'):
                i += 1
            i += 2
            continue
        out.append(c)
        i += 1
    return ''.join(out)


def read(rel):
    path = os.path.join(ROOT, rel)
    if not os.path.exists(path):
        return None
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()


def check_balance(rel, pairs):
    """检查括号配平。"""
    src = read(rel)
    if src is None:
        errors.append(f"[缺失] {rel} 不存在")
        return
    clean = strip_js(src) if rel.endswith('.js') else src
    for name, (op, cl) in pairs.items():
        diff = clean.count(op) - clean.count(cl)
        if diff != 0:
            errors.append(f"[括号不配平] {rel} 中 {name} 差值 {diff:+d}")
    infos.append(f"✓ {rel}")


def main():
    print("=" * 62)
    print("  网页自检 · check-site.py")
    print("=" * 62)
    print()

    js_files = [
        'js/01-site-data.js', 'js/02-helpers.js', 'js/03-main.js',
        'js/04-render.js', 'js/05-interaction.js',
    ]
    css_files = [
        'css/01-tokens.css', 'css/02-base.css', 'css/03-sidebar.css',
        'css/04-content.css', 'css/05-components.css', 'css/06-responsive.css',
    ]

    # ---- 1. 括号配平 ----
    print("[1/5] 检查括号配平 …")
    for f in js_files:
        check_balance(f, {'花括号': ('{', '}'), '方括号': ('[', ']'), '圆括号': ('(', ')')})
    for f in css_files:
        check_balance(f, {'花括号': ('{', '}')})
    print()

    # ---- 2. index.html 资源引用 ----
    print("[2/5] 检查 index.html 引用的资源 …")
    html = read('index.html')
    if html is None:
        errors.append("[缺失] index.html 不存在")
        print()
        return report()

    refs = re.findall(r'(?:href|src)="(?!https?:|//|mailto:|data:)([^"]+)"', html)
    for r in refs:
        clean = r.split('?')[0]
        if not clean or clean.startswith('#'):
            continue
        if os.path.exists(os.path.join(ROOT, clean)):
            infos.append(f"✓ 资源存在: {clean}")
        else:
            errors.append(f"[资源缺失] index.html 引用了不存在的文件: {clean}")
    print()

    # ---- 3. nav id 与 section id 对应 ----
    print("[3/5] 检查导航 id 与板块 id 对应 …")
    section_ids = re.findall(r'<section id="([a-zA-Z0-9_-]+)"', html)
    data_src = read('js/01-site-data.js') or ''
    nav_block = re.search(r'nav:\s*\[(.*?)\]', data_src, re.S)
    nav_ids = []
    if nav_block:
        nav_ids = re.findall(r'\{ id:\s*"([a-zA-Z0-9_-]+)"', nav_block.group(1))
    auto_nav = bool(nav_block) and not nav_ids   # nav: [] → 自动生成模式

    for n in nav_ids:
        if n not in section_ids:
            errors.append(f"[导航死链] nav 中的 '{n}' 在 index.html 里没有对应 <section>")

    if auto_nav:
        infos.append(f"✓ nav 为空 → 自动生成模式（{len(section_ids)} 个板块将自动进入导航）")
    else:
        for s in section_ids:
            if s not in nav_ids:
                warnings.append(f"[提示] 板块 '{s}' 未加入导航（不影响使用）")
    infos.append(f"✓ 板块 {len(section_ids)} 个 / 显式导航 {len(nav_ids)} 项")
    print()

    # ---- 4. site-data 字段合法性 ----
    print("[4/5] 检查 site-data.js 字段 …")
    try:
        # 用 node 不一定存在，这里做轻量正则检查
        if 'window.SITE' not in data_src:
            errors.append("[结构错误] site-data.js 里找不到 window.SITE")
        required = ['profile:', 'nav:', 'about:', 'education:', 'experience:',
                    'projects:', 'skills:', 'news:']
        for r in required:
            if r not in data_src:
                warnings.append(f"[提示] 01-site-data.js 缺少字段 {r}")
        # 头像路径检查
        m = re.search(r'avatar:\s*"([^"]+)"', data_src)
        if m:
            av = m.group(1)
            if av.startswith('assets/') and not os.path.exists(os.path.join(ROOT, av)):
                warnings.append(f"[图片缺失] 头像 {av} 不存在")
            elif av.startswith('assets/'):
                infos.append(f"✓ 头像存在: {av}")
        # 常见空值检查
        if re.search(r'email:\s*""', data_src):
            warnings.append("[提示] email 为空，邮箱行会自动隐藏")
        if re.search(r'location:\s*""', data_src):
            warnings.append("[提示] location 为空，地点行会自动隐藏")
    except Exception as e:
        errors.append(f"[检查失败] {e}")
    print()

    # ---- 5. 图片资源 ----
    print("[5/5] 检查图片资源 …")
    img_dir = os.path.join(ROOT, 'assets', 'img')
    if os.path.isdir(img_dir):
        for f in sorted(os.listdir(img_dir)):
            if f.lower().endswith(('.jpg', '.jpeg', '.png', '.svg', '.webp', '.gif')):
                infos.append(f"✓ assets/img/{f}")
    music_dir = os.path.join(ROOT, 'assets', 'music')
    if os.path.isdir(music_dir):
        for f in sorted(os.listdir(music_dir)):
            if f.lower().endswith(('.mp3', '.wav', '.m4a', '.ogg')):
                infos.append(f"✓ assets/music/{f}")
    print()

    return report()


def report():
    print("=" * 62)
    if infos:
        print(f"通过项: {len(infos)}")
    if warnings:
        print(f"\n⚠️  提示 {len(warnings)} 条：")
        for w in warnings:
            print("   " + w)
    if errors:
        print(f"\n❌ 错误 {len(errors)} 条：")
        for e in errors:
            print("   " + e)
        print("\n结果: 未通过，请修复后再提交。")
        return 1
    print("\n✅ 结果: 全部通过，可以提交了！")
    return 0


if __name__ == '__main__':
    sys.exit(main())
