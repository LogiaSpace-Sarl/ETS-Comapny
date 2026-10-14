import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.jsx';
import { site } from '../site.js';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <Link className="footer-brand" to="/">
          <img src="/images/ets-logo.webp" alt="" width="52" height="52" loading="lazy" />
          <span><b>ETS COMPLEXE BUSINESS</b><small>{t.common.footerLine}</small></span>
        </Link>
        <div className="footer-links">
          <a href={site.phoneHref}>{t.common.phone}</a>
          <a href={`mailto:${t.common.email}`}>{t.common.email}</a>
          <Link to="/contact">{t.nav.contact}</Link>
        </div>
        <div className="footer-bottom">© {new Date().getFullYear()} {site.name} · {t.common.footerNote}</div>
      </div>
    </footer>
  );
}
