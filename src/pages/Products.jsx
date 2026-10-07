import { Boxes } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import ProductCard from '../components/ProductCard.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function Products() {
  const { t } = useLanguage();
  const products = t.products;

  return (
    <main>
      <PageHero kicker={products.kicker} title={products.title} intro={products.intro} />
      <section className="section inner-section">
        <div className="container">
          <div className="product-grid">
            {products.items.map((item, index) => <ProductCard key={item.title} item={item} index={index} t={t} />)}
          </div>
          <p className="catalog-note"><Boxes size={18} aria-hidden="true" />{products.note}</p>
        </div>
      </section>
    </main>
  );
}
