
import { ReactNode, useEffect } from "react";
import InternalNavbar from "./InternalNavbar";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

interface PageLayoutProps {
    children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
    const { pathname } = useLocation();

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="luxury-theme min-h-screen bg-background text-foreground transition-colors duration-500 font-sans selection:bg-primary/20 selection:text-primary-foreground">
            <InternalNavbar />

            {/* Decorative Background Elements */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full mix-blend-multiply" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-accent/10 blur-[120px] rounded-full mix-blend-multiply" />
                <div className="absolute top-[40%] left-[60%] w-[20%] h-[20%] bg-secondary/20 blur-[80px] rounded-full mix-blend-multiply" />

                {/* Grain overlay for texture */}
                <div className="absolute inset-0 opacity-[0.4] mix-blend-overlay"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
                </div>
            </div>

            <motion.main
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 pt-24 pb-20 px-6 max-w-7xl mx-auto"
            >
                {children}
            </motion.main>

            {/* Minimal Footer for Internal Pages */}
            <footer className="relative z-10 py-8 border-t border-border mt-auto">
                <div className="max-w-7xl mx-auto px-6 text-center text-muted-foreground text-sm font-medium tracking-wide">
                    © {new Date().getFullYear()} Khilendra Dewangan. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default PageLayout;
