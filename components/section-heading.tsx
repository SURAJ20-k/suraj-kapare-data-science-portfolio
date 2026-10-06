export function SectionHeading({ number, label, title, children }: { number: string; label: string; title: string; children?: React.ReactNode }) {
  return <div className="section-heading"><div><p className="eyebrow section-eyebrow"><span>{number}</span> {label}</p><h2>{title}</h2></div>{children && <p className="section-intro">{children}</p>}</div>;
}
