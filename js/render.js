/* ============================================================
   render.js — 内容区块渲染
   ============================================================ */
(() => {
  const SITE = window.SITE;
  const H = window.H;
  if (!SITE || !H) return;

  const {
    $, setText, setHtml,
    timelineHtml, projectCardsHtml, feedHtml,
    featuredPubsHtml, pubListHtml, skillsHtml, tagsHtml,
  } = H;

  try {
    const p = SITE.profile || {};
    const user = p.githubUser || "JiangYunhang";

    /* ---------- About ---------- */
    setHtml("#badges", `
      <a href="https://github.com/${user}?tab=repositories" target="_blank" rel="noopener noreferrer">
        <img alt="GitHub repos" src="https://img.shields.io/badge/GitHub-${user}-181717?logo=github" />
      </a>
      <a href="https://github.com/${user}?tab=repositories&sort=stargazers" target="_blank" rel="noopener noreferrer">
        <img alt="GitHub stars" src="https://img.shields.io/github/stars/${user}?style=social" />
      </a>
      <a href="https://github.com/${user}?tab=followers" target="_blank" rel="noopener noreferrer">
        <img alt="GitHub followers" src="https://img.shields.io/github/followers/${user}?style=social" />
      </a>
      <img alt="visitors" src="https://komarev.com/ghpvc/?username=${user}&label=Visitors&color=0e75b6&style=flat" />
    `);

    const about = SITE.about || {};
    const paras = (about.paragraphs || []).map(par => {
      if (typeof par === "string") {
        return `<div class="about-item about-item--single"><p>${par}</p></div>`;
      }
      const zh = par.zh ? `<p class="lang-zh">${par.zh}</p>` : "";
      const en = par.en ? `<p class="lang-en">${par.en}</p>` : "";
      return `<div class="about-item">${zh}${en}</div>`;
    }).join("");
    const tags = tagsHtml(about.interests);
    setHtml("#interests", tags);
    setHtml("#aboutBody", paras);

    /* ---------- 教育 / 经历 ---------- */
    setHtml("#educationBody", timelineHtml(SITE.education || []));
    setHtml("#experienceBody", timelineHtml(SITE.experience || []));
    setHtml("#projectsBody", projectCardsHtml(SITE.projects || []));
    setHtml("#researchBody", timelineHtml(SITE.research || []));

    /* ---------- 技能 ---------- */
    setHtml("#skillsBody", skillsHtml(SITE.skills || []));

    /* ---------- 新闻 / 荣誉 / 资助 ---------- */
    setHtml("#newsBody", feedHtml(SITE.news || []));
    setHtml("#honorsBody", feedHtml(SITE.honors || []));
    setHtml("#fundingBody", feedHtml(SITE.funding || []));

    /* ---------- 论文 ---------- */
    const pubs = SITE.publications || {};
    setText("#pubNote", pubs.note || "");
    setHtml("#confPubs",
      featuredPubsHtml(pubs.conferences?.featured) + pubListHtml(pubs.conferences?.list));
    setHtml("#journalPubs",
      featuredPubsHtml(pubs.journals?.featured) + pubListHtml(pubs.journals?.list));

    /* ---------- 专利 ---------- */
    setHtml("#inventionPatents", feedHtml(SITE.patents?.invention || []));
    setHtml("#designPatents", feedHtml(SITE.patents?.design || []));

    /* ---------- 软件 ---------- */
    const soft = SITE.software || {};
    const softFeatured = (soft.featured || []).map(s => `<article class="soft-card">
      <span class="time">${s.time ?? ""}</span>
      <div>
        <h4>${s.title ?? ""}</h4>
        <p class="muted">${s.authors ?? ""}</p>
      </div>
    </article>`).join("");
    setHtml("#softwareBody", softFeatured + feedHtml(soft.list || []));

    /* ---------- 竞赛 ---------- */
    setHtml("#nationalPrizes", feedHtml(SITE.competitions?.national || []));
    setHtml("#regionalPrizes", feedHtml(SITE.competitions?.regional || []));

    /* ---------- 音乐 ---------- */
    const music = SITE.music || {};
    setHtml("#musicQuote",
      `${music.quote ?? ""}<footer>${music.quoteBy ?? ""}</footer>`);
    setHtml("#musicGrid", (music.tracks || []).map(t => `<article class="music-card">
      <img src="${t.cover ?? ""}" alt="${t.title ?? ""}" loading="lazy" />
      <div>
        <h4>${t.title ?? ""}</h4>
        <p class="muted">${t.meta ?? ""}</p>
        ${t.src ? `<audio controls preload="none"><source src="${t.src}" type="audio/mpeg" /></audio>` : ""}
      </div>
    </article>`).join(""));

    /* ---------- 板块显隐 ---------- */
    const show = (id, cond) => { const el = document.getElementById(id); if (el) el.hidden = !cond; };
    const hasPubs =
      (pubs.conferences?.featured?.length || 0) + (pubs.conferences?.list?.length || 0) +
      (pubs.journals?.featured?.length || 0) + (pubs.journals?.list?.length || 0) > 0;

    ["about", "education", "experience", "projects", "skills", "repos", "news"]
      .forEach(id => show(id, true));
    show("research",  (SITE.research || []).length > 0);
    show("honors",    (SITE.honors || []).length > 0);
    show("funding",   (SITE.funding || []).length > 0);
    show("publications", hasPubs);
    show("patents",   (SITE.patents?.invention || []).length + (SITE.patents?.design || []).length > 0);
    show("software",  (SITE.software?.featured || []).length + (SITE.software?.list || []).length > 0);
    show("competitions",
      (SITE.competitions?.national || []).length + (SITE.competitions?.regional || []).length > 0);
    show("music", (SITE.music?.tracks || []).length > 0);
  } catch (err) {
    console.error(err);
  }
})();
