import React, { useState, useEffect } from 'react';
import TopNavBar from './components/TopNavBar';
import Footer from './components/Footer';
import InquireModal from './components/InquireModal';
import FilmModal from './components/FilmModal';

import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isInquireOpen, setIsInquireOpen] = useState(false);
  const [isFilmOpen, setIsFilmOpen] = useState(false);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'products', 'team', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (pageId) => {
    setCurrentPage(pageId);
    window.location.hash = pageId === 'home' ? '' : pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToCollection = () => {
    const el = document.getElementById('platform');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleNavigate('products');
    }
  };

  return (
    <div className="bg-surface-container-lowest text-on-surface font-body-md antialiased overflow-x-hidden min-h-screen flex flex-col justify-between">
      {/* Top Floating Glass Navigation Bar */}
      <TopNavBar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onInquireClick={() => setIsInquireOpen(true)}
      />

      {/* Dynamic Page Views */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onExploreClick={handleScrollToCollection}
            onViewFilmClick={() => setIsFilmOpen(true)}
            onDiscoverCoreClick={() => handleNavigate('products')}
          />
        )}

        {currentPage === 'products' && (
          <ProductsPage
            onInquireClick={() => setIsInquireOpen(true)}
          />
        )}

        {currentPage === 'team' && (
          <TeamPage
            onInquireClick={() => setIsInquireOpen(true)}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onInquireClick={() => setIsInquireOpen(true)}
      />

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
