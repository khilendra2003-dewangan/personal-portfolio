import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { Code2, Database, Cloud, Sparkles, Zap, Shield, ArrowUpRight } from "lucide-react";

// --- Types ---
interface Skill {
    name: string;
    icon: any;
    color: string;
    level: string; // "Expert", "Advanced", etc.
}

const skills: Skill[] = [
    { icon: Code2, name: "React & TypeScript", color: "#C9B037", level: "Expert" },
    { icon: Database, name: "Node.js & MongoDB", color: "#C9B037", level: "Expert" },
    { icon: Cloud, name: "GCP Cloud Native", color: "#C0C0C0", level: "Advanced" },
    { icon: Sparkles, name: "Generative AI", color: "#C9B037", level: "Specialist" },
    { icon: Zap, name: "RAG Systems", color: "#C9B037", level: "Advanced" },
    { icon: Shield, name: "Microservices", color: "#C0C0C0", level: "Advanced" },
];

// --- 3D Tilt Card Component (Ultra-Luxury) ---
const TiltCard = ({ skill, index }: { skill: Skill; index: number }) => {
    const ref = useRef<HTMLDivElement>(null);

    // Mouse position
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Spotlight position (pixels)
    const mouseXPx = useMotionValue(0);
    const mouseYPx = useMotionValue(0);

    // Smooth physics for tilt
    const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 }); // Softer spring
    const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);

        mouseXPx.set(mouseX);
        mouseYPx.set(mouseY);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
        mouseXPx.set(0);
        mouseYPx.set(0);
    }

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: 1200,
                transformStyle: "preserve-3d",
            }}
            className="w-full h-full min-h-[200px] group"
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="relative h-full w-full rounded-2xl bg-[#050505] border border-white/5 shadow-xl transition-shadow duration-500 overflow-hidden"
            >
                {/* --- Spotlight Effect --- */}
                <motion.div
                    className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
                    style={{
                        background: useMotionTemplate`
                            radial-gradient(
                                600px circle at ${mouseXPx}px ${mouseYPx}px,
                                rgba(201, 176, 55, 0.15),
                                transparent 80%
                            )
                        `,
                    }}
                />

                {/* --- Border Spotlight --- */}
                <motion.div
                    className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none"
                    style={{
                        background: useMotionTemplate`
                            radial-gradient(
                                300px circle at ${mouseXPx}px ${mouseYPx}px,
                                rgba(201, 176, 55, 0.6),
                                transparent 80%
                            )
                        `,
                        maskImage: `linear-gradient(black, black) content-box, linear-gradient(black, black)`,
                        maskComposite: "exclude",
                        WebkitMaskComposite: "xor",
                        padding: "1px",
                    }}
                />

                {/* --- Content --- */}
                <motion.div
                    style={{ transform: "translateZ(30px)" }}
                    className="relative z-30 flex flex-col items-center justify-center p-6 h-full text-center"
                >
                    {/* Icon Halo */}
                    <div className="relative mb-6">
                        <div className="absolute inset-0 bg-[#C9B037] blur-[20px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full" />
                        <div className="relative p-4 rounded-xl bg-white/5 border border-white/10 group-hover:bg-[#C9B037]/10 group-hover:border-[#C9B037]/30 transition-all duration-300">
                            <skill.icon
                                className="w-8 h-8 text-white/50 group-hover:text-[#C9B037] transition-colors duration-300"
                                strokeWidth={1.5}
                            />
                        </div>
                    </div>

                    <h4 className="text-lg font-display font-medium text-white/80 group-hover:text-white transition-colors mb-2">
                        {skill.name}
                    </h4>

                    {/* Level Bar */}
                    <div className="w-12 h-1 bg-white/10 rounded-full overflow-hidden mt-2">
                        <motion.div
                            className="h-full bg-[#C9B037]"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                        />
                    </div>
                </motion.div>

                {/* Internal Noise Texture for "Paper" or "Diffused" look */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none z-0 mix-blend-overlay" />
            </motion.div>
        </motion.div>
    );
};

const AboutSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const yContent = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const opacityContent = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section
            ref={sectionRef}
            id="about"
            className="relative min-h-screen py-32 overflow-hidden bg-transparent perspective-1000"
        >
            {/* --- Premium Background Effects --- */}

            {/* Ambient Gold Glows */}
            <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[#C9B037] blur-[150px] opacity-[0.05] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-white blur-[150px] opacity-[0.02] rounded-full pointer-events-none" />

            {/* Floating Particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-[#C9B037] rounded-full"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            opacity: Math.random() * 0.3 + 0.1,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.5, 0.2],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            <motion.div
                style={{ y: yContent, opacity: opacityContent }}
                className="container relative z-10 mx-auto px-6 lg:px-16"
            >
                {/* --- Section Title --- */}
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-6xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] drop-shadow-[0_0_15px_rgba(191,149,63,0.3)] mb-4">
                            About Me
                        </h2>
                        <div className="flex items-center justify-center gap-3 opacity-60">
                            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#C9B037]" />
                            <span className="text-[#C9B037] text-xs font-bold tracking-[0.2em] uppercase">The Architect</span>
                            <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#C9B037]" />
                        </div>
                    </motion.div>
                </div>

                <div className="max-w-6xl mx-auto">
                    {/* --- Bio Card (Major Feature) --- */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative mb-24 group"
                    >
                        {/* Animated Border Gradient */}
                        <div className="absolute -inset-[1px] rounded-[40px] bg-gradient-to-r from-transparent via-[#C9B037]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-sm" />

                        <div className="relative rounded-[40px] p-10 md:p-14 bg-black/60 backdrop-blur-2xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
                            {/* Inner Decoration */}
                            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#C9B037]/10 blur-[80px] rounded-full pointer-events-none" />

                            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 lg:gap-16">
                                {/* Text Content */}
                                <div className="flex-1 text-center md:text-left">
                                    <h3 className="text-3xl md:text-5xl font-display font-medium text-white mb-8 leading-tight">
                                        Crafting Digital <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDFBF2] to-[#C9B037]">Masterpieces</span>
                                    </h3>

                                    <div className="space-y-6 text-lg text-white/60 font-light leading-relaxed">
                                        <p>
                                            I am a <strong className="text-white font-medium">Full Stack Architect</strong> with over <span className="text-[#C9B037]">3 years of dedicated craftsmanship</span> in building scalable, high-performance web ecosystems.
                                        </p>
                                        <p>
                                            My philosophy merges <span className="text-white italic">precision engineering</span> with <span className="text-white italic">artistic vision</span>. From React-powered frontends to complex microservices on Google Cloud, I ensure every line of code contributes to a seamless user experience.
                                        </p>
                                    </div>

                                    {/* Signature / CTA */}
                                    <div className="mt-10 flex flex-wrap items-center justify-center md:justify-start gap-6">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-[#00FF94] shadow-[0_0_10px_#00FF94]" />
                                            <span className="text-sm font-medium text-white/80 tracking-wide">Available for new projects</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Stats Column */}
                                <div className="w-full md:w-auto flex flex-row md:flex-col gap-6 md:gap-10 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-10 justify-center md:justify-start">
                                    {[
                                        { val: "3+", label: "Years Exp" },
                                        { val: "50+", label: "Projects" },
                                        { val: "100%", label: "Satisfaction" }
                                    ].map((stat, i) => (
                                        <div key={i} className="text-center md:text-left">
                                            <div className="text-4xl lg:text-5xl font-display font-bold text-white mb-1">{stat.val}</div>
                                            <div className="text-xs font-bold text-[#C9B037] tracking-[0.2em] uppercase">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* --- 3D Skills Grid --- */}
                    <div className="relative">
                        {/* Subtle Background Text */}
                        <div className="absolute -top-20 left-1/2 -translate-x-1/2 text-[12vw] font-bold text-white/[0.02] pointer-events-none select-none whitespace-nowrap">
                            EXPERTISE
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            {skills.map((skill, index) => (
                                <TiltCard key={skill.name} skill={skill} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutSection;
