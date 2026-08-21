import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EcosystemBento from './components/EcosystemBento';
import StoryComparison from './components/StoryComparison';
import GlassStudio from './components/GlassStudio';
import Philosophy from './components/Philosophy';
import SpecMatrix from './components/SpecMatrix';
import Footer from './components/Footer';
import InteractiveModal from './components/InteractiveModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('vision');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['vision', 'ecosystem', 'comparison', 'studio', 'specs'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#040705] text-stone-200 overflow-x-hidden selection:bg-pine-400/20 selection:text-pine-200">
      {/* Background Nocturnal Forest Ambient Radial Lighting */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Deep Pine Canopy Gradient (Top Center) */}
        <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-gradient-to-b from-forest-800/20 via-forest-950/10 to-transparent rounded-full blur-[140px]" />
        
        {/* Warm Peat & Aged Bark Amber Glow (Center Right) */}
        <div className="absolute top-[40%] -right-[15%] w-[800px] h-[650px] bg-earth-800/15 rounded-full blur-[130px]" />
        
        {/* Dewy Fern Moss Glow (Bottom Left) */}
        <div className="absolute bottom-[20%] -left-[10%] w-[750px] h-[600px] bg-forest-700/15 rounded-full blur-[140px]" />
        
        {/* Subtle Organic Film Grain Overlay */}
        <div className="absolute inset-0 bg-noise opacity-40" />
      </div>

      {/* Floating macOS Liquid Navbar */}
      <Navbar
        activeSection={activeSection}
        onOpenModal={() => setIsModalOpen(true)}
        isSoundOn={isSoundOn}
        setIsSoundOn={setIsSoundOn}
      />

      {/* Main Experience Stream */}
      <main className="relative z-10 space-y-8">
        <Hero
          onOpenModal={() => setIsModalOpen(true)}
          isSoundOn={isSoundOn}
          setIsSoundOn={setIsSoundOn}
        />
        <EcosystemBento onOpenModal={() => setIsModalOpen(true)} />
        <StoryComparison />
        <GlassStudio />
        <Philosophy />
        <SpecMatrix />
      </main>

      {/* Understated Apple-grade Footer */}
      <Footer onOpenModal={() => setIsModalOpen(true)} />

      {/* macOS Liquid Sheet Modal */}
      <InteractiveModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
