
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence, useMotionTemplate } from "framer-motion";
import { Layers, Database, Cloud, Sparkles, Workflow, Shield, ArrowRight, X, CheckCircle2, Zap, Trophy, Rocket, Target, ChevronRight } from "lucide-react";

// Icons now use the unified Dark Gold #B38728
const services = [
    {
        id: 1,
        title: "Full Stack Web Development",
        description: "Seamless, pixel-perfect frontend interfaces backed by robust, scalable backend architectures.",
        icon: Layers,
        details: ["React / TypeScript Frontend", "Node.js & Express Backend", "MongoDB, Redis", "Clean architecture & APIs"],
        popupData: {
            services: [
                { title: "Custom Frontend Architecture", points: ["React.js & Next.js mastery", "Complex state management (Redux/Zustand)", "Performance optimization (Core Web Vitals)", "Responsive & Mobile-First Design", "Accessibility Compliance (WCAG 2.1)"] },
                { title: "Scalable Backend Systems", points: ["RESTful & GraphQL API Design", "Microservices Architecture", "Database Modeling (SQL/NoSQL)", "Authentication & Authorization (OAuth/JWT)", "Serverless Functions implementation"] },
                { title: "Real-time Applications", points: ["WebSockets & Socket.io", "Live Chat & Notifications", "Real-time Data Visualization", "Multi-user Collaboration tools", "Event-driven updates"] },
                { title: "Progressive Web Apps (PWA)", points: ["Offline Capabilities", "Service Workers", "App-like User Experience", "Push Notifications", "Fast Load Times & Caching"] },
                { title: "System Maintenance", points: ["Bug Fixes & Troubleshooting", "Security Updates & Patching", "Performance Monitoring", "Code Refactoring", "Dependency Management"] }
            ],
            solutions: [
                { title: "E-Commerce Platforms", points: ["Custom Shopping Carts", "Secure Payment Gateways (Stripe/PayPal)", "Inventory Management Systems", "User Accounts & Profiles", "Admin Dashboards"] },
                { title: "SaaS Applications", points: ["Subscription Management", "Multi-tenancy Architecture", "Role-Based Access Control", "Analytics Data Visualization", "Onboarding Workflows"] },
                { title: "Social Networking Sites", points: ["User Feeds & Timelines", "Friend/Follow Logic", "Media Upload & Processing", "Activity Streams", "Direct Messaging Systems"] },
                { title: "Booking & Reservation Systems", points: ["Calendar Integrations", "Availability Scheduling", "Automated Reminders", "Cancellation Handling", "Resource Management"] },
                { title: "Content Management Systems (CMS)", points: ["Custom Editor Interfaces", "Media Libraries", "Content Versioning", "Draft & Publish Workflows", "SEO Management Tools"] }
            ],
            techStack: ["React", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL", "Redis", "Docker", "AWS", "Framer Motion"],
            process: [
                { step: "01", title: "Discovery", desc: "Understanding your business goals, target audience, and functional requirements." },
                { step: "02", title: "Architecture", desc: "Designing a scalable system architecture and choosing the right tech stack." },
                { step: "03", title: "Development", desc: "Agile development with regular updates and iterative feedback loops." },
                { step: "04", title: "Testing", desc: "Rigorous QA testing including unit, integration, and user acceptance testing." },
                { step: "05", title: "Deployment", desc: "Seamless deployment to production with CI/CD pipelines and monitoring." }
            ],
            whyMe: ["Top 1% Engineering Talent", "Pixel-Perfect Attention to Detail", "Focus on Scalability & Performance", "Proactive Communication", "Post-Launch Support"],
            cta: "Ready to dominate your market with a world-class web application?"
        }
    },
    {
        id: 2,
        title: "Backend & Microservices",
        description: "High-performance server-side logic, API development, and distributed systems architecture.",
        icon: Database,
        details: ["Microservices & REST APIs", "RabbitMQ event-driven systems", "Authentication & authorization", "Performance optimization"],
        popupData: {
            services: [
                { title: "API Development", points: ["RESTful API Design", "GraphQL Schema Design", "API Documentation (Swagger)", "Rate Limiting & Throttling", "Versioning Strategies"] },
                { title: "Microservices Architecture", points: ["Service Decomposition", "Inter-service Communication", "Fault Tolerance & Resilience", "Distributed Tracing", "Containerization (Docker/K8s)"] },
                { title: "Database Engineering", points: ["Schema Design & Normalization", "Query Optimization & Indexing", "Data Migration Strategies", "Backup & Recovery Solutions", "Polyglot Persistence"] },
                { title: "Cloud Infrastructure", points: ["Serverless Computing (Lambda)", "Load Balancing", "Auto-scaling Groups", "Infrastructure as Code (Terraform)", "CDN Integration"] },
                { title: "Security Protocols", points: ["Data Encryption (At Rest/In Transit)", "OAuth2 & OIDC Implementation", "CSRF & XSS Protection", "Role-Based Access Control", "Compliance (GDPR/HIPAA)"] }
            ],
            solutions: [
                { title: "High-Traffic Systems", points: ["Load Balancer Config", "Caching Strategies (Redis)", "Database Sharding", "Asynchronous Processing", "Traffic Spike Management"] },
                { title: "FinTech Engines", points: ["Transaction Consistency (ACID)", "Audit Logging", "Fraud Detection logic", "Secure Wallet Systems", "Payment Processing Integrations"] },
                { title: "IoT Backends", points: ["MQTT Protocol handling", "Real-time Device Data Ingestion", "Time-series Databases", "Device Management APIs", "Firmware Update delivery"] },
                { title: "Data Streaming Pipelines", points: ["Kafka/RabbitMQ integration", "Real-time Analytics", "ETL Processes", "Data Warehousing", "Event Sourcing"] },
                { title: "Enterprise Integrations", points: ["Legacy System Bridging", "Third-party API connectors", "Webhook Handling", "ESB Implementation", "SSO Integrations"] }
            ],
            techStack: ["Node.js", "Go", "Python", "PostgreSQL", "MongoDB", "Redis", "RabbitMQ", "Kafka", "Docker", "Kubernetes"],
            process: [
                { step: "01", title: "Analysis", desc: "Deep dive into system requirements and data flow mapping." },
                { step: "02", title: "Design", desc: "Architecting the solution with a focus on modularity and scalability." },
                { step: "03", title: "Implementation", desc: "Writing clean, efficient, and testable server-side code." },
                { step: "04", title: "Optimization", desc: "Stress testing and refining performance bottlenecks." },
                { step: "05", title: "Launch", desc: "Secure deployment with comprehensive monitoring setup." }
            ],
            whyMe: ["Deep expertise in Distributed Systems", "Security-First Mindset", "Proven High-Scale Experience", "Clean Code Advocate", "Reliable Architecture"],
            cta: "Let's build a foundation that scales with your ambition."
        }
    },
    {
        id: 3,
        title: "Cloud & DevOps (GCP)",
        description: "Secure, automated cloud infrastructure, CI/CD pipelines, and container orchestration.",
        icon: Cloud,
        details: ["GCP Compute, Cloud Run, Storage", "CI/CD pipelines", "Dockerized deployments", "Monitoring & logging"],
        popupData: {
            services: [
                { title: "Cloud Migration", points: ["Lift & Shift Strategies", "Re-platforming Legacy Apps", "Zero-Downtime Migration", "Cloud Readiness Assessment", "Cost Estimation & Optimization"] },
                { title: "CI/CD Automation", points: ["Pipeline Design (GitHub Actions)", "Automated Testing Integration", "Blue-Green Deployments", "Canary Releases", "Rollback Strategies"] },
                { title: "Container Orchestration", points: ["Kubernetes Cluster Management", "Helm Chart Creation", "Service Mesh (Istio)", "Pod Autoscaling", "Cluster Security Hardening"] },
                { title: "Infrastructure as Code", points: ["Terraform Provisioning", "Ansible Configuration", "Immutable Infrastructure", "State Management", "Environment Parity"] },
                { title: "Monitoring & Observability", points: ["Log Aggregation (ELK/Splunk)", "Metrics Collection (Prometheus)", "Dashboard Creation (Grafana)", "Alerting Rules", "Distributed Tracing"] }
            ],
            solutions: [
                { title: "Global Scale Apps", points: ["Multi-Region Deployment", "CDN Configuration", "Geo-DNS Routing", "Data Replication", "Low Latency Architecture"] },
                { title: "Secure Environments", points: ["VPC Configuration", "VPN & Firewall Rules", "Identity & Access Management", "Secret Management", "Compliance Auditing"] },
                { title: "Cost-Optimized Arch", points: ["Resource Rightsizing", "Spot Instance Usage", "Auto-scaling limits", "Budget Alerts", "Reserved Instance Planning"] },
                { title: "Disaster Recovery", points: ["Automated Backups", "Cross-Region Failover", "RTO/RPO Planning", "Recovery Drills", "High Availability Setup"] },
                { title: "DevSecOps", points: ["Automated Security Scans", "Dependency Vulnerability Checks", "Compliance Policy Enforcement", "Secret Scanning", "Secure Container Registry"] }
            ],
            techStack: ["Google Cloud Platform", "AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Prometheus", "Grafana", "Nginx", "Linux"],
            process: [
                { step: "01", title: "Audit", desc: "Reviewing current infrastructure and identifying bottlenecks." },
                { step: "02", title: "Strategy", desc: "Defining the cloud roadmap and automation strategy." },
                { step: "03", title: "Provisioning", desc: "Setting up secure and scalable cloud environments using IaC." },
                { step: "04", title: "Automation", desc: "Building robust CI/CD pipelines for faster delivery." },
                { step: "05", title: "Management", desc: "Ongoing monitoring, optimization, and support." }
            ],
            whyMe: ["Certified Cloud Architect", "DevOps Culture Evangelist", "Efficiency Focused", "Security Expert", "24/7 Reliability"],
            cta: "Scale your infrastructure globally with confidence today."
        }
    },
    {
        id: 4,
        title: "AI & GenAI Solutions",
        description: "Custom RAG implementations, LLM integration, and intelligent agent workflows.",
        icon: Sparkles,
        details: ["RAG systems with Pinecone", "LLM integrations", "Chatbots & AI assistants", "Knowledge-based search systems"],
        popupData: {
            services: [
                { title: "LLM Integration", points: ["OpenAI/Anthropic API", "Local LLM Deployment", "Prompt Engineering", "Fine-tuning Models", "Context Window Management"] },
                { title: "RAG Systems", points: ["Vector Database Setup (Pinecone)", "Semantic Search", "Document Chunking Strategies", "Hybrid Search (Keyword+Vector)", "Knowledge Base Management"] },
                { title: "AI Agents", points: ["Autonomous Task Execution", "Tool Calling Capabilities", "Multi-Agent Orchestration", "Memory & State Management", "Goal Planning Logic"] },
                { title: "Computer Vision", points: ["Image Recognition", "Object Detection", "OCR (Text Extraction)", "Video Analysis", "Facial Recognition Features"] },
                { title: "NLP Solutions", points: ["Sentiment Analysis", "Text Calibration/Summarization", "Entity Extraction", "Language Translation", "Topic Modeling"] }
            ],
            solutions: [
                { title: "Intelligent Chatbots", points: ["Customer Support Bots", "Sales Assistants", "Internal Knowledge Bots", "Persona-based Chat", "Multi-channel Support"] },
                { title: "Content Generation", points: ["Blog Post Writing", "Marketing CopyGen", "Social Media Captions", "Email Drafts", "Code Generation Tools"] },
                { title: "Data Analysis AI", points: ["Automated Reporting", "Trend Prediction", "Unstructured Data Processing", "Financial Forecasting", "User Behavior Analysis"] },
                { title: "Personalized Recommenders", points: ["Product Recommendations", "Content Feeds", "User Segmentation", "Dynamic Pricing", "Similarity Matching"] },
                { title: "Voice AI", points: ["Text-to-Speech", "Speech-to-Text", "Voice Assistants", "Audio Analysis", "Voice Authentication"] }
            ],
            techStack: ["Python", "LangChain", "OpenAI API", "Hugging Face", "Pinecone", "TensorFlow", "PyTorch", "FastAPI", "Pandas", "NumPy"],
            process: [
                { step: "01", title: "Use Case", desc: "Identifying high-value opportunities for AI implementation." },
                { step: "02", title: "Data Prep", desc: "Gathering, cleaning, and structuring data for model consumption." },
                { step: "03", title: "Modeling", desc: "Selecting and configuring the right AI models and architectures." },
                { step: "04", title: "Integration", desc: "Seamlessly embedding AI into your existing applications." },
                { step: "05", title: "Tuning", desc: "Continuous monitoring and refinement of model performance." }
            ],
            whyMe: ["Cutting-Edge AI Knowledge", "Practical Implementation Skills", "Ethical AI Focus", "Business Value Driven", "Innovation Partner"],
            cta: "Unlock the power of Artificial Intelligence for your business."
        }
    },
    {
        id: 5,
        title: "Workflow Automation",
        description: "Streamlining business processes with n8n, Zapier, and custom script automation.",
        icon: Workflow,
        details: ["n8n & Zapier workflows", "Custom script automation", "Business process streamlining", "API integrations"],
        popupData: {
            services: [
                { title: "No-Code Automation", points: ["Zapier / Make (Integromat)", "n8n Workflow Design", "Airtable Automations", "Google Workspace Scripts", "Notion Automations"] },
                { title: "Custom Scripting", points: ["Python Automation Scripts", "Node.js Worker Bots", "Cron Job Management", "Web Scraping / Crawling", "File Manipulation Scripts"] },
                { title: "API Integration", points: ["Webhooks Implementation", "REST API Connectors", "Authentication Handling", "Data Transformation", "Error Handling logic"] },
                { title: "Business Logic", points: ["Approval Workflows", "Conditional Routing", "Data Validation", "Notification Systems", "SLA Monitoring"] },
                { title: "Data Sync", points: ["CRM to Marketing Sync", "Database to Spreadsheet", "Order to Fulfillment", "Inventory Synchronization", "Lead Enrichment"] }
            ],
            solutions: [
                { title: "Marketing Automation", points: ["Lead Scoring", "Email Drip Campaigns", "Social Media Posting", "Ad Performance Tracking", "CRM Updates"] },
                { title: "Sales Operations", points: ["Quote Generation", "Contract Management", "Client Onboarding", "Meeting Scheduling", "Follow-up Reminders"] },
                { title: "HR & Recruiting", points: ["Resume Screening", "Interview Scheduling", "Employee Onboarding", "Leave Management", "Performance Review Cycles"] },
                { title: "Finance Ops", points: ["Invoice Generation", "Expense Tracking", "Payment Reminders", "Financial Reporting", "Tax Calculation"] },
                { title: "Customer Support", points: ["Ticket Routing", "Auto-Responses", "Satisfaction Surveys", "Escalation Logic", "Knowledge Base Sync"] }
            ],
            techStack: ["n8n", "Zapier", "Make", "Python", "JavaScript", "Google Apps Script", "Airtable", "Slack API", "Twilio", "SendGrid"],
            process: [
                { step: "01", title: "Map", desc: "Visualizing your current manual processes and pain points." },
                { step: "02", title: "Optimize", desc: "Removing inefficiencies before automating the workflow." },
                { step: "03", title: "Build", desc: "Creating robust automation workflows with error handling." },
                { step: "04", title: "Test", desc: "Verifying reliability and edge-case handling." },
                { step: "05", title: "Monitor", desc: "Providing dashboards to track automation success." }
            ],
            whyMe: ["Process Efficiency Expert", "Tool Agnostic Approach", "Error-Proof Logic", "ROI Focused", "Time Saving Master"],
            cta: "Automate the busywork and focus on what matters most."
        }
    },
    {
        id: 6,
        title: "Security & Optimization",
        description: "Advanced performance tuning, security auditing, and best-practice implementation.",
        icon: Shield,
        details: ["Code optimization", "API performance tuning", "Secure authentication flows", "Best practices implementation"],
        popupData: {
            services: [
                { title: "Security Auditing", points: ["Vulnerability Assessment", "Penetration Testing", "Code Reviews", "Dependency Audits", "Config Security Checks"] },
                { title: "Performance Tuning", points: ["Database Query Optimization", "Frontend Bundle Size reduction", "Server Response Time imp.", "Memory Leak Detection", "Caching Strategy impl."] },
                { title: "Compliance", points: ["GDPR Implementation", "HIPAA Compliance", "SOC 2 Preparation", "Data Privacy Controls", "Accessibility Audit"] },
                { title: "Identity Mgmt", points: ["MFA Implementation", "SSO Configuration", "Passwordless Auth", "Session Management", "User Lifecycle Mgmt"] },
                { title: "Incident Response", points: ["Logging & Monitoring", "Alerting Setup", "Disaster Recovery Plans", "Forensic Analysis", "Patch Management"] }
            ],
            solutions: [
                { title: "Secure Fintech", points: ["PCI-DSS Compliance", "Encryption Key Mgmt", "Fraud Prevention", "Secure Data Storage", "Audit Trails"] },
                { title: "Healthcare Apps", points: ["PHI Protection", "Secure Messaging", "Consent Management", "Access Logging", "Data Anonymization"] },
                { title: "High-Speed Web", points: ["Core Web Vitals Optimization", "CDN Caching", "Image Optimization", "Lazy Loading", "Critical CSS"] },
                { title: "Enterprise SaaS", points: ["Tenant Isolation", "Role-Based Security", "Enterprise SSO", "Data Residency", "Audit Logs"] },
                { title: "E-commerce Security", points: ["Checkout Protection", "Bot Mitigation", "Data Breach Prevention", "Secure Payment Handling", "Account Takeover Protection"] }
            ],
            techStack: ["OWASP ZAP", "Burp Suite", "SonarQube", "Snyk", "Cloudflare", "Auth0", "New Relic", "Datadog", "Lighthouse", "Helmet.js"],
            process: [
                { step: "01", title: "Assess", desc: "Comprehensive evaluation of security posture and performance metrics." },
                { step: "02", title: "Plan", desc: "Prioritizing fixes based on risk and impact analysis." },
                { step: "03", title: "Remediate", desc: "Implementing security patches and performance optimizations." },
                { step: "04", title: "Verify", desc: "Re-testing to ensure issues are resolved and no regressions." },
                { step: "05", title: "Harden", desc: "Establishing long-term safeguards and monitoring." }
            ],
            whyMe: ["Security-First Developer", "Performance Obsessed", "Detail Oriented", "Best Practice Expert", "Risk Mitigator"],
            cta: "Secure your assets and optimize your user experience."
        }
    },
];

// --- Modal Component ---
const ServiceDetailModal = ({ service, onClose }: { service: any, onClose: () => void }) => {
    if (!service || !service.popupData) return null;
    const { popupData } = service;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl overflow-y-auto"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.95, y: 50, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 50, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-6xl bg-[#080808] border border-white/10 rounded-[40px] shadow-2xl overflow-hidden my-10"
            >
                {/* --- Luxury Background Elements --- */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9B037]/5 blur-[100px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 blur-[80px] rounded-full pointer-events-none" />

                {/* --- Close Button --- */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all transform hover:rotate-90 border border-white/5 hover:border-white/20"
                >
                    <X size={24} />
                </button>

                <div className="flex flex-col lg:flex-row h-full max-h-[90vh]">
                    {/* --- Left Sidebar (Sticky Header Info) --- */}
                    <div className="hidden lg:flex flex-col w-1/3 bg-white/2 p-10 border-r border-white/5 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#C9B037]/5 via-transparent to-transparent opacity-50" />

                        <div className="relative z-10">
                            <div className="w-20 h-20 rounded-2xl bg-[#0F0F0F] border border-[#C9B037]/20 flex items-center justify-center mb-8 shadow-lg">
                                <service.icon className="w-10 h-10 text-[#C9B037]" strokeWidth={1.5} />
                            </div>
                            <h2 className="text-4xl font-display font-bold text-white mb-6 leading-tight">{service.title}</h2>
                            <p className="text-white/60 text-lg leading-relaxed mb-10">{service.description}</p>

                            {/* CTA Box */}
                            <div className="mt-auto bg-gradient-to-br from-[#1a1a1a] to-black border border-[#C9B037]/30 rounded-3xl p-6 relative group overflow-hidden">
                                <div className="relative z-10">
                                    <div className="text-[#C9B037] font-bold uppercase tracking-wider text-xs mb-2">Ready to Start?</div>
                                    <p className="text-white text-lg font-medium mb-6 leading-tight">{popupData.cta}</p>
                                    <button
                                        onClick={() => { onClose(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                                        className="w-full py-4 rounded-xl bg-[#C9B037] text-black font-bold hover:bg-[#D4AF37] transition-colors flex items-center justify-center gap-2 shadow-lg"
                                    >
                                        <Rocket size={18} /> Gets Started
                                    </button>
                                </div>
                                <div className="absolute inset-0 bg-[#C9B037]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </div>
                    </div>

                    {/* --- Right Content Area (Scrollable) --- */}
                    <div className="flex-1 overflow-y-auto custom-scrollbar p-6 lg:p-12 relative bg-[#050505]">
                        {/* Mobile Header (Visible only on small screens) */}
                        <div className="lg:hidden mb-10 text-center">
                            <div className="w-16 h-16 mx-auto rounded-2xl bg-[#0F0F0F] border border-[#C9B037]/20 flex items-center justify-center mb-4 shadow-lg">
                                <service.icon className="w-8 h-8 text-[#C9B037]" strokeWidth={1.5} />
                            </div>
                            <h2 className="text-3xl font-display font-bold text-white mb-4">{service.title}</h2>
                            <p className="text-white/60">{service.description}</p>
                        </div>

                        {/* --- Services Section --- */}
                        <div className="mb-16">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#C9B037] border border-white/10">
                                    <Layers size={24} />
                                </div>
                                <h3 className="text-2xl font-display font-bold text-white">Core Services</h3>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {popupData.services.map((s: any, i: number) => (
                                    <div key={i} className="bg-white/5 rounded-2xl p-6 border border-white/5 hover:border-[#C9B037]/30 transition-colors group/card">
                                        <h4 className="text-lg font-bold text-white mb-4 group-hover/card:text-[#C9B037] transition-colors">{s.title}</h4>
                                        <ul className="space-y-2">
                                            {s.points.map((pt: string, idx: number) => (
                                                <li key={idx} className="flex items-start text-sm text-white/50">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9B037] mt-1.5 mr-2 flex-shrink-0" />
                                                    {pt}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* --- Solutions Section --- */}
                        <div className="mb-16">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#C9B037] border border-white/10">
                                    <Target size={24} />
                                </div>
                                <h3 className="text-2xl font-display font-bold text-white">Specialized Solutions</h3>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {popupData.solutions.map((s: any, i: number) => (
                                    <div key={i} className="bg-white/5 rounded-2xl p-6 border border-white/5 hover:border-[#C9B037]/30 transition-colors group/card">
                                        <h4 className="text-lg font-bold text-white mb-4 group-hover/card:text-[#C9B037] transition-colors">{s.title}</h4>
                                        <ul className="space-y-2">
                                            {s.points.map((pt: string, idx: number) => (
                                                <li key={idx} className="flex items-start text-sm text-white/50">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 mt-1.5 mr-2 flex-shrink-0" />
                                                    {pt}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* --- Tech Stack & Process --- */}
                        <div className="grid lg:grid-cols-2 gap-10 mb-16">
                            {/* Tech Stack */}
                            <div>
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                    <Zap size={20} className="text-[#C9B037]" /> Technology Stack
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {popupData.techStack.map((tech: string, i: number) => (
                                        <span key={i} className="px-3 py-1.5 rounded-lg bg-black/50 border border-white/10 text-white/70 text-sm font-medium hover:border-[#C9B037]/50 hover:text-white transition-colors cursor-default">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Why Me */}
                            <div>
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                    <Trophy size={20} className="text-[#C9B037]" /> Why Choose Me?
                                </h3>
                                <ul className="space-y-3">
                                    {popupData.whyMe.map((reason: string, i: number) => (
                                        <li key={i} className="flex items-center gap-3 text-white/70 bg-white/5 px-4 py-3 rounded-xl border border-white/5">
                                            <CheckCircle2 size={16} className="text-[#C9B037] flex-shrink-0" />
                                            {reason}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* --- Process --- */}
                        <div className="mb-10">
                            <h3 className="text-2xl font-display font-bold text-white mb-8 text-center">My Process</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
                                {popupData.process.map((step: any, i: number) => (
                                    <div key={i} className="text-center relative">
                                        <div className="w-12 h-12 mx-auto rounded-full bg-[#C9B037]/10 text-[#C9B037] font-bold flex items-center justify-center border border-[#C9B037]/30 mb-4 relative z-10">
                                            {step.step}
                                        </div>
                                        {i !== popupData.process.length - 1 && (
                                            <div className="hidden sm:block absolute top-6 left-1/2 w-full h-[1px] bg-white/10 -z-0" />
                                        )}
                                        <h4 className="text-white font-bold mb-1">{step.title}</h4>
                                        <p className="text-white/40 text-xs leading-relaxed px-2">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mobile CTA */}
                        <div className="lg:hidden mt-12 pt-8 border-t border-white/10">
                            <button
                                onClick={() => { onClose(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                                className="w-full py-4 rounded-xl bg-[#C9B037] text-black font-bold hover:bg-[#D4AF37] transition-colors flex items-center justify-center gap-2 shadow-lg"
                            >
                                <Rocket size={18} /> {popupData.cta}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

interface ServiceCardProps {
    service: typeof services[0];
    index: number;
    onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, onClick }) => {
    // Luxury Spotlight Setup
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="h-full cursor-pointer"
            onClick={onClick}
        >
            <div
                className="group relative h-full rounded-[24px] bg-[#080808] border border-white/10 overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_rgba(201,176,55,0.15)]"
                onMouseMove={handleMouseMove}
            >
                {/* --- Spotlight Effect --- */}
                <motion.div
                    className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100 z-10"
                    style={{
                        background: useMotionTemplate`
                            radial-gradient(
                                600px circle at ${mouseX}px ${mouseY}px,
                                rgba(201, 176, 55, 0.10),
                                transparent 40%
                            )
                        `,
                    }}
                />

                {/* --- Animated Border Gradient (follows mouse) --- */}
                <motion.div
                    className="absolute inset-0 rounded-[24px] z-0 opacity-0 group-hover:opacity-100 transition duration-500"
                    style={{
                        background: useMotionTemplate`
                            radial-gradient(
                                600px circle at ${mouseX}px ${mouseY}px,
                                rgba(201, 176, 55, 0.3),
                                transparent 40%
                            )
                        `,
                    }}
                >
                    {/* Mask to create border only */}
                    <div className="absolute inset-[1px] bg-[#080808] rounded-[23px]" />
                </motion.div>


                <div className="relative z-20 flex flex-col h-full p-8">
                    {/* Icon Container */}
                    <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-[#C9B037] group-hover:scale-110 group-hover:bg-[#C9B037] group-hover:text-black transition-all duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(201,176,55,0.4)]">
                        <service.icon className="w-7 h-7" strokeWidth={1.5} />
                    </div>

                    <h3 className="text-2xl font-display font-semibold text-white mb-4 group-hover:text-[#C9B037] transition-colors duration-300">
                        {service.title}
                    </h3>

                    <p className="text-white/60 text-base leading-relaxed mb-6 flex-grow font-light group-hover:text-white/80 transition-colors duration-300">
                        {service.description}
                    </p>

                    {/* Details List */}
                    <ul className="space-y-2 mb-6">
                        {service.details.map((detail, i) => (
                            <li key={i} className="flex items-center text-sm text-white/50 group-hover:text-white/70 transition-colors duration-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#333] group-hover:bg-[#C9B037] mr-2 transition-colors duration-300" />
                                {detail}
                            </li>
                        ))}
                    </ul>

                    {/* View More Text */}
                    <div className="flex items-center gap-2 text-[#C9B037] text-sm font-bold uppercase tracking-widest opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                        View Details <ChevronRight size={14} />
                    </div>

                </div>
            </div>
        </motion.div>
    );
};

const ServicesSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const [selectedService, setSelectedService] = useState<any>(null);

    return (
        <section
            ref={sectionRef}
            id="services"
            className="relative min-h-screen py-32 overflow-hidden bg-transparent" // Dark Mode Luxury (Transparent)
        >
            {/* Gold and White bokeh particles - Dark Mode */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={`serv - particle - ${i} `}
                        className="absolute rounded-full"
                        style={{
                            width: `${Math.random() * 80 + 40} px`,
                            height: `${Math.random() * 80 + 40} px`,
                            background: i % 2 === 0
                                ? `radial - gradient(circle, rgba(201, 176, 55, ${0.03 + Math.random() * 0.05}) 0 %, transparent 70 %)` // Gold
                                : `radial - gradient(circle, rgba(255, 255, 255, ${0.02 + Math.random() * 0.03}) 0 %, transparent 70 %)`, // White Mist
                            left: `${Math.random() * 100}% `,
                            top: `${Math.random() * 100}% `,
                            filter: 'blur(30px)',
                        }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 12 + Math.random() * 8,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>


            <motion.div
                style={{ y }}
                className="relative z-10 container mx-auto px-6 lg:px-16"
            >
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-display font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] drop-shadow-sm"
                    >
                        Services & Solutions
                    </motion.h2>
                    <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-[#C9B037] to-transparent" />
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 text-white/60 text-xl max-w-2xl mx-auto font-light"
                    >
                        Delivering enterprise-grade applications with a focus on performance, scalability, and premium user experiences.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            index={index}
                            onClick={() => setSelectedService(service)}
                        />
                    ))}
                </div>

                {/* Premium CTA Section - Dark Glass */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-[50px] border border-white/10 bg-white/5 p-12 lg:p-20 overflow-hidden text-center backdrop-blur-xl shadow-2xl group"
                >
                    {/* Background Shine */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-white/5 to-transparent opacity-60 pointer-events-none" />

                    {/* Golden Orbs - faint for dark mode */}
                    <div className="absolute -top-[300px] -left-[300px] w-[600px] h-[600px] bg-[#C9B037] opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />
                    <div className="absolute -bottom-[300px] -right-[300px] w-[600px] h-[600px] bg-[#C9B037] opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#C9B037]/30 bg-[#C9B037]/10 text-[#C9B037] text-sm font-bold tracking-widest uppercase mb-8 shadow-sm">
                            <Sparkles size={14} /> Production Ready
                        </div>

                        <h3 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                            Have a project in mind?
                        </h3>

                        <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto font-medium">
                            Let’s build something <span className="text-[#C9B037]">powerful</span>, <span className="text-[#C9B037]">scalable</span>, and <span className="text-[#C9B037]">future-ready</span>.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto justify-center">
                            <button
                                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                                className="px-12 py-5 rounded-full bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-black text-lg font-bold hover:shadow-[0_0_30px_rgba(201,176,55,0.4)] transition-all transform hover:scale-105 flex items-center justify-center gap-3 active:scale-95 shadow-lg"
                            >
                                Hire Me <ArrowRight size={20} />
                            </button>

                            <button
                                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                                className="px-12 py-5 rounded-full border-2 border-white/20 text-white text-lg font-bold hover:border-[#C9B037] hover:text-[#C9B037] transition-all transform hover:scale-105 flex items-center justify-center gap-3 backdrop-blur-md active:scale-95"
                            >
                                Get a Free Consultation
                            </button>
                        </div>
                    </div>
                </motion.div>

            </motion.div>

            <AnimatePresence>
                {selectedService && (
                    <ServiceDetailModal
                        service={selectedService}
                        onClose={() => setSelectedService(null)}
                    />
                )}
            </AnimatePresence>
        </section >
    );
};

export default ServicesSection;

