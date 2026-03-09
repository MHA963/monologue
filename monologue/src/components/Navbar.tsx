'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
    isVisible: boolean;
}

export const Navbar = ({ isVisible }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: 0 }}
            animate={{ y: isVisible ? 0 : -100 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 left-0 right-0 z-50 glass"
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center">
                        <div className="w-4 h-4 bg-brand-beige rounded-sm rotate-45" />
                    </div>
                    <span className="font-display font-bold text-xl tracking-tighter">monologue</span>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <a href="#features" className="hover:opacity-60 transition-opacity">Features</a>
                    <a href="#how-it-works" className="hover:opacity-60 transition-opacity">Process</a>
                    <a href="#pricing" className="hover:opacity-60 transition-opacity">Pricing</a>
                    <button className="px-5 py-2.5 bg-brand-red text-brand-beige rounded-full hover:scale-105 transition-transform">
                        Get Started
                    </button>
                </div>

                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-20 left-0 right-0 bg-brand-beige border-b border-brand-red/10 p-6 flex flex-col gap-4"
                >
                    <a href="#features" onClick={() => setIsOpen(false)}>Features</a>
                    <a href="#how-it-works" onClick={() => setIsOpen(false)}>Process</a>
                    <a href="#pricing" onClick={() => setIsOpen(false)}>Pricing</a>
                    <button className="w-full py-3 bg-brand-red text-brand-beige rounded-full">
                        Get Started
                    </button>
                </motion.div>
            )}
        </motion.nav>
    );
};
