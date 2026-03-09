'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

interface RevealProps {
    children: string;
    className?: string;
    type?: 'word' | 'letter';
    delay?: number;
}

export const Reveal = ({ children, className = '', type = 'word', delay = 0 }: RevealProps) => {
    const containerRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        gsap.registerPlugin(ScrollTrigger);

        const elements = containerRef.current.querySelectorAll('.reveal-item');

        gsap.fromTo(elements,
            {
                y: 100,
                opacity: 0,
                rotateX: -45,
            },
            {
                y: 0,
                opacity: 1,
                rotateX: 0,
                duration: 1,
                stagger: 0.1,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
                delay: delay,
            }
        );
    }, [delay, type]);

    const items = type === 'word' ? children.split(' ') : children.split('');

    return (
        <span ref={containerRef} className={`inline-block perspective-1000 ${className}`}>
            {items.map((item, i) => (
                <span
                    key={i}
                    className="reveal-item inline-block whitespace-pre transform-gpu"
                >
                    {item}{type === 'word' && i !== items.length - 1 ? ' ' : ''}
                </span>
            ))}
        </span>
    );
};
