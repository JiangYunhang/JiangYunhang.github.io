# 📝 如何编辑你的个人主页

> **最重要的一句话：99% 的情况下，你只需要改 `js/site-data.js` 这一个文件。**

---

## 🚀 三步更新网页

1. 打开 GitHub 仓库 → [`JiangYunhang/JiangYunhang.github.io`](https://github.com/JiangYunhang/JiangYunhang.github.io)
2. 点击 **`js/site-data.js`** → 右上角 ✏️ **铅笔图标** → 修改内容
3. 页面底部点击 **Commit changes** → 等待 1–2 分钟 → 刷新 [jiangyunhang.github.io](https://jiangyunhang.github.io/) 即可看到更新

---

## 📂 文件结构速览

```
.github.io/
├── index.html          ← 网页骨架（板块顺序在这里调整）
├── EDITING.md          ← 你正在看的这份指南
├── css/
│   ├── base.css        ← 颜色 / 字号 / 字体变量（改配色看这里）
│   ├── sidebar.css     ← 左侧边栏样式
│   ├── content.css     ← 主内容区排版
│   ├── components.css  ← 卡片 / 时间线 / 仓库等组件
│   └── responsive.css  ← 响应式（手机 / 平板适配）
├── js/
│   ├── site-data.js    ← ★★★ 你的全部内容都在这里 ★★★
│   ├── helpers.js      ← 渲染模板（一般不用动）
│   ├── main.js         ← 主题切换 / 侧栏（一般不用动）
│   ├── render.js       ← 内容渲染（一般不用动）
│   └── interaction.js  ← 交互逻辑（一般不用动）
└── assets/img/         ← 图片放这里
```

---

## 🧩 各板块怎么写

### 1️⃣ 个人信息 `profile`

```js
profile: {
  name:       "Jiang Yunhang",
  nameCn:     "姜运航",
  title:      "Jiang Yunhang (姜运航) - Homepage",  // 浏览器标签标题
  motto:      ["Canvas Unfolding Heavenly Kaleidoscope."],  // 可以写多行
  role:       "B.S. Student · Data Science & Big Data Technology",
  location:   "Bengbu, Anhui, China / 安徽蚌埠",
  email:      "2069329624@qq.com",
  avatar:     "assets/img/avatar.jpg",   // 换成 assets/img/ 下的图片名
  githubUser: "JiangYunhang",            // 改了这里，仓库列表会自动同步

  socials: [
    { label: "GitHub", href: "https://github.com/JiangYunhang", icon: "fa-brands fa-github" },
    { label: "Email",  href: "mailto:2069329624@qq.com",      icon: "fa-solid fa-envelope" },
  ],
}
```

**常用图标名**（Font Awesome 6）：

| 用途 | icon |
|---|---|
| GitHub | `fa-brands fa-github` |
| 邮箱 | `fa-solid fa-envelope` |
| 学术主页 | `fa-solid fa-graduation-cap` |
| 地点 | `fa-solid fa-location-dot` |
| 推特/X | `fa-brands fa-x-twitter` |
| 领英 | `fa-brands fa-linkedin` |
| 谷歌学术 | `fa-solid fa-graduation-cap` |
| 个人网站 | `fa-solid fa-globe` |
| 论文 | `fa-solid fa-file-lines` |

> 想加新图标？直接到 [fontawesome.com/icons](https://fontawesome.com/icons) 搜名字，
> 找到后在网址里复制 `fa-solid fa-xxx` 这部分。

---

### 2️⃣ 关于我 `about`

```js
about: {
  paragraphs: [
    {
      zh: "🌱 中文介绍……",
      en: "English introduction……",
    },
    {
      zh: "只写中文也行：直接一句话",
    },
  ],
  interests: ["LLM", "Agent", "AI4SE", "Medical AI"],
}
```

- `zh` / `en` 会自动上下两行显示，中英对照
- `interests` 会渲染成一排小圆角标签

---

### 3️⃣ 教育 / 经历（时间线样式）

```js
experience: [
  {
    time:  "2026.06 – Present",       // 时间
    title: "Research Assistant Student", // 主标题
    org:   "香港中文大学（深圳）",        // 机构
    place: "",                        // 可选，补充地点
    tags:  ["Medical AI", "LLM"],      // 可选，小标签
    desc:  "详细描述……",               // 可选
    links: [{ label: "论文", href: "https://..." }],  // 可选
  },
],
```

---

### 4️⃣ 项目（卡片样式）

字段和上面一样，`time` 会显示在卡片右上角：

```js
projects: [
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

---

### 5️⃣ 技能

```js
skills: [
  { group: "Languages",   items: "Mandarin (native), English (fluent)" },
  { group: "Programming", items: "Python, PyTorch, MATLAB" },
  // 想加一行？照抄一行改 group 名即可
],
```

用英文逗号分隔即可，会自动拆成一个个标签。

---

### 6️⃣ 新闻 / 荣誉 / 资助 / 竞赛 / 专利

格式完全一样：

```js
news: [
  { date: "2026.08", text: "🎉 完成了某个项目" },
],
```

> **最新的写在最前面**（数组第一项）。

---

### 7️⃣ 论文

```js
publications: {
  note: "*: Equal Contribution, †: Corresponding Author(s)",
  conferences: {
    // 精选论文：大卡片，带会议徽章
    featured: [
      {
        badge: "CVPR",
        title:  "论文标题",
        authors: "<strong>Jiang Yunhang</strong>, Alice, Bob",
        venue:  "In <em>CVPR 2026</em>",
        links:  [
          { label: "PDF", href: "https://..." },
          { label: "Code", href: "https://..." },
        ],
      },
    ],
    // 其他论文：紧凑列表
    list: [
      {
        tag:  "2026",
        text: "论文标题，作者，等。",
        links: [{ label: "PDF", href: "https://..." }],
      },
    ],
  },
  journals: { featured: [], list: [] },
},
```

**作者名加粗**：在 `authors` 里用 `<strong>Jiang Yunhang</strong>` 包裹你的名字即可。

---

### 8️⃣ 让空板块自动隐藏 ✨

这是最省心的设计：**不用手动删 HTML**。

只要对应数组是空的 `[]`，该板块会自动隐藏，导航栏里也会自动移除对应项。

| 板块 | 数据位置 | 空了就隐藏 |
|---|---|---|
| Research | `research: []` | ✅ |
| Honors | `honors: []` | ✅ |
| Funding | `funding: []` | ✅ |
| Publications | `publications.conferences/journals` | ✅ |
| Patents | `patents.invention / design` | ✅ |
| Software | `software.featured / list` | ✅ |
| Competitions | `competitions.national / regional` | ✅ |
| Music | `music.tracks` | ✅ |

---

### 9️⃣ 调整板块顺序

编辑 `index.html`，把 `<section>` 标签整块上下移动即可。

例如把 News 提到 Experience 前面：

```html
<!-- 原来 -->
<section id="experience" ...>...</section>
<section id="news" ...>...</section>

<!-- 调整后 -->
<section id="news" ...>...</section>
<section id="experience" ...>...</section>
```

> ⚠️ 每个 `<section>` 里的 `id` 必须和 `js/site-data.js` 里 `nav` 数组的 `id` 对应。

---

### 🔟 换头像

1. 把新图片放到 `assets/img/` 目录下（例如 `assets/img/me.png`）
2. 在 `js/site-data.js` 里改：
   ```js
   avatar: "assets/img/me.png",
   ```

---

## 🎨 想改配色？

编辑 `css/base.css` 顶部的变量：

```css
:root {
  --accent:      #0d7a6b;   /* 主色调（绿色）*/
  --accent-deep: #0a5f53;   /* 深色变体 */
  --accent-soft: rgba(13,122,107,0.11);
  --bg:          #f3f6f4;   /* 页面背景 */
  --ink:         #16222b;   /* 正文颜色 */
}
```

改完记得把 `index.html` 里的 `?v=6.0` 改成 `?v=6.1`，否则浏览器会用缓存的旧样式。

---

## ⚠️ 修改时的注意事项

1. **不要删掉结尾的 `};`** —— 那是对象结束的标志
2. **每项之间的逗号** —— 英文逗号 `,`，最后一项后面的逗号可以省略
3. **引号要配对** —— 字符串用 `"..."` 或 `'...'`，别混着漏
4. **改坏了怎么办** —— GitHub 上点右上角 **History → 选中旧版本 → Restore this file** 就能回滚

---

## 🔍 本地预览（可选）

想在推送前先看看效果：

```bash
git clone https://github.com/JiangYunhang/JiangYunhang.github.io.git
cd JiangYunhang.github.io
python -m http.server 8080
```

浏览器打开 `http://localhost:8080` 即可。

---

## ❓ 常见问题

**Q: 改了没生效？**
A: ① 等待 1–2 分钟让 GitHub Pages 重新部署；② 强制刷新（Ctrl/Cmd + Shift + R）；③ 改了 CSS 的话要更新 `?v=` 版本号。

**Q: 出现了 `Uncaught SyntaxError`？**
A: `site-data.js` 里有语法错误，通常是逗号或括号问题。可以用 [jsonlint](https://jsonlint.com/) 类似的工具检查，或者对照 `EDITING.md` 里的示例格式。

**Q: 想加一个全新板块（比如「博客」）？**
A: 1. `index.html` 里加一个 `<section id="blog">`；2. `site-data.js` 里加 `blog: [...]`；3. `js/render.js` 里加渲染逻辑。一般不需要做第 3 步，如果你只是想放一组链接，可以直接放在 `about` 的 `paragraphs` 里。

---

## 📮 有问题？

随时联系：2069329624@qq.com
