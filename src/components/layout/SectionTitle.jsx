export default function SectionTitle({ eyebrow, title, subtitle, id }) {
  return (
    <header id={id} className="mb-6">
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </header>
  );
}
