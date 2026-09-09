import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
<style>{`
  @keyframes askJawamPulse {
    0% { transform: scale(1); opacity: 0.55; }
    70% { transform: scale(1.6); opacity: 0; }
    100% { transform: scale(1.6); opacity: 0; }
  }
  .ask-jawam-pulse {
    animation: askJawamPulse 2.2s ease-out infinite;
  }

  @keyframes askJawamSparkleSpin {
    0%, 100% { transform: rotate(0deg) scale(1); }
    50% { transform: rotate(15deg) scale(1.1); }
  }
  .ask-jawam-sparkle {
    animation: askJawamSparkleSpin 2.4s ease-in-out infinite;
  }

  .ask-jawam-btn:hover .ask-jawam-sparkle {
    animation-duration: 0.9s;
  }

  @media (prefers-reduced-motion: reduce) {
    .ask-jawam-pulse,
    .ask-jawam-sparkle {
      animation: none;
    }
  }
`}</style>
// Comprehensive knowledge base and intelligent response generator for Jawam Infotech
const generateJawamAIResponse = (query) => {
  const q = query.toLowerCase().trim()

  // Accurate word boundary & phrase helper
  const hasWord = (...words) => words.some((w) => new RegExp(`\\b${w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i').test(q))
  const hasPhrase = (...phrases) => phrases.some((p) => q.includes(p.toLowerCase()))

  // 1. Greetings & Pleasantries
  if (
    q === 'hi' ||
    q === 'hello' ||
    q === 'hey' ||
    q === 'hola' ||
    hasPhrase('good morning', 'good afternoon', 'good evening', 'how are you', 'whats up', "what's up")
  ) {
    return {
      text: `Hello! 👋 Welcome to **Jawam Infotech**.\n\nI am your **AI Assistant**. I can help you learn all about our **services**, **AI solutions**, **staff augmentation**, **case studies**, **tech stack**, or connect you with our team.\n\nHow can I help you today?`,
      suggestions: ['💼 Our Services', '🤖 AI Solutions', '👥 Hire Developers', '📅 Book Consultation', '📍 Contact Details'],
    }
  }

  // 2. Specific Job Role: Python & Backend Developer
  if (
    hasWord('python', 'django', 'fastapi', 'flask') ||
    hasPhrase('python developer', 'python role', 'python position', 'backend developer', 'backend role', 'node developer')
  ) {
    return {
      text: `⚙️ **Python & Backend Developer Position**:\n\n• **Location / Mode**: Full-time Remote / Onsite • Indore, Madhya Pradesh, India\n• **About the Role**: Design and develop robust, high-throughput backend services, data processing pipelines, and scalable APIs.\n\n**Key Responsibilities**:\n• Build performant backend microservices with Python (Django, FastAPI) or Node.js.\n• Design optimized SQL (PostgreSQL) and NoSQL (MongoDB, Redis) database schemas.\n• Integrate third-party APIs, AI endpoints, and ensure airtight security.\n\n**Requirements**:\n• Strong backend engineering background with Python, Django/FastAPI, or Express.js.\n• Solid understanding of relational databases, caching, and CI/CD pipelines.\n\n👉 **For full job details, compensation, and to apply directly, please visit our [Open Positions Page](/open-roles)!**\n*(Looking to hire dedicated Python developers for your project instead? Explore our [Hire Developers](/hire-developers) page!)*`,
      suggestions: ['📋 Open Positions Page', '🌟 Why Join Us', '👥 Hire Developers', '✉️ Contact HR'],
    }
  }

  // 3. Specific Job Role: Full Stack & React Developer
  if (
    hasPhrase('full stack', 'fullstack', 'react developer', 'frontend developer', 'react role', 'full stack developer', 'senior react', 'next.js developer', 'vue developer') ||
    hasWord('react', 'nextjs', 'fullstack')
  ) {
    return {
      text: `💻 **Senior Full-Stack & React Developer Position**:\n\n• **Location / Mode**: Full-time Remote • Indore, Madhya Pradesh, India\n• **About the Role**: Lead frontend & full-stack architecture, building performant, modern web applications on our client product suites.\n\n**Key Responsibilities**:\n• Architect clean, maintainable React and Next.js applications.\n• Collaborate with backend (Node.js/Python) and design teams to ship end-to-end features.\n• Review code, optimize web performance, and mentor junior developers.\n\n**Requirements**:\n• 3-4+ years of hands-on experience with React.js, TypeScript, and modern state management.\n• Strong understanding of REST/GraphQL APIs, hooks, and automated testing frameworks.\n\n👉 **For full job details, compensation, and to apply directly, please visit our [Open Positions Page](/open-roles)!**\n*(Looking to hire full-stack developers for your project? Check our [Hire Developers](/hire-developers) page!)*`,
      suggestions: ['📋 Open Positions Page', '🌟 Why Join Us', '👥 Hire Developers', '✉️ Contact HR'],
    }
  }

  // 4. Specific Job Role: AI / Machine Learning Engineer
  if (
    hasPhrase('ai engineer', 'machine learning engineer', 'ml engineer', 'ai developer', 'ml developer', 'ai role', 'ml role', 'ai position', 'ml position', 'data scientist')
  ) {
    return {
      text: `🤖 **AI & Machine Learning Engineer Position**:\n\n• **Location / Mode**: Full-time Remote / Onsite • Indore, Madhya Pradesh, India\n• **About the Role**: Build next-generation AI workflows, custom LLM integrations, computer vision pipelines, and predictive analytics models.\n\n**Key Responsibilities**:\n• Fine-tune and deploy LLMs (OpenAI, Anthropic, Hugging Face, LangChain, Llama).\n• Develop scalable AI agents, automated workflow tools, and vector search systems.\n• Work closely with product teams to integrate AI capabilities into production applications.\n\n**Requirements**:\n• Strong proficiency in Python, PyTorch/TensorFlow, OpenCV, and LLM orchestration frameworks.\n• Solid understanding of data preprocessing, vector databases (Pinecone, Chroma), and model evaluation.\n\n👉 **For full job details, compensation, and to apply directly, please visit our [Open Positions Page](/open-roles)!**`,
      suggestions: ['📋 Open Positions Page', '🤖 AI Solutions', '🌟 Why Join Us', '✉️ Contact HR'],
    }
  }

  // 5. Specific Job Role: UI/UX Designer
  if (
    hasPhrase('ui/ux', 'ui ux', 'ui designer', 'ux designer', 'product designer', 'designer role', 'design position', 'figma designer') ||
    hasWord('figma', 'wireframe', 'prototyping')
  ) {
    return {
      text: `🎨 **UI/UX Product Designer Position**:\n\n• **Location / Mode**: Full-time Onsite • Indore, Madhya Pradesh, India\n• **About the Role**: Transform complex user flows into clean, intuitive, and modern web and mobile product interfaces.\n\n**Key Responsibilities**:\n• Design wireframes, interactive user prototypes, and high-fidelity mockups in Figma.\n• Create and scale unified design systems, component libraries, and iconography.\n• Collaborate closely with frontend developers to ensure pixel-perfect implementation.\n\n**Requirements**:\n• Proven portfolio demonstrating strong product design and UX case studies.\n• Mastery of Figma, auto-layout, design tokens, and user research methodologies.\n\n👉 **For full job details, compensation, and to apply directly, please visit our [Open Positions Page](/open-roles)!**`,
      suggestions: ['📋 Open Positions Page', '🌟 Why Join Us', '📁 View Portfolio', '✉️ Contact HR'],
    }
  }

  // 6. Specific Job Role: DevOps Engineer
  if (
    hasPhrase('devops engineer', 'devops role', 'devops position', 'cloud engineer', 'cloud architect')
  ) {
    return {
      text: `☁️ **DevOps & Cloud Engineer Position**:\n\n• **Location / Mode**: Full-time Remote • Indore, Madhya Pradesh, India\n• **About the Role**: Build and manage reliable cloud infrastructure, automated CI/CD pipelines, and zero-downtime deployments.\n\n**Key Responsibilities**:\n• Design and maintain CI/CD pipelines using GitHub Actions, GitLab, and Docker.\n• Manage multi-cloud environments (AWS, GCP, Azure) and Kubernetes clusters.\n• Automate infrastructure with Terraform and monitor system uptime and security.\n\n**Requirements**:\n• Experience with AWS/Azure/GCP, Docker, Kubernetes, and Linux administration.\n• Familiarity with Infrastructure as Code (IaC) and monitoring tools (Prometheus, Datadog).\n\n👉 **For full job details, compensation, and to apply directly, please visit our [Open Positions Page](/open-roles)!**`,
      suggestions: ['📋 Open Positions Page', '🌟 Why Join Us', '💼 DevOps Services', '✉️ Contact HR'],
    }
  }

  // 7. Specific Job Role: Business Development Executive (BDE) / Sales
  if (
    hasPhrase('bde', 'business development executive', 'sales role', 'sales executive', 'bde position', 'sales position', 'business development') ||
    hasWord('bde')
  ) {
    return {
      text: `💼 **Business Development Executive (BDE) Position**:\n\n• **Location / Mode**: Full-time Onsite • Indore, Madhya Pradesh, India\n• **About the Role**: Identify new business opportunities, connect with international clients, pitch technical solutions, and drive company growth.\n\n**Key Responsibilities**:\n• Generate qualified leads and schedule discovery meetings with global prospective clients.\n• Create proposals, pitch decks, and presentations in coordination with tech teams.\n• Maintain and update CRM platforms with accurate pipeline and client info.\n\n**Requirements**:\n• Degree in BBA, MBA, BCA, MCA, B.Tech or relevant field with strong communication skills.\n• Quick learner with enthusiasm for digital technologies and client consulting.\n\n👉 **For full job details, compensation, and to apply directly, please visit our [Open Positions Page](/open-roles)!**`,
      suggestions: ['📋 Open Positions Page', '🌟 Why Join Us', '🏢 About Company', '✉️ Contact HR'],
    }
  }

  // 8. Specific Job Role: Digital Marketing / HR Executive
  if (
    hasPhrase('digital marketing', 'marketing executive', 'marketing role', 'hr executive', 'human resources', 'hr role', 'hr position') ||
    hasWord('recruiter', 'recruitment')
  ) {
    return {
      text: `🌟 **Marketing & HR Executive Positions**:\n\n• **Digital Marketing Executive**: Drive SEO, SEM, social media campaigns, and brand visibility for our digital products and client solutions.\n• **HR Executive**: Lead talent acquisition, employee onboarding, team culture initiatives, and HR operations.\n• **Location**: Full-time Onsite • Indore, Madhya Pradesh, India.\n\n👉 **For full job details, qualifications, and to apply directly, please visit our [Open Positions Page](/open-roles)!**`,
      suggestions: ['📋 Open Positions Page', '🌟 Why Join Us', '🏢 About Company', '✉️ Contact HR'],
    }
  }

  // 9. General Careers / Jobs / Open Roles / Hiring / Apply / Open Positions
  if (
    hasPhrase('open position', 'open positions', 'is there any position', 'open roles', 'why join us', 'why join') ||
    hasWord('position', 'positions', 'vacancy', 'vacancies', 'job', 'jobs', 'opening', 'openings', 'hiring', 'career', 'careers', 'apply', 'interview', 'internship', 'resume', 'cv')
  ) {
    return {
      text: `🚀 **Current Open Positions at Jawam Infotech**:\n\nYes! We are actively expanding our engineering and product teams. Here are some of the key roles we are currently hiring for:\n\n• **Senior Full-Stack & React Developers** (React.js, Node.js, Next.js)\n• **Python & Backend Developers** (Django, FastAPI, PostgreSQL)\n• **AI & Machine Learning Engineers** (LLMs, Computer Vision, PyTorch)\n• **DevOps & Cloud Engineers** (AWS, GCP, Kubernetes, CI/CD)\n• **UI/UX Product Designers** (Figma, Design Systems, Prototyping)\n• **Business Development Executives (BDE)** (International sales & lead gen)\n\n**Perks & Benefits**:\n• Global impact projects and modern tech stack\n• Competitive salary packages & rapid growth opportunities\n• Collaborative, innovation-driven culture with flexible work\n\n👉 **For full details on any specific role and to apply directly, please visit our [Open Positions Page](/open-roles)** or **[Why Join Us](/why-join)**! You can also email your CV to **[contact@jawaminfotech.com](mailto:contact@jawaminfotech.com)**.`,
      suggestions: ['📋 Open Positions Page', '🌟 Why Join Us', '🏢 About Company', '✉️ Contact HR'],
    }
  }

  // 10. Contact Info / Location / Address / Working Hours / Email / Phone
  if (
    hasPhrase('contact info', 'contact details', 'contact us', 'phone number', 'mobile number', 'email address', 'office address', 'where are you', 'working hours', 'office timing', 'get in touch') ||
    hasWord('contact', 'address', 'location', 'office', 'phone', 'email', 'indore', 'reach', 'call')
  ) {
    return {
      text: `📍 **Contact Information for Jawam Infotech**:\n\n• 📞 **Phone / WhatsApp**: [+91 99814 67849](tel:+919981467849)\n• ✉️ **Email**: [contact@jawaminfotech.com](mailto:contact@jawaminfotech.com)\n• 🏢 **Office Address**: Plot No. 196, PU-4, 3rd Floor, Behind Malhar Mega Mall, Scheme No. 54, Vijay Nagar, Indore - 452010, Madhya Pradesh, India\n• ⏰ **Working Hours**: Monday – Saturday, 10:00 AM – 07:00 PM IST\n\nYou can also click the green **WhatsApp button** on the bottom-left to chat with our team immediately!`,
      suggestions: ['💬 Chat on WhatsApp', '📅 Book Consultation', '💼 Our Services'],
    }
  }

  // 11. Schedule Consultation / Meeting / Book a call
  if (
    hasPhrase('book consultation', 'schedule consultation', 'schedule a call', 'book a call', 'book meeting', 'talk to sales', 'talk to team', 'discuss project', 'consultation') ||
    hasWord('schedule', 'meeting', 'appointment')
  ) {
    return {
      text: `📅 **Book a Free 30-Minute Consultation**:\n\nOur technology experts and solution architects are ready to discuss your project requirements, tech stack recommendations, and provide an initial estimation.\n\n• You can visit our **[Schedule Consultation](/schedule-consultation)** page or simply tell us your project details here!\n• Or call/WhatsApp us directly at **+91 99814 67849**.`,
      suggestions: ['💬 Chat on WhatsApp', '💼 Our Services', '📍 Contact Details'],
    }
  }

  // 12. Staff Augmentation / Hire Developers / Dedicated Teams
  if (
    hasPhrase('hire developers', 'hire developer', 'hire dedicated', 'hire engineer', 'hire team', 'staff augmentation', 'hire programmers', 'hire talent', 'dedicated team', 'contract developer') ||
    hasWord('hire', 'staffing', 'augmentation')
  ) {
    return {
      text: `👥 **IT Staff Augmentation & Dedicated Developers**:\n\nScale your tech team in as fast as **48 hours** with Jawam's pre-vetted engineers:\n\n• **Skills Available**: Full-Stack (React, Node, Python), Mobile (React Native, Flutter, iOS, Android), AI/ML Engineers, Blockchain, DevOps, QA, and UI/UX Designers.\n• **Flexible Engagement**: Full-time, part-time, or project-based dedicated developers.\n• **Zero Risk**: Rigorously vetted talent, time-zone aligned, seamless communication, and rapid onboarding.\n\nReady to scale your dream team?`,
      suggestions: ['👥 Hire Developers', '📋 Open Positions Page', '📅 Book Consultation', '💬 WhatsApp Us'],
    }
  }

  // 13. All Services / Service List
  if (
    hasPhrase('our services', 'service list', 'what do you offer', 'what services', 'all services', 'core services', 'capabilities') ||
    hasWord('services', 'service', 'offerings')
  ) {
    return {
      text: `🛠️ **Core Services Offered by Jawam Infotech**:\n\n1. **AI & Machine Learning**: Generative AI, LLMs, Computer Vision, Predictive Analytics.\n2. **Custom Web & Mobile Development**: React, Next.js, Node.js, Flutter, iOS & Android.\n3. **IT Staff Augmentation**: Hire dedicated top 1% developers on flexible models.\n4. **Cloud & DevOps**: AWS/Azure/GCP, Kubernetes, CI/CD, Infrastructure as Code.\n5. **Data Engineering**: Modern data stack, ETL pipelines, Snowflake, and Power BI.\n6. **Blockchain & Web3**: Smart contracts, dApps, DeFi, and token systems.\n7. **UI/UX & Product Design**: Wireframes, prototypes, user journeys, and brand identity.\n\nWhich service are you interested in discussing?`,
      suggestions: ['🤖 AI Solutions', '👥 Hire Developers', '📱 Web & Mobile', '⛓️ Blockchain', '📅 Book Consultation'],
    }
  }

  // 14. AI & Machine Learning Solutions (General Service)
  if (
    hasPhrase('ai solutions', 'artificial intelligence', 'machine learning', 'generative ai', 'computer vision', 'deep learning', 'chatgpt', 'natural language processing', 'predictive analytics') ||
    hasWord('ai', 'ml', 'llm', 'nlp')
  ) {
    return {
      text: `🤖 **Jawam AI Solutions & Machine Learning Services**:\n\nWe empower businesses with cutting-edge AI technologies:\n\n1. **Generative AI & LLM Integration**: Custom AI agents, ChatGPT/Claude integrations, and enterprise semantic search.\n2. **Computer Vision**: Object detection, facial recognition, video analytics, and automated visual inspection.\n3. **Predictive Analytics**: Data modeling, demand forecasting, customer churn prediction, and business intelligence.\n4. **Natural Language Processing (NLP)**: Sentiment analysis, automated translation, document parsing, and voice AI.\n5. **AI Workflow Automation**: Streamlining business operations and customer support.\n\nWould you like to build a custom AI solution for your business?`,
      suggestions: ['📅 Book Consultation', '👥 Hire Developers', '💼 Our Services', '📞 Contact Details'],
    }
  }

  // 15. Web & Mobile App Development
  if (
    hasPhrase('web development', 'mobile app', 'mobile development', 'app development', 'android app', 'ios app', 'flutter app', 'react native app', 'website development') ||
    hasWord('website', 'app', 'android', 'ios', 'frontend', 'mobile')
  ) {
    return {
      text: `📱 **Web & Mobile Application Development**:\n\nWe craft high-performance, secure, and intuitive digital applications:\n\n• **Web Development**: Modern, high-speed SPAs, PWAs, and enterprise SaaS platforms using **React, Next.js, Vue, Node.js, Python, and Go**.\n• **Mobile App Development**: Native iOS/Android and cross-platform apps using **React Native & Flutter** with smooth UI and offline capabilities.\n• **Cloud-Native Backend**: Microservices architecture, RESTful/GraphQL APIs, scalable databases, and serverless backends.\n\nHave an app idea you want to bring to life?`,
      suggestions: ['📅 Book Consultation', '📁 View Portfolio', '🚀 Tech Stack', '📍 Contact Details'],
    }
  }

  // 16. Blockchain & Web3
  if (
    hasPhrase('blockchain engineering', 'web3 development', 'smart contract', 'smart contracts', 'crypto wallet') ||
    hasWord('blockchain', 'web3', 'crypto', 'dapp', 'defi', 'nft', 'ethereum', 'solana', 'polygon')
  ) {
    return {
      text: `⛓️ **Blockchain & Web3 Engineering**:\n\nWe build robust, decentralized, and tamper-proof blockchain solutions:\n\n• **Smart Contract Development & Auditing**: Secure contracts on Ethereum, Solana, Polygon, BSC, and Hyperledger.\n• **Decentralized Apps (dApps)**: Full-stack Web3 apps with wallet integration (Metamask, Phantom).\n• **DeFi & Tokenomics**: Yield protocols, decentralized exchanges, staking platforms, and custom tokens.\n• **Enterprise Blockchain**: Private supply chain traceability and verifiable credential systems.`,
      suggestions: ['💼 Our Services', '📅 Book Consultation', '📁 View Portfolio'],
    }
  }

  // 17. DevOps & Cloud Engineering
  if (
    hasPhrase('cloud infrastructure', 'devops services', 'ci/cd', 'cloud consulting') ||
    hasWord('devops', 'cloud', 'aws', 'azure', 'gcp', 'docker', 'kubernetes', 'terraform')
  ) {
    return {
      text: `☁️ **Cloud Infrastructure & DevOps Services**:\n\nAccelerate deployment cycles, ensure 99.99% uptime, and optimize cloud costs:\n\n• **Cloud Providers**: AWS, Google Cloud (GCP), and Microsoft Azure.\n• **CI/CD Pipelines**: Automated build, test, and zero-downtime deployment pipelines with GitHub Actions, GitLab, and Jenkins.\n• **Containerization & Orchestration**: Docker, Kubernetes, Helm charts, and microservices management.\n• **Infrastructure as Code (IaC)**: Terraform, Ansible, and CloudFormation for reproducible environments.\n• **Security & Compliance**: Cloud monitoring, disaster recovery, and 24/7 reliability engineering.`,
      suggestions: ['💼 Our Services', '👥 Hire Developers', '📅 Book Consultation'],
    }
  }

  // 18. Data Engineering & Analytics
  if (
    hasPhrase('data engineering', 'data analytics', 'data pipeline', 'business intelligence', 'big data') ||
    hasWord('data', 'etl', 'analytics', 'snowflake', 'databricks', 'warehouse')
  ) {
    return {
      text: `📊 **Data Engineering & Business Intelligence**:\n\nTurn raw enterprise data into actionable business intelligence:\n\n• **ETL/ELT Data Pipelines**: High-throughput automated batch and real-time streaming data ingestion.\n• **Modern Data Warehousing**: Snowflake, Amazon Redshift, Google BigQuery, and Databricks.\n• **BI & Custom Dashboards**: Power BI, Tableau, Looker, and embedded real-time analytical dashboards.\n• **Data Governance & Quality**: Enterprise data cleansing, security, and cataloging.`,
      suggestions: ['💼 Our Services', '🤖 AI Solutions', '📅 Book Consultation'],
    }
  }

  // 19. Products / JMart24
  if (
    hasPhrase('jmart24', 'jmart', 'our products', 'our platform', 'ecommerce platform') ||
    hasWord('product', 'products', 'jmart')
  ) {
    return {
      text: `🛍️ **Our Products & Platforms**:\n\n• **JMart24**: Our state-of-the-art enterprise retail and hyper-local commerce management platform designed to automate inventory, point of sale (POS), supply chain tracking, and digital storefronts with seamless customer experiences.\n\nIn addition, we build tailor-made SaaS products and digital platforms for startups and global enterprises.`,
      suggestions: ['🛒 Learn About JMart24', '💼 Our Services', '📅 Book Consultation'],
    }
  }

  // 20. Industries Served
  if (
    hasPhrase('industries served', 'what industries', 'industry expertise') ||
    hasWord('industry', 'industries', 'healthcare', 'fintech', 'finance', 'education', 'ecommerce', 'logistics', 'construction', 'automotive', 'insurance')
  ) {
    return {
      text: `🌐 **Industries We Transform**:\n\nWe provide tailored, compliant digital solutions across key sectors:\n\n• 🏥 **Healthcare & Life Sciences**: Telemedicine, EHR integrations, HIPAA-compliant patient portals.\n• 💳 **Fintech & Banking**: Payment gateways, fraud detection, lending platforms, crypto wallets.\n• 📦 **E-Commerce & Retail**: Omnichannel stores, personalized recommendation engines, inventory AI.\n• 🚚 **Logistics & Supply Chain**: Fleet tracking, route optimization, automated warehousing.\n• 🎓 **Education & EdTech**: LMS platforms, interactive learning tools, video classrooms.\n• 🏗️ **Construction & Real Estate**: Project tracking, 3D visualization, property portals.\n• 🚗 **Automotive**: Connected vehicle dashboards, telematics, dealership CRM.\n• 🛡️ **Insurance (InsurTech)**: Automated claim processing, risk assessment algorithms.`,
      suggestions: ['📁 View Portfolio', '💼 Our Services', '📅 Book Consultation'],
    }
  }

  // 21. Portfolio / Case Studies / Past Work
  if (
    hasPhrase('case studies', 'case study', 'past work', 'view portfolio', 'our projects', 'client work', 'client portfolio') ||
    hasWord('portfolio', 'projects', 'clients', 'showcase')
  ) {
    return {
      text: `📁 **Portfolio & Case Studies**:\n\nWe have successfully delivered **100+ high-impact digital products** for startups, scale-ups, and global enterprises.\n\n**Featured Impact Stories:**\n• **AI Automated Analytics Engine**: Reduced data processing time by 70% for a Fintech client.\n• **Omnichannel Retail Transformation**: Scaled customer engagement by 3.5x using JMart24 architecture.\n• **High-Throughput Web3 Payment System**: Processed 500k+ secure transactions.\n\nYou can explore our full showcase in the **[Portfolio](/portfolio)** and **[Case Studies](/casestudies)** pages!`,
      suggestions: ['💼 Our Services', '📅 Book Consultation', '📍 Contact Details'],
    }
  }

  // 22. Pricing / Cost / Quote / Estimation
  if (
    hasPhrase('how much', 'cost estimate', 'request a quote', 'pricing model', 'get a quote') ||
    hasWord('price', 'pricing', 'cost', 'quote', 'quotation', 'estimation', 'budget', 'rate')
  ) {
    return {
      text: `💰 **Pricing & Engagement Models**:\n\nEvery project is unique! We offer highly flexible, competitive pricing models:\n\n1. **Dedicated Monthly Team**: Fixed monthly rate per developer/engineer with full-time commitment.\n2. **Fixed Price Project**: For clearly defined scope, deliverables, and milestones.\n3. **Time & Material (Hourly)**: Ideal for evolving scopes, continuous updates, and agile sprints.\n\nTell us briefly about your project requirements or book a free consultation for an accurate custom quote!`,
      suggestions: ['📅 Book Consultation', '👥 Hire Developers', '💬 Chat on WhatsApp'],
    }
  }

  // 23. Company Overview / Who are you? / About Jawam
  if (
    hasPhrase('about jawam', 'about company', 'who are you', 'tell me about jawam', 'what is jawam', 'what do you do', 'company overview', 'introduction') ||
    hasWord('about')
  ) {
    return {
      text: `**Jawam Infotech** is a premier digital technology and engineering consultancy. We specialize in building **Creative & Innovative Digital Solutions** for modern businesses worldwide.\n\n**Key Highlights:**\n• **AI & Next-Gen Tech**: Custom AI agents, LLMs, Machine Learning, and Blockchain.\n• **Full-Cycle Engineering**: Web apps, mobile apps, enterprise cloud & DevOps.\n• **Dedicated Talent**: Elite top 1% developers on-demand through staff augmentation.\n• **Global Reach**: Serving clients across Fintech, Healthcare, E-Commerce, Logistics, and more.\n\nWould you like to explore our specific services or discuss a new project?`,
      suggestions: ['💼 Our Services', '🚀 Tech Stack', '📁 View Portfolio', '📅 Book Consultation'],
    }
  }

  // 24. Privacy Policy
  if (
    hasPhrase('privacy policy', 'data protection', 'data privacy', 'security policy') ||
    hasWord('privacy')
  ) {
    return {
      text: `🔒 **Privacy Policy Overview**:\n\nAt **Jawam Infotech**, we value your trust and take data privacy very seriously. Here is a brief summary of our privacy practices:\n\n• **Information Collection**: We only collect essential project and contact information needed to deliver high-quality digital solutions and support.\n• **Data Security & Encryption**: We utilize enterprise-grade encryption, secure servers, and strict protocols to protect your personal and business data.\n• **No Unauthorized Sharing**: We never sell, rent, or trade your data to third parties without your explicit consent.\n• **Your Rights**: You retain full rights to access, update, or request deletion of your information at any time.\n\n👉 **Next Step**: We recommend visiting our complete **[Privacy Policy](#privacy)** to review our full privacy practices and security measures!`,
      suggestions: ['🔒 View Privacy Policy', '📄 Terms & Conditions', '💼 Our Services', '📍 Contact Details'],
    }
  }

  // 25. Terms and Conditions
  if (
    hasPhrase('terms and conditions', 'terms of service', 'user agreement', 'legal terms') ||
    hasWord('terms', 'agreement', 'sla')
  ) {
    return {
      text: `📄 **Terms & Conditions Overview**:\n\nHere is a brief summary of the standard terms and guidelines governing our digital services and engagements:\n\n• **1. Service Scope**: We provide custom software engineering, AI solutions, and IT consulting based on clear deliverables and milestones.\n• **2. 100% Client IP Ownership**: Complete intellectual property and code ownership is transferred to you upon project completion and settlement.\n• **3. Mutual Confidentiality (NDA)**: We enforce strict confidentiality standards to safeguard all your business data, code, and project ideas.\n• **4. Transparent Engagements**: Clear milestone approvals, SLA commitments, and dedicated support.\n\n👉 **Next Step**: We recommend reviewing our full **[Terms & Conditions](#terms)** to explore the complete legal terms and agreement details!`,
      suggestions: ['📄 View Terms & Conditions', '🔒 View Privacy Policy', '💼 Our Services', '📅 Book Consultation'],
    }
  }

  // 26. Tech Stack / Technologies used
  if (
    hasPhrase('tech stack', 'technology stack', 'technologies used') ||
    hasWord('stack', 'tools', 'languages', 'frameworks')
  ) {
    return {
      text: `🚀 **Our Core Technology Stack**:\n\n• **Frontend**: React.js, Next.js, Vue.js, Tailwind CSS, TypeScript, HTML5/CSS3\n• **Mobile**: React Native, Flutter, Swift (iOS), Kotlin (Android)\n• **Backend**: Node.js, Python (Django, FastAPI, Flask), Go, Express.js, Java Spring\n• **AI & ML**: PyTorch, TensorFlow, OpenAI API, LangChain, Hugging Face, OpenCV\n• **Cloud & DevOps**: AWS, Google Cloud, Azure, Docker, Kubernetes, Terraform, CI/CD\n• **Databases**: PostgreSQL, MongoDB, Redis, MySQL, Snowflake, BigQuery, DynamoDB\n• **Blockchain**: Solidity, Rust, Ethereum, Solana, Polygon, Web3.js, Ethers.js`,
      suggestions: ['🤖 AI Solutions', '👥 Hire Developers', '💼 Our Services'],
    }
  }

  // 27. Why Choose Jawam Infotech? / Benefits
  if (
    hasPhrase('why choose', 'why jawam') ||
    hasWord('advantages', 'benefits', 'difference', 'better')
  ) {
    return {
      text: `✨ **Why Choose Jawam Infotech?**\n\n• ⚡ **Top 1% Engineering Talent**: Rigorously vetted senior developers and AI specialists.\n• 🎯 **Agile & Fast Delivery**: Rapid prototypes and production-ready deployments with zero bloat.\n• 🔒 **Security & Quality First**: Clean, scalable code architecture with comprehensive automated testing.\n• 🤝 **Transparent Partnership**: Direct communication, flexible engagement models, and 100% IP ownership.\n• 📈 **Proven Track Record**: 100+ successful projects delivered across 8+ global industries.`,
      suggestions: ['📁 View Portfolio', '👥 Hire Developers', '📅 Book Consultation'],
    }
  }

  // 28. Thanks / Gratitude
  if (
    hasWord('thank', 'thanks', 'awesome', 'great', 'cool', 'helpful', 'perfect', 'good')
  ) {
    return {
      text: `You're very welcome! 😊 It's a pleasure to assist you. Is there anything else you would like to know about Jawam Infotech or our digital solutions?`,
      suggestions: ['💼 Our Services', '📅 Book Consultation', '📍 Contact Details'],
    }
  }

  // 29. Default / Fallback Response
  return {
    text: `Thank you for your question! **Jawam Infotech** provides end-to-end digital solutions, custom AI engineering, and elite developer staff augmentation.\n\nCould you please clarify if you are looking for:\n• **Open Positions & Careers**\n• **Custom Software / AI Development**\n• **Hiring Dedicated Developers**\n• **Privacy Policy & Terms**\n• **Booking a Free Consultation**\n\nYou can also connect with our specialists directly at **+91 99814 67849** or email **contact@jawaminfotech.com**.`,
    suggestions: ['📋 Open Positions Page', '💼 Our Services', '🤖 AI Solutions', '📅 Book Consultation', '📍 Contact Details'],
  }
}

