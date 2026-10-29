/* ============================================================
   render.js — 渲染各个内容区块
   ============================================================ */
(() => {
  const SITE = window.SITE;
  const H = window.H;
  if (!SITE || !H) return;

  const { $, esc, setHtml, setText, feedHtml, timelineHtml, featuredPubsHtml, pubListHtml } = H;

  try {
    const p = SITE.profile || {};
    const user = p.githubUser || "JiangYunhang";

    /* ---------- About ---------- */
    setHtml("#badges", `
      <a href="https://github.com/${esc(user)}?tab=repositories" target="_blank" rel="noopener noreferrer">
        <img alt="GitHub repos" src="https://img.shields.io/badge/GitHub-${esc(user)}-181717?logo=github" />
      </a>
      <a href="https://github.com/${esc(user)}?tab=repositories&sort=stargazers" target="_blank" rel="noopener noreferrer">
        <img alt="GitHub stars" src="https://img.shields.io/github/stars/${esc(user)}?style=social" />
      </a>
      <a href="https://github.com/${esc(user)}?tab=followers" target="_blank" rel="noopener noreferrer">
        <img alt="GitHub followers" src="https://img.shields.io/github/followers/${esc(user)}?style=social" />
      </a>
      <img alt="visitors" src="https://komarev.com/ghpvc/?username=${esc(user)}&label=Visitors&color=0e75b6&style=flat" />
    `);

    const about = SITE.about || {};
    const tags = (about.interests || [])
      .map(t => `<span class="interest-tag">${esc(t)}</span>`).join("");
    setHtml("#aboutBody",
      [about.intro, about.focus, about.services, about.communities, about.contact]
        .filter(Boolean).map(h => `<p>${h}</p>`).join("") +
      (tags ? `<div class="interest-tags">${tags}</div>` : ""));

    /* ---------- 时间线区块 ---------- */
    setHtml("#educationBody", timelineHtml(SITE.education || []));
    setHtml("#experienceBody", timelineHtml(SITE.experience || []));
    setHtml("#projectsBody", timelineHtml(SITE.projects || []));
    setHtml("#researchBody", timelineHtml(SITE.research || []));

    /* ---------- Skills ---------- */
    const skills = SITE.skills || {};
    const skillRows = [
      ["Languages", skills.languages],
      ["Programming", skills.programming],
      ["Tools", skills.tools],
      ["Research", skills.research],
    ].filter(([, v]) => v);
    setHtml("#skillsBody", skillRows.length
      ? `<ul class="skills-list">${skillRows.map(([label, value]) =>
          `<li><span class="skill-label">${esc(label)}</span><span>${esc(value)}</span></li>`
        ).join("")}</ul>`
      : "");

    /* ---------- News / Honors / Funding ---------- */
    setHtml("#newsBody", feedHtml(SITE.news || []));
    setHtml("#honorsBody", feedHtml(SITE.honors || []));
    setHtml("#fundingBody", feedHtml(SITE.funding || []));

    /* ---------- Publications ---------- */
    const pubs = SITE.publications || {};
    setText("#pubNote", pubs.note || "");
    setHtml("#confPubs", featuredPubsHtml(pubs.conferences?.featured) + pubListHtml(pubs.conferences?.list));
    setHtml("#journalPubs", featuredPubsHtml(pubs.journals?.featured) + pubListHtml(pubs.journals?.list));

    /* ---------- Patents ---------- */
    setHtml("#inventionPatents", feedHtml(SITE.patents?.invention || []));
    setHtml("#designPatents", feedHtml(SITE.patents?.design || []));

    /* ---------- Software ---------- */
    const soft = SITE.software || {};
    setHtml("#softwareBody",
      (soft.featured || []).map(s => `<article class="soft-card">
        <span class="time">${esc(s.time)}</span>
        <div><h4>${esc(s.title)}</h4><p class="muted">${s.authors ?? ""}</p></div>
      </article>`).join("") + feedHtml(soft.list || []));

    /* ---------- Competitions ---------- */
    setHtml("#nationalPrizes", feedHtml(SITE.competitions?.national || []));
    setHtml("#regionalPrizes", feedHtml(SITE.competitions?.regional || []));

    /* ---------- Music ---------- */
    const music = SITE.music || {};
    setHtml("#musicQuote",
      `${esc(music.quote)}<footer>${esc(music.quoteBy || "")}</footer>`);
    setHtml("#musicGrid", (music.tracks || []).map(t => `<article class="music-card">
      <img src="${esc(t.cover)}" alt="${esc(t.title)}" />
      <div>
        <h4>${esc(t.title)}</h4>
        <p class="muted">${esc(t.meta)}</p>
        <audio controls preload="none"><source src="${esc(t.src)}" type="audio/mpeg" /></audio>
      </div>
    </article>`).join(""));

    /* ---------- 显示 / 隐藏空区块 ---------- */
    const show = (id, cond) => { const el = document.getElementById(id); if (el) el.hidden = !cond; };
    const hasPubs =
      (pubs.conferences?.featured?.length || 0) + (pubs.conferences?.list?.length || 0) +
      (pubs.journals?.featured?.length || 0) + (pubs.journals?.list?.length || 0) > 0;

    ["about", "education", "experience", "projects", "skills", "repos", "news"]
      .forEach(id => show(id, true));
    show("research", (SITE.research || []).length > 0);
    show("honors", (SITE.honors || []).length > 0);
    show("funding", (SITE.funding || []).length > 0);
    show("publications", hasPubs);
    show("patents", (SITE.patents?.invention || []).length + (SITE.patents?.design || []).length > 0);
    show("software", (SITE.software?.featured || []).length + (SITE.software?.list || []).length > 0);
    show("competitions", (SITE.competitions?.national || []).length + (SITE.competitions?.regional || []).length > 0);
    show("music", (SITE.music?.tracks || []).length > 0);
  } catch (err) {
    console.error(err);
  }
})();
