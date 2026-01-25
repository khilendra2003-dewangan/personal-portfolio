import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { Bot, Zap, MessageSquare, ChevronUp } from "lucide-react";

const FloatingRobot = () => {
    const { scrollY } = useScroll();
    const [showMessage, setShowMessage] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [direction, setDirection] = useState(0); // 1 = down, -1 = up

    useEffect(() => {
        const handleScroll = () => {
            const current = window.scrollY;
            if (current > lastScrollY + 5) setDirection(1);
            else if (current < lastScrollY - 5) setDirection(-1);
            setLastScrollY(current);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    // Spring for smooth bobbing
    const yBob = {
        y: [0, -10, 0],
        transition: { duration: 3, repeat: Infinity, ease: "easeInOut" } as any
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-2 pointer-events-none">

            {/* --- Message Bubble --- */}
            <AnimatePresence>
                {(showMessage) && (
                    <motion.div
                        initial={{ opacity: 0, x: 20, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 20, scale: 0.8 }}
                        className="pointer-events-auto bg-white text-black px-4 py-2 rounded-xl rounded-tr-none shadow-xl mb-2 mr-2 max-w-[200px] border-2 border-[#C9B037]"
                    >
                        <p className="text-xs font-bold">Need assistance? I'm here!</p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* --- Robot Container --- */}
            <motion.div
                className="pointer-events-auto relative group cursor-pointer"
                onMouseEnter={() => setShowMessage(true)}
                onMouseLeave={() => setShowMessage(false)}
                onClick={scrollToTop}
                animate={yBob}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                {/* Glow / Thruster */}
                <div className="absolute -inset-4 bg-[#C9B037]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Robot Body */}
                <div className="relative w-14 h-14 bg-[#080808] border border-[#C9B037] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(201,176,55,0.3)] overflow-hidden">
                    {/* Inner Detail */}
                    <div className="absolute inset-1 rounded-full border border-white/10" />

                    <motion.div
                        animate={{ rotate: direction === 1 ? 10 : direction === -1 ? -10 : 0 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    >
                        <Bot size={24} className="text-[#C9B037]" />
                    </motion.div>

                    {/* Eyes Glow */}
                    <motion.div
                        className="absolute w-full h-1 bg-[#C9B037] top-1/2 left-0 opacity-0 group-hover:opacity-20"
                        animate={{ opacity: [0, 0.5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </div>

                {/* Thruster Flame (Animated) */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                    <motion.div
                        className="w-1 h-3 bg-gradient-to-t from-transparent to-[#C9B037] rounded-full"
                        animate={{ height: [3, 8, 3], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                    />
                    <motion.div
                        className="w-1 h-2 bg-gradient-to-t from-transparent to-[#FFD700] rounded-full"
                        animate={{ height: [2, 6, 2], opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 0.4, repeat: Infinity, delay: 0.1 }}
                    />
                </div>

            </motion.div>
        </div>
    );
};

export default FloatingRobot;
