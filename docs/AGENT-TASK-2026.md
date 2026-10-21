# TASK: Aktualizace osobního webu rostaslechta.com pro rok 2026

## Kontext projektu
- Web: https://rostaslechta.com (osobní stránka Rostislava Šlechty – Test Engineer)
- Stack: **Astro v5.x**, statický site, Cloudflare Pages
- Jazyk: čeština
- Design: čistý, profesionální, tmavě-zelený accent (#6bfc7f), Inter font, minimalistický
- Cíl: modernizovat positioning a obsah podle aktuálních trendů v softwarovém testování 2026, aniž by se zničil stávající dobrý dojem a solidní základ.

## Hlavní cíl
Posunout web z „solidního klasického Test Engineera“ na **moderního Quality Engineera / AI-augmented Test Engineera**, který rozumí AI-generovanému kódu, shift-left, continuous quality a Playwright + API-first přístupu.

## Co se má změnit (prioritně)

### 1. Headline + podtitulek (Hero sekce)
**Současný stav:**
- „Testování, které pomáhá předcházet chybám.“
- Role: „ROSTISLAV ŠLECHTA · TEST ENGINEER“

**Nový směr (navrhni a implementuj 1–2 varianty, vyber nejsilnější):**
- Headline: něco ve stylu  
  „Quality Engineering pro éru AI-generovaného kódu“  
  nebo  
  „Moderní testování a AI-augmented QA – od API až po continuous delivery“
- Podtitulek: krátce vysvětlit, že pomáháš týmům držet kvalitu i při rychlejším vývoji (AI coding tools).
- Role: „Test Engineer / Quality Engineer“ nebo „AI-augmented Test Engineer“.

### 2. Sekce služeb („CO PRO VÁS ZAJISTÍM“)
Zachovej stávající 4 body (Analýza, Manuální, Automatizace, Exekuce), ale:
- Uprav texty tak, aby reflektovaly risk-based přístup + moderní kontext.
- **Přidej 1–2 nové služby** (nejlépe hned za stávající nebo jako samostatnou sekci):
  - **AI-augmented testing** – generování a údržba testů pomocí AI, self-healing, prioritizace podle rizika, validace AI-generovaného kódu.
  - **Shift-left & Continuous Quality** – contract testing, testování v pull requestech, integrace do CI/CD, risk-based strategie od designu.

### 3. Oblasti testování
- Zdůrazni **Playwright** jako moderní standard.
- API-first (REST + SOAP zůstává, ale API je priorita).
- CI/CD pipeline a Java/.NET SDK ponech.

### 4. Sekce „JAK PRACUJI“
- Přidej prvek AI-assisted design / continuous feedback.
- Zachovej risk-based filozofii („ne testovat všechno za každou cenu“).

### 5. Sekce „O MNĚ“
- Aktualizuj na „Quality Engineer“ / „AI-augmented Test Engineer“.
- Explicitně zmínit: Playwright, AI nástroje (ChatGPT / Claude / Gemini pro test design), bankovní doména, komplexní integrace, CI/CD.
- Zachovat klíčovou větu o reprodukovatelnosti a srozumitelném popisu chyb.

### 6. Kontaktní sekce + CTA
- Aktualizovat text CTA:  
  „Potřebujete quality, která drží tempo s AI vývojem?“  
  nebo podobně moderní formulaci.
- Footer: změnit „Test engineer“ na novou roli.

### 7. Meta tagy + title
- Title a description aktualizovat, aby obsahovaly „Quality Engineering“, „AI-augmented testing“, „Playwright“ atd. (pro SEO).

## Co NEMĚNIT
- Celkový vizuální styl, barvy, typografii, layout strukturu (pokud to není nutné).
- Jazyk (čeština).
- Kontaktní e-mail / mechanismus.
- Existující dobré formulace o risk-based přístupu a reprodukovatelnosti.

## Požadovaný výstup od agenta
1. Proveď změny v relevantních souborech (hlavně `src/pages/index.astro` a případně komponenty).
2. Udržuj čistý, sémantický HTML + Astro syntax.
3. Po změnách ověř, že stránka vypadá konzistentně a texty dávají smysl.
4. V commit message / PR popisu shrň, co se změnilo a proč (odkaz na trendy 2026: AI-augmented testing, agentic QA, Playwright migrace, shift-left, role Quality Engineer).

## Další poznámky pro agenta
- Texty piš přirozeně, profesionálně, bez marketingového přehánění.
- Preferuj konkrétnost („Playwright“, „AI-generovaný kód“, „pull request testing“) před vágními frázemi.
- Pokud najdeš strukturovaná data / frontmatter, aktualizuj i je.
- Po dokončení vypiš diff nebo seznam změněných souborů + klíčové nové texty.

Začni analýzou aktuální struktury projektu (najdi, kde je hero, služby, O mně atd.) a pak proveď změny.
