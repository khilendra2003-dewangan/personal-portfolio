import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { Code2, Server, Database, Cloud, Terminal, Layers, Cpu, Globe, Zap, Box, ShieldCheck, GitBranch, Layout, Monitor, Smartphone, Cpu as CpuIcon, ArrowUpRight } from "lucide-react";
import techImage from "@/assets/image.png";

// --- 3D Parallax Card ---
const ParallaxCard = ({ title, icon: Icon, skills, index }: { title: string, icon: any, skills: any[], index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth mouse movement
  const mouseX = useSpring(x, { stiffness: 200, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 200, damping: 20 });

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const xPct = (clientX - left) / width - 0.5;
    const yPct = (clientY - top) / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-8deg", "8deg"]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, type: "spring" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: isMobile ? "none" : 1000,
        transformStyle: isMobile ? "flat" : "preserve-3d",
      }}
      className="w-full h-full min-h-[280px]"
    >
      <motion.div
        style={{
          rotateX: isMobile ? 0 : rotateX,
          rotateY: isMobile ? 0 : rotateY,
          transformStyle: isMobile ? "flat" : "preserve-3d",
        }}
        className="relative w-full h-full bg-[#050505] md:bg-black/40 backdrop-blur-none md:backdrop-blur-xl border border-white/10 rounded-[24px] overflow-hidden group"
      >
        {/* --- Interactive Border Glow --- */}
        <motion.div
          className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[24px] z-10 pointer-events-none"
          style={{
            background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(201, 176, 55, 0.15), transparent 40%)`
          }}
        />

        {/* --- Travel Shine Border --- */}
        <div className="absolute inset-0 z-0 p-[1px] rounded-[24px] bg-gradient-to-br from-white/10 via-transparent to-[#C9B037]/20 opacity-50" />

        {/* --- Inner Glow --- */}
        <div className="absolute inset-0 bg-[#C9B037]/5 blur-3xl rounded-[24px] opacity-10 pointer-events-none" />

        {/* --- 3D Content Layer --- */}
        <motion.div
          style={{
            transform: "translateZ(20px)",
            transformStyle: isMobile ? "flat" : "preserve-3d",
          }}
          className="relative z-20 p-6 flex flex-col h-full"
        >
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            {/* Floating Icon Emblem */}
            <motion.div
              style={{ transform: "translateZ(15px)" }}
              className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-black border border-[#C9B037]/30 shadow-[0_0_20px_rgba(201,176,55,0.15)] group-hover:shadow-[0_0_30px_rgba(201,176,55,0.3)] transition-shadow duration-500"
            >
              <Icon className="w-6 h-6 text-[#C9B037] drop-shadow-[0_0_8px_rgba(201,176,55,0.4)]" />
              <div className="absolute inset-0 border border-[#C9B037]/20 rounded-xl animate-spin-slow" />
            </motion.div>

            <div>
              <h3 className="text-xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] tracking-wide">
                {title}
              </h3>
              <div className="h-0.5 w-8 bg-gradient-to-r from-[#C9B037] to-transparent mt-1 rounded-full group-hover:w-full transition-all duration-700 ease-out" />
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-3 mt-auto">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                style={{ transform: "translateZ(10px)" }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="group/skill relative flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-[#C9B037]/40 backdrop-blur-md cursor-pointer transition-all duration-300 overflow-hidden hover:shadow-[0_5px_15px_rgba(0,0,0,0.5)]"
              >
                {/* Rolling Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/skill:translate-x-full transition-transform duration-700 ease-in-out z-0" />

                {/* Gold Glow Background on Hover */}
                <div className="absolute inset-0 bg-[#C9B037]/10 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 z-0" />

                <div className="relative z-10 p-1.5 rounded-lg bg-black/50 border border-white/10 group-hover/skill:border-[#C9B037]/50 transition-colors">
                  <skill.icon className="w-4 h-4 text-white/60 group-hover/skill:text-[#C9B037] transition-colors" />
                </div>

                <span className="text-white/80 group-hover/skill:text-white font-medium text-sm tracking-wide relative z-10 transition-colors">
                  {skill.name}
                </span>

                {/* Arrow hint on hover */}
                <ArrowUpRight className="hidden group-hover/skill:block w-3 h-3 text-[#C9B037] absolute top-2 right-2 opacity-0 group-hover/skill:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </motion.div>
  );
};

const ConnectingLines = () => {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20">
      <defs>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <motion.path
        d="M100,500 Q400,300 800,500"
        stroke="url(#lineGrad)"
        strokeWidth="1"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      />
    </svg>
  )
}

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const yBG = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yImage = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const categories = [
    {
      title: "Frontend",
      icon: Monitor,
      skills: [
        { name: "HTML", icon: Layout },
        { name: "CSS", icon: Box },
        { name: "JavaScript", icon: Terminal },
        { name: "Tailwind", icon: Layers },
        { name: "React", icon: Code2 },
        { name: "TypeScript", icon: CpuIcon },
      ]
    },
    {
      title: "Backend",
      icon: Server,
      skills: [
        { name: "Node.js", icon: Terminal },
        { name: "Express", icon: CpuIcon },
        { name: "Python", icon: Code2 },
        { name: "Microservices", icon: Server },
      ]
    },
    {
      title: "Database",
      icon: Database,
      skills: [
        { name: "MongoDB", icon: Database },
        { name: "PostgreSQL", icon: Database },
        { name: "Redis", icon: Layers },
        { name: "Pinecone", icon: Layers },
        { name: "Vector Database", icon: Database },
      ]
    },
    {
      title: "Cloud / DevOps",
      icon: Cloud,
      skills: [
        { name: "AWS", icon: Cloud },
        { name: "GCP", icon: Cloud },
        { name: "Kubernetes", icon: Server },
      ]
    },
    {
      title: "Tools",
      icon: ShieldCheck,
      skills: [
        { name: "Docker", icon: Box },
        { name: "Git", icon: GitBranch },
        { name: "CI/CD", icon: Zap },
        { name: "VS Code", icon: Code2 },
      ]
    }
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative min-h-screen py-32 overflow-hidden flex items-center"
      style={{
        background: 'linear-gradient(to bottom, #000000 0%, #020617 50%, #000000 100%)', // Distinct Deep Midnight/Slate
      }}
    >
      {/* --- Dynamic Background --- */}
      <motion.div style={{ y: yBG }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,215,0,0.05),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#FFD700 1px, transparent 1px), linear-gradient(90deg, #FFD700 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </motion.div>

      <ConnectingLines />

      <div className="container relative z-10 mx-auto px-6">

        {/* --- Header --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] drop-shadow-[0_5px_15px_rgba(191,149,63,0.2)]">
            Tech Arsenal
          </h2>
          <div className="h-1 mt-6 w-32 mx-auto bg-gradient-to-r from-transparent via-[#C9B037] to-transparent" />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20">

          {/* --- LEFT: Image Showcase --- */}
          <div className="w-full lg:w-5/12 relative min-h-[500px] lg:h-auto">
            <motion.div
              style={{ y: yImage }}
              initial={{ opacity: 0, rotateY: 15, x: -50 }}
              whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring" }}
              className="relative rounded-[40px] overflow-hidden border border-white/10 bg-black/50 shadow-[0_0_50px_rgba(0,0,0,0.5)] group h-full"
            >
              {/* Gold Border Glow */}
              <div className="absolute inset-0 z-20 rounded-[40px] pointer-events-none border border-[#C9B037]/30 group-hover:border-[#C9B037]/60 transition-colors duration-500" />

              {/* Inner Shine */}
              <div className="absolute inset-0 z-20 bg-gradient-to-tr from-black/20 via-transparent to-white/10 pointer-events-none" />

              <img
                src={techImage}
                alt="Tech Stack Showcase"
                className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700 ease-out grayscale-[0.2] group-hover:grayscale-0"
              />

              {/* Floating Elements on Image */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 left-8 z-30 bg-black/60 backdrop-blur-xl p-4 rounded-2xl border border-white/10 border-l-4 border-l-[#FFD700]"
              >
                <div className="text-[#FFD700] font-bold text-lg">Full Stack</div>
                <div className="text-white/70 text-sm">Mastery</div>
              </motion.div>
            </motion.div>

            {/* Back Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#C9B037] blur-[100px] opacity-10 -z-10" />
          </div>

          {/* --- RIGHT: Tech Grid --- */}
          <div className="w-full lg:w-7/12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 h-full content-start">
              {categories.map((cat, idx) => (
                <div key={idx} className={idx === 4 ? "md:col-span-2" : ""}>
                  <ParallaxCard
                    index={idx}
                    title={cat.title}
                    icon={cat.icon}
                    skills={cat.skills}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
