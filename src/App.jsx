import React, { useState } from 'react';
import TopNavBar from './components/TopNavBar';
import HeroSection from './components/HeroSection';
import OakSeriesSection from './components/OakSeriesSection';
import BreatheSection from './components/BreatheSection';
import Footer from './components/Footer';
import InquireModal from './components/InquireModal';
import FilmModal from './components/FilmModal';

export default function App() {
  const [isInquireOpen, setIsInquireOpen] = useState(false);
  const [isFilmOpen, setIsFilmOpen] = useState(false);

  const handleScrollToCollection = () => {
    const el = document.getElementById('collection');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-surface-container-lowest text-on-surface font-body-md antialiased overflow-x-hidden min-h-screen">
      {/* Top Floating Glass Navigation Bar */}
      <TopNavBar onInquireClick={() => setIsInquireOpen(true)} />

      {/* Main Sections */}
      <main>
        <HeroSection
          onExploreClick={handleScrollToCollection}
          onViewFilmClick={() => setIsFilmOpen(true)}
        />
        <OakSeriesSection
          onDiscoverCoreClick={() => setIsInquireOpen(true)}
        />
        <BreatheSection />
      </main>

      {/* Footer */}
      <Footer onInquireClick={() => setIsInquireOpen(true)} />

      {/* Modals */}
      <InquireModal
        isOpen={isInquireOpen}
        onClose={() => setIsInquireOpen(false)}
      />
      <FilmModal
        isOpen={isFilmOpen}
        onClose={() => setIsFilmOpen(false)}
      />
    </div>
  );
}
