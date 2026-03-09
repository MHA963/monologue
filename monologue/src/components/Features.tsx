'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Reveal } from './Reveal';

const slides = [
    {
        title: "Neural Voice Cloning",
        description: "Clone any voice with just 30 seconds of audio. Perfect for personalized branding and consistent narration.",
        image: "https://picsum.photos/seed/monovoice1/1920/1080"
    },
    {
        title: "Emotional Inflection",
        description: "Adjust the mood of your audio. From whispered secrets to energetic announcements, control every nuance.",
        image: "https://picsum.photos/seed/monovoice2/1920/1080"
    },
    {
        title: "100+ Languages",
        description: "Break language barriers with native-sounding voices in over 100 languages and regional accents.",
        image: "https://picsum.photos/seed/monovoice3/1920/1080"
    },
    {
        title: "Multi-Track Editor",
        description: "Layer background music, sound effects, and multiple voices in our intuitive browser-based studio.",
        image: "https://picsum.photos/seed/monovoice4/1920/1080"
    },
    {
        title: "Enterprise Security",
        description: "Your data is encrypted and your voice models are yours alone. We prioritize privacy and ethical AI.",
        image: "https://picsum.photos/seed/monovoice5/1920/1080"
    }
];

export const Features = () => {
    const targetRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

    return (
        <section ref={targetRef} id="features" className="relative h-[500vh]">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <motion.div style={{ x }} className="flex">
                    {slides.map((slide, i) => (
                        <div key={i} className="relative w-screen h-screen flex-shrink-0 group overflow-hidden">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="absolute inset-0 w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000"
                                referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-brand-red/60 via-brand-red/40 to-brand-red/80 flex flex-col items-center justify-center text-center px-6">
                                <div className="max-w-5xl">
                                    <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-brand-beige mb-8 tracking-tighter leading-none">
                                        <Reveal delay={0.1}>{slide.title}</Reveal>
                                    </h2>
                                    <p className="text-xl md:text-3xl text-brand-beige/90 max-w-3xl mx-auto leading-relaxed font-light">
                                        <Reveal delay={0.4} className="opacity-80 font-sans">{slide.description}</Reveal>
                                    </p>
                                </div>

                                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-4">
                                    <span className="text-brand-beige/40 text-sm font-mono tracking-widest uppercase">0{i + 1} / 05</span>
                                    <div className="w-32 h-[1px] bg-brand-beige/20 relative overflow-hidden">
                                        <motion.div
                                            className="absolute top-0 left-0 h-full bg-brand-beige"
                                            style={{ width: `${(i + 1) * 20}%` }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
