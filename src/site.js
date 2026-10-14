// Company contact details — single place to update once the client confirms them.
// From the 2013 RCCM declaration (75 45 57 57, with the '6' prefix added in the 2014 renumbering).
// TODO(client): confirm the phone/WhatsApp number and the RCCM number.
const phoneDigits = '237675455757';

export const site = {
  name: 'ETS Complex Business Center',
  url: 'https://etscomplexgroup.com',
  phone: '675 45 57 57',
  phoneHref: `tel:+${phoneDigits}`,
  whatsappNumber: phoneDigits,
  email: 'contact@etscomplexgroup.com',
  rccm: 'RC/BFM/2013/A/208',
  mapQuery: 'Bafoussam, Cameroun',
};

export const whatsappLink = (text = '') =>
  `https://wa.me/${site.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
