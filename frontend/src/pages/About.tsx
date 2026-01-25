
import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";

const About = () => {
    return (
        <PageLayout>
            <div className="space-y-20 md:space-y-32">
                {/* Intro Section */}
                <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                    <div className="md:col-span-7 space-y-8">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-5xl md:text-7xl font-display font-medium leading-tight text-foreground"
                        >
                            Building digital <br />
                            <span className="italic text-muted-foreground font-light">masterpieces.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
                        >
                            I am a software engineer with a passion for crafting exceptional digital experiences.
                            My work sits at the intersection of technical precision and artistic expression.
                        </motion.p>
                    </div>
                    <div className="md:col-span-5 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="aspect-[4/5] rounded-2xl overflow-hidden bg-secondary relative z-10 shadow-2xl"
                        >
                            {/* Placeholder for Profile Image - Generating decorative gradient for now */}
                            <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-300 pattern-grid-lg opacity-50" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </motion.div>
                        {/* Decorative backing */}
                        <div className="absolute -top-4 -right-4 w-full h-full border border-primary/30 rounded-2xl z-0" />
                    </div>
                </section>

                {/* Narrative Section */}
                <section className="max-w-4xl mx-auto space-y-12">
                    <div className="flex flex-col md:flex-row gap-8 items-baseline">
                        <h2 className="text-sm font-bold tracking-widest uppercase text-primary shrink-0 w-32">The Journey</h2>
                        <div className="space-y-8 text-lg md:text-xl leading-relaxed text-foreground/80 font-serif">
                            <p>
                                My journey began with a simple curiosity: "How does it work?" This question led me down the rabbit hole of computer science, where I discovered that code is not just a tool, but a medium for creation.
                            </p>
                            <p>
                                Over the years, I have honed my skills in full-stack development, cloud architecture, and UI/UX design. I believe that true luxury in software lies in the details—the seamless transitions, the intuitive interactions, and the robust architecture that goes unnoticed but is deeply felt.
                            </p>
                            <p>
                                Today, I focus on building scalable applications that solve real-world problems while delivering an aesthetic experience that resonates with users.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Values Grid */}
                <section>
                    <div className="border-t border-border py-12 md:py-24">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {[
                                { title: "Precision", desc: "Clean code, pixel-perfect design, and reliable performance." },
                                { title: "Innovation", desc: "Pushing boundaries with modern tech stacks and creative solutions." },
                                { title: "Elegance", desc: "Simplicity is the ultimate sophistication in both code and design." }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="space-y-4"
                                >
                                    <h3 className="text-2xl font-display text-foreground">{item.title}</h3>
                                    <p className="text-muted-foreground">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default About;
