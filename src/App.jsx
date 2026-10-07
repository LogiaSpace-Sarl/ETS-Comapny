import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import { LanguageProvider, useLanguage } from './context/LanguageContext.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import References from './pages/References.jsx';
import Services from './pages/Services.jsx';

function RouteEffects() {
  const { pathname } = useLocation();
  const { lang } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const titles = {
      '/': lang === 'fr' ? 'ETS Complexe Business | Accueil' : 'ETS Complexe Business | Home',
      '/a-propos': lang === 'fr' ? 'ETS Complexe Business | À propos' : 'ETS Complexe Business | About',
      '/services': 'ETS Complexe Business | Services',
      '/produits': lang === 'fr' ? 'ETS Complexe Business | Produits & fournitures' : 'ETS Complexe Business | Products & Supplies',
      '/references': lang === 'fr' ? 'ETS Complexe Business | Références' : 'ETS Complexe Business | References',
      '/contact': lang === 'fr' ? 'ETS Complexe Business | Contact & devis' : 'ETS Complexe Business | Contact & quotes',
    };
    document.title = titles[pathname] || 'ETS Complexe Business';
  }, [lang, pathname]);

  return null;
}

function SiteLayout() {
  return (
    <div className="site-shell">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/produits" element={<Products />} />
        <Route path="/references" element={<References />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <RouteEffects />
        <SiteLayout />
      </LanguageProvider>
    </BrowserRouter>
  );
}
