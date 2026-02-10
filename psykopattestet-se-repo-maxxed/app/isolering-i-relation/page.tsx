import { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { Disclaimer } from "@/components/Disclaimer";
import { RelatedLinks } from "@/components/RelatedLinks";
import { BreadcrumbSchema, ArticleSchema } from "@/components/SEOJsonLd";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Isolering i relation – när världen krymper steg för steg",
  description: "Isolering behöver inte vara ett förbud. Det kan ske genom kritik, drama och skuld tills du väljer bort andra.",
  alternates: { canonical: "/isolering-i-relation" }
};

const related = [
  { href: "/kontrollbeteende", title: "Kontrollbeteende" },
  { href: "/gaslighting", title: "Gaslighting" },
  { href: "/nar-magkanslan-inte-slapper", title: "Magkänsla" },
] as const;

export default function Page() {
  const url = `${SITE.url}/isolering-i-relation`;
  const modified = new Date().toISOString();
  return (
    <div className="container">
      <section className="hero">
        <span className="kicker">Guide</span>
        <h1>Isolering i relation – när världen krymper steg för steg</h1>
        <p>Isolering behöver inte vara ett förbud. Det kan ske genom kritik, drama och skuld tills du väljer bort andra.</p>

        <div className="ctaRow">
          <CTA href={SITE.testUrl} label="Gör relationsvarningstestet" sublabel="För struktur – fokus på beteendemönster." />
          <Link className="cta ghost" href="/">Tillbaka till start <span aria-hidden>→</span></Link>
        </div>
      </section>

      <article className="panel">
        <h2>Hur isolering kan se ut</h2>
        <p>Kommentarer om dina vänner, konflikter varje gång du ska iväg, eller att du “straffas” efter sociala aktiviteter.</p>
        <h2>Tecken på att det hänt</h2>
        <p>Du hör av dig mindre, förklarar dig mer, och känner att relationen kräver all energi.</p>
        <h2>Varför det är en riskindikator</h2>
        <p>Mindre stöd utifrån gör kontroll och omskrivning enklare.</p>
        <h2>Vad du kan göra</h2>
        <p>Återkoppla till en trygg person, återta en liten social rutin, och notera reaktionen när du tar tillbaka din tid.</p>
        <h2>Nästa steg</h2>
        <p>Om du vill sammanfatta helheten på ett mer nyktert sätt kan ett anonymt relationsvarningstest hjälpa dig att se riskindikatorer tydligare.</p>
        <div className="ctaRow"><CTA href={SITE.testUrl} label="Gör relationsvarningstestet" /></div>
      </article>

      <RelatedLinks items={related as any} />

      <hr className="hr" />
      <Disclaimer />
      
      <BreadcrumbSchema items={[
        { name: "Start", item: SITE.url },
        { name: "Isolering i relation – när världen krymper steg för steg", item: url }
      ]} />
      <ArticleSchema headline="Isolering i relation – när världen krymper steg för steg" description="Isolering behöver inte vara ett förbud. Det kan ske genom kritik, drama och skuld tills du väljer bort andra." url={url} dateModified={modified} />
      <div style={ height: 26 } />
    </div>
  );
}
