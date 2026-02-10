type Breadcrumb = { name: string; item: string };

export function BreadcrumbSchema({ items }: { items: Breadcrumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((x, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": x.name,
      "item": x.item
    }))
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}

export function ArticleSchema({
  headline, description, url, dateModified
}: { headline: string; description: string; url: string; dateModified: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "mainEntityOfPage": { "@type": "WebPage", "@id": url },
    "dateModified": dateModified,
    "inLanguage": "sv-SE"
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
}
