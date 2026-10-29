# 🧩 如何新增一个板块（以「博客 Blog」为例）

三步，每步都有明确的文件位置。

---

## 概览

```
① index.html          加一个 <section> 空壳
② js/01-site-data.js  加一个数据数组
③ js/04-render.js     加一行渲染代码
```

---

## ① `index.html` — 加板块空壳

在想要插入的位置（比如 `News` 之后）加入：

```html
  <section id="blog" class="section" data-label="Blog">
    <h2 class="section-title"><span class="emoji">📝</span> Blog</h2>
    <div class="scroll-panel" tabindex="0" role="region" aria-label="文章列表">
      <div id="blogBody"></div>
    </div>
    <p class="scroll-hint" hidden>⬆ Scrollable</p>
  </section>
```

| 属性 | 说明 |
|---|---|
| `id="blog"` | **必须唯一**，导航靠它跳转 |
| `data-label="Blog"` | `nav` 留空自动生成导航时用它做标题 |
| `class="section"` | 提供入场动画与统一样式 |
| `class="scroll-panel"` | 可选：内容长时内部滚动 |

---

## ② `js/01-site-data.js` — 加数据

在 `window.SITE = { ... }` 里加一个字段：

```js
  /* ==========================================================================
   *  博客 —— 留空 [] 则自动隐藏
   * ======================================================================== */
  blog: [
    {
      date: "2026.09",
      title: "文章标题",
      text: "文章摘要……",
      link: "https://...",
    },
  ],
```

---

## ③ `js/04-render.js` — 加渲染代码

### 3.1 渲染内容

在 `04-render.js` 里找到「---------- 板块显隐 ----------」之前，加入：

```js
    /* ---------- 博客 ---------- */
    setHtml("#blogBody", feedHtml(SITE.blog || []));
```

> `feedHtml` 来自 `02-helpers.js`，会渲染成「日期 + 内容」的紧凑列表。
> 如果你的文章需要更丰富的样式，可以自己写一个模板函数加到 `02-helpers.js`。

### 3.2 控制显隐

在 `04-render.js` 的 `show(...)` 调用区加一行：

```js
    show("blog", (SITE.blog || []).length > 0);
```

> `show()` 会给 `<section>` 加 `hidden` 属性，CSS 里 `[hidden] { display: none !important; }` 保证隐藏生效。

### 3.3 清理导航死链

这一步**已经自动完成**：`05-interaction.js` 会移除所有指向隐藏板块的导航项，你不用手动处理。

---

## ④ （可选）加进导航

如果 `nav` 不是空数组，记得手动加一项：

```js
  nav: [
    { id: "about", label: "About Me" },
    // ...
    { id: "blog", label: "Blog" },
  ],
```

> 如果 `nav: []`（自动生成模式），跳过这步。

---

## ⑤ （可选）给新板块加专属样式

在 `css/05-components.css` 末尾追加：

```css
/* ------------------------------------------------------------------
   博客
   ------------------------------------------------------------------ */
.blog-card {
  display: flex; flex-direction: column; gap: 0.4rem;
  padding: 1rem 1.15rem;
  border: 1px solid var(--line); border-radius: var(--radius);
  background: var(--panel-solid);
}
.blog-card .blog-date { color: var(--faint); font-size: 0.78rem; }
.blog-card .blog-title { margin: 0; font-size: 1rem; font-weight: 600; }
```

然后在 `04-render.js` 里改成用你自己的模板：

```js
    setHtml("#blogBody", `<div class="card-grid">${
      (SITE.blog || []).map(b => `
        <article class="blog-card">
          <span class="blog-date">${b.date}</span>
          <h4 class="blog-title">${b.title}</h4>
          <p class="muted">${b.text}</p>
        </article>`).join("")
    }</div>`);
```

---

## ⑥ 检查并上线

```bash
python tools/check-site.py
```

确认「导航 id 与板块 id 对应」这一项没有报错，然后：

```bash
bash tools/deploy.sh "Add blog section"
```

---

## 💡 更省事的替代方案

如果只是想放几个链接，**不需要新建板块**，直接在 About 的段落里加就行：

```js
about: {
  paragraphs: [
    // ...
    {
      zh: "📝 <a href=\"https://your-blog.com\">个人博客</a> —— 记录科研与学习笔记。",
      en: "📝 <a href=\"https://your-blog.com\">Blog</a> — notes on research and study.",
    },
  ],
}
```

---

## 📌 可复用的模板函数

`js/02-helpers.js` 里现成的模板：

| 函数 | 用途 | 适用板块 |
|---|---|---|
| `timelineHtml(items)` | 时间线 | education / experience / research |
| `projectCardsHtml(items)` | 卡片网格 | projects |
| `feedHtml(items)` | 日期+内容紧凑列表 | news / honors / funding / 专利 / 竞赛 |
| `featuredPubsHtml(items)` | 带徽章的论文卡片 | publications.featured |
| `pubListHtml(items)` | 论文紧凑列表 | publications.list |
| `skillsHtml(groups)` | 分组标签表 | skills |
| `tagsHtml(tags)` | 一组小标签 | 各种 tags 字段 |

新增自定义板块时，可以照着这些函数的写法在 `02-helpers.js` 里加一个新的。
