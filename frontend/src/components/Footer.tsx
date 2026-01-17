import React from "react";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const Footer = () => {
    return (
        <footer className="relative bg-black text-white py-12 border-t border-white/10 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#C9B037] opacity-10 blur-[100px] rounded-full" />
                <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#5D3FD3] opacity-10 blur-[100px] rounded-full" />
            </div>

            <div className="container relative z-10 mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">

                    {/* Branding & Tech Stack */}
                    <div className="text-center md:text-left space-y-4">
                        <h4 className="text-2xl font-display font-bold text-white tracking-wide">
                            Khilendra <span className="text-[#C9B037]">Dewangan</span>
                        </h4>
                        <p className="text-white/40 text-sm max-w-xs mx-auto md:mx-0">
                            Built with HTML, CSS, JavaScript, Tailwind, React, and TypeScript.
                            Designed for performance and elegance.
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-6">
                        {[
                            { icon: Github, link: "https://github.com/khilendra2003-dewangan" },
                            { icon: Linkedin, link: "https://www.linkedin.com/in/khilendra-dewangan-9b236229a/" },
                            { icon: Twitter, link: "#" }
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-[#C9B037] hover:text-black hover:border-[#C9B037] transition-all transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(201,176,55,0.4)]"
                            >
                                <social.icon size={20} />
                            </a>
                        ))}
                    </div>

                </div>

                {/* Divider */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-8" />

                {/* Copyright */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/30">
                    <p>© {new Date().getFullYear()} Khilendra Dewangan. All rights reserved.</p>
                    <p className="flex items-center gap-2">
                        Made with <Heart size={12} className="text-[#C9B037] fill-[#C9B037]" /> in India
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
