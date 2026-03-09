'use client';

import React from 'react';

export const CTA = () => {
    return (
        <section id="pricing" className="py-40 px-6 text-center relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                <h2 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter text-brand-red">Ready to be heard?</h2>
                <p className="text-xl opacity-70 mb-12 max-w-2xl mx-auto text-brand-red">
                    Join 50,000+ creators, podcasters, and developers who are building the future of audio with Monologue.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-10 py-5 bg-brand-red text-brand-beige rounded-full text-lg font-bold hover:scale-105 transition-transform">
                        Get Started for Free
                    </button>
                    <button className="px-10 py-5 border border-brand-red/20 rounded-full text-lg font-bold hover:bg-brand-red/5 transition-colors text-brand-red">
                        Contact Sales
                    </button>
                </div>
            </div>

            {/* Background Blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-30">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>
        </section>
    );
};
