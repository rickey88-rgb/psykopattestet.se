import { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { Disclaimer } from "@/components/Disclaimer";
import { RelatedLinks } from "@/components/RelatedLinks";
import { BreadcrumbSchema, ArticleSchema } from "@/components/SEOJsonLd";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hot och ultimatum i relation – när samtal blir omöjliga",
  description: "Hot, ultimatum och “take it or leave it” kan vara ett sätt att slippa ansvar och tvinga fram anpassning. Här är mönstren.",
  alternates: { canonical: "/hot-och-ultimatum" }
};

const related = [
  { href: "/granssattning-reaktioner", title: "Gränssättning" },
  { href: "/tystnad-som-straff", title: "Tystnad som straff" },
  { href: "/kontrollbeteende", title: "Kontrollbeteende" },
] as const;

export default function Page() {
  const url = `${SITE.url}/hot-och-ultimatum`;
  const modified = new Date().toISOString();
  return (
    <div className="container">
      <section className="hero">
        <span className="kicker">Guide</span>
        <h1>Hot och ultimatum i relation – när samtal blir omöjliga</h1>
        <p>Hot, ultimatum och “take it or leave it” kan vara ett sätt att slippa ansvar och tvinga fram anpassning. Här är mönstren.</p>

        <div className="ctaRow">
          <CTA href={SITE.testUrl} label="Gör relationsvarningstestet" sublabel="För struktur – fokus på beteendemönster." />
          <Link className="cta ghost" href="/">Tillbaka till start <span aria-hidden>→</span></Link>
        </div>
      </section>

      <article className="panel">
        <h2>Ultimatum som kontroll</h2>
        <p>När ultimatum används istället för dialog blir det ett verktyg: du lär dig att inte ta upp problem.</p>
        <h2>Vanliga former</h2>
        <p>Hot om att lämna, exponera, förstöra relationer, eller att du får “konsekvenser” om du säger ifrån.</p>
        <h2>Varför det eskalerar</h2>
        <p>Om hot fungerar en gång blir det lätt standard. Det flyttar maktbalansen.</p>
        <h2>Vad du kan göra</h2>
        <p>Ta hot på allvar, dokumentera, sök stöd utifrån och prioritera säkerhet om du känner dig rädd.</p>
        <h2>Nästa steg</h2>
        <p>Om du vill sammanfatta helheten på ett mer nyktert sätt kan ett anonymt relationsvarningstest hjälpa dig att se riskindikatorer tydligare.</p>
        <div className="ctaRow"><CTA href={SITE.testUrl} label="Gör relationsvarningstestet" /></div>
      </article>

      <RelatedLinks items={related as any} />

      <hr className="hr" />
      <Disclaimer />
      
      <BreadcrumbSchema items={[
        { name: "Start", item: SITE.url },
        { name: "Hot och ultimatum i relation – när samtal blir omöjliga", item: url }
      ]} />
      <ArticleSchema headline="Hot och ultimatum i relation – när samtal blir omöjliga" description="Hot, ultimatum och “take it or leave it” kan vara ett sätt att slippa ansvar och tvinga fram anpassning. Här är mönstren." url={url} dateModified={modified} />
      <div style={ height: 26 } />
    </div>
  );
}
