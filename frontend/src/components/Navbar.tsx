
import { motion, useScroll, useMotionValueEvent, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Scroll Lock Effect
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 ${isScrolled
        ? "bg-black/80 backdrop-blur-xl border-b border-white/5 py-4"
        : "bg-transparent py-6"
        }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-[1000]">
        <div className="flex items-center justify-between">

          {/* Logo/Brand - KD Monogram */}
          <motion.a
            href="#home"
            className="group relative z-50"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-3xl font-display font-bold tracking-tighter text-white group-hover:text-[#C9B037] transition-colors duration-300">
              KD<span className="text-[#C9B037]">.</span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-10">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.5, duration: 0.5 }}
                className="relative"
              >
                <a
                  href={item.href}
                  className="relative px-2 py-2 block group"
                >
                  {/* Hover Spotlight Glow */}
                  <div className="absolute inset-0 rounded-lg bg-[#C9B037]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />

                  <span className="relative text-xs font-bold tracking-[0.2em] uppercase text-white/80 group-hover:text-[#C9B037] transition-colors duration-300">
                    {item.name}
                  </span>

                  {/* Premium Dot Underline */}
                  <span className="absolute -bottom-1 left-1/2 w-1 h-1 bg-[#C9B037] rounded-full opacity-0 transform -translate-x-1/2 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-[0_0_10px_#C9B037]" />
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Hire Me CTA - Minimalist Gold */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="hidden lg:block"
          >
            <a href="#contact">
              <Button
                className="bg-transparent border border-[#C9B037]/50 text-[#C9B037] hover:bg-[#C9B037] hover:text-black rounded-full px-8 py-6 text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-[0_0_15px_-5px_rgba(201,176,55,0.2)] hover:shadow-[0_0_25px_rgba(201,176,55,0.5)]"
              >
                Hire Me
              </Button>
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white/80 hover:text-[#C9B037] transition-colors relative z-[10000]"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Full Screen Mobile Menu Overlay - Portal */}
      {createPortal(
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-[99999] bg-black lg:hidden flex flex-col pt-32 pb-10 px-8"
              style={{ backgroundColor: "black" }} // Force solid black
            >
              {/* Background Texture */}
              <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-[20%] -right-[20%] w-[500px] h-[500px] bg-[#C9B037]/10 blur-[100px] rounded-full" />
                <div className="absolute -bottom-[20%] -left-[20%] w-[400px] h-[400px] bg-white/5 blur-[80px] rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vh] font-bold text-white/[0.02] font-display select-none">KD.</div>
              </div>

              <ul className="flex flex-col gap-6 relative z-10">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (index * 0.1), duration: 0.5, ease: "easeOut" }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="group flex items-end gap-4"
                    >
                      <span className="text-[#C9B037] font-mono text-sm mb-2 opacity-60 group-hover:opacity-100 transition-opacity">0{index + 1}</span>
                      <span className="text-5xl md:text-6xl font-display font-bold text-white/80 group-hover:text-white group-hover:tracking-wider transition-all duration-300">
                        {item.name}
                      </span>
                    </a>
                    <div className="w-full h-[1px] bg-white/5 mt-4 group-hover:bg-[#C9B037]/30 transition-colors" />
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mt-auto relative z-10"
              >
                <div className="flex justify-between items-end">
                  <div className="flex gap-6">
                    {/* Social Placeholders */}
                    <a href="#" className="text-white/50 hover:text-[#C9B037] transition-colors">LinkedIn</a>
                    <a href="#" className="text-white/50 hover:text-[#C9B037] transition-colors">GitHub</a>
                    <a href="#" className="text-white/50 hover:text-[#C9B037] transition-colors">Email</a>
                  </div>

                  <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button
                      className="bg-[#C9B037] text-black px-8 py-6 rounded-full font-bold uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(201,176,55,0.2)] hover:shadow-[0_0_30px_rgba(201,176,55,0.4)] transition-all"
                    >
                      Hire Me
                    </Button>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </motion.nav>
  );
};

export default Navbar;
