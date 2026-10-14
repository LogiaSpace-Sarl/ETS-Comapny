import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
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
    window.scrollTo({ top: 0, behavior: 'instant' });
    const meta = t.meta[pathname] || t.meta.notFound;
    document.title = `${site.name} | ${meta.title}`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', `${site.url}${pathname}`);
  }, [t, pathname]);

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
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
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
