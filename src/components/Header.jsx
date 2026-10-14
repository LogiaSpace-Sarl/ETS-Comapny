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
      <header className="navbar">
        <div className="container nav-inner">
          <Link className="brand" to="/" aria-label={t.nav.homeLabel}>
            <img src="/images/ets-logo.webp" alt="" width="52" height="52" />
            <span>ETS <b>COMPLEXE</b><small>BUSINESS</small></span>
          </Link>
          <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label={t.nav.mainNav}>
            {navigation.map(({ key, path }) => (
              <NavLink key={key} to={path} end={path === '/'} className={({ isActive }) => isActive ? 'active' : ''}>
                {t.nav[key]}
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
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
