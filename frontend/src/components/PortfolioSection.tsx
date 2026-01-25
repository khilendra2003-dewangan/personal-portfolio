import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence, useMotionTemplate, useInView } from "framer-motion";
import { ExternalLink, Github, X, ChevronRight, Layers, Code2, Database, Zap, Globe, Smartphone, Monitor, Image as ImageIcon } from "lucide-react";

// Import Gallery Images
import img1 from "@/assets/user-ui/Screenshot 2026-01-15 185521.png";
import img2 from "@/assets/user-ui/Screenshot 2026-01-15 185550.png";
import img3 from "@/assets/user-ui/Screenshot 2026-01-15 185625.png";
import img4 from "@/assets/user-ui/Screenshot 2026-01-15 185649.png";
import img5 from "@/assets/user-ui/Screenshot 2026-01-15 185716.png";
import img6 from "@/assets/user-ui/Screenshot 2026-01-15 185737.png";
import img7 from "@/assets/user-ui/Screenshot 2026-01-15 185753.png";
import img8 from "@/assets/user-ui/Screenshot 2026-01-15 185818.png";
import img9 from "@/assets/user-ui/Screenshot 2026-01-15 185856.png";
import img10 from "@/assets/user-ui/Screenshot 2026-01-15 185927.png";
import img11 from "@/assets/user-ui/Screenshot 2026-01-15 185955.png";
import img12 from "@/assets/user-ui/Screenshot 2026-01-15 190014.png";
import img13 from "@/assets/user-ui/Screenshot 2026-01-15 190035.png";
import img14 from "@/assets/user-ui/Screenshot 2026-01-15 190105.png";
import img15 from "@/assets/user-ui/Screenshot 2026-01-15 190129.png";
import img16 from "@/assets/user-ui/Screenshot 2026-01-15 190255.png";
import img17 from "@/assets/user-ui/Screenshot 2026-01-15 190323.png";
import img18 from "@/assets/user-ui/Screenshot 2026-01-15 190546.png";
import img19 from "@/assets/user-ui/Screenshot 2026-01-15 190606.png";

import img20 from "@/assets/interierdesign/Screenshot 2026-01-15 211743.png";
import img21 from "@/assets/interierdesign/Screenshot 2026-01-15 211804.png";
import img22 from "@/assets/interierdesign/Screenshot 2026-01-15 211829.png";
import img23 from "@/assets/interierdesign/Screenshot 2026-01-15 211853.png";
import img24 from "@/assets/interierdesign/Screenshot 2026-01-15 211915.png";
import img25 from "@/assets/interierdesign/Screenshot 2026-01-15 211937.png";
import img26 from "@/assets/interierdesign/Screenshot 2026-01-15 211956.png";
import img27 from "@/assets/interierdesign/Screenshot 2026-01-15 212054.png";
import img28 from "@/assets/interierdesign/Screenshot 2026-01-15 212118.png";
import img29 from "@/assets/interierdesign/Screenshot 2026-01-15 212138.png";
import img30 from "@/assets/interierdesign/Screenshot 2026-01-15 212204.png";
import img31 from "@/assets/interierdesign/Screenshot 2026-01-15 212229.png";

// --- Types ---
interface Project {
    id: number;
    title: string;
    category: string;
    problem: string;
    solution: string;
    tech: string[];
    liveLink: string;
    githubLink: string;
    color: string;
    videoUrl?: string;
    galleryImages?: string[];
}

// --- Data ---
const fullStackProjects: Project[] = [
    {
        id: 1,
        title: "RealEstatePro",
        category: "PropTech Platform",
        problem: "Navigating the property market is often complex, with disjointed communication between buyers, sellers, and agents leading to missed opportunities.",
        solution: "A unified real estate ecosystem enabling seamless buying, selling, and renting. Features dedicated agent profiles, direct messaging, and advanced property search.",
        tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
        liveLink: "https://real-estate-frontend-9ryp.onrender.com",
        githubLink: "https://github.com/khilendra2003-dewangan/real-estate-first.git",
        color: "#C9B037",
        videoUrl: "https://player.cloudinary.com/embed/?cloud_name=dwrltrqcl&public_id=real_state_video_ppjoyr",
        galleryImages: [
            img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
            img11, img12, img13, img14, img15, img16, img17, img18, img19
        ]
    }
];

