import Link from "next/link";
export function ArticleCard({ href, title, desc }:{href:string; title:string; desc:string}) {
  return (
    <Link className="card" href={href}>
      <div className="badge">Guide</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </Link>
  );
}
