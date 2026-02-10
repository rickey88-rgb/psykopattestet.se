import { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { Disclaimer } from "@/components/Disclaimer";
import { RelatedLinks } from "@/components/RelatedLinks";
import { BreadcrumbSchema, ArticleSchema } from "@/components/SEOJsonLd";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Psykopat eller narcissist? Likheter, skillnader och vad du kan observera",
  description: "En praktisk jämförelse av vanliga mönster: motiv, gränser, ansvar och reaktion vid konflikt. Fokus på beteenden och riskindikatorer.",
  alternates: { canonical: "/psykopat-eller-narcissist" }
};

const related = [
  { href: "/psykopatiska-drag-i-relationer", title: "Psykopatiska drag i relationer" },
  { href: "/granssattning-reaktioner", title: "Reaktioner när du sätter gränser" },
  { href: "/love-bombing", title: "Love bombing" },
] as const;

export default function Page() {
  const url = `${SITE.url}/psykopat-eller-narcissist`;
  const modified = new Date().toISOString();
  return (
    <div className="container">
      <section className="hero">
        <span className="kicker">Guide</span>
        <h1>Psykopat eller narcissist? Likheter, skillnader och vad du kan observera</h1>
        <p>En praktisk jämförelse av vanliga mönster: motiv, gränser, ansvar och reaktion vid konflikt. Fokus på beteenden och riskindikatorer.</p>

        <div className="ctaRow">
          <CTA href={SITE.testUrl} label="Gör relationsvarningstestet" sublabel="För struktur – fokus på beteendemönster." />
          <Link className="cta ghost" href="/">Tillbaka till start <span aria-hidden>→</span></Link>
        </div>
      </section>

      <article className="panel">
        <h2>Varför jämförelsen är så vanlig</h2>
        <p>Beteenden kan överlappa: charm, självhävdelse, bristande ansvar och manipulation. Skillnaden ligger ofta i motiv och hur gränser hanteras.</p>
        <h2>Vad du kan observera utan diagnoser</h2>
        <p>Fokusera på reaktion vid nej, ansvarstagande och om samma cykel upprepas: charm → gränsbrott → förnekelse → straff.</p>
        <h2>Vad som ofta gör mest skada</h2>
        <p>Förvirring och själv-tvivel brukar vara tidiga tecken på att relationens “ram” styrs av någon annan.</p>
        <h2>Nästa steg</h2>
        <p>Om du vill sammanfatta helheten på ett mer nyktert sätt kan ett anonymt relationsvarningstest hjälpa dig att se riskindikatorer tydligare.</p>
        <div className="ctaRow"><CTA href={SITE.testUrl} label="Gör relationsvarningstestet" /></div>
      </article>

      <RelatedLinks items={related as any} />

      <hr className="hr" />
      <Disclaimer />
      
      <BreadcrumbSchema items={[
        { name: "Start", item: SITE.url },
        { name: "Psykopat eller narcissist? Likheter, skillnader och vad du kan observera", item: url }
      ]} />
      <ArticleSchema headline="Psykopat eller narcissist? Likheter, skillnader och vad du kan observera" description="En praktisk jämförelse av vanliga mönster: motiv, gränser, ansvar och reaktion vid konflikt. Fokus på beteenden och riskindikatorer." url={url} dateModified={modified} />
      <div style={ height: 26 } />
    </div>
  );
}
