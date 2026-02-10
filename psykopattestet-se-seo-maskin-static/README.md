# psykopattestet.se – SEO-maskin (STATIC, noll build-strul)

Detta är en helt statisk SEO-sajt (HTML/CSS) med många long-tail-sidor som länkar vidare till ditt test på relationsvarning.se.

## Varför denna version?
- Inga dependencies
- Ingen build
- Inget “No Next.js version detected”
- Vercel deployar direkt

## Deploy (GitHub + Vercel)
1) Skapa ett nytt GitHub-repo (t.ex. `psykopattestet-se-static`)
2) Ladda upp ALLA filer (drag & drop)
3) Vercel → Add New → Project → Import repo → Deploy
   - Framework: “Other” (eller låt auto)
   - Root Directory: ./
   - Build command: lämna tomt
   - Output directory: lämna tomt

## Byt testsida-länk
Sök och ersätt i filerna:
https://relationsvarning.se

## SEO
- robots.txt + sitemap.xml i root
- canonical per sida
- JSON-LD: Breadcrumb + Article
- FAQ-schema på utvalda sidor
