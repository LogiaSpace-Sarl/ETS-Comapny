import { AnimatePresence, MotionConfig } from 'framer-motion';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import { ScrollProgress } from './components/motion.jsx';
import { LanguageProvider, useLanguage } from './context/LanguageContext.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import Products from './pages/Products.jsx';
import References from './pages/References.jsx';
import Services from './pages/Services.jsx';
import { site } from './site.js';

function RouteEffects() {
  const { pathname } = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const meta = t.meta[pathname] || t.meta.notFound;
    document.title = `${site.name} | ${meta.title}`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', `${site.url}${pathname}`);
  }, [t, pathname]);

  return null;
}

function SiteLayout() {
  const location = useLocation();

  return (
    <div className="site-shell">
      <ScrollProgress />
      <Header />
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo({ top: 0, behavior: 'instant' })}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/produits" element={<Products />} />
          <Route path="/references" element={<References />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <MotionConfig reducedMotion="user">
          <RouteEffects />
          <SiteLayout />
        </MotionConfig>
      </LanguageProvider>
    </BrowserRouter>
  );
}
