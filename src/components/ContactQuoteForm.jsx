import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactQuoteForm({ t }) {
  const c = t.contact;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`${form.get('subject')} — ${form.get('name')}`);
    const body = encodeURIComponent(`${c.name}: ${form.get('name')}\n${c.email}: ${form.get('email')}\n\n${form.get('message')}`);
    setSubmitted(true);
    window.location.href = `mailto:${t.common.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>{c.name}<input name="name" autoComplete="name" required placeholder={c.namePlaceholder} /></label>
        <label>{c.email}<input name="email" autoComplete="email" type="email" required placeholder={c.emailPlaceholder} /></label>
      </div>
      <label>{c.subject}<input name="subject" required placeholder={c.subjectPlaceholder} /></label>
      <label>{c.message}<textarea name="message" required rows="6" placeholder={c.messagePlaceholder} /></label>
      <button className="button button-primary" type="submit">{c.send}<Send size={16} aria-hidden="true" /></button>
      <p className="form-note">{submitted ? c.success : c.note}</p>
    </form>
  );
}
