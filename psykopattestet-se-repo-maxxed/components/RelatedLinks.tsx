import Link from "next/link";
type Item = { href: string; title: string };
export function RelatedLinks({ items }: { items: Item[] }) {
  if (!items?.length) return null;
  return (
    <div className="panel" style={{ marginTop: 18 }}>
      <h3>Relaterade guider</h3>
      <ul className="ul">
        {items.map((x) => (
          <li key={x.href}><Link href={x.href}>{x.title}</Link></li>
        ))}
      </ul>
    </div>
  );
}