const aiProjects: Project[] = [
    {
        id: 2,
        title: "AI Voice Assistant",
        category: "GenAI & Automation",
        problem: "Customer support teams are overwhelmed by repetitive queries, leading to long wait times and inconsistent responses.",
        solution: "An intelligent voice assistant powered by RAG and n8n workflows, capable of holding natural conversations and retrieving real-time knowledge base data.",
        tech: ["RAG", "n8n", "React", "Node.js", "MongoDB", "Pinecone"],
        liveLink: "#",
        githubLink: "#",
        color: "#4A90E2",
        videoUrl: "https://res.cloudinary.com/dwrltrqcl/video/upload/v1768486170/ai_powered_voice_assistant_txg1u1.mp4",
    },
    {
        id: 3,
        title: "AI Resume Scanner",
        category: "AI & HR Tech",
        problem: "Job seekers struggle to optimize resumes for ATS systems, while recruiters are overwhelmed by the volume of unqualified applications.",
        solution: "An intelligent platform that uses LLMs to analyze resumes against job descriptions, providing instant scoring, feedback, and keyword optimization.",
        tech: ["React", "Tailwind", "GenAI", "LLM", "Node.js", "Express.js"],
        liveLink: "#",
        githubLink: "#",
        color: "#FF6B6B",
        videoUrl: "https://res.cloudinary.com/dwrltrqcl/video/upload/v1768486753/ai_resume_scanner_xgabft.mp4",
    },
    {
        id: 4,
        title: "AI Code Visualizer",
        category: "DevTool & Analytics",
        problem: "Large codebases become unmanageable labyrinths, making it difficult for developers to visualize dependencies and assess structural risks.",
        solution: "A dynamic knowledge graph that visualizes code structure as nodes. Click nodes to view risk factors, summaries, dependencies, and instantly open files in VS Code.",
        tech: ["React", "React Flow", "Node.js", "Express", "Gemini AI"],
        liveLink: "#",
        githubLink: "#",
        color: "#50E3C2",
        videoUrl: "https://res.cloudinary.com/dwrltrqcl/video/upload/v1768487309/Screen_Recording_2025-12-30_111838_bn0l3e.mp4",
    }
];

const frontendProjects: Project[] = [
    {
        id: 5,
        title: "Interior Design Website",
        category: "Frontend Experience",
        problem: "Showcasing luxury interior designs requires a platform that reflects elegance and sophistication, with high-quality visuals and smooth navigation.",
        solution: "A premium interior design portfolio featuring cinematic video backgrounds, gallery interactions, and a polished dark-themed aesthetic.",
        tech: ["React", "TypeScript", "GSAP", "Tailwind", "Framer Motion"],
        liveLink: "https://posan-interiors.vercel.app/",
        githubLink: "#",
        color: "#C9B037",
        videoUrl: "https://res.cloudinary.com/dwrltrqcl/video/upload/v1768491911/Screen_Recording_2026-01-15_210920_xwltoh.mp4",
        galleryImages: [
            img20, img21, img22, img23, img24, img25,
            img26, img27, img28, img29, img30, img31
        ]
    },
    {
        id: 6,
        title: "Eternal - Wedding Invitation",
        category: "Interactive Event Platform",
        problem: "Traditional digital invitations often feel static and impersonal, failing to capture the emotion and grandeur of a luxury wedding.",
        solution: "A cinematic storytelling experience with parallax scrolling, interactive timeline, and seamless RSVP integration wrapped in an elegant UI.",
        tech: ["React", "Framer Motion", "GSAP", "Tailwind CSS"],
        liveLink: "https://marrigewebsite.vercel.app/",
        githubLink: "#",
        color: "#E0B0FF",
        videoUrl: "https://res.cloudinary.com/dwrltrqcl/video/upload/v1768493622/Screen_Recording_2026-01-15_214102_jidma8.mp4",
    }
];

// --- Components ---

