import { Clock3, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';

export default function ContactDetails({ t }) {
  const c = t.contact;
  return (
    <aside className="contact-info">
      <a href="tel:+237670000000" className="contact-info-row">
        <span className="contact-icon"><Phone size={19} aria-hidden="true" /></span>
        <span><small>{c.phoneLabel}</small>{t.common.phone}</span>
      </a>
      <a href={`mailto:${t.common.email}`} className="contact-info-row">
        <span className="contact-icon"><Mail size={19} aria-hidden="true" /></span>
        <span><small>{c.emailLabel}</small>{t.common.email}</span>
      </a>
      <div className="contact-info-row">
        <span className="contact-icon"><MapPin size={19} aria-hidden="true" /></span>
        <span><small>{c.addressLabel}</small>{c.address}</span>
      </div>
      <div className="contact-info-row">
        <span className="contact-icon"><Clock3 size={19} aria-hidden="true" /></span>
        <span><small>{c.hoursLabel}</small>{c.hours}</span>
      </div>
      <div className="contact-side-note">
        <ShieldCheck size={18} aria-hidden="true" />
        {t.lang === 'fr' ? 'Une réponse claire et adaptée à votre demande.' : 'A clear response tailored to your request.'}
      </div>
    </aside>
  );
}
