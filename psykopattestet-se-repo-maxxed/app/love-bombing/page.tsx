import { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { Disclaimer } from "@/components/Disclaimer";
import { RelatedLinks } from "@/components/RelatedLinks";
import { BreadcrumbSchema, ArticleSchema } from "@/components/SEOJsonLd";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Love bombing – när intensiv kärlek blir en krok",
  description: "Love bombing kan kännas magiskt i början, men blir ibland starten på en cykel: idealisering → nedvärdering → kontroll.",
  alternates: { canonical: "/love-bombing" }
};

const related = [
  { href: "/idealiseringsfasen-och-nedvardering", title: "Idealiseringsfasen" },
  { href: "/granssattning-reaktioner", title: "Gränssättning" },
  { href: "/psykopatiska-drag-i-relationer", title: "Psykopatiska drag" },
] as const;

export default function Page() {
  const url = `${SITE.url}/love-bombing`;
  const modified = new Date().toISOString();
  return (
    <div className="container">
      <section className="hero">
        <span className="kicker">Guide</span>
        <h1>Love bombing – när intensiv kärlek blir en krok</h1>
        <p>Love bombing kan kännas magiskt i början, men blir ibland starten på en cykel: idealisering → nedvärdering → kontroll.</p>

        <div className="ctaRow">
          <CTA href={SITE.testUrl} label="Gör relationsvarningstestet" sublabel="För struktur – fokus på beteendemönster." />
          <Link className="cta ghost" href="/">Tillbaka till start <span aria-hidden>→</span></Link>
        </div>
      </section>

      <article className="panel">
        <h2>Vad love bombing kan se ut som</h2>
        <p>Överdrivet tempo: stora ord, planer, exklusivitet och press att binda upp dig snabbt.</p>
        <h2>Varför det kan vara effektivt</h2>
        <p>Det skapar stark belöning och koppling tidigt, innan du hunnit se hur konflikter hanteras.</p>
        <h2>När det blir en röd flagga</h2>
        <p>Om intensiteten följs av kyla, kritik eller straff när du sätter gränser.</p>
        <h2>Vad du kan göra</h2>
        <p>Sakta ner. Be om tid. Se om respekten finns kvar när tempot sänks.</p>
        <h2>Nästa steg</h2>
        <p>Om du vill sammanfatta helheten på ett mer nyktert sätt kan ett anonymt relationsvarningstest hjälpa dig att se riskindikatorer tydligare.</p>
        <div className="ctaRow"><CTA href={SITE.testUrl} label="Gör relationsvarningstestet" /></div>
      </article>

      <RelatedLinks items={related as any} />

      <hr className="hr" />
      <Disclaimer />
      
      <BreadcrumbSchema items={[
        { name: "Start", item: SITE.url },
        { name: "Love bombing – när intensiv kärlek blir en krok", item: url }
      ]} />
      <ArticleSchema headline="Love bombing – när intensiv kärlek blir en krok" description="Love bombing kan kännas magiskt i början, men blir ibland starten på en cykel: idealisering → nedvärdering → kontroll." url={url} dateModified={modified} />
      <div style={ height: 26 } />
    </div>
  );
}