const GalleryModal = ({ images, title, onClose }: { images: string[]; title: string; onClose: () => void }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/98 backdrop-blur-xl flex flex-col"
            onClick={onClose}
        >
            {/* Close Button Area - Separate from content flow to ensure clickable */}
            <div className="absolute top-8 right-8 z-[10002] pointer-events-auto">
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onClose();
                    }}
                    className="p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all transform hover:scale-110 border border-white/10 cursor-pointer shadow-2xl backdrop-blur-md"
                >
                    <X size={32} />
                </button>
            </div>

            {/* Content Container - Flex Column to prevent overlap */}
            <motion.div
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.98, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="flex flex-col h-full max-w-[1600px] mx-auto w-full relative z-[9999]"
            >
                {/* Header - Fixed Height/Shrink */}
                <div className="flex-shrink-0 pt-20 pb-8 px-6 text-center select-none">
                    <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{title} <span className="text-[#C9B037]">Gallery</span></h3>
                    <p className="text-white/50 text-lg">User Interface & Design System</p>
                </div>

                {/* Grid - Scrollable Area */}
                <div
                    className="flex-1 overflow-y-auto px-6 pb-20 gallery-grid-scroll"
                >
                    <style>{`
                        .gallery-grid-scroll::-webkit-scrollbar {
                            display: none;
                        }
                        .gallery-grid-scroll {
                            -ms-overflow-style: none;
                            scrollbar-width: none;
                        }
                    `}</style>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {images.map((img, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.03 }}
                                className="group relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-white/5 select-none"
                            >
                                <img
                                    src={img}
                                    alt={`UI Screen ${idx + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const DetailModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/80 backdrop-blur-md"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, y: 50, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 50, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl bg-black/90 border border-white/10 rounded-[40px] shadow-2xl overflow-hidden"
            >
                {/* Decorative Gradients */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9B037] opacity-10 blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white opacity-5 blur-[100px] rounded-full pointer-events-none" />

                <div className="relative p-8 md:p-12">
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white/70 hover:text-white"
                    >
                        <X size={24} />
                    </button>

                    <div className="mb-2 text-[#C9B037] font-medium tracking-widest text-sm uppercase">{project.category}</div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">{project.title}</h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <Zap size={20} className="text-[#C9B037]" /> The Challenge
                            </h3>
                            <p className="text-white/70 leading-relaxed mb-8">{project.problem}</p>

                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <Globe size={20} className="text-[#C9B037]" /> The Solution
                            </h3>
                            <p className="text-white/70 leading-relaxed">{project.solution}</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-white mb-6">Tech Stack</h3>
                            <div className="flex flex-wrap gap-3 mb-10">
                                {project.tech.map((t, i) => (
                                    <motion.span
                                        key={i}
                                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)", borderColor: "#C9B037" }}
                                        className="px-4 py-2 rounded-full bg-white/5 border border-white/5 text-white/80 text-sm font-medium cursor-default transition-colors duration-300"
                                    >
                                        {t}
                                    </motion.span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <motion.a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex-1 py-4 rounded-xl bg-[#C9B037] text-black font-bold text-center hover:bg-[#D4AF37] transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(201,176,55,0.3)] hover:shadow-[0_0_25px_rgba(201,176,55,0.5)]"
                                >
                                    <ExternalLink size={18} /> View Live
                                </motion.a>
                                <motion.a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex-1 py-4 rounded-xl bg-white/10 text-white font-bold text-center hover:bg-white/20 transition-all flex items-center justify-center gap-2 border border-white/10 hover:border-white/30"
                                >
                                    <Github size={18} /> Source Code
                                </motion.a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    const isEven = index % 2 === 0;
    const [isHovered, setIsHovered] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showDetail, setShowDetail] = useState(false);
    const [showGallery, setShowGallery] = useState(false);

    // Video Ref
    const videoRef = useRef<HTMLVideoElement>(null);
    const videoContainerRef = useRef<HTMLDivElement>(null);

    // Robust Auto-Pause Logic
    const isInView = useInView(videoContainerRef, { margin: "0px 0px -40% 0px", once: false }); // Trigger when 40% of video leaves

    useEffect(() => {
        if (!isInView && isPlaying) {
            setIsPlaying(false);
            if (videoRef.current) {
                videoRef.current.pause();
            }
        }
    }, [isInView, isPlaying]);

    // Toggle Play
    const handlePlay = (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent detailed view opening if clicking play
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                videoRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    // 3D Tilt Logic
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });

    function handleMouseMove(e: React.MouseEvent) {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();

        const mouseX = e.clientX - left;
        const mouseY = e.clientY - top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
        setIsHovered(false);
    }

    // Scroll opacity reveal
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const yParallax = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-20 mb-32 relative`}
            >
                {/* --- Visual Side (3D Premium Card) --- */}
                <motion.div
                    className="w-full lg:w-1/2"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={() => setIsHovered(true)}
                    style={{
                        y: yParallax,
                        perspective: 1200
                    }}
                >
                    <motion.div
                        ref={videoContainerRef}
                        style={{
                            rotateX: useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]),
                            rotateY: useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]),
                            transformStyle: "preserve-3d",
                        }}
                        className="relative aspect-video rounded-3xl bg-black border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group cursor-pointer overflow-hidden"
                        onClick={() => setShowDetail(true)}
                    >
                        {/* Video / Image Content */}
                        <div className="relative w-full h-full z-0">
                            {project.videoUrl?.includes(".mp4") ? (
                                <div className="relative w-full h-full bg-black">
                                    <video
                                        ref={videoRef}
                                        src={project.videoUrl}
                                        className="w-full h-full object-cover rounded-3xl transition-transform duration-1000 group-hover:scale-105"
                                        muted={false} // Allow sound if user played it
                                        loop
                                        playsInline
                                    />

                                    {/* Custom Control Overlay (Replacing default controls for style) */}
                                    <AnimatePresence>
                                        {!isPlaying && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/10 transition-all duration-500 z-10"
                                            >
                                                <button
                                                    onClick={handlePlay}
                                                    className="group/play relative w-24 h-24 rounded-full flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
                                                >
                                                    {/* Glow Ring */}
                                                    <div className="absolute inset-0 rounded-full bg-[#C9B037]/20 blur-xl group-hover/play:bg-[#C9B037]/40 transition-colors duration-500" />

                                                    {/* Glass Background */}
                                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#C9B037]/90 to-[#8A7115]/90 border border-white/20 shadow-[0_10px_30px_rgba(201,176,55,0.3)] backdrop-blur-md" />

                                                    {/* Triangle Icon */}
                                                    <div className="relative w-0 h-0 border-t-[12px] border-t-transparent border-l-[24px] border-l-black border-b-[12px] border-b-transparent ml-2 opacity-80 group-hover/play:opacity-100" />
                                                </button>

                                                <div className="absolute bottom-12 flex flex-col items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 pointer-events-none">
                                                    <span className="text-[#C9B037] text-xs font-bold tracking-[0.3em] uppercase drop-shadow-md">View Project</span>
                                                    <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C9B037] to-transparent" />
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Pause Trigger Area (Invisible, covers video when playing) */}
                                    {isPlaying && (
                                        <div
                                            className="absolute inset-0 z-10"
                                            onClick={handlePlay}
                                        />
                                    )}
                                </div>
                            ) : (
                                // No MP4 Fallback (Iframe or Image)
                                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-black">
                                    {isPlaying && project.videoUrl ? (
                                        <iframe
                                            src={`${project.videoUrl}${project.videoUrl.includes('?') ? '&' : '?'}autoplay=true`}
                                            className="relative z-10 w-full h-full object-cover rounded-3xl"
                                            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                                            allowFullScreen
                                        />
                                    ) : (
                                        <>
                                            {project.galleryImages?.[0] && (
                                                <img
                                                    src={project.galleryImages[0]}
                                                    alt="Project Preview"
                                                    className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                                                />
                                            )}
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/10 transition-colors duration-500">
                                                <div className="flex flex-col items-center gap-4">
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setIsPlaying(true);
                                                        }}
                                                        className="group/play relative w-20 h-20 rounded-full flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
                                                    >
                                                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#C9B037]/80 to-[#8A7115]/80 border border-white/10 shadow-[0_0_30px_rgba(201,176,55,0.3)]" />
                                                        <div className="relative w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-black border-b-[10px] border-b-transparent ml-2" />
                                                    </button>
                                                    <span className="text-white font-medium tracking-widest uppercase text-sm drop-shadow-lg">View Project</span>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Gold Border Highlight */}
                        <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none z-30 transition-colors duration-500 group-hover:border-[#C9B037]/50" />
                    </motion.div>
                </motion.div>

                {/* --- Text Side --- */}
                <div className="w-full lg:w-1/2 text-left">
                    <div className="text-[#C9B037] font-bold tracking-widest text-sm mb-4 flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-[#C9B037]" />
                        {project.category}
                    </div>

                    <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                        {project.title}
                    </h3>

                    <p className="text-white/60 text-lg leading-relaxed mb-8">
                        {project.problem.substring(0, 100)}...
                    </p>

                    {/* Tech Pills (Premium) */}
                    <div className="flex flex-wrap gap-3 mb-10">
                        {project.tech.map((t, i) => (
                            <div key={i} className="group/pill relative px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-white/60 overflow-hidden transition-all hover:border-[#C9B037]/50 hover:text-white cursor-default">
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/pill:translate-x-full transition-transform duration-700 ease-in-out" />
                                <span className="relative z-10">{t}</span>
                            </div>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                        <button
                            onClick={() => setShowDetail(true)}
                            className="relative overflow-hidden px-8 py-3 rounded-full bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-black font-bold hover:shadow-[0_0_20px_rgba(191,149,63,0.4)] transition-all flex items-center gap-2 group/btn hover:scale-105"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                View Details
                                <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                            </span>
                            {/* Shine Effect Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                        </button>

                        {/* UI Gallery Button */}
                        {project.galleryImages && (
                            <button
                                onClick={() => setShowGallery(true)}
                                className="px-6 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium transition-all flex items-center gap-2 group/gallery hover:border-[#C9B037]/50"
                            >
                                <ImageIcon size={18} className="group-hover/gallery:text-[#C9B037] transition-colors" />
                                UI Gallery
                            </button>
                        )}

                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:bg-white hover:text-black hover:border-white transition-all transform hover:scale-110">
                            <ExternalLink size={20} />
                        </a>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:bg-white hover:text-black hover:border-white transition-all transform hover:scale-110">
                            <Github size={20} />
                        </a>
                    </div>
                </div>
            </motion.div>

            <AnimatePresence>
                {showDetail && <DetailModal project={project} onClose={() => setShowDetail(false)} />}
                {showGallery && project.galleryImages && <GalleryModal images={project.galleryImages} title={project.title} onClose={() => setShowGallery(false)} />}
            </AnimatePresence>
        </>
    );
};

const PortfolioSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });

    return (
        <section
            id="portfolio"
            ref={containerRef}
            className="relative py-32 overflow-hidden"
            style={{
                background: 'linear-gradient(to bottom, #000000 0%, #050505 50%, #000000 100%)', // Pure "Black Tie" Luxury
            }}
        >
            {/* Background Particles - Gold Only */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#C9B037] opacity-[0.03] blur-[150px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-[#BF953F] opacity-[0.03] blur-[150px] rounded-full" />
            </div>

            <div className="container relative z-10 mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-32"
                >
                    <h2 className="text-6xl md:text-8xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] drop-shadow-[0_5px_15px_rgba(191,149,63,0.2)]">
                        Selected Works
                    </h2>
                    <p className="mt-6 text-xl text-white/50 max-w-2xl mx-auto font-light">
                        A curated collection of projects demonstrating <span className="text-[#C9B037]">technical mastery</span> and real-world impact.
                    </p>
                </motion.div>

                {/* Projects List */}
                <div className="max-w-7xl mx-auto">
                    {/* Full Stack Projects Section */}
                    <div className="mb-32">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 mb-20"
                        >
                            <span className="w-16 h-[2px] bg-gradient-to-r from-[#C9B037] to-transparent" />
                            <h3 className="text-3xl md:text-4xl font-display font-medium text-white/90">
                                Full Stack Projects
                            </h3>
                        </motion.div>

                        {fullStackProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>

                    {/* AI Projects Section */}
                    <div className="mb-32">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 mb-20"
                        >
                            <span className="w-16 h-[2px] bg-gradient-to-r from-[#C9B037] to-transparent" />
                            <h3 className="text-3xl md:text-4xl font-display font-medium text-white/90">
                                AI Projects
                            </h3>
                        </motion.div>

                        {aiProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>

                    {/* Frontend Projects Section */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 mb-20"
                        >
                            <span className="w-16 h-[2px] bg-gradient-to-r from-[#C9B037] to-transparent" />
                            <h3 className="text-3xl md:text-4xl font-display font-medium text-white/90">
                                Frontend Projects
                            </h3>
                        </motion.div>

                        {frontendProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
