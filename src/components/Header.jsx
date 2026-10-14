import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowRight, Globe2, MapPin, Menu, Phone, X } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.jsx';
import { site } from '../site.js';

const navigation = [
  { key: 'home', path: '/' },
  { key: 'about', path: '/a-propos' },
  { key: 'services', path: '/services' },
  { key: 'products', path: '/produits' },
  { key: 'references', path: '/references' },
  { key: 'contact', path: '/contact' },
];

export default function Header() {
  const { setLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 40));
  const location = useLocation();

  useEffect(() => setMenuOpen(false), [location.pathname]);

  const toggleLanguage = () => setLang((current) => current === 'fr' ? 'en' : 'fr');

  return (
    <>
      <div className="topline">
        <div className="container topline-inner">
          <span><MapPin size={13} aria-hidden="true" />{t.common.location}</span>
          <span className="topline-note">{t.common.banner}</span>
          <a href={site.phoneHref}><Phone size={13} aria-hidden="true" />{t.common.phone}</a>
        </div>
      </div>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <Link className="brand" to="/" aria-label={t.nav.homeLabel}>
            <img src="/images/ets-logo.webp" alt="" width="52" height="52" />
            <span>ETS <b>COMPLEX</b><small>BUSINESS CENTER</small></span>
          </Link>
          <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label={t.nav.mainNav}>
            {navigation.map(({ key, path }) => (
              <NavLink key={key} to={path} end={path === '/'} className={({ isActive }) => isActive ? 'active' : ''}>
                {({ isActive }) => (
                  <>
                    {t.nav[key]}
                    {isActive && <motion.span layoutId="nav-indicator" className="nav-indicator" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />}
                  </>
                )}
              </NavLink>
            ))}
            <button className="lang-mobile" onClick={toggleLanguage} aria-label={t.nav.switchLanguage}>
              <Globe2 size={15} aria-hidden="true" />{t.nav.language}
            </button>
          </nav>
          <div className="nav-actions">
            <button className="lang-toggle" onClick={toggleLanguage} aria-label={t.nav.switchLanguage}>
              <Globe2 size={15} aria-hidden="true" />{t.nav.language}
            </button>
            <Link className="nav-cta" to="/contact">{t.nav.quote}<ArrowRight size={15} aria-hidden="true" /></Link>
            <button className="menu-button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu} aria-expanded={menuOpen}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.span key={menuOpen ? 'close' : 'open'} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
                  {menuOpen ? <X /> : <Menu />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
