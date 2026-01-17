
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-developer-8k.jpg"; // Using the 8k image as requested, user can revert if needed

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]); // Parallax
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  // 3D Tilt Effect - applied to the text container
  const x = useMotionValue(0);
  const yRotate = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(yRotate, { stiffness: 500, damping: 50 }); // Higher damping for smoother float

  function handleMouseMove({ clientX, clientY, currentTarget }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const xPct = (clientX - left) / width - 0.5;
    const yPct = (clientY - top) / height - 0.5;
    // Subtle movement
    x.set(xPct * 10);
    yRotate.set(yPct * 10);
  }

  return (
    <section
      id="home"
      className="relative h-[100dvh] w-full overflow-hidden bg-black"
      onMouseMove={handleMouseMove}
    >
      {/* Background Image - Clean 8K - No Blur, Full Opacity */}
      {/* Background Image - Clean 8K - Cinematic Slow Zoom */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <motion.img
          src={heroImage}
          alt="Developer Workspace"
          className="h-[110%] w-full object-cover object-[75%_center] lg:object-[center_20%]"
          animate={{ scale: [1, 1.05] }} // Subtle 5% zoom
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        {/* Removed overlays for perfect visibility as requested */}
        {/* Subtle bottom gradient ONLY for mobile to improve text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:hidden" />
      </motion.div>

      {/* Content Container - Bottom Aligned on Mobile, Center on Desktop */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-end lg:justify-center pb-24 lg:pb-0">

        {/* Mobile Gradient Overlay for Text Readability */}
        <div className="absolute inset-x-0 bottom-0 h-[70vh] bg-gradient-to-t from-black via-black/80 to-transparent lg:hidden -z-10 pointer-events-none" />

        <motion.div
          style={{
            opacity,
            rotateX: mouseY,
            rotateY: mouseX,
            perspective: 1000,
            transformStyle: "preserve-3d"
          }}
          className="w-full lg:w-auto lg:max-w-[600px] lg:-mt-20 lg:ml-12 text-center lg:text-left"
        >
          {/* Role Label - Floating */}
          <motion.div
            initial={{ opacity: 0, x: -20, z: 50 }}
            animate={{ opacity: 1, x: 0, z: 50 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex items-center justify-center lg:justify-start gap-4 lg:gap-6 mb-4 lg:mb-6"
            style={{ transform: "translateZ(50px)" }}
          >
            <div className="h-[1px] w-12 lg:w-16 bg-gradient-to-r from-[#C9B037] to-transparent" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9B037] to-[#AA9225] font-semibold tracking-[0.2em] lg:tracking-[0.4em] uppercase text-[10px] lg:text-xs drop-shadow-lg whitespace-nowrap">
              Full Stack Developer
            </span>
          </motion.div>

          {/* Name - Luxurious Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 30, z: 20 }}
            animate={{ opacity: 1, y: 0, z: 20 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display text-white mb-6 leading-[1.1]"
            style={{
              transform: "translateZ(80px)"
            }}
          >
            <span className="font-medium">Khilendra</span> <br />
            <span className="font-light italic text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] drop-shadow-[0_0_10px_rgba(191,149,63,0.3)]">
              Dewangan
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30, z: 0 }}
            animate={{ opacity: 1, y: 0, z: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-sm md:text-lg text-white/80 max-w-md mx-auto lg:mx-0 leading-relaxed mb-8 font-light tracking-wide"
            style={{
              transform: "translateZ(40px)"
            }}
          >
            Crafting <span className="text-[#C9B037] font-normal">immersive digital experiences</span> with precision and elegance.
          </motion.p>

          {/* CTAs - Premium Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-8 w-full"
            style={{ transform: "translateZ(60px)" }}
          >
            <Button
              asChild
              className="relative w-full sm:w-auto overflow-hidden bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-black px-10 py-7 rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(191,149,63,0.3)] hover:shadow-[0_0_35px_rgba(191,149,63,0.5)] hover:scale-105"
            >
              <a href="#portfolio">
                <span className="relative z-10">View Projects</span>
                {/* Shine Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700 ease-in-out pointer-events-none" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto bg-black/30 border border-white/20 text-white hover:bg-white/5 hover:border-[#C9B037]/50 hover:text-[#C9B037] px-10 py-7 rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:scale-105 backdrop-blur-md"
            >
              <a href="#contact">
                Contact Me
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
