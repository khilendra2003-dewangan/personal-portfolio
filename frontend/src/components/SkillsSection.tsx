import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Code2, Server, Database, Cloud, Terminal, Layers, Cpu, Globe, Zap, Box, ShieldCheck, GitBranch, Layout, Monitor, Smartphone, Cpu as CpuIcon, ArrowUpRight, X } from "lucide-react";
import techImage from "@/assets/tech-arsenal-premium.png";

// --- 3D Parallax Card ---
// --- Standard Card (No Tilt) ---
const ParallaxCard = ({ title, icon: Icon, skills, index, onClick }: { title: string, icon: any, skills: any[], index: number, onClick: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, type: "spring" }}
      className="w-full h-full min-h-[280px]"
      onClick={onClick}
    >
      <div
        className="relative w-full h-full bg-[#050505] md:bg-black/40 backdrop-blur-none md:backdrop-blur-xl border border-white/10 rounded-[24px] overflow-hidden group"
      >
        {/* --- Travel Shine Border --- */}
        <div className="absolute inset-0 z-0 p-[1px] rounded-[24px] bg-gradient-to-br from-white/10 via-transparent to-[#C9B037]/20 opacity-50" />

        {/* --- Inner Glow --- */}
        <div className="absolute inset-0 bg-[#C9B037]/5 blur-3xl rounded-[24px] opacity-10 pointer-events-none" />

        {/* --- Content Layer --- */}
        <div className="relative z-20 p-6 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            {/* Icon Emblem */}
            <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-black border border-[#C9B037]/30 shadow-[0_0_20px_rgba(201,176,55,0.15)] group-hover:shadow-[0_0_30px_rgba(201,176,55,0.3)] transition-shadow duration-500">
              <Icon className="w-6 h-6 text-[#C9B037] drop-shadow-[0_0_8px_rgba(201,176,55,0.4)]" />
              <div className="absolute inset-0 border border-[#C9B037]/20 rounded-xl animate-spin-slow" />
            </div>

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
                whileHover={{ scale: 1.05, y: -2, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="group/skill relative flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-[#C9B037]/40 backdrop-blur-md cursor-pointer transition-colors duration-300 overflow-hidden hover:shadow-[0_5px_15px_rgba(0,0,0,0.5)]"
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
        </div>

      </div>
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

const SkillDetailModal = ({ category, onClose }: { category: any; onClose: () => void }) => {
  if (!category) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 30, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg bg-[#080808] border border-[#C9B037]/30 rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(201,176,55,0.2)] relative"
      >
        {/* Luxury Glows */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9B037]/10 blur-[80px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 blur-[50px] rounded-full pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors z-10"
        >
          <X size={20} />
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="flex items-center gap-5 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-black border border-[#C9B037]/30 flex items-center justify-center shadow-[0_0_20px_rgba(201,176,55,0.15)]">
              <category.icon className="w-8 h-8 text-[#C9B037]" />
            </div>
            <div>
              <div className="text-[#C9B037] text-xs font-bold tracking-widest uppercase mb-1">Tech Stack</div>
              <h3 className="text-3xl font-display font-bold text-white">{category.title}</h3>
            </div>
          </div>

          {/* Progress Bars */}
          <div className="space-y-6">
            {category.skills.map((skill: any, i: number) => (
              <div key={i}>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <skill.icon className="w-4 h-4 text-white/60" />
                    <span className="text-white/90 font-medium">{skill.name}</span>
                  </div>
                  <span className="text-[#C9B037] font-bold text-sm">{skill.level}%</span>
                </div>

                {/* Bar Container */}
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 + (i * 0.1), ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] rounded-full shadow-[0_0_10px_rgba(201,176,55,0.5)]"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-white/40 text-sm italic">
              "Continuous improvement is better than delayed perfection."
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const yBG = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yImage = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const [selectedCategory, setSelectedCategory] = useState<any>(null);

  const categories = [
    {
      title: "Frontend",
      icon: Monitor,
      skills: [
        { name: "HTML", icon: Layout, level: 95 },
        { name: "CSS", icon: Box, level: 90 },
        { name: "JavaScript", icon: Terminal, level: 92 },
        { name: "React", icon: Code2, level: 88 },
        { name: "TypeScript", icon: CpuIcon, level: 85 },
        { name: "Tailwind", icon: Layers, level: 90 },
      ]
    },
    {
      title: "Backend",
      icon: Server,
      skills: [
        { name: "Node.js", icon: Terminal, level: 85 },
        { name: "Express", icon: CpuIcon, level: 85 },
        { name: "Python", icon: Code2, level: 80 },
        { name: "Microservices", icon: Server, level: 75 },
      ]
    },
    {
      title: "Database",
      icon: Database,
      skills: [
        { name: "MongoDB", icon: Database, level: 88 },
        { name: "PostgreSQL", icon: Database, level: 82 },
        { name: "Redis", icon: Layers, level: 75 },
        { name: "Pinecone", icon: Layers, level: 80 },
      ]
    },
    {
      title: "Cloud / DevOps",
      icon: Cloud,
      skills: [
        { name: "AWS", icon: Cloud, level: 70 },
        { name: "GCP", icon: Cloud, level: 65 },
        { name: "Kubernetes", icon: Server, level: 60 },
        { name: "Docker", icon: Box, level: 80 },
      ]
    },
    {
      title: "Tools",
      icon: ShieldCheck,
      skills: [
        { name: "Git", icon: GitBranch, level: 90 },
        { name: "CI/CD", icon: Zap, level: 75 },
        { name: "VS Code", icon: Code2, level: 95 },
        { name: "Figma", icon: Layout, level: 85 },
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
          <div className="w-full lg:w-5/12 relative lg:h-auto">
            <motion.div
              style={{ y: yImage }}
              initial={{ opacity: 0, rotateY: 15, x: -50 }}
              whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
              whileHover={{ scale: 1.02, rotateY: 5 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring" }}
              className="relative rounded-[40px] overflow-hidden border border-white/10 bg-black/50 shadow-[0_0_50px_rgba(0,0,0,0.5)] hover:shadow-[0_0_80px_rgba(201,176,55,0.2)] group cursor-pointer"
            >
              {/* Gold Border Glow */}
              <div className="absolute inset-0 z-20 rounded-[40px] pointer-events-none border border-[#C9B037]/30 group-hover:border-[#C9B037]/60 transition-colors duration-500" />

              {/* Inner Shine */}
              <div className="absolute inset-0 z-20 bg-gradient-to-tr from-black/20 via-transparent to-white/10 pointer-events-none" />

              <img
                src={techImage}
                alt="Tech Stack Showcase"
                className="w-full h-auto object-contain transition-transform duration-700 ease-out grayscale-[0.2] group-hover:grayscale-0"
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
                    onClick={() => setSelectedCategory(cat)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedCategory && (
          <SkillDetailModal
            category={selectedCategory}
            onClose={() => setSelectedCategory(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default SkillsSection;
