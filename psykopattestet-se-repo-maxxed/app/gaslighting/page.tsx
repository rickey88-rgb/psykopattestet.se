import { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { Disclaimer } from "@/components/Disclaimer";
import { RelatedLinks } from "@/components/RelatedLinks";
import { BreadcrumbSchema, ArticleSchema } from "@/components/SEOJsonLd";
import { SITE } from "@/lib/site";
import { FAQSchema } from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Gaslighting i relation – tecken, exempel och vad du kan göra",
  description: "Gaslighting kan få dig att tvivla på minnen, känslor och verklighetsuppfattning. Lär dig känna igen mönster och få struktur.",
  alternates: { canonical: "/gaslighting" }
};

const related = [
  { href: "/tecken-pa-manipulation-i-relation", title: "Tecken på manipulation" },
  { href: "/nar-magkanslan-inte-slapper", title: "När magkänslan inte släpper" },
  { href: "/skuldbelagging", title: "Skuldbeläggning" },
] as const;

const faq = [
  { q: "Är gaslighting alltid medvetet?", a: "Ibland kan människor förneka av försvar, men vid gaslighting är mönstret ofta återkommande och ger tydlig makteffekt: du börjar tvivla på dig själv." },
  { q: "Varför känns det så svårt att beskriva?", a: "För att det ofta sker i små uttalanden och omskrivningar, inte i en stor händelse." },
] as const;

export default function Page() {
  const url = `${SITE.url}/gaslighting`;
  const modified = new Date().toISOString();
  return (
    <div className="container">
      <section className="hero">
        <span className="kicker">Guide</span>
        <h1>Gaslighting i relation – tecken, exempel och vad du kan göra</h1>
        <p>Gaslighting kan få dig att tvivla på minnen, känslor och verklighetsuppfattning. Lär dig känna igen mönster och få struktur.</p>

        <div className="ctaRow">
          <CTA href={SITE.testUrl} label="Gör relationsvarningstestet" sublabel="För struktur – fokus på beteendemönster." />
          <Link className="cta ghost" href="/">Tillbaka till start <span aria-hidden>→</span></Link>
        </div>
      </section>

      <article className="panel">
        <h2>Vad gaslighting är (i praktiken)</h2>
        <p>Det handlar om ett återkommande mönster där dina upplevelser skrivs om: “det där hände inte”, “du överdriver”, “du minns fel”.</p>
        <h2>Tecken att hålla koll på</h2>
        <p>Du börjar dokumentera saker för att känna dig trygg, du förklarar dig allt oftare, och du lämnar samtal mer förvirrad än innan.</p>
        <h2>Vanliga fraser och taktiker</h2>
        <p>Förminskning, omskrivning av historien, triangulering (“alla tycker att…”) och att lägga fokus på din reaktion istället för beteendet.</p>
        <h2>Så bryter du mönstret</h2>
        <p>Sätt tydliga gränser, håll dig till konkreta exempel, och observera reaktionen när du inte köper omskrivningen.</p>
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
        { name: "Gaslighting i relation – tecken, exempel och vad du kan göra", item: url }
      ]} />
      <ArticleSchema headline="Gaslighting i relation – tecken, exempel och vad du kan göra" description="Gaslighting kan få dig att tvivla på minnen, känslor och verklighetsuppfattning. Lär dig känna igen mönster och få struktur." url={url} dateModified={modified} />
      <div style={ height: 26 } />
    </div>
  );
}
