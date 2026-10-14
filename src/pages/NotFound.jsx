import { PageTransition } from '../components/motion.jsx';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function NotFound() {
  const { t } = useLanguage();
  const notFound = t.notFound;

  return (
    <PageTransition>
      <PageHero kicker={notFound.kicker} title={notFound.title} intro={notFound.intro} />
      <section className="section inner-section">
        <div className="container">
          <Link className="button button-primary" to="/">{notFound.back}<ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
      </section>
    </PageTransition>
  );
}
