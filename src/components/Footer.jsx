import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <Link className="footer-brand" to="/">
          <img src="/images/ets-logo.jpg" alt="" />
          <span><b>ETS COMPLEXE BUSINESS</b><small>{t.common.footerLine}</small></span>
        </Link>
        <div className="footer-links">
          <a href="tel:+237670000000">{t.common.phone}</a>
          <a href={`mailto:${t.common.email}`}>{t.common.email}</a>
          <Link to="/contact">{t.nav.contact}</Link>
        </div>
        <div className="footer-bottom">© 2026 ETS Complexe Business · {t.common.footerNote}</div>
      </div>
    </footer>
  );
}
