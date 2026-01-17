
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, BookOpen, Award, Calendar, MapPin, GitBranch, CheckCircle2 } from "lucide-react";
import graduationImg from "@/assets/graduation.png";

const EducationSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    const educationData = [
        {
            level: "Graduation",
            degree: "Bachelor’s of Technology",
            field: "Computer Science & Engineering",
            institution: "Rungta College of Engineering and Technology (CSVTU)",
            year: "2021 – 2025",
            score: "76%",
            icon: GraduationCap,
            color: "#C9B037"
        },
        {
            level: "12th Standard",
            degree: "Higher Secondary Education",
            field: "Science (PCM)",
            institution: "Amresh Sharma Public School, Dhanora, Durg (CG)",
            year: "2021",
            score: "72%",
            icon: BookOpen,
            color: "#C0C0C0" // Silver/Platinum for premium contrast
        },
        {
            level: "10th Standard",
            degree: "Secondary Education",
            field: "General Studies",
            institution: "Amresh Sharma Public School, Dhanora, Durg (CG)",
            year: "2019",
            score: "60%",
            icon: Award,
            color: "#C9B037"
        }
    ];

    return (
        <section ref={containerRef} className="relative py-32 overflow-hidden bg-gradient-to-b from-black via-[#0a0a05] to-black text-white">

            {/* Ambient Background Glows - Gold Only */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-[#C9B037] opacity-[0.03] blur-[150px] rounded-full" />
                <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-[#BF953F] opacity-[0.03] blur-[150px] rounded-full" />
            </div>

            <div className="container relative z-10 mx-auto px-6">

                {/* Section Header */}
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-display font-bold mb-6"
                    >
                        Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728]">Journey</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-xl text-white/50 max-w-2xl mx-auto"
                    >
                        Strong academic foundation with a focus on problem-solving, logical thinking, and computer science fundamentals.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* LEFT SIDE - Graduation Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        <div className="relative rounded-[40px] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] border border-white/5 bg-white/5">
                            {/* Gold Glow Border Effect */}
                            <div className="absolute inset-0 border border-[#C9B037]/20 rounded-[40px] z-20 pointer-events-none group-hover:border-[#C9B037]/50 transition-colors duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#C9B037]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                            <img
                                src={graduationImg}
                                alt="Graduation"
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Decorative floating stats/icons */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-8 -right-8 w-32 h-32 bg-black/80 backdrop-blur-xl border border-[#C9B037]/30 rounded-full flex items-center justify-center z-30 shadow-[0_0_30px_rgba(201,176,55,0.2)]"
                        >
                            <div className="text-center">
                                <span className="block text-3xl font-bold text-[#C9B037]">2025</span>
                                <span className="text-xs text-white/60 uppercase tracking-widest">Graduated</span>
                            </div>
                        </motion.div>
                    </motion.div>


                    {/* RIGHT SIDE - Education Timeline */}
                    <div className="space-y-8 relative">
                        {/* Vertical Line - Animated Drawing - Gold Gradient */}
                        <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: "100%" }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            viewport={{ once: true }}
                            className="absolute left-[27px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#BF953F] via-[#FCF6BA] to-transparent lg:left-[27px] md:left-[27px] origin-top opacity-50"
                        />

                        {educationData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative flex gap-8 group"
                            >
                                {/* Icon Bubble */}
                                <div className="relative z-10 w-14 h-14 rounded-full bg-black border border-white/10 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:border-[#C9B037] transition-colors duration-300">
                                    <item.icon size={24} color={item.color} />
                                </div>

                                {/* Content Card */}
                                <div className="flex-1 p-6 rounded-3xl bg-[#050505] md:bg-white/5 border border-white/5 hover:bg-white/[0.07] hover:border-[#C9B037]/30 transition-all duration-300 backdrop-blur-none md:backdrop-blur-sm group-hover:-translate-y-1">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                                        <h3 className="text-xl font-bold text-white group-hover:text-[#C9B037] transition-colors">{item.level}</h3>
                                        <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-[#C9B037] border border-[#C9B037]/20">
                                            {item.year}
                                        </span>
                                    </div>
                                    <div className="mb-2">
                                        <p className="text-lg font-medium text-white/90">{item.degree}</p>
                                        <p className="text-sm text-white/50">{item.field}</p>
                                    </div>

                                    <div className="flex items-center gap-2 mt-4 text-sm text-white/40">
                                        <MapPin size={14} className="text-[#C9B037]" />
                                        <span>{item.institution}</span>
                                    </div>

                                    <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                                        <div className="text-xs text-white/30 uppercase tracking-widest font-bold">Grade / Score</div>
                                        <div className="text-lg font-bold text-white">{item.score}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default EducationSection;
