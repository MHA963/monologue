'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Zap } from 'lucide-react';
import { Reveal } from './Reveal';

interface TestimonialProps {
    id?: string;
}

export const Testimonial = ({ id }: TestimonialProps) => {
    return (
        <section id={id} className="py-32 px-6 bg-brand-red text-brand-beige overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-12"
                >
                    <div className="flex gap-1 mb-6 justify-center">
                        {[...Array(5)].map((_, i) => (
                            <Zap key={i} size={20} fill="currentColor" />
                        ))}
                    </div>
                    <div className="text-3xl md:text-5xl lg:text-6xl font-light italic leading-tight mb-12">
                        <Reveal type="word">"Monologue has completely transformed our content strategy. What used to take days of recording and editing now takes minutes, and the quality is indistinguishable from a real human voice."</Reveal>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <motion.img
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            src="https://picsum.photos/seed/avatar/100/100"
                            alt="Avatar"
                            className="w-16 h-16 rounded-full border-2 border-brand-beige/20"
                            referrerPolicy="no-referrer"
                        />
                        <div className="text-left">
                            <p className="font-bold text-xl">Sarah Jenkins</p>
                            <p className="opacity-60">Director of Content, AudioFlow</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
