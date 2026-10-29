/**
 * ============================================================================
 *  01-site-data.js — 个人主页数据文件
 * ============================================================================
 *
 *  ★★★ 你只需要修改这一个文件 ★★★
 *
 *  📌  如何修改：
 *  1. 直接在 GitHub 上点击本文件右上角 ✏️ 铅笔图标编辑
 *  2. 改好后点击 "Commit changes" 提交
 *  3. 等待 1-2 分钟，网页 https://jiangyunhang.github.io/ 自动更新
 *
 *  📖  完整字段说明请看：
 *      · 仓库根目录的 EDITING.md （快速上手）
 *      · docs/DATA-FIELDS.md       （每个字段的详细说明）
 *
 *  💡  小技巧：
 *     · 数组里每一项用 { } 包裹，项与项之间用英文逗号 , 分隔
 *     · 不要删除最后的 }; 括号
 *     · 想暂时隐藏某个板块？把对应的数组改成 [] 即可（板块与导航会自动隐藏）
 *     · 想调整板块顺序？调整 index.html 里 <section> 标签的先后顺序
 * ============================================================================
 */

window.SITE = {

  /* ==========================================================================
   *  1. 个人信息 —— 显示在左侧边栏
   * ======================================================================== */
  profile: {
    name:      "Jiang Yunhang",                    // 英文名
    nameCn:    "姜运航",                            // 中文名
    title:     "Jiang Yunhang (姜运航) - Homepage", // 浏览器标签标题
    motto:     ["Canvas Unfolding Heavenly Kaleidoscope."], // 座右铭，可写多行
    role:      "B.S. Student · Data Science & Big Data Technology", // 身份
    location:  "Shenzhen, Guangdong, China / 广东深圳",  // 所在地
    email:     "2069329624@qq.com",                // 邮箱
    avatar:    "assets/img/avatar.jpg",            // 头像路径
    githubUser:"JiangYunhang",                     // GitHub 用户名（用于同步仓库列表）

    // 社交链接：icon 用 Font Awesome 图标名，href 填链接
    // 常用图标：fa-brands fa-github / fa-brands fa-x-twitter / fa-brands fa-linkedin
    //           fa-solid fa-envelope / fa-solid fa-graduation-cap / fa-solid fa-globe
    socials: [
      { label: "GitHub", href: "https://github.com/JiangYunhang", icon: "fa-brands fa-github" },
      { label: "Email",  href: "mailto:2069329624@qq.com",      icon: "fa-solid fa-envelope" },
    ],
  },

  /* ==========================================================================
   *  2. 侧边导航 —— 留空数组 [] 则自动根据 index.html 的板块顺序生成
   * ======================================================================== */
  nav: [
    { id: "about",        label: "About Me" },
    { id: "education",    label: "Education" },
    { id: "experience",   label: "Experience" },
    { id: "projects",     label: "Projects" },
    { id: "skills",       label: "Skills" },
    { id: "research",     label: "Research" },
    { id: "repos",        label: "GitHub" },
    { id: "news",         label: "News" },
    { id: "honors",       label: "Honors" },
    { id: "funding",      label: "Funding" },
    { id: "publications", label: "Publications" },
    { id: "patents",      label: "Patents" },
    { id: "software",     label: "Software" },
    { id: "competitions", label: "Competitions" },
    { id: "music",        label: "Music" },
  ],

  /* ==========================================================================
   *  3. 关于我
   *  paragraphs: 段落列表，每段支持中英双语（对象形式），或直接写一段 HTML
   *  interests:  兴趣标签（会渲染成小圆角标签）
   * ======================================================================== */
  about: {
    paragraphs: [
      {
        zh: "🌱 你好，我是<strong>姜运航（Jiang Yunhang）</strong>，<strong>数据科学与大数据技术</strong>专业本科生。",
        en: "Hi, I'm <strong>Jiang Yunhang</strong>, an undergraduate major in <strong>Data Science and Big Data Technology</strong>.",
      },
      {
        zh: "🔭 研究兴趣位于<strong>深度学习</strong>与<strong>自然语言处理</strong>的交叉领域，关注<strong>大语言模型（LLM）</strong>、<strong>智能体（Agent）</strong>以及<strong>面向软件工程的 AI（AI4SE）</strong>，并延伸至医学影像与临床大模型方向。",
        en: "🔭 My research lies at the intersection of <strong>Deep Learning</strong> and <strong>Natural Language Processing</strong>, with emphasis on <strong>Large Language Models</strong>, <strong>Intelligent Agents</strong> and <strong>AI for Software Engineering</strong>, extending to medical imaging and clinical LLMs.",
      },
      {
        zh: "🧭 正在进行的研究包括：多模态医学影像分析（肝癌免疫治疗响应预测、肾肿瘤多期增强重建）、基于大语言模型的脓毒症分级，以及面向芯片设计的智能体代码生成（AI4EDA）。",
        en: "🧭 Ongoing work includes multi-modal medical imaging (HCC immunotherapy response, renal tumor multi-phase enhancement), LLM-based sepsis classification, and agent-driven code generation for chip design (AI4EDA).",
      },
      {
        zh: "📫 欢迎交流与合作：<a href=\"mailto:2069329624@qq.com\">2069329624@qq.com</a> · GitHub：<a href=\"https://github.com/JiangYunhang\" target=\"_blank\" rel=\"noopener noreferrer\">@JiangYunhang</a>",
        en: "📫 Feel free to reach out: <a href=\"mailto:2069329624@qq.com\">2069329624@qq.com</a> · GitHub: <a href=\"https://github.com/JiangYunhang\" target=\"_blank\" rel=\"noopener noreferrer\">@JiangYunhang</a>",
      },
    ],
    interests: [
      "Large Language Models", "Intelligent Agents", "AI4SE",
      "Medical AI", "RAG / Prompting", "Multi-modal Learning",
      "Deep Learning", "NLP", "AI Infrastructure",
    ],
  },

  /* ==========================================================================
   *  4. 教育经历
   *  time:   时间区间，如 "2025.09 – 2029.06"
   *  title:  主标题（学位 / 专业）
   *  org:    院校或机构（可省略）
   *  tags:   小标签列表（可省略）
   *  desc:   补充说明（可省略，支持 HTML）
   * ======================================================================== */
  education: [
    {
      time:  "2025.09 – 2029.06",
      title: "B.S. in Data Science and Big Data Technology",
      org:   "数据科学与大数据技术 · 本科",
      tags:  ["Machine Learning", "Deep Learning", "Algorithms", "Statistics", "Database Systems"],
      desc:  "核心课程：机器学习、深度学习、数据结构与算法、线性代数、概率论与数理统计、Python 程序设计、数据库系统。",
    },
  ],

  /* ==========================================================================
   *  5. 科研 / 实习经历
   * ======================================================================== */
  experience: [
    {
      time:  "2026.06 – Present",
      title: "Research Assistant Student",
      org:   "香港中文大学（深圳）· 深圳大数据研究院",
      tags:  ["Medical AI", "Multi-modal Learning", "LLM"],
      desc:  "参与三个医学 AI 项目：肝癌免疫治疗响应预测、肾肿瘤多期 CT 增强重建、基于大语言模型的脓毒症分级。",
    },
    {
      time:  "2026.08 – Present",
      title: "Undergraduate Research Intern",
      org:   "上海交通大学 计算机学院 · RISE-X",
      tags:  ["AI4EDA", "LLM", "Agent"],
      desc:  "开展面向芯片设计的 LLM / 智能体代码生成研究，覆盖行业与学术前沿调研、RTL 生成与验证。",
    },
  ],

  /* ==========================================================================
   *  6. 项目 —— 会渲染成卡片
   *  字段同 experience，额外支持 links: [{label, href}]
   * ======================================================================== */
  projects: [
    {
      time:  "2026",
      title: "Hepatocellular Carcinoma Immunotherapy Response Prediction",
      org:   "Medical Imaging · Multi-modal Learning",
      tags:  ["PyTorch", "3D ResNet", "Multi-modal Fusion"],
      desc:  "基于多期增强 CT 与临床特征的多模态流水线，用于肝癌免疫治疗响应预测；采用 3D ResNet 体积特征提取器并进行跨模态融合。",
    },
    {
      time:  "2026",
      title: "Multi-Phase Renal Tumor Enhancement Prediction",
      org:   "Image-to-Image Translation",
      tags:  ["U-Net", "Attention", "CT Synthesis"],
      desc:  "跨 CT 期相的条件图像生成，用于肾肿瘤性质判别；实现平扫 → 增强期合成的 U-Net + 注意力模型。",
    },
    {
      time:  "2026",
      title: "Sepsis Classification with Large Language Models",
      org:   "Clinical NLP · LLM",
      tags:  ["Fine-tuning", "RAG", "Prompt Engineering"],
      desc:  "在电子病历与临床文本上微调大语言模型，实现脓毒症早筛与严重度分级，并通过 RAG 与提示工程支撑临床决策。",
    },
    {
      time:  "2026",
      title: "Numerical Evidence for Weak Order Two of the MFL–LM Scheme",
      org:   "Mean-Field Langevin · Scientific Computing",
      tags:  ["Numerical Analysis", "Reproducibility"],
      desc:  "为平均场 Langevin 动力学 LM 离散格式的长时间二阶弱收敛构建可复现的数值证据。",
    },
    {
      time:  "2026",
      title: "Code Generation for Chip Design",
      org:   "AI4EDA · RTL / Verification",
      tags:  ["LLM", "Agent", "RTL"],
      desc:  "面向芯片设计的 LLM / 智能体代码生成研究，覆盖行业与学术前沿调研与原型验证。",
    },
    {
      time:  "2026",
      title: "MoE Inference Load Balancing",
      org:   "Systems · Mixture-of-Experts",
      tags:  ["AI Infra", "MoE", "Kernel"],
      desc:  "面向 MoE 推理的负载均衡研究：定位 gate 之后、expert GEMM 之前的调度瓶颈并优化算子路径。",
    },
  ],

  /* ==========================================================================
   *  7. 研究方向（独立板块，留空 [] 则自动隐藏）
   * ======================================================================== */
  research: [],

  /* ==========================================================================
   *  8. 技能 —— 会渲染成分组的标签云
   *  想新增一组？照抄一行即可，例如 { group: "Tools", items: "..." }
   * ======================================================================== */
  skills: [
    { group: "Languages",   items: "Mandarin (native), English (fluent, CET-4)" },
    { group: "Programming", items: "Python, PyTorch, MATLAB, LaTeX" },
    { group: "Frameworks", items: "PyTorch, scikit-learn, NumPy, Pandas, OpenCV, Matplotlib" },
    { group: "Tooling",     items: "Git, Linux, Docker, WSL, LaTeX, VS Code" },
    { group: "Research",    items: "Deep Learning, LLMs, Fine-tuning, RAG, Prompt Engineering, Intelligent Agents, NLP, Multi-modal Learning" },
  ],

  /* ==========================================================================
   *  9. 新闻动态 —— 最新的一条写在最前面
   * ======================================================================== */
  news: [
    {
      date: "2026.08",
      text: "🌐 个人主页上线 · Homepage launched at <a href=\"https://JiangYunhang.github.io/\" target=\"_blank\" rel=\"noopener noreferrer\">JiangYunhang.github.io</a>",
    },
    {
      date: "2026.08",
      text: "🔬 参与 <strong>上海交通大学计算机学院 RISE-X</strong> 课题：LLM / 智能体驱动的芯片设计代码生成。",
    },
    {
      date: "2026.06",
      text: "🎉 开始在 <strong>香港中文大学（深圳）· 深圳大数据研究院</strong> 担任研究助理。",
    },
    {
      date: "2025.09",
      text: "📖 开始 <strong>数据科学与大数据技术</strong> 本科阶段学习。",
    },
  ],

  /* ==========================================================================
   * 10. 荣誉奖项 —— 留空 [] 则自动隐藏
   * ======================================================================== */
  honors: [],

  /* ==========================================================================
   * 11. 资助项目 —— 留空 [] 则自动隐藏
   * ======================================================================== */
  funding: [],

  /* ==========================================================================
   * 12. 论文
   *  featured: 精选论文（带会议/期刊徽章的大卡片）
   *            { badge:"CVPR", title, authors, venue, links:[{label,href}] }
   *  list:      其他论文（紧凑列表）{ tag:"2026", text, links:[] }
   * ======================================================================== */
  publications: {
    note: "*: Equal Contribution, †: Corresponding Author(s)",
    conferences: { featured: [], list: [] },
    journals:    { featured: [], list: [] },
  },

  /* ==========================================================================
   * 13. 专利 —— 留空 [] 则自动隐藏
   * ======================================================================== */
  patents: { invention: [], design: [] },

  /* ==========================================================================
   * 14. 软件与系统 —— 留空 [] 则自动隐藏
   * ======================================================================== */
  software: { featured: [], list: [] },

  /* ==========================================================================
   * 15. 竞赛获奖 —— 留空 [] 则自动隐藏
   * ======================================================================== */
  competitions: { national: [], regional: [] },

  /* ==========================================================================
   * 16. 喜欢的音乐 —— 留空 [] 则自动隐藏
   *  tracks: { title, meta, cover, src }，src 填 mp3 链接
   * ======================================================================== */
  music: { quote: "", quoteBy: "", tracks: [] },

};
