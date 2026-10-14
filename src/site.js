// Company contact details — single place to update once the client confirms them.
const phoneDigits = '237699982369';

export const site = {
  name: 'ETS Complex Business Center',
  url: 'https://etscomplexgroup.com',
  phone: '699 982 369 / 695 651 622',
  phoneHref: `tel:+${phoneDigits}`,
  whatsappNumber: phoneDigits,
  email: 'contact@etscomplexgroup.com',
  rccm: 'RC/BFM/2013/A/208',
  mapQuery: 'Carrefour Nkoabang 10e Arrêt, Yaoundé, Cameroun',
};

export const whatsappLink = (text = '') =>
  `https://wa.me/${site.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

// Routes pre-rendered to static HTML at build time (see scripts/prerender.mjs).
export const routes = ['/', '/a-propos', '/services', '/produits', '/references', '/contact'];

export const pageTitle = (pathname, meta) =>
  pathname === '/' ? `${site.name} | ${meta.title}` : `${meta.title} | ${site.name}`;

export const canonicalUrl = (pathname) => `${site.url}${pathname === '/' ? '/' : pathname}`;
