import { Clock3, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.jsx';
import { site, whatsappLink } from '../site.js';

const pages = [
  ['home', '/'],
  ['about', '/a-propos'],
  ['services', '/services'],
  ['products', '/produits'],
  ['references', '/references'],
  ['contact', '/contact'],
];

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <Link className="footer-brand" to="/">
            <img src="/images/ets-logo-emblem-small.webp" alt="" width="56" height="56" loading="lazy" />
            <span><b>ETS COMPLEX BUSINESS CENTER</b><small>{t.common.footerLine}</small></span>
          </Link>
          <p>{f.about}</p>
        </div>
        <nav aria-label={f.pagesTitle}>
          <h2>{f.pagesTitle}</h2>
          <ul>{pages.map(([key, path]) => <li key={key}><Link to={path}>{t.nav[key]}</Link></li>)}</ul>
        </nav>
        <div>
          <h2>{f.contactTitle}</h2>
          <ul className="footer-contact">
            <li><Phone size={16} aria-hidden="true" /><a href={site.phoneHref}>{t.common.phone}</a></li>
            <li><MessageCircle size={16} aria-hidden="true" /><a href={whatsappLink(t.common.whatsappMessage)} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            <li><Mail size={16} aria-hidden="true" /><a href={`mailto:${t.common.email}`}>{t.common.email}</a></li>
            <li><MapPin size={16} aria-hidden="true" /><span>{t.contact.address}</span></li>
            <li><Clock3 size={16} aria-hidden="true" /><span>{t.contact.hours}</span></li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {site.name} · {t.common.footerNote}</span>
        <span>{f.legal} · RCCM {site.rccm}</span>
      </div>
    </footer>
  );
}
