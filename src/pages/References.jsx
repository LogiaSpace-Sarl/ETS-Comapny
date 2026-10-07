import { FileText } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import ReferenceCard from '../components/ReferenceCard.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function References() {
  const { t } = useLanguage();
  const references = t.references;

  return (
    <main>
      <PageHero kicker={references.kicker} title={references.title} intro={references.intro} />
      <section className="section inner-section pale">
        <div className="container">
          <div className="reference-grid">
            {references.items.map((item, index) => <ReferenceCard key={item} title={item} index={index} status={references.status} />)}
          </div>
          <div className="reference-note"><FileText size={19} aria-hidden="true" />{references.note}</div>
        </div>
      </section>
    </main>
  );
}
