import { useEffect, useState } from 'react';
import { ArrowRight, Globe2, MapPin, Menu, Phone, X } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.jsx';

const navigation = [
  { key: 'home', path: '/' },
  { key: 'about', path: '/a-propos' },
  { key: 'services', path: '/services' },
  { key: 'products', path: '/produits' },
  { key: 'references', path: '/references' },
  { key: 'contact', path: '/contact' },
];

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setMenuOpen(false), [location.pathname]);

  const toggleLanguage = () => setLang((current) => current === 'fr' ? 'en' : 'fr');
  const languageLabel = lang === 'fr' ? 'Switch to English' : 'Passer en français';

  return (
    <>
      <div className="topline">
        <div className="container topline-inner">
          <span><MapPin size={13} aria-hidden="true" />{t.common.location}</span>
          <span className="topline-note">{t.common.banner}</span>
          <a href="tel:+237670000000"><Phone size={13} aria-hidden="true" />{t.common.phone}</a>
        </div>
      </div>
      <header className="navbar">
        <div className="container nav-inner">
          <Link className="brand" to="/" aria-label="ETS Complexe Business — Accueil">
            <img src="/images/ets-logo.jpg" alt="" />
            <span>ETS <b>COMPLEXE</b><small>BUSINESS</small></span>
          </Link>
          <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label={lang === 'fr' ? 'Navigation principale' : 'Main navigation'}>
            {navigation.map(({ key, path }) => (
              <NavLink key={key} to={path} end={path === '/'} className={({ isActive }) => isActive ? 'active' : ''}>
                {t.nav[key]}
              </NavLink>
            ))}
            <button className="lang-mobile" onClick={toggleLanguage} aria-label={languageLabel}>
              <Globe2 size={15} aria-hidden="true" />{t.nav.language}
            </button>
          </nav>
          <div className="nav-actions">
            <button className="lang-toggle" onClick={toggleLanguage} aria-label={languageLabel}>
              <Globe2 size={15} aria-hidden="true" />{t.nav.language}
            </button>
            <Link className="nav-cta" to="/contact">{t.nav.quote}<ArrowRight size={15} aria-hidden="true" /></Link>
            <button className="menu-button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
