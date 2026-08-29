/**
 * ============================================================
 *  姜运航个人主页数据 —— 修改后刷新浏览器即可
 * ============================================================
 */
window.SITE = {
  profile: {
    name: "Jiang Yunhang",
    nameCn: "姜运航",
    title: "Jiang Yunhang (姜运航) - Homepage",
    motto: ["学而不思则罔", "思而不学则殆"],
    role: "Undergraduate · Data Science & Big Data Technology, AUFE",
    location: "Bengbu / 蚌埠, China",
    email: "you@example.com",
    avatar: "https://avatars.githubusercontent.com/u/321870676?v=4",
    githubUser: "JiangYunhang",
    socials: [
      { label: "GitHub", href: "https://github.com/JiangYunhang", icon: "fa-brands fa-github" },
      { label: "Google Scholar", href: "#", icon: "fa-solid fa-graduation-cap" },
      { label: "ORCID", href: "#", icon: "fa-brands fa-orcid" },
      { label: "LinkedIn", href: "#", icon: "fa-brands fa-linkedin" },
    ],
  },

  nav: [
    { id: "about", label: "About Me" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "research", label: "Research" },
    { id: "repos", label: "GitHub" },
    { id: "news", label: "News" },
  ],

  about: {
    intro:
      '🌱 Hi, I’m <strong>Jiang Yunhang (姜运航)</strong>, a sophomore undergraduate majoring in <strong>Data Science and Big Data Technology</strong> at <strong>Anhui University of Finance and Economics (安徽财经大学)</strong>. GitHub: <a href="https://github.com/JiangYunhang" target="_blank" rel="noopener noreferrer">@JiangYunhang</a>.',
    focus:
      "🔭 Research interests: <strong>Medical AI &amp; Large Models</strong>, <strong>AI Infrastructure (MoE)</strong>, <strong>LLM-assisted Code Generation for Chip Design</strong>, and <strong>Numerical Analysis of Mean-Field Langevin Dynamics</strong>.",
    services: "",
    communities: "",
    contact:
      '📫 GitHub: <a href="https://github.com/JiangYunhang" target="_blank" rel="noopener noreferrer">github.com/JiangYunhang</a>',
  },

  education: [
    {
      time: "2024.09 – Present",
      title: "BEng (in progress): Data Science and Big Data Technology",
      place: "Anhui University of Finance and Economics (安徽财经大学), Bengbu, China",
      note: "Sophomore undergraduate",
    },
  ],

  experience: [
    {
      time: "2026.07.13 – 2026.08.29",
      title: "Research Intern (Visiting Student)",
      place:
        "The Chinese University of Hong Kong, Shenzhen · Shenzhen Research Institute of Big Data (香港中文大学（深圳）· 深圳大数据研究院)",
      note:
        "Academic literature study, big-data processing, and research participation on medical AI large-model projects",
    },
  ],

  research: [
    {
      time: "2026",
      title: "Numerical Evidence for Weak Order of MFL–LM Schemes",
      place: "numerical-order2",
      note:
        "Gate-by-gate numerical verification of long-time weak convergence for Mean-Field Langevin / LM discretizations; CPU & Ascend experiment pipeline.",
    },
    {
      time: "2026",
      title: "Code Generation for Chip Design",
      place: "面向芯片设计的代码生成",
      note:
        "Industry/academic survey and research materials on LLM-assisted code generation for chip / EDA workflows (RISE-X related).",
    },
    {
      time: "2026",
      title: "AI Infrastructure · MoE Load Balancing",
      place: "AI Infra / moe-balance",
      note: "Exploration of Mixture-of-Experts load balancing and AI infrastructure tooling.",
    },
  ],

  news: [
    {
      time: "2026.08",
      text: "🎉 Completed research internship at <strong>CUHK-Shenzhen · Shenzhen Research Institute of Big Data</strong>.",
    },
    {
      time: "2026.07",
      text: "🎉 Started visiting internship at CUHK-Shenzhen / SRIBD (medical AI large-model related research).",
    },
    {
      time: "2026.08",
      text: "🔧 Ongoing: numerical weak-order verification for MFL–LM methods.",
    },
  ],

  honors: [],
  funding: [],

  publications: {
    note: "*: Equal Contribution, †: Corresponding Author(s)",
    conferences: { featured: [], list: [] },
    journals: { featured: [], list: [] },
  },

  patents: { invention: [], design: [] },
  software: { featured: [], list: [] },
  competitions: { national: [], regional: [] },

  music: {
    quote: "",
    quoteBy: "",
    tracks: [],
  },
};
