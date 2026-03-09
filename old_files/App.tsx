/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'motion/react';
import { 
  Mic2, 
  Volume2, 
  Type, 
  ArrowRight, 
  Play, 
  Pause, 
  Layers, 
  Zap, 
  Shield, 
  Globe,
  Menu,
  X
} from 'lucide-react';

// --- Components ---

const Navbar = ({ isVisible }: { isVisible: boolean }) => {
  const [isOpen, setIsOpen] = React.useState(false);

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

const Hero = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <section ref={targetRef} className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20">
      <motion.div 
        style={{ y, opacity, scale }}
        className="text-center z-10"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-light mb-8 leading-[0.9] tracking-tighter"
        >
          Give your text <br />
          <span className="font-bold italic">a soul.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-12 opacity-80 text-balance"
        >
          Monologue uses advanced neural synthesis to transform written words into hyper-realistic audio that captures emotion, nuance, and rhythm.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
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
              <div className="overflow-hidden">
                <span className="text-2xl font-display font-medium whitespace-nowrap tracking-tight">
                  Listen to Samples
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/5 rounded-full blur-3xl" />
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -right-20 w-96 h-96 border border-brand-red/10 rounded-full"
        />
        <motion.div 
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] border border-brand-red/5 rounded-full"
        />
      </div>
    </section>
  );
};

const HorizontalCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

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

  return (
    <section ref={targetRef} id="features" className="relative h-[500vh]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex">
          {slides.map((slide, i) => (
            <div key={i} className="relative w-screen h-screen flex-shrink-0">
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-brand-red/60 via-brand-red/40 to-brand-red/80 flex flex-col items-center justify-center text-center px-6">
                <div className="max-w-5xl">
                  <motion.h2 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-6xl md:text-8xl lg:text-9xl font-bold text-brand-beige mb-8 tracking-tighter leading-none"
                  >
                    {slide.title}
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-xl md:text-3xl text-brand-beige/90 max-w-3xl mx-auto leading-relaxed font-light"
                  >
                    {slide.description}
                  </motion.p>
                </div>
                
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-4">
                  <span className="text-brand-beige/40 text-sm font-mono tracking-widest uppercase">0{i + 1} / 05</span>
                  <div className="w-32 h-[1px] bg-brand-beige/20 relative">
                    <motion.div 
                      className="absolute top-0 left-0 h-full bg-brand-beige"
                      style={{ width: "20%" }} // Simple indicator
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

const StickyPinSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

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

  return (
    <section ref={containerRef} id="how-it-works" className="relative h-[300vh]">
      <div className="sticky top-0 h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 overflow-hidden">
        <div className="w-full md:w-1/2 max-w-xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-12">The workflow of <br /> the future.</h2>
          
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
                    <h3 className="text-3xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-xl opacity-70 leading-relaxed">
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

const Testimonial = ({ id }: { id?: string }) => {
  return (
    <section id={id} className="py-32 px-6 bg-brand-red text-brand-beige overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex gap-1 mb-6 justify-center">
            {[...Array(5)].map((_, i) => (
              <Zap key={i} size={20} fill="currentColor" />
            ))}
          </div>
          <blockquote className="text-3xl md:text-5xl lg:text-6xl font-light italic leading-tight mb-12">
            "Monologue has completely transformed our content strategy. What used to take days of recording and editing now takes minutes, and the quality is indistinguishable from a real human voice."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <img 
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

const CTA = () => {
  return (
    <section className="py-40 px-6 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter">Ready to be heard?</h2>
        <p className="text-xl opacity-70 mb-12 max-w-2xl mx-auto">
          Join 50,000+ creators, podcasters, and developers who are building the future of audio with Monologue.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-10 py-5 bg-brand-red text-brand-beige rounded-full text-lg font-bold hover:scale-105 transition-transform">
            Get Started for Free
          </button>
          <button className="px-10 py-5 border border-brand-red/20 rounded-full text-lg font-bold hover:bg-brand-red/5 transition-colors">
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

const Footer = () => {
  return (
    <footer className="py-20 px-6 border-t border-brand-red/10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-brand-beige rounded-sm rotate-45" />
            </div>
            <span className="font-display font-bold text-xl tracking-tighter">monologue</span>
          </div>
          <p className="max-w-xs opacity-60 mb-8">
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
          <h4 className="font-bold mb-6">Product</h4>
          <ul className="space-y-4 opacity-60 text-sm">
            <li><a href="#" className="hover:text-brand-red transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">Voices</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">API</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">Pricing</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Company</h4>
          <ul className="space-y-4 opacity-60 text-sm">
            <li><a href="#" className="hover:text-brand-red transition-colors">About</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">Privacy</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-brand-red/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-40 uppercase tracking-widest font-bold">
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

// --- Main App ---

export default function App() {
  const { scrollY } = useScroll();
  const [isNavVisible, setIsNavVisible] = React.useState(true);
  
  const scaleX = useSpring(useScroll().scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  React.useEffect(() => {
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
    <div className="min-h-screen selection:bg-brand-red selection:text-brand-beige">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-brand-red z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar isVisible={isNavVisible} />
      
      <main>
        <Hero />
        <HorizontalCarousel />
        <StickyPinSection />
        <Testimonial id="testimonial" />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
