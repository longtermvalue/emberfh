import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/Home';
import LunchMenu from './pages/LunchMenu';
import DinnerMenu from './pages/DinnerMenu';
import DrinksMenuPage from './pages/DrinksMenuPage';
import BrunchMenu from './pages/BrunchMenu';
import ChophouseMenu from './pages/ChophouseMenu';
import PrivateEvents from './pages/PrivateEvents';
import LiveMusic from './pages/LiveMusic';
import GiftCards from './pages/GiftCards';
import HoursDirections from './pages/HoursDirections';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--color-bg-primary)' }}>
      <Navigation />
      <ScrollToTop />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu/lunch" element={<LunchMenu />} />
          <Route path="/menu/dinner" element={<DinnerMenu />} />
          <Route path="/menu/lunch-dinner" element={<Navigate to="/menu/lunch" replace />} />
          <Route path="/menu/drinks" element={<DrinksMenuPage />} />
          <Route path="/menu/brunch" element={<BrunchMenu />} />
          <Route path="/menu/chophouse" element={<ChophouseMenu />} />
          <Route path="/private-events" element={<PrivateEvents />} />
          <Route path="/live-music" element={<LiveMusic />} />
          <Route path="/gift-cards" element={<GiftCards />} />
          <Route path="/hours-directions" element={<HoursDirections />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
