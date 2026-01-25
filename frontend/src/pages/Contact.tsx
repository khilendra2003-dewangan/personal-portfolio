
import PageLayout from "@/components/PageLayout";
import PremiumCard from "@/components/PremiumCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Github, Twitter } from "lucide-react";

const Contact = () => {
    return (
        <PageLayout>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start max-w-6xl mx-auto">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-12"
                >
                    <header className="space-y-4">
                        <h1 className="text-5xl font-display font-medium text-foreground">Let's Connect</h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Whether you have a groundbreaking idea or just want to say hello, I'm always open to discussing new opportunities.
                        </p>
                    </header>

                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary/10 rounded-full text-primary">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-foreground">Email</h3>
                                <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-primary transition-colors">hello@example.com</a>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary/10 rounded-full text-primary">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-foreground">Location</h3>
                                <p className="text-muted-foreground">San Francisco, CA</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-border">
                        <h3 className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-6">Socials</h3>
                        <div className="flex gap-4">
                            {[Linkedin, Github, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="p-4 rounded-full border border-border hover:border-primary hover:text-primary hover:-translate-y-1 transition-all duration-300">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <PremiumCard className="p-8 md:p-10 space-y-6 bg-white/50">
                        <h2 className="text-2xl font-display text-foreground mb-6">Send a Message</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-foreground">Name</label>
                                <Input className="bg-background/50 border-border focus:border-primary h-12" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-muted-foreground">Email</label>
                                <Input className="bg-background/50 border-border focus:border-primary h-12" placeholder="john@example.com" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-muted-foreground">Subject</label>
                            <Input className="bg-background/50 border-border focus:border-primary h-12" placeholder="Project Inquiry" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-muted-foreground">Message</label>
                            <Textarea className="bg-background/50 border-border focus:border-primary min-h-[150px] resize-none" placeholder="Tell me about your project..." />
                        </div>

                        <Button className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-bold tracking-wide rounded-lg text-md shadow-lg shadow-primary/20">
                            Send Message
                        </Button>
                    </PremiumCard>
                </motion.div>
            </div>
        </PageLayout>
    );
};

export default Contact;
