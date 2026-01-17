
import { motion, useScroll, useMotionValueEvent, useMotionValue, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

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

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-black/50 backdrop-blur-xl border-b border-white/5 py-4"
        : "bg-transparent py-6"
        }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
            className="lg:hidden p-2 text-white/80 hover:text-[#C9B037] transition-colors relative z-50"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Full Screen Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={isMobileMenuOpen ? { opacity: 1, pointerEvents: "auto" } : { opacity: 0, pointerEvents: "none" }}
        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl lg:hidden flex items-center justify-center"
      >
        <ul className="flex flex-col items-center gap-8">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <a
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-display font-bold text-white/80 hover:text-[#C9B037] transition-colors"
              >
                {item.name}
              </a>
            </motion.li>
          ))}
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: navItems.length * 0.1, duration: 0.5 }}
            className="mt-8"
          >
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button
                className="bg-[#C9B037] text-black px-10 py-5 rounded-full font-bold uppercase tracking-widest text-lg"
              >
                Hire Me
              </Button>
            </a>
          </motion.li>
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
