
import PageLayout from "@/components/PageLayout";
import PremiumCard from "@/components/PremiumCard";
import { motion } from "framer-motion";

const skillCategories = [
    {
        category: "Frontend",
        skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Three.js"]
    },
    {
        category: "Backend",
        skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
        category: "DevOps & Cloud",
        skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Git", "Nginx"]
    },
    {
        category: "Design & Tools",
        skills: ["Figma", "Adobe XD", "VS Code", "Postman", "Jest", "Vite"]
    }
];

const Skills = () => {
    return (
        <PageLayout>
            <div className="space-y-16">
                <header className="space-y-6 max-w-3xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-display font-medium text-foreground"
                    >
                        Technical Arsenal
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted-foreground"
                    >
                        A curated stack of modern technologies I use to bring ideas to life.
                        Focused on performance, scalability, and developer experience.
                    </motion.p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((cat, idx) => (
                        <motion.div
                            key={cat.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <PremiumCard className="h-full">
                                <h3 className="text-2xl font-display mb-8 text-primary/80">{cat.category}</h3>
                                <div className="flex flex-wrap gap-3">
                                    {cat.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-4 py-2 bg-secondary/30 border border-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </PremiumCard>
                        </motion.div>
                    ))}
                </div>

                {/* Proficiency Indicators (Optional Luxury Detail) */}
                <section className="pt-12">
                    <h3 className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-8 text-center">Core Competencies</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        {["Problem Solving", "System Design", "UI Architecture", "Database Optimization"].map((item) => (
                            <div key={item} className="p-4 border border-border/30 rounded-lg">
                                <div className="text-primary text-xl mb-2">✦</div>
                                <span className="font-display text-lg">{item}</span>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default Skills;
