// Company contact details — single place to update once the client confirms them.
// TODO(client): replace the provisional phone number and confirm the email domain.
const phoneDigits = '237670000000';

export const site = {
  name: 'ETS Complexe Business',
  url: 'https://www.etscomplexebusiness.com',
  phone: '670 000 000',
  phoneHref: `tel:+${phoneDigits}`,
  whatsappNumber: phoneDigits,
  email: 'contact@etscomplexebusiness.com',
};

export const whatsappLink = (text = '') =>
  `https://wa.me/${site.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
