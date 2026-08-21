import React from 'react';
import HeroSection from '../components/HeroSection';
import OakSeriesSection from '../components/OakSeriesSection';
import BreatheSection from '../components/BreatheSection';

export default function HomePage({ onExploreClick, onViewFilmClick, onDiscoverCoreClick }) {
  return (
    <div>
      <HeroSection
        onExploreClick={onExploreClick}
        onViewFilmClick={onViewFilmClick}
      />
      <OakSeriesSection
        onDiscoverCoreClick={onDiscoverCoreClick}
      />
      <BreatheSection />
    </div>
  );
}
