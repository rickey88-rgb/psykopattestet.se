import { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { Disclaimer } from "@/components/Disclaimer";
import { RelatedLinks } from "@/components/RelatedLinks";
import { BreadcrumbSchema, ArticleSchema } from "@/components/SEOJsonLd";
import { SITE } from "@/lib/site";
import { FAQSchema } from "@/components/FAQSchema";

export const metadata: Metadata = {
  title: "Traumabindning i relation – varför du stannar trots att du mår dåligt",
  description: "Traumabindning är en stark koppling som kan uppstå när värme varvas med kyla, stress och försoning. Här är mönstret och nästa steg.",
  alternates: { canonical: "/traumabindning" }
};

const related = [
  { href: "/tystnad-som-straff", title: "Tystnad som straff" },
  { href: "/nar-magkanslan-inte-slapper", title: "Magkänsla" },
  { href: "/idealiseringsfasen-och-nedvardering", title: "Idealiseringsfasen" },
] as const;

const faq = [
  { q: "Är traumabindning samma som att “vara svag”?", a: "Nej. Det är ett mönster av stress och belöning som kan påverka vem som helst – särskilt vid starka känslor och isolering." },
  { q: "Varför känns det värre att lämna än att stanna?", a: "För att kroppen kan koppla försoning till lättnad. Det kan göra separation känslomässigt intensiv trots att den är rationellt rimlig." },
] as const;

export default function Page() {
  const url = `${SITE.url}/traumabindning`;
  const modified = new Date().toISOString();
  return (
    <div className="container">
      <section className="hero">
        <span className="kicker">Guide</span>
        <h1>Traumabindning i relation – varför du stannar trots att du mår dåligt</h1>
        <p>Traumabindning är en stark koppling som kan uppstå när värme varvas med kyla, stress och försoning. Här är mönstret och nästa steg.</p>

        <div className="ctaRow">
          <CTA href={SITE.testUrl} label="Gör relationsvarningstestet" sublabel="För struktur – fokus på beteendemönster." />
          <Link className="cta ghost" href="/">Tillbaka till start <span aria-hidden>→</span></Link>
        </div>
      </section>

      <article className="panel">
        <h2>Vad traumabindning är</h2>
        <p>En cykel där belöning (värme) blandas med hot, kyla eller stress – och försoningen känns som lättnad.</p>
        <h2>Tecken på att du fastnat</h2>
        <p>Du rationaliserar, känner skuld över att ens tänka på att lämna, och minns de bra stunderna starkt.</p>
        <h2>Varför det blir beroendeliknande</h2>
        <p>Oförutsägbar belöning kan skapa stark inlärning: du kämpar för att få tillbaka den version du först mötte.</p>
        <h2>Vad som hjälper</h2>
        <p>Struktur, stöd utifrån och tydliga gränser. Ofta är första steget att få klarhet på papper.</p>
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
        { name: "Traumabindning i relation – varför du stannar trots att du mår dåligt", item: url }
      ]} />
      <ArticleSchema headline="Traumabindning i relation – varför du stannar trots att du mår dåligt" description="Traumabindning är en stark koppling som kan uppstå när värme varvas med kyla, stress och försoning. Här är mönstret och nästa steg." url={url} dateModified={modified} />
      <div style={ height: 26 } />
    </div>
  );
}
