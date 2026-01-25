
import PageLayout from "@/components/PageLayout";
import PremiumCard from "@/components/PremiumCard";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
    {
        title: "EcoSphere",
        category: "Full Stack Platform",
        description: "A comprehensive sustainability tracking platform enabling organizations to monitor and reduce their carbon footprint through real-time data analytics.",
        tech: ["React", "Node.js", "AWS", "D3.js"],
        image: "linear-gradient(135deg, #e0f7fa, #80deea)", // Placeholder
        link: "#",
        github: "#"
    },
    {
        title: "Nebula Finance",
        category: "Fintech Dashboard",
        description: "High-performance trading dashboard with sub-millisecond updates, advanced charting capabilities, and bank-grade security protocols.",
        tech: ["Next.js", "TypeScript", "WebSockets", "Go"],
        image: "linear-gradient(135deg, #e8eaf6, #9fa8da)",
        link: "#",
        github: "#"
    },
    {
        title: "Aether Design System",
        category: "UI/UX Library",
        description: "An enterprise-grade component library focused on accessibility and consistent brand identity across multiple digital touchpoints.",
        tech: ["Vue", "Storybook", "SASS", "Jest"],
        image: "linear-gradient(135deg, #f3e5f5, #ce93d8)",
        link: "#",
        github: "#"
    }
];

const Projects = () => {
    return (
        <PageLayout>
            <div className="space-y-20">
                <header className="max-w-3xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-display font-medium text-foreground mb-6"
                    >
                        Selected Works
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted-foreground"
                    >
                        A collection of projects where design meets function.
                    </motion.p>
                </header>

                <div className="space-y-24">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                {/* Project Preview (Placeholder) */}
                                <div className={`aspect-video rounded-2xl overflow-hidden shadow-2xl relative group ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                                        style={{ background: project.image }} />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                                </div>

                                {/* Project Info */}
                                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                    <span className="text-primary tracking-widest uppercase text-sm font-bold">{project.category}</span>
                                    <h2 className="text-4xl font-display text-foreground">{project.title}</h2>
                                    <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 py-4">
                                        {project.tech.map(t => (
                                            <span key={t} className="px-3 py-1 bg-secondary/50 rounded-full text-xs font-medium text-secondary-foreground">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-6 pt-2">
                                        <Button variant="outline" className="gap-2 rounded-full border-primary/50 text-foreground hover:bg-primary hover:text-white transition-all">
                                            View Project <ArrowRight size={16} />
                                        </Button>
                                        <a href={project.github} className="text-muted-foreground hover:text-foreground transition-colors">
                                            <Github size={24} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </PageLayout>
    );
};

export default Projects;
