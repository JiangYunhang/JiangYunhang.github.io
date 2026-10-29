/* ============================================================
   03-main.js — 主题切换 / 个人信息 / 导航
   ------------------------------------------------------------
   依赖 01-site-data.js、02-helpers.js
   ============================================================ */
(() => {
  const SITE = window.SITE;
  const H = window.H;
  if (!SITE || !H) return;

  const { $, esc, setText, setHtml } = H;

  try {
    /* ---------- 主题 ---------- */
    const themeToggle = $("#themeToggle");
    const applyTheme = (theme) => {
      document.documentElement.setAttribute("data-theme", theme);
      try { localStorage.setItem("theme", theme); } catch (e) {}
      if (themeToggle) {
        const icon = themeToggle.querySelector("i");
        const label = themeToggle.querySelector("span");
        if (icon) icon.className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
        if (label) label.textContent = theme === "dark" ? "Light mode" : "Dark mode";
        themeToggle.setAttribute("aria-label",
          theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
      }
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.content = theme === "dark" ? "#0a111d" : "#0d7a6b";
    };

    let saved = null;
    try { saved = localStorage.getItem("theme"); } catch (e) {}
    applyTheme(saved || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
    themeToggle?.addEventListener("click", () => {
      const cur = document.documentElement.getAttribute("data-theme");
      applyTheme(cur === "dark" ? "light" : "dark");
    });

    /* ---------- 个人信息 ---------- */
    const p = SITE.profile || {};
    document.title = p.title || `${p.name} - Homepage`;

    const avatar = $("#avatar");
    if (avatar) {
      avatar.src = p.avatar || "assets/img/avatar.jpg";
      avatar.alt = p.name || "Avatar";
      avatar.addEventListener("error", () => { avatar.src = "assets/img/avatar.jpg"; }, { once: true });
    }

    setText("#name", p.name);
    setText("#nameCn", p.nameCn);
    setHtml("#motto", (p.motto || []).map(l => `<em>${esc(l)}</em>`).join("<br />"));
    setText("#role", p.role);
    setText("#location", p.location);
    setText("#footerName", p.name);
    setText("#year", String(new Date().getFullYear()));

    const markPlaceholder = (el, isPlaceholder) => {
      const li = el?.closest?.("li");
      if (li) li.classList.toggle("is-placeholder", Boolean(isPlaceholder));
    };
    markPlaceholder($("#role"), /Your Title|Affiliation|待填写/i.test(p.role || ""));
    markPlaceholder($("#location"), /City,\s*Country|待填写/i.test(p.location || ""));

    const locationLi = $("#location")?.closest?.("li");
    if (locationLi) locationLi.hidden = !p.location;

    const mail = $("#email");
    const emailLi = mail?.closest?.("li");
    const emailOk = p.email && !/example\.com|you@/i.test(p.email);
    if (mail && emailOk) {
      mail.href = `mailto:${p.email}`;
      mail.textContent = p.email;
      mail.title = "点击复制邮箱地址";
      mail.dataset.copy = p.email;
      if (emailLi) emailLi.hidden = false;
    } else if (emailLi) {
      emailLi.hidden = true;
    }

    setHtml("#socials", (p.socials || [])
      .filter(s => s.href && s.href !== "#")
      .map(s => `<a href="${esc(s.href)}" title="${esc(s.label)}" aria-label="${esc(s.label)}" target="_blank" rel="noopener noreferrer"><i class="${esc(s.icon)}"></i></a>`)
      .join(""));

    /* ---------- 导航 ---------- */
    const navHost = $("#nav");
    if (navHost) {
      // 若 site-data.js 未配置 nav，则按 index.html 中板块顺序自动生成
      let navItems = (SITE.nav || []).filter(n => n && n.id);
      if (!navItems.length) {
        navItems = [...document.querySelectorAll("main .section[id]")]
          .map(sec => ({ id: sec.id, label: sec.dataset.label || sec.id }));
      }
      setHtml("#nav", navItems.map((n, i) =>
        `<a href="#${n.id}" class="nav-link${i === 0 ? " active" : ""}">${esc(n.label)}</a>`
      ).join(""));
    }

  } catch (err) {
    console.error(err);
  }
})();
