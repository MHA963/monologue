'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Play } from 'lucide-react';
import { Reveal } from './Reveal';

export const Hero = () => {
    const [isHovered, setIsHovered] = useState(false);
    const targetRef = useRef<HTMLElement>(null);

    // Parallax and fade-out scroll effects
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

    return (
        <section ref={targetRef} className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20">
            {/* Background Decorative Elements - Moved up and visibility tuned */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/[0.08] rounded-full blur-3xl" />
                <motion.div
                    animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/4 -right-0 w-96 h-96 border border-brand-red/20 rounded-full"
                />
                <motion.div
                    animate={{
                        rotate: -360,
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-1/4 -left-0 w-[500px] h-[500px] border border-brand-red/10 rounded-full"
                />
            </div>

            <motion.div
                style={{ y, opacity, scale }}
                className="relative text-center z-10"
            >
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-light mb-8 leading-[0.9] tracking-tighter">
                    <Reveal delay={0.2} type="word">Give your text</Reveal> <br />
                    <Reveal delay={0.6} className="font-bold italic">a soul.</Reveal>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                    className="text-lg md:text-xl max-w-2xl mx-auto mb-12 opacity-80 text-balance"
                >
                    Monologue uses advanced neural synthesis to transform written words into hyper-realistic audio that captures emotion, nuance, and rhythm.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                    className="flex justify-center mt-8"
                >
                    <div
                        className="flex items-center gap-6 cursor-pointer group"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {/* Play Button */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-24 h-24 bg-brand-red text-brand-beige rounded-full flex items-center justify-center shadow-2xl shadow-brand-red/30 relative z-10"
                        >
                            <Play size={36} fill="currentColor" className="ml-1" />

                            {/* Pulsing ring */}
                            <motion.div
                                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute inset-0 border-2 border-brand-red rounded-full"
                            />
                        </motion.div>

                        {/* Soundwave & Text Container */}
                        <div className="flex items-center gap-6">
                            {/* Soundwave */}
                            <div className="flex items-center gap-1.5 h-12">
                                {[0.4, 0.8, 0.5, 1, 0.6, 0.9, 0.4, 0.7, 0.5, 0.8, 0.6, 0.4].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        animate={isHovered ? {
                                            height: ["30%", "100%", "30%"],
                                            backgroundColor: "#4a0404"
                                        } : {
                                            height: `${h * 100}%`,
                                            backgroundColor: "rgba(74, 4, 4, 0.2)"
                                        }}
                                        transition={isHovered ? {
                                            duration: 0.8,
                                            repeat: Infinity,
                                            delay: i * 0.05,
                                            ease: "easeInOut"
                                        } : { duration: 0.3 }}
                                        className="w-1.5 rounded-full"
                                    />
                                ))}
                            </div>

                            {/* Text */}
                            <div className="overflow-hidden text-brand-red">
                                <span className="text-2xl font-display font-medium whitespace-nowrap tracking-tight">
                                    Listen to Samples
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};
