import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const pagesData = [
  {
    folder: 'Web Development',
    componentName: 'WebDevelopment',
    category: 'Web Development',
    heroBadge: 'Web Development Services',
    badgeIcon: 'Globe',
    heroTitlePrefix: 'Turn Complex Requirements Into',
    heroTitleAccent: 'High-Impact Web Applications',
    heroSubtitle: 'We build responsive, high-converting, and SEO-optimized web experiences designed to engage users and scale effortlessly across all devices.',
    problem: {
      subtitle: 'Slow loading times and outdated tech stacks lose customers and hurt search rankings. We build modern, lightning-fast web applications that convert.',
      roadblocks: [
        { step: '01', icon: 'Layers', title: 'Legacy Frameworks', description: 'Outdated monoliths and slow template systems hinder performance and mobile responsiveness.' },
        { step: '02', icon: 'Clock', title: 'Sluggish Load Speeds', description: 'Every millisecond of latency increases bounce rates and reduces organic search ranking.' },
        { step: '03', icon: 'AlertTriangle', title: 'Inconsistent Across Devices', description: 'Fragmented user experience across smartphones, tablets, and desktop screen sizes.' },
        { step: '04', icon: 'Network', title: 'Scaling Bottlenecks', description: 'Web architectures fail to handle sudden traffic surges during marketing campaigns.' },
      ]
    },
    beforeAfter: {
      before: [
        'Slow loading speeds and poor Core Web Vitals',
        'Inconsistent design across mobile and desktop',
        'Complex monolithic codebase hard to maintain',
        'Weak SEO rankings and low search visibility',
        'Frequent downtime under high visitor traffic',
        'Cumbersome content update processes',
      ],
      after: [
        'Sub-second load times and 95+ PageSpeed scores',
        'Pixel-perfect responsive design across all devices',
        'Modern, modular React and Next.js architecture',
        'SEO-optimized code structure with clean metadata',
        'Resilient cloud hosting with global edge CDN caching',
        'Intuitive headless CMS for effortless updates',
      ],
      centerTitle: 'Web\nEngineering',
      centerSubtitle: 'Turning code into\nhigh-speed web',
      quote: "A website is not just an online presence. It is your highest-performing digital storefront and growth engine when built right.",
      author: 'Jawam Infotech'
    },
    capabilities: [
      { icon: 'Globe', title: 'Custom Web Applications', description: 'High-throughput enterprise web portals and interactive dashboards built with modern React frameworks.' },
      { icon: 'Zap', title: 'Progressive Web Apps (PWA)', description: 'App-like experiences with offline capability, push notifications, and ultra-fast installable web apps.' },
      { icon: 'Cpu', title: 'Headless CMS & E-Commerce', description: 'Scalable commerce and content platforms integrated with Shopify, Strapi, Sanity, or custom APIs.' },
      { icon: 'RefreshCw', title: 'Web App Modernization', description: 'Migrate legacy PHP/jQuery applications to high-performance Next.js and cloud-native backends.' },
      { icon: 'Link2', title: 'API & Third-Party Integrations', description: 'Connect payment gateways, CRMs, analytics, and marketing automation tools securely.' },
      { icon: 'ShieldCheck', title: 'Performance & SEO Tuning', description: 'Comprehensive Core Web Vitals audits, security hardening, and technical SEO optimizations.' },
    ],
    faqs: [
      'Which frontend frameworks and tech stacks do you specialize in?',
      'How do you ensure fast page load speeds and SEO optimization?',
      'Can you migrate our existing legacy website to Next.js or React?',
      'Do you build mobile-responsive progressive web applications (PWAs)?',
      'How do you handle web application security and SSL standards?',
      'Do you provide ongoing web maintenance and feature updates?',
    ],
    cta: {
      titleAccent: 'More',
      subtitle: "Let's build a modern, high-speed web presence that helps you turn visitors into loyal customers. Our team of experts will help you scale smoothly."
    }
  },

  {
    folder: 'Mobile App Development',
    componentName: 'MobileAppDevelopment',
    category: 'Mobile App Development',
    heroBadge: 'Mobile App Development Services',
    heroTitlePrefix: 'Turn Mobile Concepts Into',
    heroTitleAccent: 'Fluid, 60fps Native Experiences',
    heroSubtitle: 'We design and engineer native iOS, Android, and cross-platform apps with smooth animations, intuitive UX, and offline-first reliability.',
    problem: {
      subtitle: 'Inconsistent performance and device fragmentation hurt app store ratings. We deliver smooth, resilient mobile applications users love using every day.',
      roadblocks: [
        { step: '01', icon: 'Layers', title: 'Device Fragmentation', description: 'Inconsistent layouts and bugs across hundreds of Android and iOS hardware configurations.' },
        { step: '02', icon: 'Clock', title: 'Slow Load & Jittery UI', description: 'Unoptimized rendering loops cause dropped frames, laggy scrolls, and app uninstalls.' },
        { step: '03', icon: 'AlertTriangle', title: 'Unreliable Offline State', description: 'Apps crash or fail when users transition between weak network coverage or lose connection.' },
        { step: '04', icon: 'Network', title: 'Complex Store Approvals', description: 'Rejections and delays during Apple App Store and Google Play compliance reviews.' },
      ]
    },
    beforeAfter: {
      before: [
        'Sluggish frame rates and high battery consumption',
        'Inconsistent UI between iOS and Android versions',
        'Crashes during intermittent network connectivity',
        'Complex, slow release and review procedures',
        'Fragile push notification and deep-linking setups',
        'Negative store reviews and high uninstall rates',
      ],
      after: [
        'Silky-smooth 60fps native performance and battery efficiency',
        'Consistent, beautiful design conforming to HIG and Material UI',
        'Resilient offline-first caching and data synchronization',
        'Streamlined Fastlane automated deployment to app stores',
        'Reliable real-time push notifications and universal links',
        'High app ratings (4.8★+) with strong user retention',
      ],
      centerTitle: 'Mobile\nEngineering',
      centerSubtitle: 'Turning vision into\nstore-ready apps',
      quote: 'Great mobile apps feel invisible; they respond instantly and empower users without friction on any device.',
      author: 'Jawam Infotech'
    },
    capabilities: [
      { icon: 'Smartphone', title: 'Cross-Platform Apps', description: 'Single-codebase Flutter and React Native apps that deliver authentic native look and feel.' },
      { icon: 'Zap', title: 'Native iOS & Android', description: 'High-performance Swift and Kotlin development for apps demanding raw hardware power.' },
      { icon: 'Cpu', title: 'Offline-First Architecture', description: 'Local database syncing with SQLite, Realm, or WatermelonDB for flawless offline usage.' },
      { icon: 'RefreshCw', title: 'Mobile Payments & Wallets', description: 'Apple Pay, Google Pay, in-app purchases, and Stripe integration with bank-grade security.' },
      { icon: 'Link2', title: 'Push & Real-Time Sync', description: 'Instant push notifications, WebSockets, background geolocation, and Bluetooth BLE integration.' },
      { icon: 'ShieldCheck', title: 'App Store Optimization (ASO)', description: 'Guidance through strict store policies, metadata tuning, and compliance to maximize downloads.' },
    ],
    faqs: [
      'Do you build for both iOS and Android platforms?',
      'Should we build native apps or use cross-platform Flutter/React Native?',
      'How do you handle offline functionality and data synchronization?',
      'Can you assist with Apple App Store and Google Play approval?',
      'How do you ensure smooth 60fps performance and low battery use?',
      'Do you provide post-launch mobile app maintenance and updates?',
    ],
    cta: {
      titleAccent: 'More',
      subtitle: "Let's build a breakthrough mobile app that users will keep on their home screens. Our team will help you launch and scale on iOS and Android."
    }
  },

  {
    folder: 'UIUX Design',
    componentName: 'UiUxDesign',
    category: 'UI/UX Design',
    heroBadge: 'UI/UX Design Services',
    heroTitlePrefix: 'Turn Complex User Journeys Into',
    heroTitleAccent: 'Intuitive Digital Experiences',
    heroSubtitle: 'We craft human-centric interfaces, comprehensive design systems, and delightful micro-interactions that elevate conversions and user retention.',
    problem: {
      subtitle: 'Cluttered layouts and confusing workflows drive customers away. We design intuitive, visually stunning interfaces that guide users smoothly toward their goals.',
      roadblocks: [
        { step: '01', icon: 'Layers', title: 'High Bounce Rates', description: 'Confusing visual hierarchy causes users to abandon products before completing key actions.' },
        { step: '02', icon: 'Clock', title: 'Inconsistent Design', description: 'Disjointed components and conflicting color palettes across different pages and features.' },
        { step: '03', icon: 'AlertTriangle', title: 'Developer Handoff Friction', description: 'Designs without clear specs or design tokens cause messy, slow front-end implementations.' },
        { step: '04', icon: 'Network', title: 'Accessibility Gaps', description: 'Products fail accessibility audits, excluding users and creating legal and brand liabilities.' },
      ]
    },
    beforeAfter: {
      before: [
        'Confusing user flows and high friction points',
        'Inconsistent buttons, typography, and spacing',
        'Disorganized Figma files with no design tokens',
        'Low engagement and poor mobile usability',
        'Accessibility barriers and poor contrast ratios',
        'Frustrating back-and-forth during dev handoff',
      ],
      after: [
        'Intuitive, frictionless navigation that boosts conversions',
        'Comprehensive, scalable Design System with tokens',
        'Clean component libraries ready for dev implementation',
        'Delightful micro-interactions and mobile ergonomics',
        'Full WCAG 2.1 AA accessibility compliance built-in',
        'Flawless developer handoff with complete specs',
      ],
      centerTitle: 'Design\nStudio',
      centerSubtitle: 'Turning friction into\nintuitive delight',
      quote: 'Design is not just what it looks like and feels like. Design is how it works.',
      author: 'Jawam Infotech'
    },
    capabilities: [
      { icon: 'Layout', title: 'Web & Mobile UI Design', description: 'Visually compelling, brand-aligned interfaces crafted for web applications and mobile products.' },
      { icon: 'Zap', title: 'Design Systems & Tokens', description: 'Scalable design systems in Figma that standardize typography, colors, and reusable components.' },
      { icon: 'Cpu', title: 'Interactive Prototyping', description: 'Realistic clickable prototypes that simulate animations, transitions, and user interactions.' },
      { icon: 'RefreshCw', title: 'UI/UX Redesign & Audits', description: 'Comprehensive heuristic evaluation and UX redesigns that revive dated software platforms.' },
      { icon: 'Link2', title: 'SaaS Dashboard Design', description: 'Data-dense analytics dashboards organized with clean charts, cards, and intuitive controls.' },
      { icon: 'ShieldCheck', title: 'Accessibility (WCAG 2.1)', description: 'Ensure your digital products are usable by everyone with audited contrast and keyboard navigation.' },
    ],
    faqs: [
      'What design tools do you use for collaborative design and handoff?',
      'Can you build a design system that our engineering team can use?',
      'How do you conduct user research and usability testing?',
      'Do you redesign existing web apps and SaaS dashboards?',
      'How do you ensure accessibility (WCAG) compliance?',
      'How does the design handoff process to our developers work?',
    ],
    cta: {
      titleAccent: 'More',
      subtitle: "Let's craft an intuitive, unforgettable user experience that your customers will love. Our designers will help you build product interfaces that convert."
    }
  },

  {
    folder: 'Artificial Intelligence',
    componentName: 'ArtificialIntelligence',
    category: 'Artificial Intelligence',
    heroBadge: 'Artificial Intelligence Services',
    heroTitlePrefix: 'Turn Enterprise Data Into',
    heroTitleAccent: 'Autonomous AI Intelligence',
    heroSubtitle: 'We build custom LLM solutions, generative AI workflows, computer vision, and predictive engines that automate operations and accelerate innovation.',
    problem: {
      subtitle: 'Generic AI models hallucinate and risk proprietary data security. We build private, reliable, enterprise-grade AI architectures tailored to your exact industry.',
      roadblocks: [
        { step: '01', icon: 'Layers', title: 'Hallucinations & Inaccuracy', description: 'Off-the-shelf AI models generate inaccurate responses that damage customer trust.' },
        { step: '02', icon: 'Clock', title: 'Data Privacy Risks', description: 'Exposing confidential enterprise knowledge to public models violates regulatory compliance.' },
        { step: '03', icon: 'AlertTriangle', title: 'High Inference Latency', description: 'Slow model response times create poor user experiences and high cloud compute bills.' },
        { step: '04', icon: 'Network', title: 'Integration Friction', description: 'Bridging modern AI agents with existing legacy databases and ERP workflows is challenging.' },
      ]
    },
    beforeAfter: {
      before: [
        'Generic, ungrounded AI models with frequent hallucinations',
        'Confidential data exposed to public cloud LLMs',
        'Expensive GPU costs and unoptimized token usage',
        'Disconnected chatbots that lack domain understanding',
        'Manual repetitive workflows draining employee productivity',
        'Zero observability into AI model decisions and bias',
      ],
      after: [
        'Domain-specific RAG architectures with verifiable citations',
        'Zero-data-retention, private on-premise or VPC deployments',
        'Quantized, cost-optimized models with sub-second latency',
        'Autonomous AI agents capable of executing complex business tasks',
        'Automated document processing, categorization, and workflows',
        'Full telemetry, guardrails, and audit logging for AI outputs',
      ],
      centerTitle: 'AI\nIntelligence',
      centerSubtitle: 'Turning data into\nautonomous action',
      quote: 'AI will not replace humans, but businesses powered by custom AI will replace businesses that wait.',
      author: 'Jawam Infotech'
    },
    capabilities: [
      { icon: 'BrainCircuit', title: 'Custom LLMs & Fine-Tuning', description: 'Fine-tune open models like Llama 3 or Mistral on your proprietary domain data.' },
      { icon: 'Zap', title: 'Enterprise RAG Architectures', description: 'Retrieval-Augmented Generation that connects LLMs to your real-time internal databases.' },
      { icon: 'Cpu', title: 'Autonomous AI Agents', description: 'Multi-agent frameworks that collaborate, browse tools, and complete multi-step workflows.' },
      { icon: 'RefreshCw', title: 'Computer Vision & OCR', description: 'Automated document extraction, object recognition, visual inspection, and video analytics.' },
      { icon: 'Link2', title: 'Predictive & Forecasting ML', description: 'Machine learning models for demand forecasting, customer churn, and anomaly detection.' },
      { icon: 'ShieldCheck', title: 'AI Governance & Guardrails', description: 'Strict compliance filters, PII redaction, and prompt injection defense mechanisms.' },
    ],
    faqs: [
      'How do you keep our company data secure and private when using AI?',
      'Can you build custom AI models trained specifically on our business data?',
      'What is Retrieval-Augmented Generation (RAG) and why do we need it?',
      'How do you prevent AI hallucinations and ensure accurate responses?',
      'Can AI agents automate our internal workflows and repetitive tasks?',
      'What cloud infrastructure is required to host private AI models?',
    ],
    cta: {
      titleAccent: 'More',
      subtitle: "Let's build private, reliable AI systems that unlock autonomous productivity. Our AI engineers will help you turn complex data into intelligent outcomes."
    }
  },

  {
    folder: 'Devops and cloud',
    componentName: 'DevopsAndCloud',
    category: 'DevOps and Cloud',
    heroBadge: 'DevOps and Cloud Services',
    heroTitlePrefix: 'Turn Fragile Infrastructure Into',
    heroTitleAccent: 'High-Velocity Cloud Resilience',
    heroSubtitle: 'We automate CI/CD pipelines, orchestrate Kubernetes clusters, and architect zero-downtime multi-cloud environments built for 99.99% uptime.',
    problem: {
      subtitle: 'Manual deployments and chaotic cloud bills drain engineering velocity. We build automated, resilient cloud infrastructures that scale smoothly.',
      roadblocks: [
        { step: '01', icon: 'Layers', title: 'Manual Deployments', description: 'Fragile manual server updates cause unexpected downtime and weekend emergency hotfixes.' },
        { step: '02', icon: 'Clock', title: 'Uncontrolled Cloud Spend', description: 'Over-provisioned cloud instances and forgotten idle resources lead to bloated monthly invoices.' },
        { step: '03', icon: 'AlertTriangle', title: 'Slow Feedback Loops', description: 'Developers wait hours for build verification and lack preview environments for pull requests.' },
        { step: '04', icon: 'Network', title: 'Security & Compliance Gaps', description: 'Inconsistent IAM roles, exposed secrets, and unpatched operating system vulnerabilities.' },
      ]
    },
    beforeAfter: {
      before: [
        'Manual, stressful deployments with high risk of outages',
        'Opaque infrastructure changes made directly on production servers',
        'Over-provisioned cloud resources and skyrocketing bills',
        'Hours spent troubleshooting environmental drift between staging and prod',
        'Lack of real-time monitoring and delayed incident alerts',
        'Weak secrets management and security exposure',
      ],
      after: [
        'Fully automated GitOps CI/CD with instant rollback capability',
        '100% Infrastructure as Code (Terraform) with versioned state',
        'FinOps-driven autoscaling that reduces cloud costs by up to 40%',
        'Identical Docker container environments from local dev to production',
        'Comprehensive Prometheus & Grafana observability with instant paging',
        'Automated vulnerability scanning and zero-trust IAM architecture',
      ],
      centerTitle: 'Cloud\nDevOps',
      centerSubtitle: 'Turning deployment fear\ninto automated velocity',
      quote: 'DevOps is not about tools alone; it is about building unstoppable engineering momentum with zero fear of deployment.',
      author: 'Jawam Infotech'
    },
    capabilities: [
      { icon: 'Cloud', title: 'Infrastructure as Code (IaC)', description: 'Version-controlled infrastructure using Terraform and Ansible for repeatable environments.' },
      { icon: 'Zap', title: 'Kubernetes & Containers', description: 'Enterprise EKS, GKE, and Docker setups with automated horizontal pod autoscaling.' },
      { icon: 'Cpu', title: 'CI/CD Pipeline Automation', description: 'High-speed build, test, and zero-downtime deployment pipelines using GitHub Actions.' },
      { icon: 'RefreshCw', title: 'Cloud Cost Optimization (FinOps)', description: 'Auditing and rightsizing cloud workloads to reduce AWS/GCP bills without sacrificing performance.' },
      { icon: 'Link2', title: 'Cloud Migration & Hybrid', description: 'Zero-downtime migrations from on-premise data centers to AWS, GCP, or hybrid cloud.' },
      { icon: 'ShieldCheck', title: 'DevSecOps & Compliance', description: 'SOC2, HIPAA, and ISO 27001 readiness with automated container scanning and secret management.' },
    ],
    faqs: [
      'Which cloud platforms (AWS, GCP, Azure) do you support?',
      'How do you achieve zero-downtime deployments for production systems?',
      'Can you help reduce our monthly AWS or Google Cloud bill?',
      'Do you set up containerization with Docker and Kubernetes (EKS/GKE)?',
      'How do you manage secrets, access control, and SOC2 compliance?',
      'Do you provide 24/7 site reliability engineering (SRE) and monitoring?',
    ],
    cta: {
      titleAccent: 'More',
      subtitle: "Let's build an automated, self-healing cloud foundation that lets your team ship code fearlessly. Our DevOps team will keep your systems fast and resilient."
    }
  },

  {
    folder: 'Custom Software',
    componentName: 'CustomSoftware',
    category: 'Custom Software',
    heroBadge: 'Custom Software Services',
    heroTitlePrefix: 'Turn Unique Workflows Into',
    heroTitleAccent: 'Proprietary Software Systems',
    heroSubtitle: 'We architect bespoke software systems tailored precisely to your operational needs, eliminating licensing constraints and driving scalable differentiation.',
    problem: {
      subtitle: 'Off-the-shelf software forces you to change how your business operates. We engineer tailored software designed around your exact competitive strengths.',
      roadblocks: [
        { step: '01', icon: 'Layers', title: 'Rigid Commercial Tools', description: 'Pre-packaged software lacks the flexibility to support your proprietary business processes.' },
        { step: '02', icon: 'Clock', title: 'Hefty Subscription Taxes', description: 'Per-user licensing fees balloon as your team expands, penalizing your business growth.' },
        { step: '03', icon: 'AlertTriangle', title: 'Data Lock-In', description: 'Third-party SaaS vendors hold your customer and transaction data hostage behind limited APIs.' },
        { step: '04', icon: 'Network', title: 'Fragmented Band-Aids', description: 'Stringing together dozens of off-the-shelf apps creates brittle, breakable integrations.' },
      ]
    },
    beforeAfter: {
      before: [
        'Constrained by rigid off-the-shelf software workflows',
        'Skyrocketing monthly per-seat subscription costs',
        'Critical business data trapped in proprietary SaaS silos',
        'Clunky user interfaces that slow down daily staff productivity',
        'Inability to build custom competitive features your customers want',
        'Vulnerability to external pricing hikes and feature discontinuations',
      ],
      after: [
        '100% bespoke software tailored precisely to your company operations',
        'Complete software ownership with zero recurring user license fees',
        'Full sovereignty and unhindered access to all company databases',
        'Streamlined, customized UI designed for rapid employee adoption',
        'Freedom to innovate and ship proprietary competitive capabilities',
        'Enterprise-grade IP that builds long-term enterprise valuation',
      ],
      centerTitle: 'Custom\nSoftware',
      centerSubtitle: 'Turning constraints into\nproprietary moats',
      quote: 'When your software is tailored to your business, your unique operational efficiency becomes an unbeatable moat.',
      author: 'Jawam Infotech'
    },
    capabilities: [
      { icon: 'Cpu', title: 'Bespoke Enterprise Software', description: 'End-to-end custom operational platforms engineered to replace rigid legacy applications.' },
      { icon: 'Monitor', title: 'Proprietary SaaS Platforms', description: 'Architecting high-scale multi-tenant SaaS products from MVP to enterprise scale.' },
      { icon: 'Zap', title: 'Internal Operations Portals', description: 'Custom ERP, HRMS, and inventory management systems built for internal efficiency.' },
      { icon: 'RefreshCw', title: 'Legacy System Modernization', description: 'Deconstruct outdated monoliths into agile, modular microservices without operational disruption.' },
      { icon: 'Link2', title: 'High-Throughput Engines', description: 'Specialized computing engines built for complex calculations, billing, or algorithmic matching.' },
      { icon: 'ShieldCheck', title: 'Role-Based Access & Security', description: 'Granular enterprise security, permission hierarchies, and complete audit trail logging.' },
    ],
    faqs: [
      'Why should we build custom software instead of buying off-the-shelf SaaS?',
      'Who owns the intellectual property (IP) and code of the custom software?',
      'How long does a typical custom software development project take?',
      'Can custom software integrate with our existing databases and tools?',
      'How do you maintain and update custom software after launch?',
      'What security standards and encryption protocols do you implement?',
    ],
    cta: {
      titleAccent: 'More',
      subtitle: "Let's build bespoke software designed around your exact workflows and competitive strengths. Our engineers will turn your unique vision into high-value IP."
    }
  },

  {
    folder: 'Third Party Integration',
    componentName: 'ThirdPartyIntegration',
    category: 'Third-party Integration',
    heroBadge: 'Third-Party Integration Services',
    heroTitlePrefix: 'Turn Disconnected Tools Into One',
    heroTitleAccent: 'Unified Digital Ecosystem',
    heroSubtitle: 'We integrate payment gateways, ERPs, CRMs, cloud services, and third-party APIs with high-throughput, fault-tolerant pipelines.',
    problem: {
      subtitle: 'Brittle point-to-point connections break when APIs change, creating data discrepancies and failed transactions. We build resilient, self-healing integration pipelines.',
      roadblocks: [
        { step: '01', icon: 'Layers', title: 'Siloed Incompatible Data', description: 'Customer records and transactions out of sync across Salesforce, ERPs, and internal tools.' },
        { step: '02', icon: 'Clock', title: 'Fragile Webhooks', description: 'Network timeouts and unhandled webhook payloads cause lost payments and order drops.' },
        { step: '03', icon: 'AlertTriangle', title: 'Rate Limiting Bottlenecks', description: 'Exceeding third-party API rate quotas during traffic surges halts critical workflows.' },
        { step: '04', icon: 'Network', title: 'Breaking API Updates', description: 'Third-party API deprecations without warning break existing production functionality.' },
      ]
    },
    beforeAfter: {
      before: [
        'Disjointed tools requiring manual CSV exports and re-entry',
        'Missed webhooks and lost payment notifications',
        'API rate limit errors bringing checkouts to a halt',
        'Lack of retry mechanisms when external APIs experience downtime',
        'No centralized logging to debug failed data synchronization',
        'High maintenance overhead every time a partner API updates',
      ],
      after: [
        'Fully automated bidirectional sync between all business platforms',
        'Idempotent webhook handlers with guaranteed at-least-once delivery',
        'Smart queueing and token-bucket throttling to respect rate limits',
        'Exponential backoff retries with dead-letter queues for failed events',
        'Centralized dashboard tracking all API request latencies and statuses',
        'Decoupled adapter architecture that insulates your code from breaking changes',
      ],
      centerTitle: 'API\nGateway',
      centerSubtitle: 'Turning silos into\nsynchronized workflows',
      quote: 'A modern company is only as agile as the connections between its systems.',
      author: 'Jawam Infotech'
    },
    capabilities: [
      { icon: 'Plug', title: 'Payment Gateway Integration', description: 'Stripe, PayPal, Adyen, and Square integrations with automated invoicing and refund workflows.' },
      { icon: 'Link2', title: 'CRM & ERP Synchronization', description: 'Deep bidirectional integrations with Salesforce, HubSpot, SAP, NetSuite, and Microsoft Dynamics.' },
      { icon: 'Zap', title: 'Event-Driven Webhooks', description: 'Reliable webhook consumers with signature validation, replay protection, and queue workers.' },
      { icon: 'RefreshCw', title: 'Marketing & Comm APIs', description: 'Twilio, SendGrid, Mailchimp, and WhatsApp Business integrations for automated omnichannel outreach.' },
      { icon: 'Cpu', title: 'Shipping & Logistics Connectors', description: 'FedEx, UPS, DHL, and ShipStation integrations for real-time rates, labels, and package tracking.' },
      { icon: 'ShieldCheck', title: 'Custom REST & GraphQL Middleware', description: 'Bespoke integration middleware that harmonizes disparate data formats into clean schemas.' },
    ],
    faqs: [
      'Which payment processors and gateway APIs do you integrate with?',
      'How do you ensure zero data loss during network dropouts or API outages?',
      'Can you sync data bidirectionally between our CRM, ERP, and database?',
      'How do you handle API rate limiting and sudden surges in webhook traffic?',
      'Can you build custom middleware connectors for legacy proprietary tools?',
      'How do you monitor and alert us if a third-party API service goes down?',
    ],
    cta: {
      titleAccent: 'More',
      subtitle: "Let's connect all your business tools into a seamless, fault-tolerant digital ecosystem. Our integration experts will eliminate silos and keep your data synced."
    }
  },

  {
    folder: 'Full Stack Development',
    componentName: 'FullStackDevelopment',
    category: 'Full Stack Development',
    heroBadge: 'Full Stack Development Services',
    heroTitlePrefix: 'Turn Product Vision Into',
    heroTitleAccent: 'End-to-End Scalable Systems',
    heroSubtitle: 'From polished user interfaces to high-throughput distributed backends, we deliver complete full-stack web and cloud applications.',
    problem: {
      subtitle: 'Fragmented development teams lead to mismatched APIs, inconsistent state, and delayed deadlines. We take full end-to-end responsibility for your entire stack.',
      roadblocks: [
        { step: '01', icon: 'Layers', title: 'Frontend-Backend Disconnect', description: 'Mismatched schema contracts and communication breakdowns between siloed teams.' },
        { step: '02', icon: 'Clock', title: 'Architecture Sprawl', description: 'Incompatible libraries and conflicting architectural patterns degrade system maintainability.' },
        { step: '03', icon: 'AlertTriangle', title: 'Database Bottlenecks', description: 'N+1 query problems and poorly indexed databases slow down user-facing response times.' },
        { step: '04', icon: 'Network', title: 'Slow Feature Velocity', description: 'Every new feature requires coordination across multiple vendors, stalling your roadmap.' },
      ]
    },
    beforeAfter: {
      before: [
        'Blame game between separate frontend and backend agencies',
        'Inconsistent API contracts causing runtime client crashes',
        'Unoptimized database queries causing server slowdowns under load',
        'Chaotic state management across complex user workflows',
        'Multiple deployment pipelines with frequent version mismatches',
        'Slow feature iteration and sluggish development cycles',
      ],
      after: [
        'One cohesive engineering team taking 100% end-to-end accountability',
        'Strict end-to-end type safety using TypeScript from database to UI',
        'High-performance SQL indexing and Redis caching for sub-50ms responses',
        'Clean, predictable client and server state synchronization',
        'Unified CI/CD pipeline deploying full-stack preview environments',
        'Rapid, predictable delivery sprints with continuous value release',
      ],
      centerTitle: 'Full-Stack\nCore',
      centerSubtitle: 'Turning vision into\ncomplete cloud products',
      quote: 'Full-stack mastery is understanding how every layer, from button click to database disk, works in harmonious unison.',
      author: 'Jawam Infotech'
    },
    capabilities: [
      { icon: 'Layers', title: 'Modern Monorepo Architecture', description: 'Turborepo and Nx configurations that share types, utilities, and components seamlessly.' },
      { icon: 'Globe', title: 'High-Performance Frontends', description: 'Server-side rendered and statically generated user interfaces that load instantly.' },
      { icon: 'Cpu', title: 'Scalable Microservices Backends', description: 'Distributed Node.js, Go, or Python microservices designed for high concurrency.' },
      { icon: 'Database', title: 'Relational & NoSQL Databases', description: 'PostgreSQL, MySQL, MongoDB, and Redis architectures optimized for zero data loss.' },
      { icon: 'Link2', title: 'Type-Safe API Contracts', description: 'tRPC, GraphQL, and OpenAPI specifications ensuring zero communication drift across layers.' },
      { icon: 'ShieldCheck', title: 'End-to-End DevOps & Security', description: 'Complete CI/CD pipelines, container orchestration, and comprehensive test coverage.' },
    ],
    faqs: [
      'What full-stack technology stacks do your engineering teams specialize in?',
      'How do you manage state and consistency between the client and database?',
      'Do you build relational (PostgreSQL) or document (MongoDB) database architectures?',
      'How do you ensure end-to-end type safety from server to browser?',
      'Can you build both customer-facing web apps and internal admin backends?',
      'Do you provide ongoing support, bug fixing, and cloud deployment after launch?',
    ],
    cta: {
      titleAccent: 'More',
      subtitle: "Let's take your product from concept to a battle-tested full-stack web and cloud platform. Our engineers will own your stack from UI to database."
    }
  },

  {
    folder: 'QA & Testing',
    componentName: 'QaTesting',
    category: 'QA and Testing',
    heroBadge: 'QA and Testing Services',
    heroTitlePrefix: 'Turn Software Bugs Into',
    heroTitleAccent: 'Flawless Quality & Reliability',
    heroSubtitle: 'We deliver comprehensive automated testing suites, security audits, and performance load benchmarks that ensure zero critical production escapes.',
    problem: {
      subtitle: 'Manual regression cycles take weeks and still let critical defects slip into production. We build automated, continuous test pipelines that ship clean code fast.',
      roadblocks: [
        { step: '01', icon: 'Layers', title: 'Costly Production Escapes', description: 'Bugs discovered by live users damage reputation and require stressful emergency hotfixes.' },
        { step: '02', icon: 'Clock', title: 'Manual Testing Delays', description: 'Engineering teams wait days for manual testers to finish repetitive regression passes.' },
        { step: '03', icon: 'AlertTriangle', title: 'Flaky Automated Tests', description: 'Unreliable test suites that fail randomly cause teams to ignore automated test results.' },
        { step: '04', icon: 'Network', title: 'Untested Edge Cases', description: 'Complex concurrency, latency spikes, and mobile edge cases go unverified until it is too late.' },
      ]
    },
    beforeAfter: {
      before: [
        'Stressful manual regression passes taking days before every deploy',
        'Critical bugs and regressions slipping through into production',
        'Lack of performance testing leading to server crashes during traffic spikes',
        'Inconsistent device coverage missing mobile and browser edge cases',
        'Security vulnerabilities identified only after customer complaints',
        'Fear of refactoring legacy code because nothing is verified by tests',
      ],
      after: [
        'Automated CI/CD test suites completing in minutes on every pull request',
        '99.7% bug detection before code ever reaches staging or production',
        'Thorough k6 load testing certifying performance under 100,000 concurrent users',
        'Cross-browser and mobile device matrix coverage using Playwright cloud grids',
        'Proactive SAST/DAST security scanning preventing vulnerabilities early',
        'Fearless refactoring with high test coverage acting as a safety net',
      ],
      centerTitle: 'Quality\nGate',
      centerSubtitle: 'Turning defects into\nverified confidence',
      quote: 'Quality is never an accident; it is always the result of intelligent effort and automated precision.',
      author: 'Jawam Infotech'
    },
    capabilities: [
      { icon: 'FlaskConical', title: 'Automated E2E Testing', description: 'Resilient Playwright and Cypress test suites that automate complex user journeys reliably.' },
      { icon: 'Zap', title: 'Performance & Load Testing', description: 'Simulate tens of thousands of concurrent users with k6 and JMeter to discover bottlenecks.' },
      { icon: 'ShieldCheck', title: 'Security & Penetration Testing', description: 'Automated vulnerability scanning, OWASP Top 10 audits, and dependency vulnerability checks.' },
      { icon: 'Smartphone', title: 'Mobile App QA (iOS & Android)', description: 'Automated Appium and real-device testing ensuring flawless mobile experiences across all OS versions.' },
      { icon: 'Link2', title: 'API & Microservice Testing', description: 'REST and GraphQL contract verification using Postman, Supertest, and Pact.' },
      { icon: 'RefreshCw', title: 'Continuous QA Integration', description: 'Embedding automated quality gates inside your CI/CD pipeline so broken code never merges.' },
    ],
    faqs: [
      'Which automated testing frameworks do you use (Playwright, Cypress, Selenium)?',
      'How do you integrate automated testing directly into our CI/CD deployment pipeline?',
      'Can you test our software under extreme traffic surges and high concurrency?',
      'Do you perform security audits, penetration testing, and OWASP compliance scans?',
      'How do you prevent flaky tests that produce false positive failures?',
      'Can you test on real physical mobile devices across different iOS and Android models?',
    ],
    cta: {
      titleAccent: 'More',
      subtitle: "Let's eliminate production bugs and build bulletproof user confidence. Our QA automation engineers will safeguard your product with every deployment."
    }
  },

  {
    folder: 'Data Analytics',
    componentName: 'DataAnalytics',
    category: 'Data Analytics',
    heroBadge: 'Data Analytics Services',
    heroTitlePrefix: 'Turn Complex Data Into',
    heroTitleAccent: 'Predictive Business Growth',
    heroSubtitle: 'We transform raw operational data into real-time executive dashboards, predictive machine learning models, and actionable growth insights.',
    problem: {
      subtitle: 'Data trapped in disconnected spreadsheets leads to contradictory numbers and delayed decisions. We deliver clean, trustworthy business intelligence in real time.',
      roadblocks: [
        { step: '01', icon: 'Layers', title: 'Siloed Disparate Data', description: 'Marketing, sales, and product metrics reside in isolated tools with zero single source of truth.' },
        { step: '02', icon: 'Clock', title: 'Delayed Manual Reports', description: 'Analysts spend countless hours copying numbers into spreadsheets instead of finding insights.' },
        { step: '03', icon: 'AlertTriangle', title: 'Conflicting Business Metrics', description: 'Different departments calculate core KPIs differently, causing executive confusion.' },
        { step: '04', icon: 'Network', title: 'Lack of Predictive Signals', description: 'Businesses only look at past historical data without warning signals for future trends.' },
      ]
    },
    beforeAfter: {
      before: [
        'Teams arguing over conflicting numbers from different spreadsheets',
        'Weekly reports taking days of manual data wrangling to produce',
        'Zero visibility into real-time customer behavior and churn risks',
        'Decisions made on gut feelings rather than empirical data signals',
        'Data leaks and ungoverned spreadsheets passed through email',
        'Underutilized customer data that yields zero actionable growth',
      ],
      after: [
        'A single source of truth with standardized metric definitions',
        'Real-time automated dashboards updating continuously without manual work',
        'Predictive machine learning models alerting you to churn and revenue opportunities',
        'Data-driven decision culture accelerating strategic pivots and product bets',
        'Role-based access control and enterprise governance across all reporting',
        'High-converting customer segmentation that unlocks tangible revenue lift',
      ],
      centerTitle: 'Analytics\nEngine',
      centerSubtitle: 'Turning data noise into\nclear strategic decisions',
      quote: 'Without data, you are just another person with an opinion. With clean data, you lead the market.',
      author: 'Jawam Infotech'
    },
    capabilities: [
      { icon: 'BarChart3', title: 'Real-Time Executive Dashboards', description: 'Interactive visual dashboards tracking revenue, churn, user cohorts, and operations in real time.' },
      { icon: 'Zap', title: 'Customer & Cohort Analytics', description: 'Deep dive into user funnels, retention curves, lifetime value, and behavior patterns.' },
      { icon: 'Cpu', title: 'Predictive Modeling & Forecasting', description: 'Time-series machine learning models that forecast sales trends and inventory demands.' },
      { icon: 'RefreshCw', title: 'Data Transformation (dbt)', description: 'Clean, test, and document your analytical data models with version-controlled dbt pipelines.' },
      { icon: 'Link2', title: 'Marketing & Attribution Analytics', description: 'Multi-touch attribution models calculating true return on ad spend (ROAS) across all channels.' },
      { icon: 'ShieldCheck', title: 'Data Governance & Access Control', description: 'Secure role-based permissions, data lineage tracking, and compliance with privacy standards.' },
    ],
    faqs: [
      'Which BI tools (PowerBI, Tableau, Looker) or custom dashboards do you build?',
      'How do you clean and transform messy data into reliable metrics?',
      'Can you set up real-time analytics instead of delayed batch reports?',
      'How do you handle customer data privacy, GDPR, and role-based permissions?',
      'Can predictive machine learning forecast our revenue and customer churn?',
      'How quickly can we expect our first working dashboards to go live?',
    ],
    cta: {
      titleAccent: 'More',
      subtitle: "Let's turn raw operational metrics into clean, predictive business intelligence. Our analytics engineers will build dashboards that empower your executive team."
    }
  },

  {
    folder: 'CRM Costomization',
    componentName: 'CrmCustomization',
    category: 'CRM Customization',
    heroBadge: 'CRM Customization Services',
    heroTitlePrefix: 'Turn Generic CRM Tools Into',
    heroTitleAccent: 'High-Velocity Sales Engines',
    heroSubtitle: 'We customize Salesforce, HubSpot, and bespoke CRM architectures to automate customer journeys, pipeline tracking, and revenue growth.',
    problem: {
      subtitle: 'Off-the-shelf CRM configurations lead to sales rep frustration and lost leads. We tailor your CRM to match your exact sales process and automate administrative burdens.',
      roadblocks: [
        { step: '01', icon: 'Layers', title: 'Sales Rep Resistance', description: 'Clunky default layouts and excessive required fields cause sales teams to avoid logging data.' },
        { step: '02', icon: 'Clock', title: 'Leads Slipping Away', description: 'Slow manual lead routing and lack of instant notification let inbound prospects go cold.' },
        { step: '03', icon: 'AlertTriangle', title: 'Disconnected Data Silos', description: 'Customer support, marketing, and sales systems operate without a unified customer record.' },
        { step: '04', icon: 'Network', title: 'Unreliable Forecasting', description: 'Inaccurate deal stages and lack of stage validation make revenue forecasts a guessing game.' },
      ]
    },
    beforeAfter: {
      before: [
        'Sales reps wasting hours daily on tedious manual data entry',
        'Inbound leads sitting unassigned for hours before first contact',
        'Fragmented customer conversations across separate email inboxes',
        'Opaque sales pipeline with unrealistic close date estimations',
        'Generic email templates yielding poor response and click rates',
        'Expensive monthly CRM subscription seats going unused by the team',
      ],
      after: [
        'Automated activity capture and 1-click deal updates saving hours',
        'Instant round-robin lead routing and immediate WhatsApp/SMS alerts',
        'Unified 360-degree customer profile integrating emails, calls, and tickets',
        'Rigorous stage gates and automated pipeline health scoring for forecasts',
        'Personalized automated drip sequences that nurture prospects efficiently',
        'High platform adoption and measurable return on your CRM investment',
      ],
      centerTitle: 'CRM\nCustom',
      centerSubtitle: 'Turning sales friction into\naccelerated deal velocity',
      quote: 'Your CRM should not be a digital filing cabinet for management; it must be an unfair weapon for your sales reps.',
      author: 'Jawam Infotech'
    },
    capabilities: [
      { icon: 'Users', title: 'Salesforce Custom Development', description: 'Apex, Lightning Web Components (LWC), and custom object tailoring for complex enterprises.' },
      { icon: 'Zap', title: 'HubSpot CRM Automation', description: 'Custom deal pipelines, automated email sequences, and marketing-sales handoff workflows.' },
      { icon: 'Cpu', title: 'Automated Lead Scoring & Routing', description: 'Algorithmic lead scoring and instant round-robin rep assignment to maximize conversions.' },
      { icon: 'RefreshCw', title: 'Legacy CRM Migration', description: 'Clean, zero-loss data migration from legacy databases or Zoho to Salesforce and HubSpot.' },
      { icon: 'Link2', title: 'Omnichannel Communication Sync', description: 'Integrate Twilio voice, WhatsApp API, and Google/Outlook mail directly into customer timelines.' },
      { icon: 'ShieldCheck', title: 'Custom Analytics & Commissions', description: 'Real-time revenue forecast dashboards, rep performance scorecards, and automated commission calculations.' },
    ],
    faqs: [
      'Do you customize Salesforce, HubSpot, or build bespoke CRM platforms?',
      'How do you automate lead routing and sales rep assignment?',
      'Can you migrate all our customer history without any data loss?',
      'Can you integrate WhatsApp, telephony, and email directly into CRM records?',
      'How do you improve sales rep adoption and simplify complex layouts?',
      'Can you build custom commission tracking and revenue forecasting modules?',
    ],
    cta: {
      titleAccent: 'More',
      subtitle: "Let's turn your CRM into a customized sales acceleration engine. Our specialists will automate workflows and give your sales team the tools to close deals faster."
    }
  },

  {
    folder: 'SEO SMO',
    componentName: 'SeoSmo',
    category: 'SEO / SMO',
    heroBadge: 'SEO & SMO Services',
    heroTitlePrefix: 'Turn Organic Search & Social Into',
    heroTitleAccent: 'Compounding Customer Growth',
    heroSubtitle: 'We deliver technical SEO architectures, high-authority content engines, and strategic social media optimization that dominate search results and drive qualified traffic.',
    problem: {
      subtitle: 'Pouring money into paid ads without organic equity creates a fragile customer acquisition model. We build compounding organic search and social engines that drive sustained inbound leads.',
      roadblocks: [
        { step: '01', icon: 'Layers', title: 'Invisible in Search Results', description: 'Your target customers are searching for your services, but your competitors capture all the clicks.' },
        { step: '02', icon: 'Clock', title: 'Technical SEO Errors', description: 'Crawl errors, poor schema markup, and sluggish site speeds cause Google algorithms to penalize you.' },
        { step: '03', icon: 'AlertTriangle', title: 'Weak Social Media Traction', description: 'Posting generic updates that generate zero engagement, shares, or qualified inbound prospects.' },
        { step: '04', icon: 'Network', title: 'Rising Paid Ad Costs', description: 'Customer acquisition costs (CAC) continue climbing without a strong organic brand moat to lower it.' },
      ]
    },
    beforeAfter: {
      before: [
        'Buried on page 4 of Google for high-value buyer keywords',
        'Failing Google Core Web Vitals with slow mobile page speeds',
        'Thin, unoptimized content that fails to rank or convert',
        'Social media profiles with stagnant engagement and zero leads',
        'High dependence on costly Google and Meta paid advertising',
        'No clear tracking connecting organic visitors to actual pipeline revenue',
      ],
      after: [
        'Page 1 rankings for competitive high-intent buyer search terms',
        '100% Core Web Vitals pass rates with lightning-fast mobile speeds',
        'Authoritative, SEO-engineered content that answers customer queries',
        'Active, engaged social communities that amplify your brand reach',
        'Compounding organic traffic that dramatically lowers customer acquisition cost',
        'Full attribution tracking connecting keywords to closed customer revenue',
      ],
      centerTitle: 'Organic\nGrowth',
      centerSubtitle: 'Turning search visibility into\npredictable inbound leads',
      quote: 'The best place to hide a dead body is the second page of Google search results. We make sure you dominate page one.',
      author: 'Jawam Infotech'
    },
    capabilities: [
      { icon: 'Search', title: 'Technical SEO Audits & Fixing', description: 'Resolve crawl errors, duplicate content, canonical issues, and XML sitemaps for maximum indexing.' },
      { icon: 'Zap', title: 'Core Web Vitals Optimization', description: 'Accelerate LCP, FID, and CLS scores to ensure your website meets Google modern speed ranking criteria.' },
      { icon: 'Cpu', title: 'Keyword Intent & Content Strategy', description: 'Target transactional keywords that bring high-intent buyers directly to your product pages.' },
      { icon: 'RefreshCw', title: 'Social Media Optimization (SMO)', description: 'Transform LinkedIn, Instagram, and Twitter profiles into active channels for brand authority.' },
      { icon: 'Link2', title: 'High-Authority Link Building', description: 'Ethical, high-impact digital PR and backlink acquisition from recognized industry publications.' },
      { icon: 'ShieldCheck', title: 'Local & Global Search Dominance', description: 'Google Business Profile optimization, local citations, and international multilingual SEO.' },
    ],
    faqs: [
      'How long does it take to see measurable ranking improvements on Google?',
      'How do you optimize Core Web Vitals and technical site architecture?',
      'What backlink acquisition and digital PR strategies do you use?',
      'How do you optimize social media profiles for lead generation (SMO)?',
      'Do you provide regular keyword ranking and organic traffic reports?',
      'How do you ensure our SEO strategy adheres to Google algorithm guidelines?',
    ],
    cta: {
      titleAccent: 'More',
      subtitle: "Let's build a compounding organic traffic engine that dominates search engines and social feeds. Our SEO/SMO strategists will put your brand on page one."
    }
  },

  {
    folder: 'IT Staff Agumentation',
    componentName: 'ItStaffAugmentation',
    category: 'IT Staff Augmentation',
    heroBadge: 'IT Staff Augmentation Services',
    heroTitlePrefix: 'Turn Talent Scarcity Into',
    heroTitleAccent: 'Immediate Engineering Velocity',
    heroSubtitle: 'Scale your engineering capacity on-demand with top 1% pre-vetted software engineers, architects, and designers who integrate smoothly into your team.',
    problem: {
      subtitle: 'Traditional tech hiring takes months and costs thousands in recruiting fees, all while product roadmaps fall behind. We provide immediate, battle-tested talent ready to build.',
      roadblocks: [
        { step: '01', icon: 'Layers', title: 'Months-Long Hiring Cycles', description: 'Spending 3 to 6 months screening resumes while your core product roadmap grinds to a halt.' },
        { step: '02', icon: 'Clock', title: 'Expensive Recruiter Fees', description: 'Paying 20-30% agency placement fees with zero guarantee of long-term candidate retention.' },
        { step: '03', icon: 'AlertTriangle', title: 'Skill Mismatch Risks', description: 'Hiring candidates whose real coding performance fails to match their inflated resume credentials.' },
        { step: '04', icon: 'Network', title: 'Timezone & Culture Friction', description: 'Outsourced contractors who struggle to communicate or work asynchronously with your core team.' },
      ]
    },
    beforeAfter: {
      before: [
        'Months spent sifting through hundreds of unqualified resumes',
        'Expensive recruiting fees and heavy HR overhead',
        'Critical feature roadmaps delayed due to key engineering shortages',
        'High risk of bad hires requiring painful severance procedures',
        'Inconsistent code quality from unvetted external contractors',
        'Difficulties scaling team sizes up or down as project needs change',
      ],
      after: [
        'Pre-vetted senior engineers matched to your tech stack in under 48 hours',
        'Zero recruiting fees, zero payroll liabilities, and simple monthly billing',
        'Roadmap acceleration with engineers contributing production code on week one',
        'Rigorous technical evaluation with live coding benchmarks already completed',
        'Engineers who follow your Git workflows, code reviews, and sprint rituals',
        'Total flexibility to scale team size up or down with 30 days notice',
      ],
      centerTitle: 'Talent\nSquad',
      centerSubtitle: 'Turning talent shortages into\nday-one sprint velocity',
      quote: 'Great software is built by great people. We give you instant access to the top 1% without the hiring headaches.',
      author: 'Jawam Infotech'
    },
    capabilities: [
      { icon: 'UserCog', title: 'Dedicated Full-Stack Engineers', description: 'Senior React, Node.js, Python, Go, and mobile developers who join your daily standups.' },
      { icon: 'Cpu', title: 'Cloud & DevOps Specialists', description: 'Certified AWS, GCP, Terraform, and Kubernetes engineers to stabilize your cloud infrastructure.' },
      { icon: 'Zap', title: 'Dedicated Agile Squads', description: 'Complete cross-functional teams including a Tech Lead, Senior Developers, QA, and UI/UX Designer.' },
      { icon: 'RefreshCw', title: 'QA Automation Engineers', description: 'Experienced test automation developers to build and maintain your Playwright and Cypress suites.' },
      { icon: 'Link2', title: 'AI & Data Engineers', description: 'Specialized machine learning and data engineering talent to build pipelines and AI models.' },
      { icon: 'ShieldCheck', title: 'Flexible Engagement Models', description: 'Full-time dedicated, part-time augmentation, or milestone-based models with zero lock-in.' },
    ],
    faqs: [
      'How quickly can pre-vetted engineers join our daily sprints?',
      'How do you screen and test the technical quality of your engineers?',
      'Can we interview and approve developers before they join our team?',
      'How do you manage time zone overlap and team communication?',
      'What happens if a developer is not the right cultural or technical fit?',
      'What are your contract lengths and terms for scaling team size up or down?',
    ],
    cta: {
      titleAccent: 'More',
      subtitle: "Let's expand your engineering capacity and accelerate your product roadmap. Connect with top 1% pre-vetted engineers ready to contribute from day one."
    }
  },

  {
    folder: 'Data Engineering Services',
    componentName: 'DataEngineeringServices',
    category: 'Data Engineering',
    heroBadge: 'Data Engineering Services',
    heroTitlePrefix: 'Turn Messy Data Silos Into',
    heroTitleAccent: 'High-Speed Cloud Pipelines',
    heroSubtitle: 'We build reliable data foundations, automated ETL/ELT pipelines, and scalable cloud warehouses that transform complex information into clean, trustworthy assets.',
    problem: {
      subtitle: 'Fragile batch scripts break in the middle of the night, leaving executives with stale, corrupt data. We engineer self-healing, automated data pipelines.',
      roadblocks: [
        { step: '01', icon: 'Layers', title: 'Scattered Data Formats', description: 'Information lives across dozens of databases, CSVs, and third-party APIs without consistency.' },
        { step: '02', icon: 'Clock', title: 'Fragile ETL Scripts', description: 'Legacy batch jobs break frequently, requiring engineering hours to debug and backfill.' },
        { step: '03', icon: 'AlertTriangle', title: 'Slow Query Performance', description: 'Queries that take minutes or hours to execute paralyze executive decision-making.' },
        { step: '04', icon: 'Network', title: 'Zero Data Lineage', description: 'Lack of metadata governance leaves teams unsure if numbers in dashboards can be trusted.' },
      ]
    },
    beforeAfter: {
      before: [
        'Disjointed data silos with multiple conflicting versions of the truth',
        'Manual CSV handling and fragile overnight cron scripts that fail',
        'Delayed queries causing sluggish dashboard load times',
        'Zero automated testing on incoming raw data streams',
        'High infrastructure costs on unoptimized cloud warehouse queries',
        'Data teams spending 80% of time fixing pipelines instead of analytics',
      ],
      after: [
        'Unified, high-performance cloud data warehouse as single source of truth',
        'Automated, self-healing ELT pipelines with automated alerting',
        'Sub-second query response times powered by optimized clustering and partitioning',
        'Continuous data quality checks verifying schemas and nullability',
        'Optimized warehouse compute reducing Snowflake and BigQuery costs',
        'Reliable, trusted data assets ready for enterprise BI and real-time AI',
      ],
      centerTitle: 'Pipeline\nCore',
      centerSubtitle: 'Turning raw data into\ntrusted intelligence',
      quote: "Data is not just information. It is a competitive advantage when engineered right.",
      author: 'Jawam Infotech'
    },
    capabilities: [
      { icon: 'Database', title: 'Cloud Data Platforms', description: 'Scalable data warehouse architectures on Snowflake, BigQuery, and Databricks.' },
      { icon: 'Zap', title: 'Automated ELT Pipelines', description: 'Reliable, idempotent data workflows built with dbt, Airflow, and Prefect.' },
      { icon: 'Cpu', title: 'Real-Time Streaming', description: 'Low-latency event-driven streaming architectures using Apache Kafka and Apache Flink.' },
      { icon: 'RefreshCw', title: 'Data Warehouse Modernization', description: 'Migrate legacy on-premise Oracle or SQL Server systems to high-speed cloud platforms.' },
      { icon: 'Link2', title: 'Data Integration & CDC', description: 'Connect multiple third-party systems using Change Data Capture (Debezium) and modern APIs.' },
      { icon: 'ShieldCheck', title: 'Data Quality & Governance', description: 'Enforce Great Expectations data validation, metadata catalogs, and lineage tracking.' },
    ],
    faqs: [
      'Can you work with our existing cloud data warehouse and database stacks?',
      'Which cloud platforms (Snowflake, BigQuery, Databricks, Redshift) do you support?',
      'Can you help us migrate our legacy data systems with zero downtime?',
      'Do you provide real-time event streaming architectures using Apache Kafka?',
      'How do you ensure data security, encryption, and GDPR/HIPAA compliance?',
      'Do you offer ongoing data pipeline maintenance, alerting, and support?',
    ],
    cta: {
      titleAccent: 'More',
      subtitle: "Let's build the reliable data foundation that helps you turn insights into action. Our team of data engineers will unlock the full potential of your business growth."
    }
  }
];

