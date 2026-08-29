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
    motto: ["Canvas Unfolding Heavenly Kaleidoscope."],
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
      '🌱 你好，我是<strong>姜运航（Jiang Yunhang）</strong>，安徽财经大学<strong>数据科学与大数据技术</strong>专业本科生（蚌埠）。<br />Hi, I’m <strong>Jiang Yunhang</strong>, an undergraduate in <strong>Data Science and Big Data Technology</strong> at <strong>Anhui University of Finance and Economics</strong>, Bengbu, China.',
    focus:
      "🔭 Research interest lies at the intersection of <strong>Deep Learning</strong> and <strong>Natural Language Processing</strong>, with emphasis on <strong>Large Language Models (LLMs)</strong>, <strong>Intelligent Agents</strong>, and <strong>AI for Software Engineering (AI4SE)</strong> — especially how LLMs can be orchestrated into collaborative multi-agent systems that understand, generate, and debug code.<br />Current medical AI work builds foundations in LLM fine-tuning, retrieval-augmented generation (RAG), prompt engineering, and multi-modal learning, which I aim to extend toward reliable, scalable agents for software engineering.<br />研究方向位于深度学习与自然语言处理交叉领域，关注大语言模型、智能体与面向软件工程的 AI（AI4SE），以及多代理协作在代码理解 / 生成 / 调试中的潜力；医学 AI 实践覆盖 LLM 微调、RAG、提示工程与多模态学习。",
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
        '<span class="muted">Core: Machine Learning, Deep Learning, Data Structures &amp; Algorithms, Linear Algebra, Probability &amp; Statistics, Python, Database Systems</span>',
    },
  ],

  experience: [
    {
      time: "2026.06 – Present",
      title: "Research Assistant Student",
      place:
        "The Chinese University of Hong Kong, Shenzhen · Shenzhen Research Institute of Big Data (香港中文大学（深圳）· 深圳大数据研究院)",
      noteHtml:
        '<span class="muted">Engaged in three medical AI projects: HCC immunotherapy response prediction, renal tumor multi-phase CT enhancement, and sepsis classification with LLMs. Built PyTorch models for medical image analysis, multi-modal fusion, and clinical NLP.<br />参与三项医学人工智能研究：肝癌免疫治疗反应预测、肾脏肿瘤多期 CT 增强预测、基于大语言模型的脓毒症分类；使用 PyTorch 开展医学影像分析、多模态融合与临床 NLP。</span>',
    },
    {
      time: "2026.08 – Present",
      title: "Undergraduate Research Intern",
      place:
        "Shanghai Jiao Tong University, School of Computer Science · RISE-X (上海交通大学计算机学院 · RISE-X)",
      noteHtml:
        '<span class="muted">Conducting research on <strong>LLM/Agent-driven code generation for chip design</strong> (AI4EDA): industry and academic surveys on spec→RTL/HDL, verification (assertions/UVM/testbench), and EDA scripting assistants; analyzing Synopsys/Cadence ecosystems, Benchmarks, and multi-agent / EDA-in-the-loop research trends. Primary project mirrors the homepage Projects entry <em>Code Generation for Chip Design</em>.<br />在 RISE-X 开展<strong>面向芯片设计的代码生成</strong>研究：梳理规格→RTL/HDL、验证代码与 EDA 脚本助手的产业与学术进展，对照 Benchmark 与 Multi-Agent / EDA 闭环等方向；主项目与 Projects 中的「Code Generation for Chip Design」条目对应。<em>LLM, Agents, RTL/HDL, Verification, EDA</em></span>',
    },
  ],

  projects: [
    {
      time: "2026",
      title: "Hepatocellular Carcinoma Immunotherapy Response Prediction",
      place: "Medical Imaging · Multi-modal Learning",
      noteHtml:
        '<span class="muted">Multi-modal pipeline for HCC immunotherapy response using multi-phase contrast-enhanced CT and clinical features; 3D ResNet volumetric extractors with cross-modal fusion of imaging and tabular data.<br />多模态深度学习预测肝癌免疫治疗反应；3D ResNet 提取 CT 体数据特征，并融合影像与临床表格信息。<em>PyTorch, 3D CNN, Multi-modal Fusion, Attention</em></span>',
    },
    {
      time: "2026",
      title: "Multi-Phase Renal Tumor Enhancement Prediction",
      place: "Image-to-Image Translation",
      noteHtml:
        '<span class="muted">Conditional image generation across CT phases for renal tumor characterization; U-Net + attention for non-contrast → contrast-enhanced synthesis.<br />条件生成模型预测肾脏肿瘤不同期相增强 CT；U-Net 与注意力机制实现跨期相图像翻译。<em>PyTorch, GAN, U-Net, Attention</em></span>',
    },
    {
      time: "2026",
      title: "Sepsis Classification with Large Language Models",
      place: "Clinical NLP · LLM",
      noteHtml:
        '<span class="muted">Fine-tuned LLMs on EHR and clinical notes for sepsis early detection/severity classification; RAG and prompt engineering for clinical decision support, informing grounded LLM outputs with external knowledge.<br />基于 EHR 与临床文本微调 LLM 做脓毒症早筛与严重度分类；实践 RAG 与提示工程以增强临床决策支持。<em>PyTorch, Transformers, LLM Fine-tuning, RAG, Prompt Engineering</em></span>',
    },
    {
      time: "2026",
      title: "Numerical Evidence for Weak Order Two of the MFL–LM Scheme",
      place: "Mean-Field Langevin · Scientific Computing",
      noteHtml:
        '<span class="muted">Building reproducible numerical evidence for long-time weak order two of the LM / non-Markovian Euler discretization for mean-field Langevin dynamics; Gate-based verification pipeline (CPU FP64 coupling, Ascend multi-card parity) with careful claim boundaries between theory and Monte Carlo evidence.<br />围绕 mean-field Langevin 的 LM 离散化，设计可复现的长期弱二阶数值证据与分阶段验证流水线（CPU FP64 耦合、昇腾多卡一致性等），严格区分理论结果与数值证据边界。<em>Python, NumPy/PyTorch, Monte Carlo, Multi-index / Coupling, Ascend</em></span>',
    },
    {
      time: "2026",
      title: "Code Generation for Chip Design (LLM / Agent Survey & Research)",
      place: "AI4EDA · RTL / Verification · SJTU CS RISE-X",
      noteHtml:
        '<span class="muted">Industry- and academia-oriented research under <strong>SJTU CS · RISE-X</strong> on LLM/Agent-driven code generation for chip design: spec→RTL/HDL, assertions/UVM/testbench, and EDA scripting assistants; mapped Synopsys/Cadence ecosystems with capability vs. marketing evidence and academic–industry gaps (Benchmarks, multi-agent / EDA-in-the-loop trends).<br />依托<strong>上海交通大学计算机学院 RISE-X</strong> 的面向芯片设计代码生成调研与研究：聚焦规格→RTL/HDL、验证代码与 EDA 脚本助手，梳理产业能力与营销口径，并对照学术 Benchmark / Agent 闭环差距。<em>LLM, Agents, RTL/HDL, Verification, EDA</em></span>',
    },
    {
      time: "2026",
      title: "MoE Inference Load Balancing (AI Infra)",
      place: "Systems · Mixture-of-Experts",
      noteHtml:
        '<span class="muted">AI infrastructure work on MoE inference load balancing after the gate and before expert GEMM: selecting physical expert replicas under Expert Parallelism to reduce straggler EP ranks, jointly considering placement/replication and end-to-end latency / goodput trade-offs.<br />面向 MoE 推理的负载均衡：在 Gate 之后、Expert 计算之前选择物理专家副本，缓解 EP Rank 木桶效应，并结合副本放置与端到端时延 / Goodput 权衡评估上线价值。<em>MoE, Expert Parallelism, Load Balancing, Inference Systems</em></span>',
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
      time: "2026.08",
      text: "🔬 Joined research at <strong>SJTU School of Computer Science · RISE-X</strong> on LLM/Agent code generation for chip design.",
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
