import { Clock3, Mail, MapPin, MessageCircle, Phone, ShieldCheck } from 'lucide-react';
import { site, whatsappLink } from '../site.js';

export default function ContactDetails({ t }) {
  const c = t.contact;
  return (
    <aside className="contact-info">
      <div className="contact-actions">
        <a className="button button-primary" href={site.phoneHref}><Phone size={17} aria-hidden="true" />{c.callNow}</a>
        <a className="button button-whatsapp" href={whatsappLink(t.common.whatsappMessage)} target="_blank" rel="noopener noreferrer"><MessageCircle size={17} aria-hidden="true" />WhatsApp</a>
      </div>
      <a href={site.phoneHref} className="contact-info-row">
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
        {c.sideNote}
      </div>
    </aside>
  );
}
