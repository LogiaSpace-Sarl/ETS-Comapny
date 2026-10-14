import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.jsx';
import { whatsappLink } from '../site.js';

export default function WhatsAppButton() {
  const { t } = useLanguage();

  return (
    <a className="whatsapp-float" href={whatsappLink(t.common.whatsappMessage)} target="_blank" rel="noopener noreferrer" aria-label={t.common.whatsappLabel}>
      <MessageCircle size={24} aria-hidden="true" />
      <span>{t.common.whatsappLabel}</span>
    </a>
  );
}
