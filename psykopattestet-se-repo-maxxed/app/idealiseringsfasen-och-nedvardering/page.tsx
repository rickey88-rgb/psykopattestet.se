import { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { Disclaimer } from "@/components/Disclaimer";
import { RelatedLinks } from "@/components/RelatedLinks";
import { BreadcrumbSchema, ArticleSchema } from "@/components/SEOJsonLd";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Idealiseringsfasen och nedvärdering – cykeln som gör dig förvirrad",
  description: "En vanlig cykel i destruktiva relationer är idealisering följt av nedvärdering. Att förstå cykeln ger klarhet.",
  alternates: { canonical: "/idealiseringsfasen-och-nedvardering" }
};

const related = [
  { href: "/love-bombing", title: "Love bombing" },
  { href: "/traumabindning", title: "Traumabindning" },
  { href: "/granssattning-reaktioner", title: "Gränssättning" },
] as const;

export default function Page() {
  const url = `${SITE.url}/idealiseringsfasen-och-nedvardering`;
  const modified = new Date().toISOString();
  return (
    <div className="container">
      <section className="hero">
        <span className="kicker">Guide</span>
        <h1>Idealiseringsfasen och nedvärdering – cykeln som gör dig förvirrad</h1>
        <p>En vanlig cykel i destruktiva relationer är idealisering följt av nedvärdering. Att förstå cykeln ger klarhet.</p>

        <div className="ctaRow">
          <CTA href={SITE.testUrl} label="Gör relationsvarningstestet" sublabel="För struktur – fokus på beteendemönster." />
          <Link className="cta ghost" href="/">Tillbaka till start <span aria-hidden>→</span></Link>
        </div>
      </section>

      <article className="panel">
        <h2>Idealiseringsfasen</h2>
        <p>Du får mycket bekräftelse. Tempot är högt. Du känner att du äntligen blivit “sedd”.</p>
        <h2>Nedvärdering</h2>
        <p>Kritik, kyla och små straff dyker upp. Du försöker återfå värmen genom att anpassa dig.</p>
        <h2>Varför cykeln blir stark</h2>
        <p>Kontrasten skapar hopp: du jagar den första versionen, och tolkar nedvärderingen som något du kan fixa.</p>
        <h2>Brytpunkt</h2>
        <p>Titta på mönster över tid och reaktionen när du sätter gränser.</p>
        <h2>Nästa steg</h2>
        <p>Om du vill sammanfatta helheten på ett mer nyktert sätt kan ett anonymt relationsvarningstest hjälpa dig att se riskindikatorer tydligare.</p>
        <div className="ctaRow"><CTA href={SITE.testUrl} label="Gör relationsvarningstestet" /></div>
      </article>

      <RelatedLinks items={related as any} />

      <hr className="hr" />
      <Disclaimer />
      
      <BreadcrumbSchema items={[
        { name: "Start", item: SITE.url },
        { name: "Idealiseringsfasen och nedvärdering – cykeln som gör dig förvirrad", item: url }
      ]} />
      <ArticleSchema headline="Idealiseringsfasen och nedvärdering – cykeln som gör dig förvirrad" description="En vanlig cykel i destruktiva relationer är idealisering följt av nedvärdering. Att förstå cykeln ger klarhet." url={url} dateModified={modified} />
      <div style={ height: 26 } />
    </div>
  );
}
