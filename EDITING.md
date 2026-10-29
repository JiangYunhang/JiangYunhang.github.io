# 📝 如何编辑你的个人主页

> **最重要的一句话：99% 的情况下，你只需要改 `js/01-site-data.js` 这一个文件。**

---

## 🚀 三步更新网页

1. 打开 GitHub 仓库 → [`JiangYunhang/JiangYunhang.github.io`](https://github.com/JiangYunhang/JiangYunhang.github.io)
2. 点击 **`js/01-site-data.js`** → 右上角 ✏️ **铅笔图标** → 修改内容
3. 页面底部点击 **Commit changes** → 等待 1–2 分钟 → 刷新 [jiangyunhang.github.io](https://jiangyunhang.github.io/) 即可看到更新

---

## 📂 仓库结构

```
.github.io/
├── index.html              ← 网页骨架（板块顺序在这里调整）
├── EDITING.md              ← 你正在看的这份指南（快速上手）
├── README.md               ← 仓库首页说明
│
├── js/                     ← JavaScript（★ 内容都在这里）
│   ├── 01-site-data.js     ← ★★★ 你的全部内容，唯一需要日常修改的文件 ★★★
│   ├── 02-helpers.js       ← 渲染模板（一般不用动）
│   ├── 03-main.js          ← 主题切换 / 侧栏信息（一般不用动）
│   ├── 04-render.js        ← 内容渲染（加新板块时才动）
│   └── 05-interaction.js   ← 交互逻辑（一般不用动）
│
├── css/                    ← 样式（★ 改配色在这里）
│   ├── 01-tokens.css       ← ★ 颜色 / 字号 / 间距变量，改配色只看这个
│   ├── 02-base.css         ← 基础重置与全局排版
│   ├── 03-sidebar.css      ← 左侧边栏
│   ├── 04-content.css      ← 主内容区排版
│   ├── 05-components.css   ← 卡片 / 时间线 / 仓库等组件
│   └── 06-responsive.css   ← 响应式（手机 / 平板适配），必须最后加载
│
├── docs/                   ← 详细文档
│   ├── DATA-FIELDS.md      ← 每个字段的详细说明与完整示例
│   ├── HOW-TO-ADD-SECTION.md ← 如何新增一个板块
│   └── STRUCTURE.md        ← 每个文件的作用与依赖关系
│
├── tools/                  ← 辅助脚本
│   ├── check-site.py       ← 🧪 自检脚本（提交前跑一下）
│   ├── preview.py          ← 本地预览服务器
│   ├── deploy.sh           ← 一键部署（macOS / Linux / Git Bash）
│   └── deploy.ps1          ← 一键部署（Windows PowerShell）
│
└── assets/                 ← 资源文件
    ├── img/                ← 图片（头像、封面等）
    └── music/              ← 音频文件
```

> **编号的意义**：`01 → 06` 就是**加载顺序**，保证依赖关系正确。你新增文件时也建议按编号命名。

---

## 🧩 三大便利设计

### 1️⃣ 空板块自动隐藏 ✨

不用删 HTML！只要数据数组是空的，该板块和导航项自动消失：

| 板块 | 数据位置 | 留空写法 |
|---|---|---|
| Research | `research` | `research: []` |
| Honors | `honors` | `honors: []` |
| Funding | `funding` | `funding: []` |
| Publications | `publications.conferences / journals` | `{ featured: [], list: [] }` |
| Patents | `patents.invention / design` | `{ invention: [], design: [] }` |
| Software | `software.featured / list` | `{ featured: [], list: [] }` |
| Competitions | `competitions.national / regional` | `{ national: [], regional: [] }` |
| Music | `music.tracks` | `tracks: []` |

### 2️⃣ 导航可自动生成

`nav: []` 留空时，导航会按 `index.html` 中 `<section>` 的顺序自动生成，标题取自 `data-label`。加新板块时导航不用管。

### 3️⃣ 中英对照只需写两行

```js
{
  zh: "中文描述……",
  en: "English description……",
}
```

会自动上下两行显示，英文行用次级色区分。

---

## 📝 常用编辑示例

### 改个人信息

```js
profile: {
  name:      "Jiang Yunhang",
  nameCn:    "姜运航",
  role:      "B.S. Student · Data Science & Big Data Technology",
  location:  "Shenzhen, Guangdong, China / 广东深圳",   // ← 所在地
  email:     "2069329624@qq.com",
  avatar:    "assets/img/avatar.jpg",
  githubUser:"JiangYunhang",
}
```

### 加一条项目

```js
projects: [
  // ...已有的项目...
  {
    time:  "2026",
    title: "项目名称",
    org:   "领域 · 子方向",
    tags:  ["PyTorch", "LLM"],
    desc:  "项目简介……",
    links: [{ label: "Code", href: "https://github.com/..." }],
  },
],
```

### 加一条新闻

```js
news: [
  { date: "2026.09", text: "🎉 完成了某个项目" },   // ← 新的放最前面
  // ...
],
```

### 加一篇论文

```js
publications: {
  conferences: {
    featured: [
      {
        badge: "CVPR",
        title:  "论文标题",
        authors: "<strong>Jiang Yunhang</strong>, Alice, Bob",
        venue:  "In <em>CVPR 2026</em>",
        links:  [{ label: "PDF", href: "https://..." }],
      },
    ],
    list: [],
  },
  journals: { featured: [], list: [] },
},
```

> 完整字段说明 → [`docs/DATA-FIELDS.md`](docs/DATA-FIELDS.md)

---

## 🎨 改配色

编辑 `css/01-tokens.css` 顶部：

```css
--accent:      #0d7a6b;   /* 主色 */
--accent-deep: #0a5f53;
--accent-soft: rgba(13,122,107,0.11);
--bg:          #f3f6f4;   /* 页面背景 */
--ink:         #16222b;   /* 正文色 */
```

改完把 `index.html` 里的 `?v=8.0` 改成 `?v=8.1`，否则浏览器会用缓存的旧样式。

---

## 🔧 新增一个板块

三步，详见 [`docs/HOW-TO-ADD-SECTION.md`](docs/HOW-TO-ADD-SECTION.md)：

1. `index.html` 加一个 `<section id="xxx">`
2. `js/01-site-data.js` 加 `xxx: [...]`
3. `js/04-render.js` 加一行渲染代码

---

## 🧪 提交前自检（推荐）

```bash
python tools/check-site.py
```

会检查括号配平、资源引用、导航死链、字段完整性，有问题会明确告诉你。

---

## 🔍 本地预览

```bash
python tools/preview.py
```

浏览器自动打开 `http://localhost:8080`，改完刷新即可看到效果。

---

## 🚀 一键部署

```bash
# Windows PowerShell
powershell -ExecutionPolicy Bypass -File .\tools\deploy.ps1 "更新说明"

# macOS / Linux / Git Bash
bash tools/deploy.sh "更新说明"
```

自动完成：自检 → 提交 → 推送。

---

## ⚠️ 修改时的注意事项

1. **不要删掉结尾的 `};`** —— 那是对象结束的标志
2. **每项之间的逗号** —— 英文逗号 `,`，最后一项后面可省略
3. **引号要配对** —— 字符串用 `"..."` 或 `'...'`
4. **改坏了怎么办** —— GitHub 上点右上角 **History → 选中旧版本 → Restore this file** 就能回滚

---

## ❓ 常见问题

**Q: 改了没生效？**
A: ① 等 1–2 分钟让 GitHub Pages 重新部署；② 强制刷新（Ctrl/Cmd + Shift + R）；③ 改了 CSS 的话要更新 `?v=` 版本号。

**Q: 出现了 `Uncaught SyntaxError`？**
A: `01-site-data.js` 里有语法错误，通常是逗号或括号问题。跑 `python tools/check-site.py` 就能定位。

**Q: 想加一个新板块？**
A: 见 [`docs/HOW-TO-ADD-SECTION.md`](docs/HOW-TO-ADD-SECTION.md)。

---

## 📮 有问题？

随时联系：2069329624@qq.com
