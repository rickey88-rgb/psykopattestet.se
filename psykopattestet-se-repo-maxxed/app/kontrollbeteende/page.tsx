import { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { Disclaimer } from "@/components/Disclaimer";
import { RelatedLinks } from "@/components/RelatedLinks";
import { BreadcrumbSchema, ArticleSchema } from "@/components/SEOJsonLd";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontrollbeteende i relation – vanliga former och tidiga tecken",
  description: "Kontroll kan vara subtil: frågor, regler, kritik, isolering. Lär dig känna igen tidiga tecken innan det blir ett system.",
  alternates: { canonical: "/kontrollbeteende" }
};

const related = [
  { href: "/isolering-i-relation", title: "Isolering" },
  { href: "/tystnad-som-straff", title: "Tystnad som straff" },
  { href: "/granssattning-reaktioner", title: "Gränssättning" },
] as const;

export default function Page() {
  const url = `${SITE.url}/kontrollbeteende`;
  const modified = new Date().toISOString();
  return (
    <div className="container">
      <section className="hero">
        <span className="kicker">Guide</span>
        <h1>Kontrollbeteende i relation – vanliga former och tidiga tecken</h1>
        <p>Kontroll kan vara subtil: frågor, regler, kritik, isolering. Lär dig känna igen tidiga tecken innan det blir ett system.</p>

        <div className="ctaRow">
          <CTA href={SITE.testUrl} label="Gör relationsvarningstestet" sublabel="För struktur – fokus på beteendemönster." />
          <Link className="cta ghost" href="/">Tillbaka till start <span aria-hidden>→</span></Link>
        </div>
      </section>

      <article className="panel">
        <h2>Kontroll är ofta subtilt i början</h2>
        <p>Det kan börja som “omtanke” och glida över i regler: vem du träffar, hur du klär dig, vad som är “okej”.</p>
        <h2>Tidiga varningssignaler</h2>
        <p>Svartsjuka som rättfärdigas, krav på transparens som inte är ömsesidiga, och att du anpassar dig för att slippa reaktioner.</p>
        <h2>Kontroll via känslor</h2>
        <p>Skuld, rädsla och tystnad kan fungera som styrmedel även utan direkta förbud.</p>
        <h2>Vad du kan testa</h2>
        <p>Sätt en rimlig gräns. Observera reaktionen: respekt, förhandling eller straff?</p>
        <h2>Nästa steg</h2>
        <p>Om du vill sammanfatta helheten på ett mer nyktert sätt kan ett anonymt relationsvarningstest hjälpa dig att se riskindikatorer tydligare.</p>
        <div className="ctaRow"><CTA href={SITE.testUrl} label="Gör relationsvarningstestet" /></div>
      </article>

      <RelatedLinks items={related as any} />

      <hr className="hr" />
      <Disclaimer />
      
      <BreadcrumbSchema items={[
        { name: "Start", item: SITE.url },
        { name: "Kontrollbeteende i relation – vanliga former och tidiga tecken", item: url }
      ]} />
      <ArticleSchema headline="Kontrollbeteende i relation – vanliga former och tidiga tecken" description="Kontroll kan vara subtil: frågor, regler, kritik, isolering. Lär dig känna igen tidiga tecken innan det blir ett system." url={url} dateModified={modified} />
      <div style={ height: 26 } />
    </div>
  );
}
