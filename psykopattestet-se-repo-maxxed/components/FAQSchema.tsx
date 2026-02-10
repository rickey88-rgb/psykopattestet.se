type QA = { q: string; a: string };
export function FAQSchema({ items }:{items: QA[]}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((x) => ({
      "@type": "Question",
      "name": x.q,
      "acceptedAnswer": { "@type": "Answer", "text": x.a }
    }))
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}
