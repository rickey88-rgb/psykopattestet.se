import { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { ArticleCard } from "@/components/ArticleCard";
import { Disclaimer } from "@/components/Disclaimer";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Psykopattest i relation – tecken, varningssignaler och nästa steg",
  description: "Läs om psykopatiska drag, manipulation och vanliga mönster i destruktiva relationer. För struktur: gör ett anonymt relationsvarningstest."
};

export default function Page() {
  return (
    <div className="container">
      <section className="hero">
        <span className="kicker">När misstanken inte släpper</span>
        <h1>Psykopattest i relation: tecken, mönster och varningssignaler</h1>
        <p>
          Det här är inte en diagnossida. Men om du länge känt dig förvirrad, nedbruten eller ifrågasatt kan det hjälpa
          att se mönster tydligare. Börja med guiderna nedan – och gå vidare till ett anonymt relationsvarningstest när du vill få struktur.
        </p>

        <div className="ctaRow">
          <CTA href={SITE.testUrl} label="Gör relationsvarningstestet" sublabel="Anonymt • fokus på beteendemönster • ingen diagnostik" />
          <CTA href="/snabb-check-psykopatiska-monster" label="Gör en snabb check" variant="ghost" />
        </div>

        <div className="grid">
          <ArticleCard href="/psykopatiska-drag-i-relationer" title="Psykopatiska drag i relationer" desc="Vad människor brukar mena med psykopatiska mönster – och hur de kan se ut i vardagen." />
          <ArticleCard href="/psykopat-eller-narcissist" title="Psykopat eller narcissist?" desc="Likheter och skillnader: motivation, empati, konflikt och kontroll." />
          <ArticleCard href="/tecken-pa-manipulation-i-relation" title="Tecken på manipulation" desc="Skuldbeläggning, gaslighting, tystnad och andra sätt kontroll kan byggas upp." />
          <ArticleCard href="/nar-magkanslan-inte-slapper" title="När magkänslan inte släpper" desc="Varför det kan vara svårt att sätta ord på det du upplever – och vad som kan hjälpa." />
          <ArticleCard href="/gaslighting" title="Gaslighting" desc="När din verklighet blir förhandlingsbar – tecken och exempel." />
          <ArticleCard href="/traumabindning" title="Traumabindning" desc="Varför du kan stanna trots att du mår dåligt – cykeln förklarad." />
          <ArticleCard href="/kontrollbeteende" title="Kontrollbeteende" desc="Subtila former av kontroll och tidiga varningssignaler." />
          <ArticleCard href="/love-bombing" title="Love bombing" desc="När intensiv kärlek blir en krok: idealisering → nedvärdering." />
        </div>
      </section>

      <section className="panel">
        <h2>Om du vill gå från känsla till struktur</h2>
        <p className="note">
          Många fastnar i “är det jag som överdriver?”. Ett strukturerat test kan inte säga vad någon är – men kan hjälpa dig se återkommande
          beteenden och riskindikatorer på ett mer nyktert sätt.
        </p>
        <div className="ctaRow"><CTA href={SITE.testUrl} label="Gör relationsvarningstestet" /></div>
      </section>

      <hr className="hr" />
      <Disclaimer />
      <div style={{ height: 26 }} />
    </div>
  );
}
