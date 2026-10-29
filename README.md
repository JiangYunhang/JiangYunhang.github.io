# Jiang Yunhang (姜运航)

Personal academic homepage · [JiangYunhang.github.io](https://jiangyunhang.github.io/)

- B.S. student in **Data Science and Big Data Technology**
- Research: LLMs, Intelligent Agents, AI4SE, Medical AI (RAG / fine-tuning / multi-modal)
- Email: `2069329624@qq.com` · GitHub: [@JiangYunhang](https://github.com/JiangYunhang)

---

## ✏️ 我想更新网页内容

**只需要改 `js/site-data.js` 这一个文件。**

在 GitHub 上点击该文件 → 右上角 ✏️ 铅笔图标 → 修改 → 提交（Commit changes）→ 等待 1–2 分钟生效。

📖 **完整图文教程见 [EDITING.md](./EDITING.md)**

---

## 🗂 项目结构

```
index.html          网页骨架（板块顺序）
EDITING.md          ✏️ 内容编辑指南
css/
  base.css          配色 / 字号 / 字体变量
  sidebar.css       左侧边栏
  content.css       主内容区排版
  components.css    卡片 / 时间线 / 仓库等组件
  responsive.css    响应式适配（含打印样式）
js/
  site-data.js      ★ 你的全部内容（唯一需要日常修改的文件）
  helpers.js        渲染模板
  main.js           主题切换 / 侧栏
  render.js         内容渲染
  interaction.js    交互（导航 / 仓库 / 滚动）
assets/img/         图片资源
```

## ✨ 特性

- 深色 / 浅色主题自动跟随系统，可手动切换并记忆
- 完全响应式，手机端侧栏变抽屉式
- GitHub 仓库列表自动从 API 同步
- 空板块自动隐藏，导航项自动同步
- 中英文对照排版，阅读宽度优化
- 打印样式（Ctrl+P 可直接导出 PDF 简历）
- 键盘导航焦点可见、无障碍标签完整

## 🛠 本地预览

```bash
git clone https://github.com/JiangYunhang/JiangYunhang.github.io.git
cd JiangYunhang.github.io
python -m http.server 8080
```

浏览器打开 `http://localhost:8080`。

## 📤 推送

```powershell
git add -A
git commit -m "Update homepage"
git -c http.version=HTTP/1.1 push origin main
```
