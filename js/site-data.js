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
      '🌱 你好，我是<strong>姜运航（Jiang Yunhang）</strong>，安徽财经大学<strong>数据科学与大数据技术</strong>专业大二本科生。<br />Hi, I’m <strong>Jiang Yunhang</strong>, a sophomore undergraduate in <strong>Data Science and Big Data Technology</strong> at <strong>Anhui University of Finance and Economics</strong>.',
    focus:
      "🔭 当前关注：<strong>医学人工智能与大模型</strong>、<strong>AI 基础设施（MoE）</strong>、<strong>面向芯片设计的代码生成</strong>，以及<strong>Mean-Field Langevin 数值分析</strong>。<br />Research interests: <strong>Medical AI &amp; Large Models</strong>, <strong>AI Infrastructure (MoE)</strong>, <strong>LLM-assisted Code Generation for Chip Design</strong>, and <strong>Numerical Analysis of Mean-Field Langevin Dynamics</strong>.",
    services: "",
    communities: "",
    contact:
      '📫 GitHub: <a href="https://github.com/JiangYunhang" target="_blank" rel="noopener noreferrer">github.com/JiangYunhang</a> · Homepage: <a href="https://JiangYunhang.github.io/" target="_blank" rel="noopener noreferrer">JiangYunhang.github.io</a>',
    interests: [
      "Medical AI",
      "Large Models",
      "MoE / AI Infra",
      "Chip Codegen",
      "MFL Numerics",
      "Data Science",
    ],
  },

  education: [
    {
      time: "2024.09 – Present",
      title: "BEng (in progress): Data Science and Big Data Technology",
      place: "Anhui University of Finance and Economics (安徽财经大学), Bengbu, China",
      noteHtml:
        '<span class="muted">Sophomore undergraduate · 数据科学与大数据技术 · 本科在读（大二）</span>',
    },
  ],

  experience: [
    {
      time: "2026.07.13 – 2026.08.29",
      title: "Research Intern (Visiting Student)",
      place:
        "CUHK-Shenzhen · Shenzhen Research Institute of Big Data (香港中文大学（深圳）· 深圳大数据研究院)",
      noteHtml:
        '<span class="muted">文献研读、大数据处理，以及医疗人工智能大模型相关课题参与 · Literature study, big-data processing, and medical AI large-model research</span>',
    },
  ],

  research: [
    {
      time: "2026",
      title: "Numerical Evidence for Weak Order of MFL–LM Schemes",
      place: "Mean-Field Langevin / LM Numerics",
      noteHtml:
        '<span class="muted">围绕 MFL–LM 离散格式的长期弱收敛，开展 Gate-by-Gate 数值验证（CPU / Ascend）。Gate-by-gate numerical verification of long-time weak convergence for Mean-Field Langevin / LM schemes.</span>',
    },
    {
      time: "2026",
      title: "Code Generation for Chip Design",
      place: "LLM × EDA / Chip Design",
      noteHtml:
        '<span class="muted">面向芯片设计代码生成的产业与学术调研（RISE-X 相关）。Industry/academic survey on LLM-assisted code generation for chip / EDA workflows.</span>',
    },
    {
      time: "2026",
      title: "AI Infrastructure · MoE Load Balancing",
      place: "Mixture-of-Experts",
      noteHtml:
        '<span class="muted">探索 MoE 负载均衡与 AI Infra 相关工具链。Exploration of Mixture-of-Experts load balancing and AI infrastructure tooling.</span>',
    },
  ],

  news: [
    {
      time: "2026.08",
      text: '🌐 个人主页上线 · Personal homepage launched at <a href="https://JiangYunhang.github.io/" target="_blank" rel="noopener noreferrer">JiangYunhang.github.io</a>.',
    },
    {
      time: "2026.08",
      text: "🎉 完成港中深 / 深圳大数据研究院科研实习 · Completed research internship at <strong>CUHK-Shenzhen · SRIBD</strong>.",
    },
    {
      time: "2026.08",
      text: "🔧 持续推进 MFL–LM 弱阶数值验证 · Ongoing numerical weak-order verification for MFL–LM methods.",
    },
    {
      time: "2026.07",
      text: "🎉 开始港中深访学实习（医疗 AI 大模型相关）· Started visiting internship at CUHK-Shenzhen / SRIBD.",
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
