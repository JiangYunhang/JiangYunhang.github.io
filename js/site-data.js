/**
 * ============================================================
 *  姜运航个人主页数据（基于 Academic_CV_SJTU）
 * ============================================================
 */
window.SITE = {
  profile: {
    name: "Jiang Yunhang",
    nameCn: "姜运航",
    title: "Jiang Yunhang (姜运航) - Homepage",
    motto: ["学而不思则罔", "思而不学则殆"],
    role: "B.S. Student · Data Science & Big Data Technology, AUFE",
    location: "Bengbu, Anhui, China / 安徽蚌埠",
    email: "2069329624@qq.com",
    avatar: "assets/img/avatar.jpg",
    githubUser: "JiangYunhang",
    socials: [
      { label: "GitHub", href: "https://github.com/JiangYunhang", icon: "fa-brands fa-github" },
      { label: "Email", href: "mailto:2069329624@qq.com", icon: "fa-solid fa-envelope" },
    ],
  },

  nav: [
    { id: "about", label: "About Me" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "repos", label: "GitHub" },
    { id: "news", label: "News" },
  ],

  about: {
    intro:
      '🌱 你好，我是<strong>姜运航（Jiang Yunhang）</strong>，安徽财经大学<strong>数据科学与大数据技术</strong>专业本科生。<br />Hi, I’m <strong>Jiang Yunhang</strong>, an undergraduate in <strong>Data Science and Big Data Technology</strong> at <strong>Anhui University of Finance and Economics</strong>, Bengbu, China.',
    focus:
      "🔭 Research interest lies at the intersection of <strong>Deep Learning</strong> and <strong>Natural Language Processing</strong>, with emphasis on <strong>Large Language Models (LLMs)</strong>, <strong>Intelligent Agents</strong>, and <strong>AI for Software Engineering (AI4SE)</strong>. Current medical AI work covers LLM fine-tuning, RAG, prompt engineering, and multi-modal learning.<br />研究方向位于深度学习与自然语言处理交叉领域，关注大语言模型、智能体与面向软件工程的 AI（AI4SE）；当前在医学人工智能中积累了 LLM 微调、RAG、提示工程与多模态学习经验。",
    services: "",
    communities: "",
    contact:
      '📫 Email: <a href="mailto:2069329624@qq.com">2069329624@qq.com</a> · GitHub: <a href="https://github.com/JiangYunhang" target="_blank" rel="noopener noreferrer">@JiangYunhang</a> · Homepage: <a href="https://JiangYunhang.github.io/" target="_blank" rel="noopener noreferrer">JiangYunhang.github.io</a>',
    interests: [
      "Large Language Models",
      "Intelligent Agents",
      "AI4SE",
      "Medical AI",
      "RAG / Prompting",
      "Multi-modal Learning",
      "Deep Learning",
      "NLP",
    ],
  },

  education: [
    {
      time: "2025.09 – 2029.06",
      title: "B.S. in Data Science and Big Data Technology",
      place: "Anhui University of Finance and Economics (安徽财经大学), Bengbu, Anhui, China",
      noteHtml:
        '<span class="muted">GPA: <strong>4.2/5</strong> (Rank <strong>7/161</strong>) · Core: Machine Learning, Deep Learning, Data Structures &amp; Algorithms, Linear Algebra, Probability &amp; Statistics, Python, Database Systems</span>',
    },
  ],

  experience: [
    {
      time: "2026.06 – Present",
      title: "Research Assistant Student",
      place:
        "The Chinese University of Hong Kong, Shenzhen · Shenzhen Research Institute of Big Data (香港中文大学（深圳）· 深圳大数据研究院)",
      noteHtml:
        '<span class="muted">Engaged in three medical AI projects (HCC immunotherapy response, renal tumor multi-phase CT enhancement, sepsis classification with LLMs); developed models with PyTorch for medical imaging, multi-modal fusion, and clinical NLP.</span>',
    },
  ],

  projects: [
    {
      time: "2026",
      title: "Hepatocellular Carcinoma Immunotherapy Response Prediction",
      place: "Medical Imaging · Multi-modal Learning",
      noteHtml:
        '<span class="muted">Multi-modal deep learning pipeline for HCC immunotherapy response prediction using multi-phase contrast-enhanced CT and clinical features; 3D ResNet feature extractors and cross-modal fusion. <em>PyTorch, 3D CNN, Multi-modal Fusion, Attention</em></span>',
    },
    {
      time: "2026",
      title: "Multi-Phase Renal Tumor Enhancement Prediction",
      place: "Image-to-Image Translation",
      noteHtml:
        '<span class="muted">Conditional generation of contrast-enhanced CT across phases for renal tumor characterization; U-Net + attention for non-contrast to contrast-enhanced synthesis. <em>PyTorch, GAN, U-Net, Attention</em></span>',
    },
    {
      time: "2026",
      title: "Sepsis Classification with Large Language Models",
      place: "Clinical NLP · LLM",
      noteHtml:
        '<span class="muted">Fine-tuned LLMs for sepsis early detection/severity classification on EHR and clinical notes; RAG and prompt engineering for clinical decision support. <em>PyTorch, Transformers, LLM Fine-tuning, RAG, Prompt Engineering</em></span>',
    },
  ],

  // kept for compatibility; content moved to Projects
  research: [],

  skills: {
    languages: "Mandarin (native); English (fluent, CET-4)",
    programming: "Python, PyTorch, MATLAB, LaTeX",
    tools: "PyTorch, scikit-learn, NumPy, Pandas, OpenCV, Matplotlib, Git, Linux",
    research:
      "Deep Learning, Machine Learning, LLMs, LLM Fine-tuning, RAG, Prompt Engineering, Intelligent Agents, NLP, Multi-modal Learning, Data Preprocessing, Model Optimization",
  },

  news: [
    {
      time: "2026.08",
      text: '🌐 个人主页上线 · Homepage launched at <a href="https://JiangYunhang.github.io/" target="_blank" rel="noopener noreferrer">JiangYunhang.github.io</a>.',
    },
    {
      time: "2026.06",
      text: "🎉 Started Research Assistant internship at <strong>CUHK-Shenzhen · Shenzhen Research Institute of Big Data</strong>.",
    },
    {
      time: "2025.09",
      text: "📖 Began B.S. in Data Science and Big Data Technology at Anhui University of Finance and Economics.",
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
