'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Workflow } from '@/components/Workflow';
import { Testimonial } from '@/components/Testimonial';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const heroHeight = window.innerHeight - 100;
      const testimonialSection = document.getElementById('testimonial');
      const testimonialTop = testimonialSection?.offsetTop || 9999;

      if (currentScroll < heroHeight) {
        setIsNavVisible(true);
      } else if (currentScroll >= heroHeight && currentScroll < testimonialTop) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-brand-red selection:text-brand-beige overflow-x-hidden bg-brand-beige">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-red z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar isVisible={isNavVisible} />

      <main>
        <Hero />
        <Features />
        <Workflow />
        <Testimonial id="testimonial" />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
