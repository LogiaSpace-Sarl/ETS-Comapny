import { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { site, whatsappLink } from '../site.js';

export default function ContactQuoteForm({ t }) {
  const c = t.contact;
  const [submitted, setSubmitted] = useState(false);
  const [searchParams] = useSearchParams();
  const requestedItem = searchParams.get('sujet');
  const defaultSubject = requestedItem ? c.quoteFor.replace('{item}', requestedItem) : '';

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const channel = event.nativeEvent.submitter?.value;
    const subject = `${form.get('subject')} — ${form.get('name')}`;
    const body = `${c.name}: ${form.get('name')}\n${c.email}: ${form.get('email')}\n\n${form.get('message')}`;
    setSubmitted(true);

    if (channel === 'whatsapp') {
      window.open(whatsappLink(`${subject}\n\n${body}`), '_blank', 'noopener');
    } else {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>{c.name}<input name="name" autoComplete="name" required placeholder={c.namePlaceholder} /></label>
        <label>{c.email}<input name="email" autoComplete="email" type="email" required placeholder={c.emailPlaceholder} /></label>
      </div>
      <label>{c.subject}<input key={defaultSubject} name="subject" required defaultValue={defaultSubject} placeholder={c.subjectPlaceholder} /></label>
      <label>{c.message}<textarea name="message" required rows="6" placeholder={c.messagePlaceholder} /></label>
      <div className="form-actions">
        <button className="button button-primary" type="submit" value="email">{c.send}<Send size={16} aria-hidden="true" /></button>
        <button className="button button-whatsapp" type="submit" value="whatsapp">{c.whatsapp}<MessageCircle size={16} aria-hidden="true" /></button>
      </div>
      <p className="form-note" role="status">{submitted ? c.success.replace('{email}', site.email) : c.note}</p>
    </form>
  );
}
