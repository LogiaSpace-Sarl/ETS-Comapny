import PageHero from '../components/PageHero.jsx';
import ContactDetails from '../components/ContactDetails.jsx';
import ContactQuoteForm from '../components/ContactQuoteForm.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function Contact() {
  const { t } = useLanguage();
  const contact = t.contact;

  return (
    <main>
      <PageHero kicker={contact.kicker} title={contact.title} intro={contact.intro} />
      <section className="section inner-section">
        <div className="container contact-layout">
          <ContactDetails t={t} />
          <ContactQuoteForm t={t} />
        </div>
      </section>
    </main>
  );
}
