import { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { Disclaimer } from "@/components/Disclaimer";
import { RelatedLinks } from "@/components/RelatedLinks";
import { BreadcrumbSchema, ArticleSchema } from "@/components/SEOJsonLd";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tystnad som straff – när tystnad blir ett kontrollverktyg",
  description: "Tystnad kan ibland vara en paus. Men som straff skapar den rädsla och anpassning. Så känner du igen mönstret.",
  alternates: { canonical: "/tystnad-som-straff" }
};

const related = [
  { href: "/kontrollbeteende", title: "Kontrollbeteende" },
  { href: "/traumabindning", title: "Traumabindning" },
  { href: "/hot-och-ultimatum", title: "Hot och ultimatum" },
] as const;

export default function Page() {
  const url = `${SITE.url}/tystnad-som-straff`;
  const modified = new Date().toISOString();
  return (
    <div className="container">
      <section className="hero">
        <span className="kicker">Guide</span>
        <h1>Tystnad som straff – när tystnad blir ett kontrollverktyg</h1>
        <p>Tystnad kan ibland vara en paus. Men som straff skapar den rädsla och anpassning. Så känner du igen mönstret.</p>

        <div className="ctaRow">
          <CTA href={SITE.testUrl} label="Gör relationsvarningstestet" sublabel="För struktur – fokus på beteendemönster." />
          <Link className="cta ghost" href="/">Tillbaka till start <span aria-hidden>→</span></Link>
        </div>
      </section>

      <article className="panel">
        <h2>Skillnaden mellan paus och straff</h2>
        <p>En sund paus har tidsram och syfte. Strafftystnad saknar tydlighet och syftar till att få dig att ge upp.</p>
        <h2>Tecken på strafftystnad</h2>
        <p>Du blir desperat att “laga” stämningen, ber om ursäkt utan att förstå för vad, och censurerar dig själv.</p>
        <h2>Varför det fungerar</h2>
        <p>Det triggar obehag och anknytning. Du anpassar dig för att få tillbaka värme.</p>
        <h2>Vad du kan göra</h2>
        <p>Håll dig till din gräns, undvik att jaga försoning, och notera om mönstret upprepas.</p>
        <h2>Nästa steg</h2>
        <p>Om du vill sammanfatta helheten på ett mer nyktert sätt kan ett anonymt relationsvarningstest hjälpa dig att se riskindikatorer tydligare.</p>
        <div className="ctaRow"><CTA href={SITE.testUrl} label="Gör relationsvarningstestet" /></div>
      </article>

      <RelatedLinks items={related as any} />

      <hr className="hr" />
      <Disclaimer />
      
      <BreadcrumbSchema items={[
        { name: "Start", item: SITE.url },
        { name: "Tystnad som straff – när tystnad blir ett kontrollverktyg", item: url }
      ]} />
      <ArticleSchema headline="Tystnad som straff – när tystnad blir ett kontrollverktyg" description="Tystnad kan ibland vara en paus. Men som straff skapar den rädsla och anpassning. Så känner du igen mönstret." url={url} dateModified={modified} />
      <div style={ height: 26 } />
    </div>
  );
}