const EMOJIS = ['😊', '👍', '👋', '🚀', '🤖', '💼', '💡', '🔥', '💻', '📱', '✨', '🎯', '📍', '❓', '🤝', '⚡']

export default function GlobalContact() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Hi! I am **Jawam AI**. How can I help you explore our services, solutions, or company today?',
      suggestions: ['💼 Our Services', '🤖 AI Solutions', '👥 Hire Developers', '📅 Book Consultation', '📍 Contact Details'],
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (isChatOpen) {
      scrollToBottom()
      setTimeout(() => {
        inputRef.current?.focus()
      }, 200)
    }
  }, [messages, isChatOpen, isTyping])

  const sendQuery = (textToSend) => {
    if (!textToSend.trim()) return

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: textToSend.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate realistic AI thought process and response
    setTimeout(() => {
      const response = generateJawamAIResponse(textToSend)
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          text: response.text,
          suggestions: response.suggestions,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ])
      setIsTyping(false)
    }, 600)
  }

  const handleSendMessage = (e) => {
    if (e) e.preventDefault()
    sendQuery(inputValue)
  }

  const handleSuggestionClick = (suggestion) => {
    // Strip leading emoji if present for cleaner search
    const cleanQuery = suggestion.replace(/^[\p{Emoji}\u200d\uFE0F]+\s*/u, '').trim()
    sendQuery(cleanQuery)
  }

  const handleClearChat = () => {
    setMessages([
      {
        id: Date.now(),
        sender: 'bot',
        text: 'Chat cleared! Hi! I am **Jawam AI**. How can I help you explore our services, solutions, or company today?',
        suggestions: ['💼 Our Services', '🤖 AI Solutions', '👥 Hire Developers', '📅 Book Consultation', '📍 Contact Details'],
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ])
  }

  // Formatter for bot text matching the app's dark modal design
  const renderFormattedText = (rawText) => {
    const lines = rawText.split('\n')
    return lines.map((line, lineIdx) => {
      if (!line.trim()) return <div key={lineIdx} className="h-1.5" />
      const isBullet = line.trim().startsWith('•') || /^\d+\./.test(line.trim())
      
      const parseFormattedParts = (content) => {
        const parts = []
        let lastIndex = 0
        const regex = /(\*\*(.*?)\*\*)|(\[(.*?)\]\((.*?)\))/g
        let match
        while ((match = regex.exec(content)) !== null) {
          if (match.index > lastIndex) parts.push(content.substring(lastIndex, match.index))
          if (match[1]) {
            // Highlight headers/bold in cyan (#04A3DA) matching the modal design
            parts.push(
              <strong key={match.index} className="font-bold text-[#04A3DA]">
                {match[2]}
              </strong>
            )
          } else if (match[3]) {
            const [_, __, ___, linkText, linkUrl] = match
            if (linkUrl === '#privacy') {
              parts.push(
                <button
                  key={match.index}
                  type="button"
                  onClick={() => window.dispatchEvent(new CustomEvent('open-privacy'))}
                  className="text-[#04A3DA] hover:text-sky-300 underline font-bold cursor-pointer inline p-0 m-0 bg-transparent border-none text-left"
                >
                  {linkText}
                </button>
              )
            } else if (linkUrl === '#terms') {
              parts.push(
                <button
                  key={match.index}
                  type="button"
                  onClick={() => window.dispatchEvent(new CustomEvent('open-terms'))}
                  className="text-[#04A3DA] hover:text-sky-300 underline font-bold cursor-pointer inline p-0 m-0 bg-transparent border-none text-left"
                >
                  {linkText}
                </button>
              )
            } else if (linkUrl.startsWith('http') || linkUrl.startsWith('tel:') || linkUrl.startsWith('mailto:')) {
              parts.push(
                <a
                  key={match.index}
                  href={linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#04A3DA] hover:text-sky-300 underline font-bold"
                >
                  {linkText}
                </a>
              )
            } else {
              parts.push(
                <Link
                  key={match.index}
                  to={linkUrl}
                  className="text-[#04A3DA] hover:text-sky-300 underline font-bold"
                >
                  {linkText}
                </Link>
              )
            }
          }
          lastIndex = regex.lastIndex
        }
        if (lastIndex < content.length) parts.push(content.substring(lastIndex))
        return parts.length > 0 ? parts : content
      }

      return (
        <p
          key={lineIdx}
          className={`${isBullet ? 'pl-2 py-0.5' : 'py-0.5'} leading-relaxed text-[#E7E8EA] text-xs sm:text-sm`}
        >
          {parseFormattedParts(line)}
        </p>
      )
    })
  }

  return (
    <>
      {/* ----------------- WHATSAPP BUTTON (BOTTOM-LEFT) ----------------- */}
      <div className="fixed bottom-6 left-6 z-50">
        <a
          href="https://wa.me/919981467849?text=Hello%2C%20I%20want%20to%20know%20more%20about%20your%20services"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
          className="group relative flex items-center justify-center w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
        >
          <svg className="w-8 h-7 sm:w-7 sm:h-8 fill-current transition-transform duration-300 group-hover:rotate-6" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </a>
      </div>

      {/* ----------------- CHAT / MESSAGE BUTTON & MODAL (BOTTOM-RIGHT) ----------------- */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {/* Chat Widget Window (Dark Theme matching application modal) */}
        {isChatOpen && (
          <div className="w-[92vw] sm:w-[400px] md:w-[440px] h-[520px] sm:h-[560px] max-h-[82vh] bg-[#0B1220] rounded-2xl shadow-2xl shadow-black/80 overflow-hidden flex flex-col border border-[#BDBDBDB0]/40 mb-3.5 transition-all duration-300">
            {/* Modal Header */}
            <div className="bg-[#0B1220] border-b border-[#BDBDBD33] px-5 py-4 flex items-center justify-between text-white select-none shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#04A3DA]/15 border border-[#04A3DA]/30 flex items-center justify-center text-lg">
                  🤖
                </div>
                <div>
                  <h3 className="font-bold text-base md:text-lg text-[#04A3DA] leading-tight">
                    Jawam AI Support
                  </h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-[11px] text-slate-400 font-medium">Online & Ready to Help</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                {/* Clear Chat Button */}
                <button
                  onClick={handleClearChat}
                  title="Clear Chat History"
                  className="text-slate-400 hover:text-white hover:bg-white/10 p-1.5 rounded-lg transition-colors text-xs flex items-center gap-1 cursor-pointer"
                  aria-label="Clear chat"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>

                {/* Close Button */}
                <button
                  onClick={() => setIsChatOpen(false)}
                  className="text-slate-400 hover:text-white hover:bg-white/10 p-1.5 rounded-lg transition-colors cursor-pointer"
                  aria-label="Close Chat"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Message Body */}
            {/* Message Body */}
<div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-[#0B1220] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:none]">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.sender === 'user' ? 'items-end' : 'items-start'
                  }`}
                >
                  <div
                    className={`max-w-[88%] text-xs sm:text-sm px-4 py-3 rounded-2xl shadow-sm ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] text-white rounded-tr-sm font-medium'
                        : 'bg-[#131E35] text-[#E7E8EA] rounded-tl-sm border border-[#BDBDBD33]/60 shadow-sm'
                    }`}
                  >
                    {msg.sender === 'user' ? (
                      <p className="leading-relaxed">{msg.text}</p>
                    ) : (
                      renderFormattedText(msg.text)
                    )}
                  </div>

                  {/* Suggestion Chips */}
                  {msg.sender === 'bot' && msg.suggestions && msg.suggestions.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2.5 max-w-[95%]">
                      {msg.suggestions.map((sug, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSuggestionClick(sug)}
                          className="bg-[#0F172A] hover:bg-[#04A3DA]/20 text-[#04A3DA] hover:text-white text-[11px] font-semibold px-3 py-1.5 rounded-full border border-[#04A3DA]/40 shadow-xs hover:border-[#04A3DA] transition-all cursor-pointer select-none active:scale-95"
                        >
                          {sug}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Timestamp */}
                  {msg.timestamp && (
                    <span className="text-[10px] text-slate-500 px-1 mt-1">
                      {msg.timestamp}
                    </span>
                  )}
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-center space-x-1.5 bg-[#131E35] border border-[#BDBDBD33]/60 px-4 py-3 rounded-2xl rounded-tl-sm w-16 shadow-sm">
                  <div className="w-2 h-2 bg-[#04A3DA] rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-[#04A3DA] rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-2 h-2 bg-[#04A3DA] rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Footer */}
            <div className="p-3 bg-[#0B1220] border-t border-[#BDBDBD33]">
              {/* Emoji Picker Popup */}
              {showEmojiPicker && (
                <div className="p-2 bg-[#0F172A] border border-[#BDBDBD33] rounded-xl mb-2 flex flex-wrap gap-1.5 shadow-xl animate-in fade-in slide-in-from-bottom-2">
                  {EMOJIS.map((emoji) => (
                    <button
                      key={emoji}
                      type="button"
                      onClick={() => {
                        setInputValue((prev) => prev + emoji)
                        setShowEmojiPicker(false)
                        inputRef.current?.focus()
                      }}
                      className="w-7 h-7 flex items-center justify-center text-base hover:bg-[#131E35] rounded-lg transition-transform hover:scale-125 cursor-pointer select-none"
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              )}

              <form
                onSubmit={handleSendMessage}
                className="flex items-center gap-2 bg-[#0F172A] rounded-xl px-3.5 py-2.5 border border-[#BDBDBDB0]/40 focus-within:border-[#04A3DA] transition-all"
              >
                {/* Emoji Button */}
                <button
                  type="button"
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                  title="Insert Emoji"
                  className="cursor-pointer p-0.5"
                  aria-label="Toggle emoji picker"
                >
                  <svg
                    className={`w-5 h-5 transition-colors ${
                      showEmojiPicker ? 'text-[#04A3DA]' : 'text-slate-400 hover:text-[#04A3DA]'
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                  </svg>
                </button>

                {/* Input Text */}
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Ask anything about Jawam Infotech..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-xs sm:text-sm text-white placeholder-slate-400 px-1"
                />

                {/* Send Button */}
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="text-[#04A3DA] hover:text-sky-300 disabled:text-slate-600 transition-colors p-1 cursor-pointer"
                  aria-label="Send Message"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        )}

{/* Floating Trigger Button — icon-only on mobile, full pill on sm+ */}
<div className="flex items-center gap-2.5">
  {isChatOpen ? (
    /* When open, keep a small circular close button in the same spot */
    <button
      onClick={() => setIsChatOpen(false)}
      className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#04A3DA] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
      aria-label="Close Ask Jawam Assistant"
    >
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  ) : (
    <button
      onClick={() => setIsChatOpen(true)}
      className="ask-jawam-btn relative flex items-center justify-center sm:justify-start gap-0 sm:gap-2.5 bg-[#0B1220]/95 backdrop-blur-md text-white font-semibold text-sm sm:text-[15px] w-14 h-14 sm:w-auto sm:h-auto p-0 sm:pl-3.5 sm:pr-5 sm:py-3 rounded-full shadow-xl border border-[#04A3DA]/50 hover:border-[#04A3DA] hover:shadow-[0_0_20px_rgba(4,163,218,0.35)] active:scale-95 transition-all duration-300 cursor-pointer select-none"
      aria-label="Open Ask Jawam AI Consultant"
    >
      {/* Ambient pulse ring behind the whole button/pill */}
      <span className="absolute inset-0 rounded-full bg-[#04A3DA]/25 ask-jawam-pulse pointer-events-none"></span>

      {/* Icon circle — always visible */}
      <span className="relative z-10 flex items-center justify-center w-14 h-14 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#04A3DA] shrink-0">
        <svg
          className="w-6 h-6 sm:w-4 sm:h-4 text-white ask-jawam-sparkle"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l1.85 5.4L19 9l-5.15 1.6L12 16l-1.85-5.4L5 9l5.15-1.6L12 2z" opacity="1" />
          <path d="M19 14l.9 2.6L22.5 17.5l-2.6.9L19 21l-.9-2.6-2.6-.9 2.6-.9L19 14z" opacity="0.85" />
          <path d="M5 15l.65 1.85L7.5 17.5l-1.85.65L5 20l-.65-1.85L2.5 17.5l1.85-.65L5 15z" opacity="0.7" />
        </svg>
      </span>

      {/* Label — hidden on mobile, visible from sm up */}
      <span className="relative z-10 hidden sm:inline whitespace-nowrap">
        Ask Jawam <span className="text-[#04A3DA]">– AI </span>
      </span>
    </button>
  )}
</div>
      </div>
    </>
  )
}