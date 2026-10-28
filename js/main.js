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