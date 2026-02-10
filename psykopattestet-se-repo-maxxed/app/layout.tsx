import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { NAV, SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Psykopattestet.se – tecken, mönster och varningssignaler i relationer",
    template: "%s | Psykopattestet.se"
  },
  description:
    "Guider om psykopatiska drag, manipulation och varningssignaler i relationer. Förstå mönster – och gör ett anonymt relationsvarningstest för att få struktur.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: "Psykopattestet.se",
    title: "Psykopattestet.se – tecken, mönster och varningssignaler",
    description:
      "Läs guider om psykopatiska drag och manipulation i relationer. Gör sedan ett anonymt relationsvarningstest för struktur.",
    locale: "sv_SE"
  }
};

export default function RootLayout({ children }:{ children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body>
        <header>
          <div className="container nav">
            <Link className="brand" href="/">psykopattestet.se</Link>
            <nav className="navlinks" aria-label="Huvudmeny">
              {NAV.map((x) => (<Link key={x.href} href={x.href}>{x.label}</Link>))}
              <a href={SITE.testUrl} className="cta" style={{ padding: "10px 12px", borderRadius: 12 }}>
                Gör testet <span aria-hidden>→</span>
              </a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <div className="container">
            <div style={{ display:"flex", gap:12, flexWrap:"wrap", justifyContent:"space-between" }}>
              <div>
                <div><strong>Psykopattestet.se</strong></div>
                <div style={{ marginTop: 8 }} className="note">Information för självreflektion. Ingen diagnostik.</div>
              </div>
              <div className="note"><a href={SITE.testUrl}>Gå till relationsvarningstestet</a></div>
            </div>
            <hr className="hr" />
            <div className="note">© {new Date().getFullYear()} • {SITE.name}</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
