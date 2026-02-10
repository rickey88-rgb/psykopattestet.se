import { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { Disclaimer } from "@/components/Disclaimer";
import { RelatedLinks } from "@/components/RelatedLinks";
import { BreadcrumbSchema, ArticleSchema } from "@/components/SEOJsonLd";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Snabb check – psykopatiska mönster i relation",
  description: "En kort checklista med exempel på riskindikatorer. Ingen diagnostik. För mer struktur: gör ett anonymt relationsvarningstest.",
  alternates: { canonical: "/snabb-check-psykopatiska-monster" }
};

const related = [
  { href: "/tecken-pa-manipulation-i-relation", title: "Tecken på manipulation" },
  { href: "/kontrollbeteende", title: "Kontrollbeteende" },
  { href: "/granssattning-reaktioner", title: "Reaktioner när du sätter gränser" }
] as const;

export default function Page() {
  const url = `${SITE.url}/snabb-check-psykopatiska-monster`;
  const modified = new Date().toISOString();
  return (
    <div className="container">
      <section className="hero">
        <span className="kicker">Snabb check</span>
        <h1>Snabb check: återkommande riskmönster</h1>
        <p>
          Det här är inte ett psykopattest och ställer inga diagnoser. Syftet är att ge dig några tydliga observationer att utgå ifrån.
          Det som brukar spela roll är <strong>mönster över tid</strong>, inte en enstaka händelse.
        </p>
        <div className="ctaRow">
          <CTA href={SITE.testUrl} label="Gör relationsvarningstestet" sublabel="För en mer strukturerad genomgång." />
          <Link className="cta ghost" href="/">Tillbaka till start <span aria-hidden>→</span></Link>
        </div>
      </section>

      <article className="panel">
        <h2>Checklistan (markera mentalt)</h2>
        <ul className="ul">
          <li>Du känner dig ofta förvirrad efter samtal – som att verkligheten “förhandlas”.</li>
          <li>Du skuldbeläggs för deras reaktioner (”titta vad du får mig att göra”).</li>
          <li>Värme och charm följs av kyla/straff när du sätter gränser.</li>
          <li>Du går på äggskal för att undvika vrede, tystnad eller hot.</li>
          <li>Du tvivlar på dig själv mer nu än tidigare.</li>
          <li>Du isoleras gradvis från vänner, familj eller intressen.</li>
        </ul>

        <h2>Nästa steg: struktur</h2>
        <p>Om du vill få en tydligare bild kan ett anonymt relationsvarningstest hjälpa dig att sammanfatta mönster och riskindikatorer på ett mer nyktert sätt.</p>
        <div className="ctaRow"><CTA href={SITE.testUrl} label="Gör relationsvarningstestet" /></div>
      </article>

      <RelatedLinks items={related as any} />

      <hr className="hr" />
      <Disclaimer />
      <BreadcrumbSchema items={[
        { name: "Start", item: SITE.url },
        { name: "Snabb check", item: url }
      ]} />
      <ArticleSchema headline="Snabb check – psykopatiska mönster i relation" description={metadata.description!} url={url} dateModified={modified} />
      <div style={{ height: 26 }} />
    </div>
  );
}
