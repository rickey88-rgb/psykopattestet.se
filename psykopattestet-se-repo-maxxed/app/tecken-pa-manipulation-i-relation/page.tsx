import { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { Disclaimer } from "@/components/Disclaimer";
import { RelatedLinks } from "@/components/RelatedLinks";
import { BreadcrumbSchema, ArticleSchema } from "@/components/SEOJsonLd";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tecken på manipulation i relation – vanliga mönster och varningssignaler",
  description: "Skuldbeläggning, gaslighting, tystnad och kontroll. Lär dig känna igen mönster – och gå vidare till ett anonymt relationsvarningstest för struktur.",
  alternates: { canonical: "/tecken-pa-manipulation-i-relation" }
};

const related = [
  { href: "/gaslighting", title: "Gaslighting i relation" },
  { href: "/skuldbelagging", title: "Skuldbeläggning i relation" },
  { href: "/kontrollbeteende", title: "Kontrollbeteende i relation" },
] as const;

export default function Page() {
  const url = `${SITE.url}/tecken-pa-manipulation-i-relation`;
  const modified = new Date().toISOString();
  return (
    <div className="container">
      <section className="hero">
        <span className="kicker">Guide</span>
        <h1>Tecken på manipulation i relation – vanliga mönster och varningssignaler</h1>
        <p>Skuldbeläggning, gaslighting, tystnad och kontroll. Lär dig känna igen mönster – och gå vidare till ett anonymt relationsvarningstest för struktur.</p>

        <div className="ctaRow">
          <CTA href={SITE.testUrl} label="Gör relationsvarningstestet" sublabel="För struktur – fokus på beteendemönster." />
          <Link className="cta ghost" href="/">Tillbaka till start <span aria-hidden>→</span></Link>
        </div>
      </section>

      <article className="panel">
        <h2>Hur manipulation ofta börjar</h2>
        <p>Ofta i små steg: du ifrågasätter dig själv mer och personen får mer kontroll över ramen.</p>
        <h2>Gaslighting i praktiken</h2>
        <p>Ett återkommande mönster där dina minnen, upplevelser eller intentioner skrivs om och du tappar fotfästet.</p>
        <h2>Tystnad, hot och ultimatum</h2>
        <p>När dialog ersätts av straff blir du lätt försiktig, tyst och anpassad – vilket förstärker kontrollen.</p>
        <h2>Nästa steg</h2>
        <p>Om du vill sammanfatta helheten på ett mer nyktert sätt kan ett anonymt relationsvarningstest hjälpa dig att se riskindikatorer tydligare.</p>
        <div className="ctaRow"><CTA href={SITE.testUrl} label="Gör relationsvarningstestet" /></div>
      </article>

      <RelatedLinks items={related as any} />

      <hr className="hr" />
      <Disclaimer />
      
      <BreadcrumbSchema items={[
        { name: "Start", item: SITE.url },
        { name: "Tecken på manipulation i relation – vanliga mönster och varningssignaler", item: url }
      ]} />
      <ArticleSchema headline="Tecken på manipulation i relation – vanliga mönster och varningssignaler" description="Skuldbeläggning, gaslighting, tystnad och kontroll. Lär dig känna igen mönster – och gå vidare till ett anonymt relationsvarningstest för struktur." url={url} dateModified={modified} />
      <div style={ height: 26 } />
    </div>
  );
}
