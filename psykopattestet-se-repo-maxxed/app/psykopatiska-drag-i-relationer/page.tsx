import { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { Disclaimer } from "@/components/Disclaimer";
import { RelatedLinks } from "@/components/RelatedLinks";
import { BreadcrumbSchema, ArticleSchema } from "@/components/SEOJsonLd";
import { SITE } from "@/lib/site";
import { FAQSchema } from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Psykopatiska drag i relationer – tecken och mönster",
  description: "Guider om vanliga riskindikatorer: empati, ansvar, manipulation och kontroll. Fokus på beteenden – inte etiketter.",
  alternates: { canonical: "/psykopatiska-drag-i-relationer" }
};

const related = [
  { href: "/tecken-pa-manipulation-i-relation", title: "Tecken på manipulation" },
  { href: "/love-bombing", title: "Love bombing" },
  { href: "/traumabindning", title: "Traumabindning" },
] as const;

const faq = [
  { q: "Kan ett test avgöra om någon är psykopat?", a: "Nej. Ett test kan inte ställa diagnos. Det kan däremot hjälpa dig strukturera upplevelser och se återkommande riskmönster." },
  { q: "Vad är viktigast: enstaka händelser eller mönster?", a: "Mönster över tid brukar vara mer informativa än enstaka bråk. Frekvens, reaktion vid gränser och ansvarstagande är ofta centralt." },
] as const;

export default function Page() {
  const url = `${SITE.url}/psykopatiska-drag-i-relationer`;
  const modified = new Date().toISOString();
  return (
    <div className="container">
      <section className="hero">
        <span className="kicker">Guide</span>
        <h1>Psykopatiska drag i relationer – tecken och mönster</h1>
        <p>Guider om vanliga riskindikatorer: empati, ansvar, manipulation och kontroll. Fokus på beteenden – inte etiketter.</p>

        <div className="ctaRow">
          <CTA href={SITE.testUrl} label="Gör relationsvarningstestet" sublabel="För struktur – fokus på beteendemönster." />
          <Link className="cta ghost" href="/">Tillbaka till start <span aria-hidden>→</span></Link>
        </div>
      </section>

      <article className="panel">
        <h2>Vad menas med “psykopatiska drag” i en relation?</h2>
        <p>I vardagligt tal används ordet ofta som en genväg för ett mönster: charm på ytan, kyla under stress och ett återkommande sätt att flytta ansvar.</p>
        <h2>Hur det kan kännas för den som är nära</h2>
        <p>Många beskriver en långsam nedmontering av självkänslan: du börjar tvivla på din magkänsla, dina minnen och dina gränser.</p>
        <h2>Vanliga beteendemönster att hålla koll på</h2>
        <p>Ingen enskild punkt bevisar något. Men kombinationer och frekvens över tid kan säga mycket – särskilt reaktionen när du sätter gränser.</p>
        <h2>Nästa steg</h2>
        <p>Om du vill sammanfatta helheten på ett mer nyktert sätt kan ett anonymt relationsvarningstest hjälpa dig att se riskindikatorer tydligare.</p>
        <div className="ctaRow"><CTA href={SITE.testUrl} label="Gör relationsvarningstestet" /></div>
      </article>

      <RelatedLinks items={related as any} />

      <hr className="hr" />
      <Disclaimer />
      <FAQSchema items={faq} />
      <BreadcrumbSchema items={[
        { name: "Start", item: SITE.url },
        { name: "Psykopatiska drag i relationer – tecken och mönster", item: url }
      ]} />
      <ArticleSchema headline="Psykopatiska drag i relationer – tecken och mönster" description="Guider om vanliga riskindikatorer: empati, ansvar, manipulation och kontroll. Fokus på beteenden – inte etiketter." url={url} dateModified={modified} />
      <div style={ height: 26 } />
    </div>
  );
}
