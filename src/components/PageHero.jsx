export default function PageHero({ kicker, title, intro }) {
  return (
    <section className="page-hero">
      <div className="container page-hero-content">
        <div className="eyebrow"><span className="eyebrow-line" />{kicker}</div>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
    </section>
  );
}
