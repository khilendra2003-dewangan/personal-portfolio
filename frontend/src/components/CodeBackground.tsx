import React, { useEffect, useRef } from "react";

const CodeBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let particles: { x: number; y: number; text: string; speed: number; opacity: number }[] = [];

        // Configuration
        const fontSize = 14;
        const columnWidth = 20;
        const codeSnippets = [
            "const", "let", "var", "function", "return", "import", "export", "class", "interface",
            "if", "else", "switch", "map", "filter", "reduce", "async", "await", "Promise",
            "<div>", "<span>", "console.log", "npm", "git", "commit", "push", "pull",
            "0", "1", ";", "{}", "[]", "()", "=>", "&&", "||", "!", "=="
        ];

        const initParticles = () => {
            const columns = Math.ceil(canvas.width / columnWidth);
            particles = [];

            for (let i = 0; i < columns; i++) {
                // Randomize start positions above the screen
                const startY = Math.random() * -canvas.height;
                particles.push({
                    x: i * columnWidth,
                    y: startY,
                    text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
                    speed: 1 + Math.random() * 2,
                    opacity: 0.1 + Math.random() * 0.3 // Varied opacity for depth
                });
            }
        };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const draw = () => {
            // Semi-transparent clear for trails? No, let's keep it crisp for luxury
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.font = `${fontSize}px 'JetBrains Mono', 'Fira Code', monospace`;

            particles.forEach((p, index) => {
                // Changing opacity for twinkling effect
                if (Math.random() > 0.95) {
                    p.opacity = 0.1 + Math.random() * 0.4;
                }

                // Determine color based on "syntax highlighting" logic simulation
                // Mostly Gold/Silver
                if (Math.random() > 0.8) {
                    ctx.fillStyle = `rgba(201, 176, 55, ${p.opacity})`; // Gold
                } else {
                    ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity * 0.5})`; // White/Silver
                }

                ctx.fillText(p.text, p.x, p.y);

                p.y += p.speed;

                // Randomly change text
                if (Math.random() > 0.98) {
                    p.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
                }

                // Reset specific particle when it goes off screen
                if (p.y > canvas.height) {
                    p.y = -20;
                    p.speed = 1 + Math.random() * 2;
                    p.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
                }
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();
        draw();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none opacity-[0.07] mix-blend-screen" // Low opacity mix-blend for subtle texture
            style={{
                maskImage: "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)" // Fade in/out at edges
            }}
        />
    );
};

export default CodeBackground;
