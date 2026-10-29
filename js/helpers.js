/* ============================================================
   helpers.js — 共享工具函数与模板
   ============================================================ */
window.H = (() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const esc = (s) => String(s ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
  const setText = (sel, v) => { const el = $(sel); if (el) el.textContent = v ?? ""; };
  const setHtml = (sel, v) => { const el = $(sel); if (el) el.innerHTML = v ?? ""; };

  const feedHtml = (items = []) =>
    `<ul class="feed">${items.map(it =>
      `<li><span class="time">${esc(it.time)}</span><div>${it.text}</div></li>`
    ).join("")}</ul>`;

  const timelineHtml = (items = []) =>
    `<ul class="timeline">${items.map(it => {
      const note = it.noteHtml
        ? it.noteHtml
        : it.note ? `<span class="muted">${esc(it.note)}</span>` : "";
      return `<li>
        <span class="time">${esc(it.time)}</span>
        <div class="item-body">
          <strong>${esc(it.title)}</strong>${it.place ? ", " + esc(it.place) : ""}${note}
        </div>
      </li>`;
    }).join("")}</ul>`;

  const featuredPubsHtml = (items = []) =>
    items.map(p => `<article class="pub featured">
      <div class="pub-badge">${esc(p.badge)}</div>
      <div class="pub-body">
        <h4 class="pub-title">${esc(p.title)}</h4>
        <p class="pub-authors">${p.authors ?? ""}</p>
        <p class="pub-venue">${p.venue ?? ""}</p>
        <div class="pub-links">${(p.links || []).map(l =>
          `<a href="${esc(l.href)}" target="_blank" rel="noopener noreferrer">${l.label}</a>`
        ).join("")}</div>
      </div>
    </article>`).join("");

  const pubListHtml = (items = []) =>
    `<ul class="pub-list">${items.map(p => `<li>
      <span class="tag">${esc(p.tag)}</span>
      <div>${p.text ?? ""}${(p.links || []).length
        ? ` <span class="pub-links">${p.links.map(l =>
            `<a href="${esc(l.href)}" target="_blank" rel="noopener noreferrer">${l.label}</a>`
          ).join(" · ")}</span>`
        : ""}</div>
    </li>`).join("")}</ul>`;

  return { $, $$, esc, setText, setHtml, feedHtml, timelineHtml, featuredPubsHtml, pubListHtml };
})();
