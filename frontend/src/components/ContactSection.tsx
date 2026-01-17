import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, Lock, Clock, Calendar, CheckCircle2 } from "lucide-react";

const ContactSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        projectType: 'Web Application Development',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', projectType: 'Web Application Development', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" ref={containerRef} className="relative py-32 overflow-hidden bg-black text-white">
            {/* Background Elements - Gold Only */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-[#C9B037] opacity-[0.05] blur-[150px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#BF953F] opacity-[0.05] blur-[150px] rounded-full" />
                {/* Grain overlay if desired, or keep clean */}
            </div>

            <div className="container relative z-10 mx-auto px-6">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-display font-bold mb-6"
                    >
                        Let’s Build Something <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728]">
                            Exceptional
                            <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] rounded-full" />
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-xl text-white/50 max-w-2xl mx-auto"
                    >
                        Have a project, idea, or opportunity? I’m open to freelance, full-time, and collaboration work.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                    {/* LEFT SIDE - Personal & Trust */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        {/* Intro */}
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold">Get in Touch</h3>
                            <p className="text-white/60 leading-relaxed text-lg">
                                I'm always excited to discuss new projects, creative ideas, or opportunities to be part of your visions.
                            </p>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-6">
                            {[
                                { icon: Mail, text: "khilendra24dewangan@gmail.com", label: "Email" },
                                { icon: Phone, text: "9691282427, 74890072491", label: "Phone / WhatsApp" },
                                { icon: MapPin, text: "Bangalore, B. Narayanapura", label: "Location" }
                            ].map((item, index) => (
                                <div key={index} className="group flex items-center gap-6 p-4 rounded-2xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all duration-300">
                                    <div className="p-3 rounded-xl bg-white/5 text-[#C9B037] group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(201,176,55,0.3)] transition-all">
                                        <item.icon size={24} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-white/40 mb-1">{item.label}</p>
                                        <p className="text-lg font-medium group-hover:text-[#C9B037] transition-colors">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Availability Badge */}
                        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/20 text-green-400">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            <span className="font-medium tracking-wide text-sm">Available for Freelance & Full-Time Opportunities</span>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-6">
                            {[
                                { Icon: Github, link: "https://github.com/khilendra2003-dewangan" },
                                { Icon: Linkedin, link: "https://www.linkedin.com/in/khilendra-dewangan-9b236229a/" },
                                { Icon: Twitter, link: "#" }
                            ].map(({ Icon, link }, i) => (
                                <a key={i} href={link} target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-[#C9B037] hover:text-black hover:scale-110 transition-all duration-300 shadow-[0_0_0_transparent] hover:shadow-[0_0_20px_rgba(201,176,55,0.5)]">
                                    <Icon size={24} />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Form Container */}
                        <div className="relative p-8 md:p-10 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden group">

                            {/* Subtle Border Glow */}
                            <div className="absolute inset-0 border border-[#C9B037]/0 group-hover:border-[#C9B037]/20 rounded-[32px] transition-colors duration-500 pointer-events-none" />

                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2 relative">
                                        <label className="text-sm text-white/40 font-medium ml-2">Full Name</label>
                                        <motion.div whileFocus={{ scale: 1.01 }} className="relative">
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="John Doe"
                                                className="w-full h-14 px-6 rounded-2xl bg-black/40 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-[#C9B037] focus:bg-black/60 transition-all z-10 relative"
                                            />
                                            {/* Glow Ring on Focus (Pseudo-element simulated) */}
                                            <div className="absolute inset-0 rounded-2xl shadow-[0_0_15px_rgba(201,176,55,0.1)] opacity-0 transition-opacity peer-focus:opacity-100 pointer-events-none" />
                                        </motion.div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm text-white/40 font-medium ml-2">Email Address</label>
                                        <motion.div whileFocus={{ scale: 1.01 }} className="relative">
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="john@example.com"
                                                className="w-full h-14 px-6 rounded-2xl bg-black/40 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-[#C9B037] focus:bg-black/60 transition-all"
                                            />
                                        </motion.div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm text-white/40 font-medium ml-2">Phone Number</label>
                                    <motion.div whileFocus={{ scale: 1.01 }} className="relative">
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+91 98765 43210"
                                            className="w-full h-14 px-6 rounded-2xl bg-black/40 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-[#C9B037] focus:bg-black/60 transition-all"
                                        />
                                    </motion.div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm text-white/40 font-medium ml-2">Project Type</label>
                                    <div className="relative">
                                        <motion.select
                                            whileFocus={{ scale: 1.01 }}
                                            name="projectType"
                                            value={formData.projectType}
                                            onChange={handleChange}
                                            className="w-full h-14 px-6 rounded-2xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-[#C9B037] focus:bg-black/60 transition-all appearance-none cursor-pointer"
                                        >
                                            <option className="bg-neutral-900">Web Application Development</option>
                                            <option className="bg-neutral-900">AI / RAG System Implementation</option>
                                            <option className="bg-neutral-900">Backend & Cloud Infrastructure</option>
                                            <option className="bg-neutral-900">Consultation & Strategy</option>
                                            <option className="bg-neutral-900">Other</option>
                                        </motion.select>
                                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm text-white/40 font-medium ml-2">Message</label>
                                    <motion.div whileFocus={{ scale: 1.01 }} className="relative">
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            placeholder="Tell me about your project..."
                                            rows={4}
                                            className="w-full p-6 rounded-2xl bg-black/40 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-[#C9B037] focus:bg-black/60 transition-all resize-none"
                                        />
                                    </motion.div>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="relative overflow-hidden w-full h-16 rounded-2xl bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-black font-bold text-lg hover:shadow-[0_0_30px_rgba(191,149,63,0.4)] transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        {status === 'submitting' ? (
                                            <>Sending...</>
                                        ) : (
                                            <>Start a Conversation <Send size={20} className="group-hover:translate-x-1 transition-transform" /></>
                                        )}
                                    </span>
                                    {/* Shine Effect Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                                </motion.button>

                                {status === 'success' && (
                                    <p className="text-green-400 text-center text-sm">Message sent successfully! I'll get back to you soon.</p>
                                )}
                                {status === 'error' && (
                                    <p className="text-red-400 text-center text-sm">Something went wrong. Please try again.</p>
                                )}

                                {/* Trust & Response */}
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                                    <div className="flex items-center gap-2 text-white/30 text-xs">
                                        <Lock size={12} /> 100% secure. No spam.
                                    </div>
                                    <div className="flex items-center gap-2 text-white/50 text-xs">
                                        <Clock size={12} className="text-[#C9B037]" /> usually respond within 24 hours
                                    </div>
                                </div>
                            </form>
                        </div>

                        {/* Alternative CTA */}
                        <div className="mt-8 text-center space-y-4">
                            <p className="text-white/40 text-sm">Or schedule a quick call</p>
                            <button
                                onClick={() => document.querySelector<HTMLInputElement>('input[name="name"]')?.focus()}
                                className="px-8 py-3 rounded-full border border-white/10 text-white/80 hover:bg-white/5 hover:text-[#C9B037] hover:border-[#C9B037]/30 transition-all flex items-center gap-2 mx-auto"
                            >
                                <Calendar size={16} /> Book a Free Consultation
                            </button>
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;
