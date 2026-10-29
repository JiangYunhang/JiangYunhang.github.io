# 🗂 文件结构与依赖关系

本文说明**每个文件的作用**、**谁依赖谁**，方便你判断「改东西该动哪个文件」。

---

## 🔢 编号 = 加载顺序

所有 CSS 和 JS 都按 `01 → 06` 编号，**编号即加载顺序**，保证依赖正确。

---

## 📄 HTML

### `index.html`

网页的唯一 HTML 骨架。

**里面有什么：**
- `<head>`：SEO meta、字体/图标 CDN 链接、CSS 引用
- 侧栏 `<aside class="sidebar">`：头像、姓名、身份、社交图标、导航容器、主题按钮
- 主区 `<main class="content">`：15 个 `<section>` 板块
- 底部：进度条、汉堡按钮、返回顶部按钮、JS 引用

**什么时候需要改它：**

| 场景 | 怎么做 |
|---|---|
| 调整板块顺序 | 整块移动 `<section>` |
| 新增板块 | 加一个 `<section>`，见 [`HOW-TO-ADD-SECTION.md`](HOW-TO-ADD-SECTION.md) |
| 改了 CSS/JS | 把 `?v=8.0` 改成 `?v=8.1` 强制刷新缓存 |

---

## 🎨 CSS（6 个文件，按顺序加载）

| 文件 | 作用 | 什么时候改 |
|---|---|---|
| `01-tokens.css` | **所有设计变量**：颜色、字号、间距、圆角、阴影、字体 | ★ 改配色 / 字号 / 间距 → 只改这里 |
| `02-base.css` | 基础重置、流体根字号、全局排版（链接、焦点、滚动条） | 改全局字体行为 |
| `03-sidebar.css` | 左侧边栏（头像、身份、社交、导航、主题按钮、进度条、返回顶部） | 改侧栏外观 |
| `04-content.css` | 主内容区（板块间距、标题、正文、标签、技能表） | 改正文排版 |
| `05-components.css` | 组件（时间线、卡片、论文、仓库、音乐、列表） | 加/改组件样式 |
| `06-responsive.css` | 断点适配 + 打印样式，**必须最后加载** | 改断点行为 |

### 依赖关系

```
01-tokens.css  ← 所有文件都用它的变量
      ↓
02-base.css    ← 定义 :root 之外的全局规则
      ↓
03-sidebar.css
04-content.css
05-components.css
      ↓
06-responsive.css  ← 覆盖以上所有规则
```

### 快速定位

| 想改的东西 | 去哪个文件 |
|---|---|
| 主色调 / 深色主题配色 | `01-tokens.css` → `--accent` |
| 页面背景色 | `01-tokens.css` → `--bg` / `--bg-2` |
| 正文字号 | `01-tokens.css` → `--fs-body` |
| 整页缩放比例 | `02-base.css` → `html { font-size }` |
| 板块标题样式 | `04-content.css` → `.section-title` |
| 卡片圆角/阴影 | `01-tokens.css` → `--radius` / `--shadow` |
| 手机端怎么折叠 | `06-responsive.css` |
| 打印样式 | `06-responsive.css` → `@media print` |

---

## 📜 JavaScript（5 个文件，按顺序加载）

| 文件 | 作用 | 什么时候改 |
|---|---|---|
| `01-site-data.js` | **你的全部内容** | ★★★ 日常改内容只动这里 |
| `02-helpers.js` | 工具函数 + HTML 模板（`timelineHtml` 等） | 加新的内容模板 |
| `03-main.js` | 主题切换、侧栏信息填充、导航生成 | 改侧栏行为 |
| `04-render.js` | 把数据渲染到页面上 + 控制板块显隐 | 加新板块 / 改渲染逻辑 |
| `05-interaction.js` | 移动端抽屉、阅读进度、GitHub 仓库、滚动高亮、邮箱复制 | 改交互 |

### 依赖关系

