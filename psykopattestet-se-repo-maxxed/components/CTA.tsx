import Link from "next/link";
export function CTA({ href, label, variant="primary", sublabel }:{
  href:string; label:string; variant?: "primary"|"ghost"; sublabel?:string;
}) {
  const cls = variant === "primary" ? "cta" : "cta ghost";
  return (
    <div>
      <Link className={cls} href={href} rel="noopener">
        {label} <span aria-hidden>→</span>
      </Link>
      {sublabel ? <div className="note" style={{ marginTop: 8 }}>{sublabel}</div> : null}
    </div>
  );
}
