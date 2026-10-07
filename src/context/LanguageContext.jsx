import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { content } from '../content.js';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('ets-language') === 'en' ? 'en' : 'fr';
    } catch {
      return 'fr';
    }
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem('ets-language', lang);
    } catch {
      // Storage can be unavailable in private browsing contexts.
    }
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t: { ...content[lang], lang } }), [lang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider.');
  return context;
}
