export default function SectionTitle({ eyebrow, title, subtitle, id }) {
  return (
    <header id={id} className="mb-6">
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-1 text-2xl font-semibold text-slate-900 drop-shadow-sm">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-1 text-sm text-slate-600">{subtitle}</p>
      )}
    </header>
  );
}
