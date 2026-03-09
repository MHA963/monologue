'use client';

import React from 'react';
import { Globe, Zap, Shield } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="py-20 px-6 border-t border-brand-red/10 bg-brand-beige text-brand-red">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
                <div className="col-span-2">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center">
                            <div className="w-4 h-4 bg-brand-beige rounded-sm rotate-45" />
                        </div>
                        <span className="font-display font-bold text-xl tracking-tighter">monologue</span>
                    </div>
                    <p className="max-w-xs opacity-60 mb-8 font-sans">
                        The world's most advanced text-to-audio platform. Built for creators who demand quality and nuance.
                    </p>
                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full border border-brand-red/10 flex items-center justify-center hover:bg-brand-red hover:text-brand-beige transition-colors cursor-pointer">
                            <Globe size={18} />
                        </div>
                        <div className="w-10 h-10 rounded-full border border-brand-red/10 flex items-center justify-center hover:bg-brand-red hover:text-brand-beige transition-colors cursor-pointer">
                            <Zap size={18} />
                        </div>
                        <div className="w-10 h-10 rounded-full border border-brand-red/10 flex items-center justify-center hover:bg-brand-red hover:text-brand-beige transition-colors cursor-pointer">
                            <Shield size={18} />
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold mb-6 font-display">Product</h4>
                    <ul className="space-y-4 opacity-60 text-sm font-sans">
                        <li><a href="#" className="hover:text-brand-red transition-colors">Features</a></li>
                        <li><a href="#" className="hover:text-brand-red transition-colors">Voices</a></li>
                        <li><a href="#" className="hover:text-brand-red transition-colors">API</a></li>
                        <li><a href="#" className="hover:text-brand-red transition-colors">Pricing</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-6 font-display">Company</h4>
                    <ul className="space-y-4 opacity-60 text-sm font-sans">
                        <li><a href="#" className="hover:text-brand-red transition-colors">About</a></li>
                        <li><a href="#" className="hover:text-brand-red transition-colors">Blog</a></li>
                        <li><a href="#" className="hover:text-brand-red transition-colors">Careers</a></li>
                        <li><a href="#" className="hover:text-brand-red transition-colors">Privacy</a></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-brand-red/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-40 uppercase tracking-widest font-bold font-sans">
                <p>© 2024 Monologue AI. All rights reserved.</p>
                <div className="flex gap-8">
                    <a href="#">Terms of Service</a>
                    <a href="#">Cookie Policy</a>
                    <a href="#">Security</a>
                </div>
            </div>
        </footer>
    );
};
