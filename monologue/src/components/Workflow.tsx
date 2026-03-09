'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Reveal } from './Reveal';

const steps = [
    {
        title: "Input your script",
        description: "Paste your text or upload a document. Our AI analyzes the context and structure automatically.",
        image: "https://picsum.photos/seed/monologue1/800/600"
    },
    {
        title: "Choose your voice",
        description: "Select from our library of 500+ premium voices or use your own custom cloned voice.",
        image: "https://picsum.photos/seed/monologue2/800/600"
    },
    {
        title: "Refine & Export",
        description: "Fine-tune pronunciation, pacing, and emphasis. Export in high-fidelity WAV or MP3 formats.",
        image: "https://picsum.photos/seed/monologue3/800/600"
    }
];

export const Workflow = () => {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={containerRef} id="how-it-works" className="relative h-[300vh] bg-brand-beige">
            <div className="sticky top-0 h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 overflow-hidden">
                <div className="w-full md:w-1/2 max-w-xl">
                    <div className="mb-12">
                        <Reveal type="word" className="text-4xl md:text-6xl font-bold text-brand-red">The workflow of the future.</Reveal>
                    </div>

                    <div className="relative h-64">
                        {steps.map((step, i) => {
                            const start = i / steps.length;
                            const end = (i + 1) / steps.length;
                            const opacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
                            const y = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [20, 0, 0, -20]);

                            return (
                                <motion.div
                                    key={i}
                                    style={{ opacity, y }}
                                    className="absolute inset-0"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="w-8 h-8 rounded-full bg-brand-red text-brand-beige flex items-center justify-center font-bold text-sm">
                                            0{i + 1}
                                        </span>
                                        <h3 className="text-3xl font-bold text-brand-red font-display">{step.title}</h3>
                                    </div>
                                    <p className="text-xl opacity-70 leading-relaxed text-brand-red font-sans">
                                        {step.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                <div className="w-full md:w-1/2 h-[400px] md:h-[600px] relative rounded-3xl overflow-hidden bg-brand-red/5">
                    {steps.map((step, i) => {
                        const start = i / steps.length;
                        const end = (i + 1) / steps.length;
                        const opacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
                        const scale = useTransform(scrollYProgress, [start, end], [1.1, 1]);

                        return (
                            <motion.img
                                key={i}
                                src={step.image}
                                alt={step.title}
                                style={{ opacity, scale }}
                                className="absolute inset-0 w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
