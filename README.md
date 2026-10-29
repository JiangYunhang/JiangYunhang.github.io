# Jiang Yunhang (姜运航)

Personal academic homepage · [JiangYunhang.github.io](https://jiangyunhang.github.io/)

- B.S. student in **Data Science and Big Data Technology**, Shenzhen, China
- Research: LLMs, Intelligent Agents, AI4SE, Medical AI (RAG / fine-tuning / multi-modal)
- Email: `2069329624@qq.com` · GitHub: [@JiangYunhang](https://github.com/JiangYunhang)

---

## ✏️ 我想更新网页内容

**只需要改 `js/01-site-data.js` 这一个文件。**

在 GitHub 上点击该文件 → 右上角 ✏️ 铅笔图标 → 修改 → 提交（Commit changes）→ 等待 1–2 分钟生效。

📖 **快速上手** → [`EDITING.md`](./EDITING.md)
📖 **字段详解** → [`docs/DATA-FIELDS.md`](./docs/DATA-FIELDS.md)

---

## 🗂 项目结构

```
index.html              网页骨架（板块顺序）
EDITING.md              ✏️ 内容编辑指南
README.md               仓库说明

js/                     JavaScript（编号 = 加载顺序）
  01-site-data.js       ★★★ 你的全部内容（唯一需要日常修改的文件）
  02-helpers.js           渲染模板与工具函数
  03-main.js              主题切换 / 侧栏信息 / 导航生成
  04-render.js            内容渲染与板块显隐
  05-interaction.js       交互（抽屉导航 / 进度条 / 仓库同步）

css/                    样式（编号 = 加载顺序）
  01-tokens.css         ★ 颜色 / 字号 / 间距变量（改配色只改这里）
  02-base.css           基础重置与全局排版
  03-sidebar.css        左侧边栏
  04-content.css        主内容区排版
  05-components.css     卡片 / 时间线 / 仓库等组件
  06-responsive.css     响应式适配 + 打印样式

docs/                   详细文档
  DATA-FIELDS.md          每个字段的完整说明
  HOW-TO-ADD-SECTION.md   如何新增一个板块
  STRUCTURE.md            每个文件的作用与依赖关系

tools/                  辅助脚本
  check-site.py           🧪 提交前自检
  preview.py              本地预览服务器
  deploy.sh / deploy.ps1  一键部署

assets/                 图片与音频
  img/                    头像、封面等
  music/                  音频文件
```

---

## 🧰 常用命令

```bash
# 本地预览（自动打开浏览器）
python tools/preview.py

# 提交前自检
python tools/check-site.py

# 一键部署（自动 自检 → 提交 → 推送）
bash tools/deploy.sh "更新说明"                            # macOS / Linux / Git Bash
powershell -ExecutionPolicy Bypass -File .\tools\deploy.ps1 "更新说明"   # Windows
```

---

## ✨ 特性

- **单一数据入口**：所有内容集中在 `js/01-site-data.js`，改这一个文件即可
- **空板块自动隐藏**：数组留空 `[]`，板块与导航项自动消失，无需删 HTML
- **中英对照**：每段写 `{ zh, en }` 即可自动双行显示
- **流体排版**：根字号随视口缩放，整页等比适配 360px – 2560px
- **双主题**：深色 / 浅色自动跟随系统，可手动切换并记忆
- **完全响应式**：桌面固定侧栏，手机抽屉式导航
- **GitHub 仓库自动同步**：改 `profile.githubUser` 即可
- **打印友好**：`Ctrl+P` 直接导出干净的 PDF 简历
- **无障碍友好**：焦点可见、`aria` 标签完整、键盘可导航

---

## 📤 手动推送

```powershell
git add -A
git commit -m "Update homepage"
git -c http.version=HTTP/1.1 push origin main
```
