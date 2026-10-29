# 📖 数据字段完整说明

> 本文是 `js/01-site-data.js` 每个字段的**详细手册**。
> 快速上手请看仓库根目录的 [`EDITING.md`](../EDITING.md)。

---

## 目录

1. [profile — 个人信息](#1-profile--个人信息)
2. [nav — 侧边导航](#2-nav--侧边导航)
3. [about — 关于我](#3-about--关于我)
4. [education / experience — 教育与经历](#4-education--experience--教育与经历)
5. [projects — 项目](#5-projects--项目)
6. [research — 研究方向](#6-research--研究方向)
7. [skills — 技能](#7-skills--技能)
8. [news / honors / funding / competitions / patents — 列表类](#8-列表类板块)
9. [publications — 论文](#9-publications--论文)
10. [software — 软件与系统](#10-software--软件与系统)
11. [music — 喜欢的音乐](#11-music--喜欢的音乐)

---

## 1. `profile` — 个人信息

显示在左侧边栏。

| 字段 | 类型 | 必填 | 说明 |
|---|---|---|---|
| `name` | string | ✅ | 英文名，显示为侧栏主标题 |
| `nameCn` | string | ✅ | 中文名，显示在英文名下方 |
| `title` | string | ✅ | 浏览器标签页标题 |
| `motto` | string[] | | 座右铭，数组可写多行 |
| `role` | string | ✅ | 身份头衔，如 `B.S. Student · ...` |
| `location` | string | | 所在地，留空则整行隐藏 |
| `email` | string | | 邮箱，留空或为 `you@example.com` 则隐藏 |
| `avatar` | string | | 头像路径，相对仓库根目录 |
| `githubUser` | string | ✅ | GitHub 用户名，**改了仓库列表会自动同步** |
| `socials` | object[] | | 社交链接 |

**socials 每一项：**

```js
{
  label: "GitHub",                                  // 悬停提示 + 无障碍标签
  href:  "https://github.com/JiangYunhang",         // 链接地址
  icon:  "fa-brands fa-github",                     // Font Awesome 图标名
}
```

**常用图标名速查：**

| 用途 | icon |
|---|---|
| GitHub | `fa-brands fa-github` |
| 邮箱 | `fa-solid fa-envelope` |
| 学术/学位 | `fa-solid fa-graduation-cap` |
| 个人网站 | `fa-solid fa-globe` |
| 论文 | `fa-solid fa-file-lines` |
| 推特/X | `fa-brands fa-x-twitter` |
| 领英 | `fa-brands fa-linkedin` |
| 谷歌学术 | `fa-solid fa-graduation-cap` |
| 微博 | `fa-brands fa-weibo` |
| 哔哩哔哩 | `fa-brands fa-bilibili` |
| 知乎 | `fa-solid fa-comment-dots` |

> 找图标：打开 [fontawesome.com/icons](https://fontawesome.com/icons) 搜索，
> 在网址栏里就能看到 `fa-solid fa-xxx` 这样的名字。

---

## 2. `nav` — 侧边导航

```js
nav: [
  { id: "about", label: "About Me" },
  { id: "education", label: "Education" },
]
```

| 字段 | 说明 |
|---|---|
| `id` | 必须和 `index.html` 里 `<section id="...">` 完全一致 |
| `label` | 侧栏显示的文字 |

**留空即可自动生成：**

```js
nav: [],   // → 自动按 index.html 中 section 的顺序生成，标题取自 data-label
```

**指向空板块的导航项会被自动移除**，不会出现死链。

---

## 3. `about` — 关于我

```js
about: {
  paragraphs: [
    {
      zh: "🌱 中文段落……",
      en: "English paragraph……",
    },
    {
      zh: "只写中文也可以",
    },
    "直接写一整段 HTML 字符串也行",
  ],
  interests: ["LLM", "Agent", "AI4SE"],
}
```

| 字段 | 说明 |
|---|---|
| `paragraphs` | 段落数组。每项可以是 `{zh, en}` 对象，也可以是普通字符串 |
| `interests` | 兴趣标签数组，显示在右侧栏 |

- `{zh, en}` 会渲染成上下两行，英文行是次级色
- 段落里可以用 `<strong>`、`<a href="...">`、`<em>` 等 HTML 标签
- `interests` 显示在 About 板块的右侧栏（窄屏时移到正文下方）

---

## 4. `education` / `experience` — 教育与经历

使用**时间线**样式。

```js
experience: [
  {
    time:  "2026.06 – Present",        // 必填，显示在时间线节点旁
    title: "Research Assistant Student", // 必填，主标题
    org:   "香港中文大学（深圳）",        // 机构名称
    place: "",                          // 补充地点（可省略）
    tags:  ["Medical AI", "LLM"],       // 小标签数组（可省略）
    desc:  "详细描述……",                 // 补充说明（可省略，支持 HTML）
    links: [                            // 链接（可省略）
      { label: "Paper", href: "https://..." },
    ],
  },
],
```

| 字段 | 必填 | 说明 |
|---|---|---|
| `time` | ✅ | 时间区间 |
| `title` | ✅ | 主标题 |
| `org` | | 机构 |
| `place` | | 地点 |
| `tags` | | 标签数组 |
| `desc` | | 描述，支持 HTML |
| `links` | | `[{label, href}]` 数组 |

---

## 5. `projects` — 项目

使用**卡片**样式，字段同上，`time` 显示在卡片右上角。

```js
projects: [
  {
    time:  "2026",
    title: "项目名称",
    org:   "领域 · 子方向",
    tags:  ["PyTorch", "3D ResNet"],
    desc:  "项目简介……",
    links: [{ label: "Code", href: "https://github.com/..." }],
  },
],
```

卡片宽度会自动适配：宽度够时 3 列，不够自动降列。

---

## 6. `research` — 研究方向

留空则板块与导航自动隐藏。

```js
research: [
  {
    time:  "2024 – 2025",
    title: "研究方向名称",
    org:   "所属实验室 / 课题组",
    desc:  "描述……",
  },
],
```

---

## 7. `skills` — 技能

按分组显示，每组内是标签。

```js
skills: [
  { group: "Languages",   items: "Mandarin (native), English (fluent, CET-4)" },
  { group: "Programming", items: "Python, PyTorch, MATLAB, LaTeX" },
  { group: "Research",    items: "Deep Learning, LLMs, RAG, Prompt Engineering" },
],
```

| 字段 | 说明 |
|---|---|
| `group` | 左侧分组名称 |
| `items` | 英文逗号分隔的字符串，**或**数组 `["a", "b"]` |

> ⚠️ 括号内的逗号不会被拆分：
> `English (fluent, CET-4)` 会作为**一个**标签显示。

---

## 8. 列表类板块

`news`、`honors`、`funding`、`competitions.national`、`competitions.regional`、`patents.invention`、`patents.design` 格式完全相同：

```js
news: [
  { date: "2026.08", text: "🎉 完成了某个项目" },
  { date: "2026.06", text: "加入了 <strong>某某实验室</strong>" },
],
```

| 字段 | 说明 |
|---|---|
| `date` | 日期，显示在左侧一列 |
| `text` | 内容，支持 HTML（`<strong>`、`<a>` 等） |

> **最新的写在数组第一项。**

`software.list` 同样格式。

---

## 9. `publications` — 论文

```js
publications: {
  note: "*: Equal Contribution, †: Corresponding Author(s)",

  conferences: {
    // 精选论文：带会议徽章的大卡片
    featured: [
      {
        badge: "CVPR",                    // 徽章文字，如 CVPR / ICLR / NeurIPS
        title:  "论文标题",
        authors: "<strong>Jiang Yunhang</strong>, Alice, Bob",  // 用 strong 加粗自己
        venue:  "In <em>CVPR 2026</em>",
        links:  [
          { label: "PDF",  href: "https://..." },
          { label: "Code", href: "https://..." },
        ],
      },
    ],
    // 其他论文：紧凑列表
    list: [
      {
        tag:  "2025",                     // 年份或标签
        text: "论文标题，作者，等。",
        links: [{ label: "arXiv", href: "https://..." }],
      },
    ],
  },

  journals: { featured: [], list: [] },
},
```

**小技巧：**
- 把自己名字用 `<strong>` 包起来 → 页面上显示为加粗
- `venue` 里用 `<em>` 包会议名 → 斜体
- 所有数组留空 → Publications 板块和导航项自动隐藏

---

## 10. `software` — 软件与系统

```js
software: {
  featured: [
    {
      time:   "2025",
      title:  "系统 / 工具名称",
      authors: "Jiang Yunhang, ...",
    },
  ],
  list: [
    { date: "2024", text: "某某开源项目 —— 描述" },
  ],
},
```

---

## 11. `music` — 喜欢的音乐

```js
music: {
  quote:    "音乐是生活的解药。",
  quoteBy:  "Someone",
  tracks: [
    {
      title: "歌曲名",
      meta:  "歌手 · 专辑",
      cover: "assets/img/cover.jpg",   // 封面图
      src:   "assets/music/song.mp3",  // 音频文件
    },
  ],
},
```

> 音频文件放在 `assets/music/` 目录。`tracks` 留空 → 板块自动隐藏。

---

## 🧩 通用规则

### HTML 支持

以下字段支持直接写 HTML：

`about.paragraphs[].zh/en`、`education[].desc`、`experience[].desc`、`projects[].desc`、`research[].desc`、`news[].text`、`honors[].text`、`funding[].text`、`competitions.*[].text`、`patents.*[].text`、`publications.*[].authors/venue/text`、`music.quote`

### 转义

`title`、`time`、`org`、`place` 这类**纯文本字段会自动转义**，写 `<` `>` 不会破坏页面。想加链接请用 `desc` 或 `links`。

### 空值规则

| 写法 | 效果 |
|---|---|
| `[]` | 板块与导航项自动隐藏 |
| `""` | 该字段不显示（如 `location` / `email`） |
| 省略字段 | 等同于不显示 |

---

## 📮 需要更多板块？

见 [`HOW-TO-ADD-SECTION.md`](HOW-TO-ADD-SECTION.md)。
