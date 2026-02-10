import { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { Disclaimer } from "@/components/Disclaimer";
import { RelatedLinks } from "@/components/RelatedLinks";
import { BreadcrumbSchema, ArticleSchema } from "@/components/SEOJsonLd";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "När magkänslan inte släpper – varför du tvivlar och vad du kan göra",
  description: "En guide för dig som känner att något är fel men har svårt att sätta ord på det. Få struktur och se mönster tydligare.",
  alternates: { canonical: "/nar-magkanslan-inte-slapper" }
};

const related = [
  { href: "/gaslighting", title: "Gaslighting i relation" },
  { href: "/traumabindning", title: "Traumabindning" },
  { href: "/isolering-i-relation", title: "Isolering i relation" },
] as const;

export default function Page() {
  const url = `${SITE.url}/nar-magkanslan-inte-slapper`;
  const modified = new Date().toISOString();
  return (
    <div className="container">
      <section className="hero">
        <span className="kicker">Guide</span>
        <h1>När magkänslan inte släpper – varför du tvivlar och vad du kan göra</h1>
        <p>En guide för dig som känner att något är fel men har svårt att sätta ord på det. Få struktur och se mönster tydligare.</p>

        <div className="ctaRow">
          <CTA href={SITE.testUrl} label="Gör relationsvarningstestet" sublabel="För struktur – fokus på beteendemönster." />
          <Link className="cta ghost" href="/">Tillbaka till start <span aria-hidden>→</span></Link>
        </div>
      </section>

      <article className="panel">
        <h2>Varför det är svårt att “bevisa”</h2>
        <p>Summan av små saker blir ett system. Därför kan magkänslan vara stark även när du saknar ett tydligt citat eller ett stort bråk.</p>
        <h2>Tecken på att du tappat kompassen</h2>
        <p>Du censurerar dig själv, ber om ursäkt för att du tar upp problem och tvivlar på minnen du tidigare var säker på.</p>
        <h2>Vad som kan hjälpa</h2>
        <p>Skriv ner konkreta händelser, sätt en gräns och observera reaktionen, och använd struktur för att se mönster.</p>
        <h2>Nästa steg</h2>
        <p>Om du vill sammanfatta helheten på ett mer nyktert sätt kan ett anonymt relationsvarningstest hjälpa dig att se riskindikatorer tydligare.</p>
        <div className="ctaRow"><CTA href={SITE.testUrl} label="Gör relationsvarningstestet" /></div>
      </article>

      <RelatedLinks items={related as any} />

      <hr className="hr" />
      <Disclaimer />
      
      <BreadcrumbSchema items={[
        { name: "Start", item: SITE.url },
        { name: "När magkänslan inte släpper – varför du tvivlar och vad du kan göra", item: url }
      ]} />
      <ArticleSchema headline="När magkänslan inte släpper – varför du tvivlar och vad du kan göra" description="En guide för dig som känner att något är fel men har svårt att sätta ord på det. Få struktur och se mönster tydligare." url={url} dateModified={modified} />
      <div style={ height: 26 } />
    </div>
  );
}
