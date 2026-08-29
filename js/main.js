(() => {
  const SITE = window.SITE;
  if (!SITE) return;

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  const esc = (s) =>
    String(s ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");

  const setText = (sel, value) => {
    const el = $(sel);
    if (el) el.textContent = value ?? "";
  };

  const setHtml = (sel, value) => {
    const el = $(sel);
    if (el) el.innerHTML = value ?? "";
  };

  const linksHtml = (links = []) =>
    links
      .map((l) => `<a href="${esc(l.href)}" target="_blank" rel="noopener noreferrer">${l.label}</a>`)
      .join(" · ");

  const feedHtml = (items) =>
    `<ul class="feed">${items
      .map((it) => `<li><span class="time">${esc(it.time)}</span><div>${it.text}</div></li>`)
      .join("")}</ul>`;

  const timelineHtml = (items) =>
    `<ul class="timeline">${items
      .map((it) => {
        const note = it.noteHtml
          ? it.noteHtml
          : it.note
            ? `<span class="muted">${esc(it.note)}</span>`
            : "";
        return `<li>
        <span class="time">${esc(it.time)}</span>
        <div class="item-body">
          <strong>${esc(it.title)}</strong>, ${esc(it.place)}
          ${note}
        </div>
      </li>`;
      })
      .join("")}</ul>`;

  const featuredPubsHtml = (items = []) =>
    items
      .map(
        (p) => `<article class="pub featured">
        <div class="pub-badge">${esc(p.badge)}</div>
        <div class="pub-body">
          <h4 class="pub-title">${esc(p.title)}</h4>
          <p class="pub-authors">${p.authors}</p>
          <p class="pub-venue">${p.venue}</p>
          <div class="pub-links">${(p.links || [])
            .map((l) => `<a href="${esc(l.href)}" target="_blank" rel="noopener noreferrer">${l.label}</a>`)
            .join("")}</div>
        </div>
      </article>`
      )
      .join("");

  const pubListHtml = (items = []) =>
    `<ul class="pub-list">${items
      .map(
        (p) => `<li>
        <span class="tag">${esc(p.tag)}</span>
        <div>${p.text}${p.links?.length ? ` <span class="pub-links">${linksHtml(p.links)}</span>` : ""}</div>
      </li>`
      )
      .join("")}</ul>`;

  try {
    const p = SITE.profile || {};
    document.title = p.title || `${p.name} - Homepage`;

    const avatar = $("#avatar");
    if (avatar) {
      avatar.src = p.avatar || "assets/img/avatar.svg";
      avatar.alt = p.name || "Avatar";
      avatar.onerror = () => {
        avatar.onerror = null;
        avatar.src = "assets/img/avatar.svg";
      };
    }

    setText("#name", p.name);
    setText("#nameCn", p.nameCn);
    setHtml("#motto", (p.motto || []).map((line) => `<em>${esc(line)}</em>`).join("<br />"));
    setText("#role", p.role);
    setText("#location", p.location);

    const mail = $("#email");
    const emailLi = mail?.closest("li");
    const emailIsPlaceholder = !p.email || /example\.com|you@/i.test(p.email);
    if (mail && !emailIsPlaceholder) {
      mail.href = `mailto:${p.email}`;
      mail.textContent = p.email;
      emailLi?.classList.remove("is-placeholder");
      if (emailLi) emailLi.hidden = false;
    } else if (emailLi) {
      emailLi.hidden = true;
    }

    const markPlaceholder = (el, cond) => {
      const li = el?.closest?.("li");
      if (!li) return;
      if (cond) li.classList.add("is-placeholder");
      else li.classList.remove("is-placeholder");
    };
    markPlaceholder($("#role"), /Your Title|Affiliation|待填写/i.test(p.role || ""));
    markPlaceholder($("#location"), /City,\s*Country|待填写/i.test(p.location || ""));

    setHtml(
      "#socials",
      (p.socials || [])
        .filter((s) => s.href && s.href !== "#")
        .map(
          (s) =>
            `<a href="${esc(s.href)}" title="${esc(s.label)}" aria-label="${esc(s.label)}" target="_blank" rel="noopener noreferrer"><i class="${esc(s.icon)}"></i></a>`
        )
        .join("")
    );

    const seen = new Set();
    const navItems = (SITE.nav || []).filter((n) => {
      if (seen.has(n.label)) return false;
      seen.add(n.label);
      return true;
    });
    setHtml(
      "#nav",
      navItems
        .map((n, i) => {
          const href = `#${n.hash || n.id}`;
          return `<a href="${href}" class="nav-link${i === 0 ? " active" : ""}">${esc(n.label)}</a>`;
        })
        .join("")
    );

    const user = p.githubUser || "JiangYunhang";
    setHtml(
      "#badges",
      `
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
    `
    );

    const about = SITE.about || {};
    const interestTags = (about.interests || [])
      .map((t) => `<span class="interest-tag">${esc(t)}</span>`)
      .join("");
    setHtml(
      "#aboutBody",
      [about.intro, about.focus, about.services, about.communities, about.contact]
        .filter(Boolean)
        .map((html) => `<p>${html}</p>`)
        .join("") +
        (interestTags ? `<div class="interest-tags">${interestTags}</div>` : "")
    );

    setHtml("#educationBody", timelineHtml(SITE.education || []));
    setHtml("#experienceBody", timelineHtml(SITE.experience || []));
    // #region agent log
    fetch("http://127.0.0.1:7674/ingest/0d3376c2-124e-44c3-999d-2d660cceb539", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "9db655" },
      body: JSON.stringify({
        sessionId: "9db655",
        runId: "sjtu-risx",
        hypothesisId: "S1",
        location: "main.js:experience",
        message: "experience entries after SJTU RISX-X",
        data: {
          count: (SITE.experience || []).length,
          places: (SITE.experience || []).map((e) => e.place),
          hasRisx: (SITE.experience || []).some((e) => /RISX-X/.test(e.place || "")),
          chipPlace: (SITE.projects || []).find((p) => /Chip Design/.test(p.title || ""))?.place || "",
        },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion
    setHtml("#projectsBody", timelineHtml(SITE.projects || []));
    setHtml("#researchBody", timelineHtml(SITE.research || []));

    const skills = SITE.skills || {};
    const skillRows = [
      ["Languages", skills.languages],
      ["Programming", skills.programming],
      ["Tools", skills.tools],
      ["Research", skills.research],
    ].filter(([, v]) => v);
    setHtml(
      "#skillsBody",
      skillRows.length
        ? `<ul class="skills-list">${skillRows
            .map(
              ([label, value]) =>
                `<li><span class="skill-label">${esc(label)}</span><span>${esc(value)}</span></li>`
            )
            .join("")}</ul>`
        : ""
    );

    setHtml("#newsBody", feedHtml(SITE.news || []));
    setHtml("#honorsBody", feedHtml(SITE.honors || []));
    setHtml("#fundingBody", feedHtml(SITE.funding || []));

    const pubs = SITE.publications || {};
    setText("#pubNote", pubs.note || "");
    setHtml(
      "#confPubs",
      featuredPubsHtml(pubs.conferences?.featured) + pubListHtml(pubs.conferences?.list)
    );
    setHtml(
      "#journalPubs",
      featuredPubsHtml(pubs.journals?.featured) + pubListHtml(pubs.journals?.list)
    );

    setHtml("#inventionPatents", feedHtml(SITE.patents?.invention || []));
    setHtml("#designPatents", feedHtml(SITE.patents?.design || []));

    const soft = SITE.software || {};
    setHtml(
      "#softwareBody",
      (soft.featured || [])
        .map(
          (s) => `<article class="soft-card">
          <span class="time">${esc(s.time)}</span>
          <div><h4>${esc(s.title)}</h4><p class="muted">${s.authors}</p></div>
        </article>`
        )
        .join("") + feedHtml(soft.list || [])
    );

    setHtml("#nationalPrizes", feedHtml(SITE.competitions?.national || []));
    setHtml("#regionalPrizes", feedHtml(SITE.competitions?.regional || []));

    const music = SITE.music || {};
    setHtml("#musicQuote", `${esc(music.quote)}<footer>${esc(music.quoteBy || "")}</footer>`);
    setHtml(
      "#musicGrid",
      (music.tracks || [])
        .map(
          (t) => `<article class="music-card">
        <img src="${esc(t.cover)}" alt="${esc(t.title)}" />
        <div>
          <h4>${esc(t.title)}</h4>
          <p class="muted">${esc(t.meta)}</p>
          <audio controls preload="none"><source src="${esc(t.src)}" type="audio/mpeg" /></audio>
        </div>
      </article>`
        )
        .join("")
    );

    setText("#footerName", p.name);
    setText("#year", String(new Date().getFullYear()));

    const hasPubs =
      (pubs.conferences?.featured?.length || 0) +
        (pubs.conferences?.list?.length || 0) +
        (pubs.journals?.featured?.length || 0) +
        (pubs.journals?.list?.length || 0) >
      0;

    const show = (id, cond) => {
      const el = document.getElementById(id);
      if (el) el.hidden = !cond;
    };

    ["about", "education", "experience", "projects", "skills", "repos", "news"].forEach((id) =>
      show(id, true)
    );
    show("research", (SITE.research || []).length > 0);
    show("honors", (SITE.honors || []).length > 0);
    show("funding", (SITE.funding || []).length > 0);
    show("publications", hasPubs);
    show("patents", (SITE.patents?.invention || []).length + (SITE.patents?.design || []).length > 0);
    show("software", (SITE.software?.featured || []).length + (SITE.software?.list || []).length > 0);
    show("competitions", (SITE.competitions?.national || []).length + (SITE.competitions?.regional || []).length > 0);
    show("music", (SITE.music?.tracks || []).length > 0);

    const loadGithubRepos = async () => {
      const body = $("#reposBody");
      const meta = $("#reposMeta");
      const more = $("#reposMore");
      if (!body) return;

      const profileUrl = `https://github.com/${user}?tab=repositories`;
      if (meta) {
        meta.innerHTML = `Synced from <a href="${esc(profileUrl)}" target="_blank" rel="noopener noreferrer">github.com/${esc(user)}</a>`;
      }

      try {
        const url = `https://api.github.com/users/${encodeURIComponent(user)}/repos?sort=updated&per_page=12`;
        const res = await fetch(url, { headers: { Accept: "application/vnd.github+json" } });
        if (!res.ok) throw new Error(`GitHub API ${res.status}`);
        const repos = await res.json();

        if (!Array.isArray(repos) || repos.length === 0) {
          body.innerHTML = `<div class="repo-empty">
            <p>暂无公开仓库。</p>
            <p class="muted">创建仓库后会自动显示在这里。</p>
            <p><a href="${esc(profileUrl)}" target="_blank" rel="noopener noreferrer">打开 GitHub 仓库页 →</a></p>
          </div>`;
          if (more) more.innerHTML = "";
          return;
        }

        body.innerHTML = repos
          .map((repo) => {
            const desc = repo.description || "No description";
            const lang = repo.language ? `<span class="repo-lang">${esc(repo.language)}</span>` : "";
            const stars = `<span class="repo-stat"><i class="fa-solid fa-star"></i> ${repo.stargazers_count || 0}</span>`;
            const forks = `<span class="repo-stat"><i class="fa-solid fa-code-branch"></i> ${repo.forks_count || 0}</span>`;
            const forkTag = repo.fork ? `<span class="repo-tag">Fork</span>` : "";
            return `<a class="repo-card" href="${esc(repo.html_url)}" target="_blank" rel="noopener noreferrer">
              <h4>${esc(repo.name)} ${forkTag}</h4>
              <p>${esc(desc)}</p>
              <div class="repo-meta">${lang}${stars}${forks}</div>
            </a>`;
          })
          .join("");

        if (more) {
          more.innerHTML = `<a href="${esc(profileUrl)}" target="_blank" rel="noopener noreferrer">View all repositories on GitHub →</a>`;
        }
      } catch {
        body.innerHTML = `<div class="repo-empty">
          <p>无法加载 GitHub 仓库（网络或 API 限制）。</p>
          <p><a href="${esc(profileUrl)}" target="_blank" rel="noopener noreferrer">直接访问 github.com/${esc(user)} →</a></p>
        </div>`;
      }
    };

    const syncScrollHints = () => {
      $$(".scroll-panel").forEach((panel) => {
        const section = panel.closest(".section");
        const hint = section?.querySelector(".scroll-hint");
        if (!hint) return;
        const needsScroll = panel.scrollHeight > panel.clientHeight + 2;
        hint.hidden = !needsScroll;
        panel.classList.toggle("is-scrollable", needsScroll);
      });
    };

    loadGithubRepos().finally(syncScrollHints);
    requestAnimationFrame(syncScrollHints);

    const sidebar = $("#sidebar");
    const toggle = $("#navToggle");
    const backdrop = $("#navBackdrop");
    const mobileMq = window.matchMedia("(max-width: 900px)");

    const setNavOpen = (open) => {
      const next = Boolean(open) && mobileMq.matches;
      sidebar?.classList.toggle("open", next);
      document.body.classList.toggle("nav-lock", next);
      toggle?.setAttribute("aria-expanded", next ? "true" : "false");
      if (backdrop) {
        backdrop.hidden = !next;
        backdrop.classList.toggle("is-visible", next);
      }
    };

    const reportViewport = (reason) => {
      // #region agent log
      const docEl = document.documentElement;
      fetch("http://127.0.0.1:7674/ingest/0d3376c2-124e-44c3-999d-2d660cceb539", {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "9db655" },
        body: JSON.stringify({
          sessionId: "9db655",
          runId: "responsive",
          hypothesisId: "R1",
          location: "main.js:viewport",
          message: "viewport layout probe",
          data: {
            reason,
            w: window.innerWidth,
            h: window.innerHeight,
            mobile: mobileMq.matches,
            overflowX: docEl.scrollWidth > docEl.clientWidth + 1,
            scrollWidth: docEl.scrollWidth,
            clientWidth: docEl.clientWidth,
            contentWidth: $(".content")?.getBoundingClientRect().width || 0,
            sidebarOpen: sidebar?.classList.contains("open") || false,
          },
          timestamp: Date.now(),
        }),
      }).catch(() => {});
      // #endregion
    };

    toggle?.addEventListener("click", () => setNavOpen(!sidebar?.classList.contains("open")));
    backdrop?.addEventListener("click", () => setNavOpen(false));
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setNavOpen(false);
    });
    const onMq = () => {
      if (!mobileMq.matches) setNavOpen(false);
      reportViewport("mq-change");
    };
    if (mobileMq.addEventListener) mobileMq.addEventListener("change", onMq);
    else mobileMq.addListener(onMq);

    const links = $$(".nav-link");
    const sections = [...new Set(links.map((l) => $(l.getAttribute("href"))))].filter(Boolean);
    links.forEach((link) => link.addEventListener("click", () => setNavOpen(false)));

    const setActive = () => {
      const offset = mobileMq.matches ? 88 : 120;
      let currentId = sections[0]?.id;
      for (const section of sections) {
        if (section.getBoundingClientRect().top - offset <= 0) currentId = section.id;
      }
      links.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);
      });
    };
    window.addEventListener("scroll", setActive, { passive: true });
    window.addEventListener(
      "resize",
      () => {
        syncScrollHints();
        setActive();
        reportViewport("resize");
      },
      { passive: true }
    );
    setActive();
    reportViewport("init");
  } catch (err) {
    console.error(err);
  }
})();