```
01-site-data.js   ← 定义 window.SITE（数据）
      ↓
02-helpers.js     ← 定义 window.H（工具函数）
      ↓
03-main.js        ← 用 SITE + H 填充侧栏
04-render.js      ← 用 SITE + H 渲染正文
05-interaction.js ← 用 SITE + H 处理交互
```

> `03/04/05` 都做了 `if (!SITE || !H) return;` 保护，
> 即使某个文件加载失败也不会白屏报错到控制台以外。

### 全局对象

| 对象 | 定义在 | 内容 |
|---|---|---|
| `window.SITE` | `01-site-data.js` | 你的全部数据 |
| `window.H` | `02-helpers.js` | `$`、`$$`、`esc`、`setText`、`setHtml`、`tagsHtml`、`linksHtml`、`timelineHtml`、`projectCardsHtml`、`feedHtml`、`featuredPubsHtml`、`pubListHtml`、`skillsHtml` |

---

## 🧰 tools/（辅助脚本）

| 文件 | 用途 | 用法 |
|---|---|---|
| `check-site.py` | 🧪 自检：括号配平、资源引用、导航死链、字段完整性 | `python tools/check-site.py` |
| `preview.py` | 本地预览服务器（自动开浏览器） | `python tools/preview.py` |
| `deploy.sh` | 一键部署（macOS / Linux / Git Bash） | `bash tools/deploy.sh "说明"` |
| `deploy.ps1` | 一键部署（Windows PowerShell） | `powershell -ExecutionPolicy Bypass -File .\tools\deploy.ps1 "说明"` |

---

## 📄 docs/（详细文档）

| 文件 | 内容 |
|---|---|
| `DATA-FIELDS.md` | 每个字段的完整说明 + 示例 |
| `HOW-TO-ADD-SECTION.md` | 新增板块的三步流程 |
| `STRUCTURE.md` | 本文 |

---

## 🖼 assets/（资源）

```
assets/
├── img/                 ← 图片
│   ├── avatar.jpg       ← 头像（改 01-site-data.js 的 avatar 字段切换）
│   ├── avatar.svg
│   └── album-placeholder.svg
└── music/               ← 音频文件（供 music.tracks[].src 引用）
```

**添加图片：**
1. 把文件拖进 `assets/img/`
2. 在 `01-site-data.js` 里写路径，例如 `avatar: "assets/img/avatar.jpg"`

---

## 🧭 「我想改 X，该动哪个文件？」

| 你想做的事 | 改哪里 |
|---|---|
| 换头像 / 改名字 / 改地址 / 改邮箱 | `js/01-site-data.js` → `profile` |
| 改个人介绍文字 | `js/01-site-data.js` → `about.paragraphs` |
| 加一条项目 / 经历 / 新闻 | `js/01-site-data.js` → 对应数组 |
| 加一篇论文 | `js/01-site-data.js` → `publications` |
| 改主色调 | `css/01-tokens.css` → `--accent` |
| 改字号整体大小 | `css/01-tokens.css` → `--fs-*` |
| 调整板块顺序 | `index.html` → 移动 `<section>` |
| 加一个新板块 | 照 `docs/HOW-TO-ADD-SECTION.md` 做三步 |
| 加一个社交图标 | `js/01-site-data.js` → `profile.socials` |
| 改手机端布局 | `css/06-responsive.css` |
| 改打印/PDF 样式 | `css/06-responsive.css` → `@media print` |

---

## 🔄 一次完整的内容更新流程

```bash
# 1. 本地预览（另开一个终端保持运行）
python tools/preview.py

# 2. 编辑 js/01-site-data.js

# 3. 刷新浏览器看效果

# 4. 自检
python tools/check-site.py

# 5. 部署
bash tools/deploy.sh "更新说明"
```

或者直接在 GitHub 网页上改 `js/01-site-data.js` → 提交 → 等待 1–2 分钟。