function generateFiles() {
  const pagesDir = path.join(rootDir, 'src', 'pages');

  const iconMapping = {
    'Web Development': 'Globe',
    'Mobile App Development': 'Smartphone',
    'UIUX Design': 'Pencil',
    'Artificial Intelligence': 'BrainCircuit',
    'Devops and cloud': 'Cloud',
    'Custom Software': 'Settings',
    'Third Party Integration': 'Plug',
    'Full Stack Development': 'Layers',
    'QA & Testing': 'FlaskConical',
    'Data Analytics': 'BarChart3',
    'CRM Costomization': 'Users',
    'SEO SMO': 'Search',
    'IT Staff Agumentation': 'UserCog',
    'Data Engineering Services': 'Database',
  };

  pagesData.forEach((p) => {
    const targetFolder = path.join(pagesDir, p.folder);
    const compDir = path.join(targetFolder, 'components');
    const badgeIcon = p.badgeIcon || iconMapping[p.folder] || 'Code2';

    if (!fs.existsSync(compDir)) {
      fs.mkdirSync(compDir, { recursive: true });
    }

    // 1. Write style.css - Matching software.css EXACTLY
    const cssContent = `/* ${p.category} styles */
#service-page::before {
  content: "";
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background:
    radial-gradient(circle 420px at 12% 15%, rgba(56, 189, 248, 0.18), transparent 70%),
    radial-gradient(circle 480px at 88% 30%, rgba(37, 99, 235, 0.15), transparent 70%),
    radial-gradient(circle 420px at 20% 85%, rgba(56, 189, 248, 0.14), transparent 70%),
    radial-gradient(circle 460px at 90% 90%, rgba(37, 99, 235, 0.12), transparent 70%);
}
`;
    fs.writeFileSync(path.join(targetFolder, 'style.css'), cssContent, 'utf-8');

    // 2. Write Hero.jsx - Matching Software Development Hero.jsx with unique service badge icon
    const heroContent = `import React from 'react';
import { Link } from 'react-router-dom';
import { ${badgeIcon} } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-36 lg:pt-[210px] pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center">

        <button
          className="hero-animate hero-delay-1 inline-flex items-center gap-1.5 md:gap-2 lg:gap-3 mt-[-15px] md:mt-[-20px] lg:mt-[-25px] mb-3 md:mb-4 lg:mb-5 bg-[#F3F4F6] hover:bg-white transition-all rounded-full px-3 md:px-4 lg:px-6 py-1 md:py-1.5 lg:py-2 shadow-sm"
        >
          <${badgeIcon} className="w-5 h-5 text-[#3b82f6]" strokeWidth={2.2} />
          <span className="text-[11px] md:text-[13px] lg:text-[16px] font-semibold text-[#4B5563]">
            ${p.heroBadge}
          </span>
        </button>

        {/* Main Title */}
        <h1 className="text-2xl md:text-5xl mt-4 md:mt-0 lg:mt-4 lg:text-[50px] text-left md:text-center lg:text-center font-extrabold tracking-tight text-white lg:leading-[55px] mb-4 md:mb-6 lg:mb-6 max-w-3xl">
          ${p.heroTitlePrefix}{' '}
          <span className="text-[#04A3DA]">
            ${p.heroTitleAccent}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm md:text-lg text-left md:text-center lg:text-center lg:text-lg text-slate-300 max-w-2xl leading-relaxed mb-10">
          ${p.heroSubtitle}
        </p>

        {/* Dual CTA Buttons */}
        <div className="hero-animate hero-delay-3 mt-[-17px] md:mt-0 lg:mt-[-15px] flex flex-row items-center justify-center gap-2 sm:gap-4 md:gap-3 lg:gap-4 mt-0 lg:mt-6 mb-4 lg:mb-8">
          <Link
            to="/contact-us"
            className="hero-btn-primary flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 md:gap-1.5 lg:gap-2 text-xs sm:text-sm md:text-xs lg:text-sm text-white font-semibold px-4 sm:px-6 md:px-4 lg:px-6 py-2.5 sm:py-3 md:py-2 lg:py-3 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] shadow-[0_4px_20px_rgba(14,165,233,0.3)] hover:opacity-95 transition-all whitespace-nowrap"
          >
            Talk to Our Experts
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
            </svg>
          </Link>
          <Link
            to="/portfolio"
            className="hero-btn-secondary flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 md:gap-1.5 lg:gap-2 text-xs sm:text-sm md:text-xs lg:text-sm text-slate-900 font-semibold px-4 sm:px-6 md:px-4 lg:px-6 py-2.5 sm:py-3 md:py-2 lg:py-3 rounded-full bg-white hover:bg-slate-100 transition-all border border-white whitespace-nowrap"
          >
            Explore Our Work
          </Link>
        </div>

      </div>
    </section>
  );
}
`;
    fs.writeFileSync(path.join(compDir, 'Hero.jsx'), heroContent, 'utf-8');

    // 3. Write ProblemRoadblocks.jsx - Matching Software Development ProblemRoadblocks.jsx EXACTLY
    const problemContent = `import React, { useEffect, useRef } from 'react';
import { Layers, Clock, AlertTriangle, Network, ArrowRight } from 'lucide-react';

export default function ProblemRoadblocks() {
  const roadblocks = ${JSON.stringify(p.problem.roadblocks, null, 4)};

  const iconMap = {
    Layers,
    Clock,
    AlertTriangle,
    Network
  };

  const headingRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const heading = headingRef.current;
    const grid = gridRef.current;
    if (!heading || !grid) return;

    const cards = grid.querySelectorAll(".pr-step-card");

    const headingObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            heading.classList.add("pr-heading-in");
            headingObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    headingObserver.observe(heading);

    const gridObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cards.forEach((card, i) => {
              card.style.transitionDelay = \`\${i * 100}ms\`;
              card.classList.add("pr-card-in");
            });
            gridObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    gridObserver.observe(grid);

    return () => {
      headingObserver.disconnect();
      gridObserver.disconnect();
    };
  }, []);

  return (
    <section className="relative py-0 md:py-0 mt-0 md:mt-[-30px] lg:mt-0 lg:py-0 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <style>{\`
        .pr-heading-hidden {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        }
        .pr-heading-in {
          opacity: 1;
          transform: translateY(0);
        }
        .pr-step-card {
          opacity: 0;
          transform: translateY(30px) scale(0.97);
          transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .pr-card-in {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .pr-icon-pulse {
          animation: prIconPulse 2.6s ease-in-out infinite;
        }
        @keyframes prIconPulse {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .pr-heading-hidden, .pr-step-card {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
          .pr-icon-pulse {
            animation: none !important;
          }
        }
      \`}</style>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <div
          ref={headingRef}
          className="pr-heading-hidden text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          <p className="text-sky-400 text-xs sm:text-sm font-bold tracking-[0.25em] uppercase mb-3">
            THE PROBLEM WE SOLVE
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold text-white tracking-tight leading-tight mb-4">
            Your ${p.category} Has Potential. Let's{' '}
            <span className="text-[#04A3DA]">
              Remove the Roadblocks.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-left md:text-center lg:text-center text-slate-300 leading-relaxed">
            ${p.problem.subtitle}
          </p>
        </div>

        {/* 4 Cards in Horizontal Flow with Connectors */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 mt-[-35px] lg:mt-[-35px] md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 relative"
        >
          {roadblocks.map((item, index) => {
            const Icon = iconMap[item.icon] || Layers;
            return (
              <div key={index} className="relative group">
                <div className="pr-step-card h-full hover:bg-slate-900 border border-slate-700 hover:border-sky-500/40 rounded-2xl p-4 sm:p-5 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/10">

                  {/* Top Bar: Icon & Step Number */}
                  <div className="flex items-start justify-between mb-3 space-y-4">
                    <div className="pr-icon-pulse text-sky-400 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" strokeWidth={2} />
                    </div>
                    <span className="text-xs font-semibold text-slate-500 group-hover:text-sky-400 transition-colors">
                      {item.step}
                    </span>
                  </div>

                  {/* Text Content */}
                  <h3 className="text-sm sm:text-[15px] font-bold text-white mb-1.5 group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] md:text-xs lg:text-[14px] lg:mt-1 text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Arrow Connector (Visible only on desktop between cards) */}
                {index < roadblocks.length - 1 && (
                  <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-20 text-sky-400 items-center justify-center pointer-events-none">
                    <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
`;
    fs.writeFileSync(path.join(compDir, 'ProblemRoadblocks.jsx'), problemContent, 'utf-8');

    // 4. Write BeforeAfter.jsx - Matching Software Development BeforeAfter.jsx EXACTLY
    const beforeAfterContent = `import React, { useEffect, useRef } from 'react';
import { X, Check, ArrowRight, Code2 } from 'lucide-react';

export default function BeforeAfter() {
  const beforePoints = ${JSON.stringify(p.beforeAfter.before, null, 4)};
  const afterPoints = ${JSON.stringify(p.beforeAfter.after, null, 4)};

  const headingRef = useRef(null);
  const rowRef = useRef(null);

  useEffect(() => {
    const heading = headingRef.current;
    const row = rowRef.current;
    if (!heading || !row) return;

    const headingObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            heading.classList.add("ba-heading-in");
            headingObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    headingObserver.observe(heading);

    const rowObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const before = row.querySelector(".ba-before");
            const center = row.querySelector(".ba-center");
            const after = row.querySelector(".ba-after");
            const quote = row.querySelector(".ba-quote");

            if (before) { before.style.transitionDelay = "0ms"; before.classList.add("ba-in-left"); }
            if (center) { center.style.transitionDelay = "180ms"; center.classList.add("ba-in-pop"); }
            if (after) { after.style.transitionDelay = "300ms"; after.classList.add("ba-in-right"); }
            if (quote) { quote.style.transitionDelay = "450ms"; quote.classList.add("ba-in-fade"); }

            rowObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    rowObserver.observe(row);

    return () => {
      headingObserver.disconnect();
      rowObserver.disconnect();
    };
  }, []);

  return (
    <section className="relative py-0 sm:py-16 md:py-0 pt-[70px] md:pt-[100px] lg:pt-[120px] px-4 sm:px-6 lg:px-8 overflow-hidden">
      <style>{\`
        .ba-heading-hidden {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        }
        .ba-heading-in {
          opacity: 1;
          transform: translateY(0);
        }
        .ba-before, .ba-after {
          opacity: 0;
          transition: opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .ba-before { transform: translateY(24px); }
        .ba-after { transform: translateY(24px); }
        @media (min-width: 768px) {
          .ba-before { transform: translateX(-36px); }
          .ba-after { transform: translateX(36px); }
        }
        .ba-in-left, .ba-in-right {
          opacity: 1;
          transform: translate(0);
        }
        .ba-center {
          opacity: 0;
          transform: scale(0.85);
          transition: opacity 0.55s cubic-bezier(0.34, 1.56, 0.64, 1),
                      transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .ba-in-pop {
          opacity: 1;
          transform: scale(1);
        }
        .ba-quote {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .ba-in-fade {
          opacity: 1;
          transform: translateY(0);
        }
        .ba-node-pulse {
          animation: baNodePulse 2.6s ease-in-out infinite;
        }
        @keyframes baNodePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.25); }
          50% { box-shadow: 0 0 0 8px rgba(56, 189, 248, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ba-heading-hidden, .ba-before, .ba-after, .ba-center, .ba-quote {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
          .ba-node-pulse {
            animation: none !important;
          }
        }
      \`}</style>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <div
          ref={headingRef}
          className="ba-heading-hidden text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12"
        >
          <p className="text-sky-400 text-[11px] md:text-xs lg:text-[14px] font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-2">
            FROM CHALLENGES TO CONFIDENCE
          </p>
          <h2 className="text-[22px] leading-[28px] sm:text-3xl md:text-[36px] md:leading-[40px] lg:text-[40px] lg:leading-[40px] md:mt-6 font-extrabold text-white tracking-tight">
            A Clearer Path From{' '}
            <span className="text-[#38BDF8]">
              ${p.category} Challenges to Real Business Value
            </span>
          </h2>
        </div>

        {/* Layout: Before → Center → After → Quote */}
        <div ref={rowRef} className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 md:gap-4 items-stretch">

          {/* Main Comparison Area (Before + Transition + After) */}
          <div className="md:col-span-9 grid mt-0 md:mt-[-25px] grid-cols-1 md:grid-cols-12 gap-4 sm:gap-4 md:gap-3 items-stretch md:items-center">

            {/* Before Card */}
            <div className="ba-before md:col-span-5 h-full border border-slate-700 rounded-2xl p-4 sm:p-5 shadow-xl transition-all duration-300 hover:border-red-500/30 hover:-translate-y-1">
              <div className="flex items-center gap-2.5 mb-3.5 sm:mb-4">
                <div className="w-7 h-7 rounded-full bg-red-500 text-white flex items-center justify-center shrink-0">
                  <X className="w-4 h-4" strokeWidth={3} />
                </div>
                <span className="text-lg sm:text-[20px] font-bold text-white">Before</span>
              </div>

              <ul className="space-y-2 sm:space-y-2.5">
                {beforePoints.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-red-500/15 text-red-400 flex items-center justify-center shrink-0">
                      <X className="w-2.5 h-2.5" strokeWidth={3} />
                    </div>
                    <span className="text-[13px] sm:text-[16px] text-slate-400 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Center Transition Node */}
            <div className="ba-center md:col-span-2 flex flex-row md:flex-col items-center justify-center gap-3 md:gap-2 py-1 md:py-0">
              <ArrowRight className="w-5 h-5 text-sky-400 shrink-0 rotate-90 md:rotate-0" strokeWidth={2.5} />

              <div className="flex flex-col items-center text-center px-1">
                <div className="ba-node-pulse w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-sky-400/30 text-sky-400 flex items-center justify-center mb-2 sm:mb-2.5">
                  <Code2 className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div className="text-xs sm:text-sm font-bold text-white leading-tight mb-1 sm:mb-1.5 whitespace-nowrap md:whitespace-normal">
                  ${p.beforeAfter.centerTitle.replace('\n', '<br />')}
                </div>
                <div className="hidden sm:block text-[11px] sm:text-[12px] text-slate-400 leading-snug">
                  ${p.beforeAfter.centerSubtitle.replace('\n', '<br />')}
                </div>
              </div>

              <ArrowRight className="w-5 h-5 text-sky-400 shrink-0 rotate-90 md:rotate-0" strokeWidth={2.5} />
            </div>

            {/* After Card */}
            <div className="ba-after md:col-span-5 h-full lg:mt-0 border border-slate-700 rounded-2xl p-4 sm:p-5 shadow-xl transition-all duration-300 hover:border-emerald-500/30 hover:-translate-y-1">
              <div className="flex items-center gap-2.5 mb-3.5 sm:mb-4">
                <div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4" strokeWidth={3} />
                </div>
                <span className="text-lg sm:text-[16px] font-bold text-white">After</span>
              </div>

              <ul className="space-y-2 sm:space-y-2.5">
                {afterPoints.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5" strokeWidth={3} />
                    </div>
                    <span className="text-[13px] sm:text-[16px] text-slate-300 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Column: Quote Box */}
          <div className="md:col-span-3 flex md:h-[200px]">
            <div className="ba-quote w-full border border-slate-700 rounded-2xl p-5 flex flex-col justify-center transition-all duration-300 hover:border-sky-500/30">
              <div className="text-4xl leading-none text-slate-600 font-serif mb-3">&ldquo;</div>
              <p className="text-sm text-slate-200 lg:mt-[-15px] font-medium leading-relaxed mb-4 sm:mb-5">
                ${p.beforeAfter.quote}
              </p>
              <div className="text-xs text-slate-400">— ${p.beforeAfter.author}</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
`;
    fs.writeFileSync(path.join(compDir, 'BeforeAfter.jsx'), beforeAfterContent, 'utf-8');

    // 5. Write Capabilities.jsx - Matching Software Development Capabilities.jsx EXACTLY
    const iconNames = Array.from(new Set(p.capabilities.map(c => c.icon))).join(', ');
    const capContent = `import React from 'react';
import { ${iconNames} } from 'lucide-react';

const capabilities = [
${p.capabilities.map(c => `  {
    icon: ${c.icon},
    title: '${c.title.replace(/'/g, "\\'")}',
    description: '${c.description.replace(/'/g, "\\'")}',
  },`).join('\n')}
];

export default function Capabilities() {
  return (
    <section className="w-full mt-[60px] md:mt-[80px] lg:mt-[100px] max-w-[1210px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24 relative z-10">
      <style>{\`
        @keyframes iconFloatIdle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        .icon-float-idle {
          animation: iconFloatIdle 2.4s ease-in-out infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .icon-float-idle {
            animation: none;
          }
        }
      \`}</style>

      {/* Section Header */}
      <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-12">
        <p className="text-[#04A3DA] font-semibold text-[13px] sm:text-[14px] tracking-widest uppercase mb-3">
          WHAT WE CAN BUILD
        </p>
        <h2 className="font-bold text-[24px] sm:text-[34px] md:text-[42px] lg:text-[46px] leading-tight text-white tracking-[-0.5px]">
          Our ${p.category} <span className="text-[#04A3DA]">Capabilities</span>
        </h2>
      </div>

      {/* 6 Capabilities Cards Grid */}
      <div className="grid grid-cols-1 lg:mt-[-10px] md:mt-[-20px] mt-[-10px] md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4 lg:gap-6">
        {capabilities.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[20px] border border-white/10 p-5 sm:p-7 md:p-5 flex flex-col justify-between transition-all duration-300 ease-out sm:hover:bg-[#15233E]/80 sm:hover:border-[#04A3DA]/60 sm:hover:-translate-y-1.5 sm:hover:shadow-[0_12px_30px_-8px_rgba(4,163,218,0.22)] backdrop-blur-sm"
            >
              {/* Subtle top hover highlight accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#04A3DA] to-transparent opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div>
                {/* Icon */}
                <div
                  className="icon-float-idle w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#04A3DA]/10 flex items-center justify-center mb-4 sm:mb-5 text-[#04A3DA] sm:group-hover:scale-105 sm:group-hover:bg-[#04A3DA]/20 sm:group-hover:border-[#04A3DA]/40 transition-all duration-300"
                  style={{ animationDelay: \`\${(index % 3) * 0.4}s\` }}
                >
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-white text-[17px] sm:text-[16px] leading-snug mb-2.5 sm:mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[#B4BAC5] sm:group-hover:text-[#E7E8EA] text-[14px] sm:text-[14px] leading-[21px] sm:leading-[24px] transition-colors duration-200">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
`;
    fs.writeFileSync(path.join(compDir, 'Capabilities.jsx'), capContent, 'utf-8');

    // 6. Write SolutionArchitecture.jsx (FAQ Section) - Matching Software Development SolutionArchitecture.jsx EXACTLY
    const faqs = p.faqs;
    const archContent = `import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Plus, Minus } from 'lucide-react';
import { Link } from "react-router-dom";

export default function SolutionArchitecture() {
  const faqs = ${JSON.stringify(faqs, null, 4)};

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const leftRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const left = leftRef.current;
    const list = listRef.current;
    if (!left || !list) return;

    const leftObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            left.classList.add("faq-left-in");
            leftObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    leftObserver.observe(left);

    const items = list.querySelectorAll(".faq-item");
    const listObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            items.forEach((item, i) => {
              item.style.transitionDelay = \`\${i * 80}ms\`;
              item.classList.add("faq-item-in");
            });
            listObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    listObserver.observe(list);

    return () => {
      leftObserver.disconnect();
      listObserver.disconnect();
    };
  }, []);

  return (
    <section className="relative py-0 md:py-0 mt-0 md:mt-[-20px] lg:mt-0 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <style>{\`
        .faq-left-hidden {
          opacity: 0;
          transform: translateX(-24px);
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        }
        .faq-left-in {
          opacity: 1;
          transform: translateX(0);
        }
        .faq-item {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.5s cubic-bezier(0.22, 1, 0.36, 1),
                      border-color 0.3s ease;
        }
        .faq-item-in {
          opacity: 1;
          transform: translateY(0);
        }
        .faq-answer {
          display: grid;
          grid-template-rows: 0fr;
          opacity: 0;
          transition: grid-template-rows 0.35s ease, opacity 0.3s ease;
        }
        .faq-answer.faq-answer-open {
          grid-template-rows: 1fr;
          opacity: 1;
        }
        .faq-answer > div {
          overflow: hidden;
        }
        .faq-icon-rotate {
          transition: transform 0.3s ease;
        }
        .faq-icon-rotate.faq-icon-open {
          transform: rotate(90deg);
        }
        @media (prefers-reduced-motion: reduce) {
          .faq-left-hidden, .faq-item {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
          .faq-answer {
            transition: none !important;
          }
        }
      \`}</style>

      <div className="max-w-[1130px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-start">

          {/* Left Column: Header + CTA */}
          <div ref={leftRef} className="faq-left-hidden lg:col-span-4 flex flex-col items-start text-left lg:mt-2">
            <p className="text-sky-400 text-[12px] mx-auto md:mx-auto lg:mx-0 md:text-[15px] lg:text-[13px] font-bold tracking-[0.25em] uppercase mb-3">
              FREQUENTLY ASKED QUESTIONS
            </p>
            <h2 className="text-2xl sm:text-3xl hidden md:hidden lg:block lg:text-[40px] lg:leading-[45px] font-extrabold text-white tracking-tight leading-tight mb-4">
              Questions Before You Get Started
            </h2>
            <p className="text-[16px] hidden md:hidden lg:block text-slate-400 leading-relaxed mb-6">
              Have questions? We've got answers. Here are some of the most common questions about our ${p.category.toLowerCase()} services.
            </p>
            <Link
              to="/contact-us"
              className="hidden md:hidden lg:block md:inline-flex lg:inline-flex items-center gap-2 bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] hover:opacity-90 hover:scale-[1.03] active:scale-[0.98] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all"
            >
              <span>Ask a Question</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Column: Accordion FAQ List */}
          <div ref={listRef} className="lg:col-span-8 flex flex-col gap-2 mt-[-15px] lg:mt-0 md:mt-0">
            {faqs.map((question, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="faq-item bg-slate-900/70 border border-slate-800 hover:border-sky-500/40 rounded-lg overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 px-4 py-2.5 text-left cursor-pointer"
                  >
                    <span className="text-xs md:text-[13px] lg:text-[15px] font-medium text-slate-200">
                      {question}
                    </span>
                    <span className={\`faq-icon-rotate \${isOpen ? 'faq-icon-open' : ''} shrink-0 w-5 h-5 rounded-full bg-sky-500/10 text-sky-400 flex items-center justify-center\`}>
                      {isOpen ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                    </span>
                  </button>

                  <div className={\`faq-answer \${isOpen ? 'faq-answer-open' : ''}\`}>
                    <div>
                      <p className="px-4 pb-3 -mt-0.5 text-[11px] sm:text-xs text-slate-400 leading-relaxed">
                        Reach out to our team and we'll walk you through exactly how we can help with this.
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
`;
    fs.writeFileSync(path.join(compDir, 'SolutionArchitecture.jsx'), archContent, 'utf-8');

    // 7. Write CallToAction.jsx - Matching Software Development CallToAction.jsx EXACTLY
    const ctaContent = `import React from 'react';
import { Link } from 'react-router-dom';

export default function CallToAction() {
  return (
    <section id="dream-team-section" className="px-4 mb-0 md:mb-0 lg:mb-16 md:mt-16 mt-12 lg:mt-24">
      <div className="max-w-[1150px] mx-auto">
        <div className="bg-[linear-gradient(357.37deg,_rgba(177,226,244,0.2)_1.93%,_rgba(230,246,251,0.2)_97.52%)] border border-white/10 rounded-2xl px-4 md:px-6 lg:px-10 py-6 md:py-10 lg:py-12 text-center">
          <h2 className="font-semibold text-[28px] md:text-[42px] lg:text-[56px] leading-[32px] md:leading-[48px] lg:leading-[64px] tracking-[-0.5px] text-white text-center mb-4 md:mb-6">
            Your ${p.category} Has <span className="text-sky-400">${p.cta.titleAccent}</span> To Deliver
          </h2>
          <p className="mb-4 md:mb-6 mx-auto max-w-[850px] text-[#E7E8EA] font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[16px] md:leading-[18px] lg:leading-[20px] tracking-[-0.5px] text-center">
            ${p.cta.subtitle}
          </p>
          <div className="flex flex-row items-center justify-center gap-2 sm:gap-3 mt-4 md:mt-6">
            <Link
              to="/contact-us"
              className="inline-flex items-center gap-1.5 sm:gap-2 text-white text-[11px] sm:text-xs md:text-sm font-semibold px-3 sm:px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] shadow-[0_4px_20px_rgba(14,165,233,0.3)] hover:opacity-95 transition-all whitespace-nowrap"
            >
              Start a conversation
              <svg className="w-3 h-3 md:w-4 md:h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
              </svg>
            </Link>
            <Link
              to="/services#services-cards"
              className="inline-flex items-center gap-2 text-[#0F172A] text-[11px] sm:text-xs md:text-sm font-semibold px-3 sm:px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-white hover:bg-slate-100 transition-all shadow-lg whitespace-nowrap"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
`;
    fs.writeFileSync(path.join(compDir, 'CallToAction.jsx'), ctaContent, 'utf-8');

    // 8. Write Main Page component - Matching SoftwareDevelopment.jsx EXACTLY
    const pageContent = `import React from 'react';
import Hero from './components/Hero';
import ProblemRoadblocks from './components/ProblemRoadblocks';
import BeforeAfter from './components/BeforeAfter';
import Capabilities from './components/Capabilities';
import SolutionArchitecture from './components/SolutionArchitecture';
import CallToAction from './components/CallToAction';
import './style.css';

export default function ${p.componentName}() {
  return (
    <main id="service-page" className="min-h-screen text-white">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. The Problem We Solve / Roadblocks */}
      <ProblemRoadblocks />

      {/* 3. From Challenges to Confidence (Before / After Comparison & Quote) */}
      <BeforeAfter />

      {/* 4. Capabilities (What We Can Build) */}
      <Capabilities />

      {/* 5. Solution Architecture / FAQs */}
      <SolutionArchitecture />

      {/* 6. Call To Action Banner */}
      <CallToAction />
    </main>
  );
}
`;
    fs.writeFileSync(path.join(targetFolder, `${p.componentName}.jsx`), pageContent, 'utf-8');

    console.log(`Generated perfectly matching files for ${p.folder} -> ${p.componentName}.jsx`);
  });
}

generateFiles();
