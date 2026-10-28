    const loadGithubRepos = async () => {
      const body = $("#reposBody");
      const meta = $("#reposMeta");
      const more = $("#reposMore");
      if (!body) return;
      const profileUrl = `https://github.com/${user}?tab=repositories`;
      if (meta) meta.innerHTML = `Synced from <a href="${esc(profileUrl)}" target="_blank" rel="noopener noreferrer">github.com/${esc(user)}</a>`;
      try {
        const url = `https://api.github.com/users/${encodeURIComponent(user)}/repos?sort=updated&per_page=12`;
        const res = await fetch(url, { headers: { Accept: "application/vnd.github+json" } });
        if (!res.ok) throw new Error(`GitHub API ${res.status}`);
        const repos = await res.json();
        if (!Array.isArray(repos) || repos.length === 0) {
          body.innerHTML = `<div class="repo-empty"><p>暂无公开仓库。</p><p class="muted">创建仓库后会自动显示在这里。</p><p><a href="${esc(profileUrl)}" target="_blank" rel="noopener noreferrer">打开 GitHub 仓库页 →</a></p></div>`;
          if (more) more.innerHTML = "";
          return;
        }
        body.innerHTML = repos.map(repo=>{
          const desc=repo.description||"No description";
          const lang=repo.language?`<span class="repo-lang">${esc(repo.language)}</span>`:"";
          const stars=`<span class="repo-stat"><i class="fa-solid fa-star"></i> ${repo.stargazers_count||0}</span>`;
          const forks=`<span class="repo-stat"><i class="fa-solid fa-code-branch"></i> ${repo.forks_count||0}</span>`;
          const forkTag=repo.fork?`<span class="repo-tag">Fork</span>`:"";
          return `<a class="repo-card" href="${esc(repo.html_url)}" target="_blank" rel="noopener noreferrer"><h4>${esc(repo.name)} ${forkTag}</h4><p>${esc(desc)}</p><div class="repo-meta">${lang}${stars}${forks}</div></a>`;
        }).join("");
        if (more) more.innerHTML = `<a href="${esc(profileUrl)}" target="_blank" rel="noopener noreferrer">View all repositories on GitHub →</a>`;
      } catch {
        body.innerHTML = `<div class="repo-empty"><p>无法加载 GitHub 仓库（网络或 API 限制）。</p><p><a href="${esc(profileUrl)}" target="_blank" rel="noopener noreferrer">直接访问 github.com/${esc(user)} →</a></p></div>`;
      }
    };
    const syncScrollHints = () => {
      $$(".scroll-panel").forEach((panel)=>{
        const section=panel.closest(".section");
        const hint=section?.querySelector(".scroll-hint");
        if(!hint) return;
        const needsScroll=panel.scrollHeight>panel.clientHeight+2;
        hint.hidden=!needsScroll;
        panel.classList.toggle("is-scrollable",needsScroll);
      });
    };
    loadGithubRepos().finally(syncScrollHints);
    requestAnimationFrame(syncScrollHints);

    const sidebar=$("#sidebar"), toggle=$("#navToggle"), backdrop=$("#navBackdrop");
    const mobileMq=window.matchMedia("(max-width: 900px)");
    const setNavOpen=(open)=>{
      const next=Boolean(open)&&mobileMq.matches;
      sidebar?.classList.toggle("open",next);
      document.body.classList.toggle("nav-lock",next);
      toggle?.setAttribute("aria-expanded",next?"true":"false");
      if(backdrop){ backdrop.hidden=!next; backdrop.classList.toggle("is-visible",next); }
    };
    toggle?.addEventListener("click",()=>setNavOpen(!sidebar?.classList.contains("open")));
    backdrop?.addEventListener("click",()=>setNavOpen(false));
    window.addEventListener("keydown",(e)=>{ if(e.key==="Escape") setNavOpen(false); });
    const onMq=()=>{ if(!mobileMq.matches) setNavOpen(false); };
    if(mobileMq.addEventListener) mobileMq.addEventListener("change",onMq);
    else mobileMq.addListener(onMq);
    const links=$$(".nav-link");
    const sections=[...new Set(links.map(l=>$(l.getAttribute("href"))))].filter(Boolean);
    links.forEach((link)=>link.addEventListener("click",()=>setNavOpen(false)));
    const setActive=()=>{
      const offset=mobileMq.matches?88:120;
      let currentId=sections[0]?.id;
      for(const section of sections){ if(section.getBoundingClientRect().top-offset<=0) currentId=section.id; }
      links.forEach((link)=>{ link.classList.toggle("active",link.getAttribute("href")===`#${currentId}`); });
    };
    window.addEventListener("scroll",setActive,{passive:true});
    window.addEventListener("resize",()=>{ syncScrollHints(); setActive(); },{passive:true});
    setActive();
  } catch(err) { console.error(err); }
})();