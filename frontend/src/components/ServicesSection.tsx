
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Layers, Database, Cloud, Sparkles, Workflow, Shield, ArrowRight } from "lucide-react";

// Icons now use the unified Dark Gold #B38728
const services = [
    {
        id: 1,
        title: "Full Stack Web Development",
        description: "Seamless, pixel-perfect frontend interfaces backed by robust, scalable backend architectures.",
        icon: Layers,
        details: [
            "React / TypeScript Frontend",
            "Node.js & Express Backend",
            "MongoDB, Redis",
            "Clean architecture & APIs"
        ]
    },
    {
        id: 2,
        title: "Backend & Microservices",
        description: "High-performance server-side logic, API development, and distributed systems architecture.",
        icon: Database,
        details: [
            "Microservices & REST APIs",
            "RabbitMQ event-driven systems",
            "Authentication & authorization",
            "Performance optimization"
        ]
    },
    {
        id: 3,
        title: "Cloud & DevOps (GCP)",
        description: "Secure, automated cloud infrastructure, CI/CD pipelines, and container orchestration.",
        icon: Cloud,
        details: [
            "GCP Compute, Cloud Run, Storage",
            "CI/CD pipelines",
            "Dockerized deployments",
            "Monitoring & logging"
        ]
    },
    {
        id: 4,
        title: "AI & GenAI Solutions",
        description: "Custom RAG implementations, LLM integration, and intelligent agent workflows.",
        icon: Sparkles,
        details: [
            "RAG systems with Pinecone",
            "LLM integrations",
            "Chatbots & AI assistants",
            "Knowledge-based search systems"
        ]
    },
    {
        id: 5,
        title: "Workflow Automation",
        description: "Streamlining business processes with n8n, Zapier, and custom script automation.",
        icon: Workflow,
        details: [
            "n8n & Zapier workflows",
            "Custom script automation",
            "Business process streamlining",
            "API integrations"
        ]
    },
    {
        id: 6,
        title: "Security & Optimization",
        description: "Advanced performance tuning, security auditing, and best-practice implementation.",
        icon: Shield,
        details: [
            "Code optimization",
            "API performance tuning",
            "Secure authentication flows",
            "Best practices implementation"
        ]
    },
];

interface ServiceCardProps {
    service: typeof services[0];
    index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
    // 3D Tilt Setup
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseX = useSpring(x, { stiffness: 500, damping: 50 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 50 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const xPct = (e.clientX - left) / width - 0.5;
        const yPct = (e.clientY - top) / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-5deg", "5deg"]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            style={{
                perspective: 1000,
            }}
            className="h-full"
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="group relative h-full rounded-[24px] p-8 bg-[#050505] md:bg-white/5 backdrop-blur-none md:backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_-5px_rgba(201,176,55,0.15)] transition-all duration-300 overflow-hidden"
            >
                {/* Gold Gradient Border on Hover */}
                <div className="absolute inset-0 rounded-[24px] border-2 border-transparent group-hover:border-[#C9B037]/30 transition-colors duration-300 pointer-events-none" />

                {/* Floating Gold Glow Effect */}
                <div
                    className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-[#C9B037]/5 blur-3xl group-hover:bg-[#C9B037]/10 transition-colors duration-500"
                />

                <div className="relative z-10 flex flex-col h-full">
                    {/* Icon Container */}
                    <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-[#C9B037] group-hover:border-[#C9B037]/50 group-hover:scale-110 transition-all duration-300">
                        <service.icon className="w-7 h-7" strokeWidth={1.5} />
                    </div>

                    <h3 className="text-2xl font-display font-semibold text-white mb-4 group-hover:text-[#C9B037] transition-colors">
                        {service.title}
                    </h3>

                    <p className="text-white/60 text-base leading-relaxed mb-6 flex-grow font-light">
                        {service.description}
                    </p>

                    {/* Details List */}
                    <ul className="space-y-2 mb-6">
                        {service.details.map((detail, i) => (
                            <li key={i} className="flex items-center text-sm text-white/50">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#C9B037] mr-2" />
                                {detail}
                            </li>
                        ))}
                    </ul>

                </div>
            </motion.div>
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
                        <ServiceCard key={service.id} service={service} index={index} />
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
        </section >
    );
};

export default ServicesSection;

