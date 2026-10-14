import { Clock3, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { site } from '../site.js';

export default function ContactDetails({ t }) {
  const c = t.contact;
  return (
    <aside className="contact-info">
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
