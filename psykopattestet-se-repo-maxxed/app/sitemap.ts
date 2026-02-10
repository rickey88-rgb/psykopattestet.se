import { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
const pages = ["", "/psykopatiska-drag-i-relationer", "/psykopat-eller-narcissist", "/tecken-pa-manipulation-i-relation", "/nar-magkanslan-inte-slapper", "/snabb-check-psykopatiska-monster", "/gaslighting", "/skuldbelagging", "/kontrollbeteende", "/tystnad-som-straff", "/love-bombing", "/traumabindning", "/idealiseringsfasen-och-nedvardering", "/granssattning-reaktioner", "/isolering-i-relation", "/hot-och-ultimatum"];
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return pages.map((p)=>({ url:`${SITE.url}${p}`, lastModified: now, changeFrequency:"monthly", priority: p===""?1:0.75 }));
}
