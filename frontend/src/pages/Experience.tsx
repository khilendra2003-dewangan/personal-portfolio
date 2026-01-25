
import PageLayout from "@/components/PageLayout";
import PremiumCard from "@/components/PremiumCard";
import { motion } from "framer-motion";

const experiences = [
    {
        role: "Senior Full Stack Engineer",
        company: "TechNova Solutions",
        period: "2023 - Present",
        description: "Leading the development of enterprise-scale microservices architecture. Improved system throughput by 40% and mentored junior developers."
    },
    {
        role: "Frontend Specialist",
        company: "Creative Pulse Studio",
        period: "2021 - 2023",
        description: "Spearheaded the UI/UX redesign of flagship products. Implemented a comprehensive design system used across 5 different applications."
    },
    {
        role: "Junior Web Developer",
        company: "StartUp Inc.",
        period: "2019 - 2021",
        description: "Collaborated with cross-functional teams to deliver rapid MVP iterations. Gained deep expertise in React ecosystem and agile methodologies."
    }
];

const education = [
    {
        degree: "Master of Computer Science",
        school: "University of Technology",
        year: "2019"
    },
    {
        degree: "Bachelor of Engineering",
        school: "State Engineering College",
        year: "2017"
    }
];

const Experience = () => {
    return (
        <PageLayout>
            <div className="max-w-4xl mx-auto space-y-24">
                <header className="text-center space-y-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-display font-medium text-foreground"
                    >
                        Professional Journey
                    </motion.h1>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "60px" }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="h-1 bg-primary mx-auto"
                    />
                </header>

                {/* Experience Timeline */}
                <div className="relative border-l-2 border-primary/20 ml-4 md:ml-12 space-y-16">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative pl-8 md:pl-16"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-[-9px] top-0 w-4 h-4 bg-background border-2 border-primary rounded-full box-border shadow-[0_0_0_4px_var(--background)]" />

                            <PremiumCard className="hover:translate-y-[-5px] transition-transform">
                                <span className="text-sm font-bold text-primary tracking-widest uppercase mb-2 block">{exp.period}</span>
                                <h3 className="text-2xl font-display text-foreground mb-1">{exp.role}</h3>
                                <h4 className="text-lg text-muted-foreground mb-4 font-light">{exp.company}</h4>
                                <p className="text-foreground/80 leading-relaxed">{exp.description}</p>
                            </PremiumCard>
                        </motion.div>
                    ))}
                </div>

                {/* Education Section */}
                <section>
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-display text-center mb-12"
                    >
                        Education
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {education.map((edu, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-center p-8 bg-secondary/20 rounded-xl"
                            >
                                <div className="text-4xl text-primary/40 font-display mb-4">{edu.year}</div>
                                <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                                <p className="text-muted-foreground">{edu.school}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default Experience;
