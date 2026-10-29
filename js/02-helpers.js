/* ============================================================
   02-helpers.js — 共享工具函数与 HTML 模板
   ------------------------------------------------------------
   依赖 01-site-data.js（必须先加载）
   一般不需要改这个文件。想加新类型的内容，请改 js/01-site-data.js。
   ============================================================ */
window.H = (() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  /** HTML 转义，防止内容里的尖括号破坏页面 */
  const esc = (s) => String(s ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

  const setText = (sel, v) => { const el = $(sel); if (el) el.textContent = v ?? ""; };
  const setHtml = (sel, v) => { const el = $(sel); if (el) el.innerHTML = v ?? ""; };

  /**
   * 把 "a, b, c" 这样的字符串拆成标签数组。
   * 括号内的逗号不会被拆分，例如 "English (fluent, CET-4)" 保持为一个标签。
   */
  const splitTags = (v) => {
    if (!v) return [];
    if (Array.isArray(v)) return v.filter(Boolean);
    const out = [];
    let buf = "", depth = 0;
    for (const ch of String(v)) {
      if (ch === "(" || ch === "[" || ch === "（" || ch === "【") depth++;
      else if (ch === ")" || ch === "]" || ch === "）" || ch === "】") depth = Math.max(0, depth - 1);
      if (depth === 0 && /[,，;；|]/.test(ch)) {
        if (buf.trim()) out.push(buf.trim());
        buf = "";
      } else {
        buf += ch;
      }
    }
    if (buf.trim()) out.push(buf.trim());
    return out;
  };

  /** 渲染一组标签 */
  const tagsHtml = (tags) => {
    const list = splitTags(tags);
    if (!list.length) return "";
    return `<div class="tag-row">${list.map(t => `<span class="tag-chip">${esc(t)}</span>`).join("")}</div>`;
  };

  /** 渲染链接组 */
  const linksHtml = (links = []) => {
    if (!links.length) return "";
    return links.map(l =>
      `<a href="${esc(l.href)}" target="_blank" rel="noopener noreferrer">${l.label}</a>`
    ).join(" · ");
  };

  /* ------------------------------------------------------------
     时间线：教育 / 经历（带 org、tags、desc、links）
     ------------------------------------------------------------ */
  const timelineHtml = (items = []) => {
    if (!items.length) return "";
    return `<ul class="timeline">${items.map(it => {
      const org = it.org
        ? `<div class="item-org">${it.org}${it.place ? `<span class="sep">·</span>${esc(it.place)}` : ""}</div>`
        : "";
      const desc = it.desc ? `<div class="item-desc">${it.desc}</div>` : "";
      const tags = it.tags?.length ? tagsHtml(it.tags) : "";
      const links = it.links?.length
        ? `<div class="item-links">${linksHtml(it.links)}</div>` : "";
      return `<li>
        <span class="time">${esc(it.time)}</span>
        <div class="item-body">
          <div class="item-title">${esc(it.title)}</div>
          ${org}${desc}${tags}${links}
        </div>
      </li>`;
    }).join("")}</ul>`;
  };

  /* ------------------------------------------------------------
     项目卡片
     ------------------------------------------------------------ */
  const projectCardsHtml = (items = []) => {
    if (!items.length) return "";
    return `<div class="card-grid">${items.map(it => {
      const tags = it.tags?.length ? tagsHtml(it.tags) : "";
      const links = it.links?.length
        ? `<div class="card-links">${linksHtml(it.links)}</div>` : "";
      return `<article class="project-card">
        <div class="card-head">
          <h4 class="card-title">${esc(it.title)}</h4>
          ${it.time ? `<span class="card-time">${esc(it.time)}</span>` : ""}
        </div>
        ${it.org ? `<div class="card-org">${it.org}</div>` : ""}
        ${it.desc ? `<p class="card-desc">${it.desc}</p>` : ""}
        ${tags}${links}
      </article>`;
    }).join("")}</div>`;
  };

  /* ------------------------------------------------------------
     紧凑列表：新闻 / 荣誉 / 资助 / 竞赛 / 专利
     ------------------------------------------------------------ */
  const feedHtml = (items = []) => {
    if (!items.length) return "";
    return `<ul class="feed">${items.map(it => `
      <li>
        <span class="time">${esc(it.date ?? it.time ?? "")}</span>
        <div class="feed-text">${it.text ?? ""}</div>
      </li>`).join("")}</ul>`;
  };

  /* ------------------------------------------------------------
     论文：精选（大卡片）+ 普通（紧凑列表）
     ------------------------------------------------------------ */
  const featuredPubsHtml = (items = []) => items.map(p => `<article class="pub">
    <div class="pub-badge">${esc(p.badge)}</div>
    <div>
      <h4 class="pub-title">${esc(p.title)}</h4>
      ${p.authors ? `<p class="pub-authors">${p.authors}</p>` : ""}
      ${p.venue ? `<p class="pub-venue">${p.venue}</p>` : ""}
      ${p.links?.length ? `<div class="pub-links">${linksHtml(p.links)}</div>` : ""}
    </div>
  </article>`).join("");

  const pubListHtml = (items = []) => {
    if (!items.length) return "";
    return `<ul class="pub-list">${items.map(p => `<li>
      <span class="tag">${esc(p.tag)}</span>
      <div class="pub-list-text">${p.text ?? ""}${
        p.links?.length ? ` <span class="pub-links">${linksHtml(p.links)}</span>` : ""
      }</div>
    </li>`).join("")}</ul>`;
  };

  /* ------------------------------------------------------------
     技能表
     ------------------------------------------------------------ */
  const skillsHtml = (groups = []) => {
    if (!groups.length) return "";
    return `<ul class="skills-list">${groups.map(g => `<li>
      <span class="skill-label">${esc(g.group)}</span>
      <span class="skill-items">${tagsHtml(g.items)}</span>
    </li>`).join("")}</ul>`;
  };

  return {
    $, $$, esc, setText, setHtml,
    splitTags, tagsHtml, linksHtml,
    timelineHtml, projectCardsHtml, feedHtml,
    featuredPubsHtml, pubListHtml, skillsHtml,
  };
})();
