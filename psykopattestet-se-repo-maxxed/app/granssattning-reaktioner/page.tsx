import { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { Disclaimer } from "@/components/Disclaimer";
import { RelatedLinks } from "@/components/RelatedLinks";
import { BreadcrumbSchema, ArticleSchema } from "@/components/SEOJsonLd";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reaktioner när du sätter gränser – ett av de tydligaste tecknen",
  description: "Hur någon reagerar när du säger nej kan avslöja mer än vad de säger när allt flyter. Här är vanliga reaktionsmönster.",
  alternates: { canonical: "/granssattning-reaktioner" }
};

const related = [
  { href: "/kontrollbeteende", title: "Kontrollbeteende" },
  { href: "/tystnad-som-straff", title: "Tystnad som straff" },
  { href: "/hot-och-ultimatum", title: "Hot och ultimatum" },
] as const;

export default function Page() {
  const url = `${SITE.url}/granssattning-reaktioner`;
  const modified = new Date().toISOString();
  return (
    <div className="container">
      <section className="hero">
        <span className="kicker">Guide</span>
        <h1>Reaktioner när du sätter gränser – ett av de tydligaste tecknen</h1>
        <p>Hur någon reagerar när du säger nej kan avslöja mer än vad de säger när allt flyter. Här är vanliga reaktionsmönster.</p>

        <div className="ctaRow">
          <CTA href={SITE.testUrl} label="Gör relationsvarningstestet" sublabel="För struktur – fokus på beteendemönster." />
          <Link className="cta ghost" href="/">Tillbaka till start <span aria-hidden>→</span></Link>
        </div>
      </section>

      <article className="panel">
        <h2>Sund reaktion</h2>
        <p>Respekt, nyfikenhet och vilja att förstå. En gräns kan vara obekväm, men den accepteras.</p>
        <h2>Kontrollerande reaktion</h2>
        <p>Förhandling utan slut, skuldbeläggning, vrede, tystnad eller straff.</p>
        <h2>Testa med en liten gräns</h2>
        <p>Sätt en rimlig gräns med låg insats. Observera reaktionen snarare än argumenten.</p>
        <h2>Skydd först</h2>
        <p>Om du känner rädsla eller hot: prioritera säkerhet och stöd utifrån.</p>
        <h2>Nästa steg</h2>
        <p>Om du vill sammanfatta helheten på ett mer nyktert sätt kan ett anonymt relationsvarningstest hjälpa dig att se riskindikatorer tydligare.</p>
        <div className="ctaRow"><CTA href={SITE.testUrl} label="Gör relationsvarningstestet" /></div>
      </article>

      <RelatedLinks items={related as any} />

      <hr className="hr" />
      <Disclaimer />
      
      <BreadcrumbSchema items={[
        { name: "Start", item: SITE.url },
        { name: "Reaktioner när du sätter gränser – ett av de tydligaste tecknen", item: url }
      ]} />
      <ArticleSchema headline="Reaktioner när du sätter gränser – ett av de tydligaste tecknen" description="Hur någon reagerar när du säger nej kan avslöja mer än vad de säger när allt flyter. Här är vanliga reaktionsmönster." url={url} dateModified={modified} />
      <div style={ height: 26 } />
    </div>
  );
}
