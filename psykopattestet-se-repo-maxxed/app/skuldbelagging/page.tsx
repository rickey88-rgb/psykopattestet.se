import { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { Disclaimer } from "@/components/Disclaimer";
import { RelatedLinks } from "@/components/RelatedLinks";
import { BreadcrumbSchema, ArticleSchema } from "@/components/SEOJsonLd";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Skuldbeläggning i relation – när allt blir ditt fel",
  description: "Skuldbeläggning kan flytta fokus från beteendet till din reaktion. Här är vanliga mönster och hur du kan se dem tydligare.",
  alternates: { canonical: "/skuldbelagging" }
};

const related = [
  { href: "/gaslighting", title: "Gaslighting" },
  { href: "/tecken-pa-manipulation-i-relation", title: "Manipulation" },
  { href: "/kontrollbeteende", title: "Kontrollbeteende" },
] as const;

export default function Page() {
  const url = `${SITE.url}/skuldbelagging`;
  const modified = new Date().toISOString();
  return (
    <div className="container">
      <section className="hero">
        <span className="kicker">Guide</span>
        <h1>Skuldbeläggning i relation – när allt blir ditt fel</h1>
        <p>Skuldbeläggning kan flytta fokus från beteendet till din reaktion. Här är vanliga mönster och hur du kan se dem tydligare.</p>

        <div className="ctaRow">
          <CTA href={SITE.testUrl} label="Gör relationsvarningstestet" sublabel="För struktur – fokus på beteendemönster." />
          <Link className="cta ghost" href="/">Tillbaka till start <span aria-hidden>→</span></Link>
        </div>
      </section>

      <article className="panel">
        <h2>Hur skuldbeläggning fungerar</h2>
        <p>Ansvar flyttas från handling till din känsla: “titta vad du får mig att göra”, “om du bara…”.</p>
        <h2>Tecken i vardagen</h2>
        <p>Du ber om ursäkt för att du tar upp problem, och konflikter slutar ofta med att du tröstar den som sårat dig.</p>
        <h2>Skillnad på ansvar och skuld</h2>
        <p>Ansvar = jag äger min del. Skuldspel = någon måste vara fel, och det blir du.</p>
        <h2>Vad du kan göra</h2>
        <p>Håll dig till konkreta exempel, upprepa din gräns, och notera om samtalet alltid glider till att du ska kompensera.</p>
        <h2>Nästa steg</h2>
        <p>Om du vill sammanfatta helheten på ett mer nyktert sätt kan ett anonymt relationsvarningstest hjälpa dig att se riskindikatorer tydligare.</p>
        <div className="ctaRow"><CTA href={SITE.testUrl} label="Gör relationsvarningstestet" /></div>
      </article>

      <RelatedLinks items={related as any} />

      <hr className="hr" />
      <Disclaimer />
      
      <BreadcrumbSchema items={[
        { name: "Start", item: SITE.url },
        { name: "Skuldbeläggning i relation – när allt blir ditt fel", item: url }
      ]} />
      <ArticleSchema headline="Skuldbeläggning i relation – när allt blir ditt fel" description="Skuldbeläggning kan flytta fokus från beteendet till din reaktion. Här är vanliga mönster och hur du kan se dem tydligare." url={url} dateModified={modified} />
      <div style={ height: 26 } />
    </div>
  );
}
