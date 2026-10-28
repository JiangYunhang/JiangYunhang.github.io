/**
 *  姜运航个人主页数据
 */
window.SITE = {
  profile: {
    name: "Jiang Yunhang",
    nameCn: "姜运航",
    title: "Jiang Yunhang (姜运航) - Homepage",
    motto: ["Canvas Unfolding Heavenly Kaleidoscope."],
    role: "B.S. Student · Data Science & Big Data Technology",
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
    intro: '🌱 你好，我是<strong>姜运航（Jiang Yunhang）</strong>，<strong>数据科学与大数据技术</strong>专业本科生。<br />Hi, I\'m <strong>Jiang Yunhang</strong>, an undergraduate in <strong>Data Science and Big Data Technology</strong>',
    focus: "🔭 Research interest lies at the intersection of <strong>Deep Learning</strong> and <strong>Natural Language Processing</strong>, with emphasis on <strong>Large Language Models (LLMs)</strong>, <strong>Intelligent Agents</strong>, and <strong>AI for Software Engineering (AI4SE)</strong>.<br />研究方向位于深度学习与自然语言处理交叉领域，关注大语言模型、智能体与面向软件工程的 AI（AI4SE）。",
    services: "",
    communities: "",
    contact: '📫 Email: <a href="mailto:2069329624@qq.com">2069329624@qq.com</a> · GitHub: <a href="https://github.com/JiangYunhang" target="_blank" rel="noopener noreferrer">@JiangYunhang</a>',
    interests: ["Large Language Models", "Intelligent Agents", "AI4SE", "Medical AI", "RAG / Prompting", "Multi-modal Learning", "Deep Learning", "NLP"],
  },
  education: [{ time: "2025.09 – 2029.06", title: "B.S. in Data Science and Big Data Technology", place: "", noteHtml: '<span class="muted">Core: Machine Learning, Deep Learning, Data Structures & Algorithms, Linear Algebra, Probability & Statistics, Python, Database Systems</span>' }],
  experience: [
    { time: "2026.06 – Present", title: "Research Assistant Student", place: "The Chinese University of Hong Kong, Shenzhen · Shenzhen Research Institute of Big Data", noteHtml: '<span class="muted">Engaged in three medical AI projects: HCC immunotherapy response prediction, renal tumor multi-phase CT enhancement, and sepsis classification with LLMs.</span>' },
    { time: "2026.08 – Present", title: "Undergraduate Research Intern", place: "Shanghai Jiao Tong University, School of Computer Science · RISE-X", noteHtml: '<span class="muted">Conducting research on LLM/Agent-driven code generation for chip design (AI4EDA).</span>' },
  ],
  projects: [
    { time: "2026", title: "Hepatocellular Carcinoma Immunotherapy Response Prediction", place: "Medical Imaging · Multi-modal Learning", noteHtml: '<span class="muted">Multi-modal pipeline for HCC immunotherapy response using multi-phase contrast-enhanced CT and clinical features; 3D ResNet volumetric extractors with cross-modal fusion.</span>' },
    { time: "2026", title: "Multi-Phase Renal Tumor Enhancement Prediction", place: "Image-to-Image Translation", noteHtml: '<span class="muted">Conditional image generation across CT phases for renal tumor characterization; U-Net + attention for non-contrast → contrast-enhanced synthesis.</span>' },
    { time: "2026", title: "Sepsis Classification with Large Language Models", place: "Clinical NLP · LLM", noteHtml: '<span class="muted">Fine-tuned LLMs on EHR and clinical notes for sepsis early detection/severity classification; RAG and prompt engineering for clinical decision support.</span>' },
    { time: "2026", title: "Numerical Evidence for Weak Order Two of the MFL–LM Scheme", place: "Mean-Field Langevin · Scientific Computing", noteHtml: '<span class="muted">Building reproducible numerical evidence for long-time weak order two of the LM discretization for mean-field Langevin dynamics.</span>' },
    { time: "2026", title: "Code Generation for Chip Design (LLM / Agent Survey & Research)", place: "AI4EDA · RTL / Verification", noteHtml: '<span class="muted">Industry- and academia-oriented research on LLM/Agent-driven code generation for chip design under SJTU CS · RISE-X.</span>' },
    { time: "2026", title: "MoE Inference Load Balancing (AI Infra)", place: "Systems · Mixture-of-Experts", noteHtml: '<span class="muted">AI infrastructure work on MoE inference load balancing after the gate and before expert GEMM.</span>' },
  ],
  research: [],
  skills: {
    languages: "Mandarin (native); English (fluent, CET-4)",
    programming: "Python, PyTorch, MATLAB, LaTeX",
    tools: "PyTorch, scikit-learn, NumPy, Pandas, OpenCV, Matplotlib, Git, Linux",
    research: "Deep Learning, Machine Learning, LLMs, LLM Fine-tuning, RAG, Prompt Engineering, Intelligent Agents, NLP, Multi-modal Learning",
  },
  news: [
    { time: "2026.08", text: '🌐 个人主页上线 · Homepage launched at <a href="https://JiangYunhang.github.io/" target="_blank" rel="noopener noreferrer">JiangYunhang.github.io</a>.' },
    { time: "2026.08", text: "🔬 Joined research at <strong>SJTU School of Computer Science · RISE-X</strong> on LLM/Agent code generation for chip design." },
    { time: "2026.06", text: "🎉 Started Research Assistant internship at <strong>CUHK-Shenzhen · Shenzhen Research Institute of Big Data</strong>." },
    { time: "2025.09", text: "📖 Began B.S. in Data Science and Big Data Technology." },
  ],
  honors: [],
  funding: [],
  publications: { note: "*: Equal Contribution, †: Corresponding Author(s)", conferences: { featured: [], list: [] }, journals: { featured: [], list: [] } },
  patents: { invention: [], design: [] },
  software: { featured: [], list: [] },
  competitions: { national: [], regional: [] },
  music: { quote: "", quoteBy: "", tracks: [] },
};