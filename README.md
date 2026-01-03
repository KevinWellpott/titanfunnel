# TitanScale

**Die Business-Software für skalierende Experten**

TitanScale ist eine vollständige Business-Software-Vorlage, die alle wichtigen Funktionen für den Start und Betrieb eines Online-Businesses enthält. Von der Authentifizierung über Zahlungen bis hin zu E-Mail-Marketing und Support – alles ist bereits integriert und einsatzbereit.

Powered by [Outseta](https://www.outseta.com), [Chakra UI](https://www.chakra-ui.com/) und [Next.js](https://nextjs.org/).

## Was ist TitanScale?

TitanScale ist ein Funnel-System, das Kunden darauf vorbereitet, die TitanScale-Software selbst zu kaufen. Es bietet drei Pakete:

- **Free**: Einblick in wie die Software funktioniert
- **Basis** (€44,90/Monat): Einblicke wie unsere Case-Studys arbeiten
- **Pro** (€99,00/Monat): Vollwertiger Blue Print zu Skalierung

## Was ist enthalten?

- ✅ **Authentifizierung & User Management** - Vollständiges Auth-System mit Outseta
- ✅ **Zahlungen & Abonnements** - Einmalzahlungen, Abonnements und Nutzungsbasierte Abrechnung
- ✅ **Geschützte Inhalte** - Plan-basierte Zugriffskontrolle für Seiten und Komponenten
- ✅ **E-Mail-Marketing** - Automatische E-Mails, Broadcasts und Drip-Kampagnen
- ✅ **Support-Desk** - Integriertes Ticket-System für Kundenbetreuung
- ✅ **Theme-System** - Vollständig anpassbares Design mit Chakra UI
- ✅ **SEO-Optimierung** - Automatische Meta-Tags und Sitemap-Generierung
- ✅ **Analytics-Integration** - Google Analytics und Meta Pixel Support
- ✅ **Supabase-Integration** - Optionale Datenbank-Integration für erweiterte Features
- ✅ **Cookie-Consent** - DSGVO-konformes Cookie-Banner

## Schnellstart

### 1. Repository klonen

```bash
git clone <repository-url> titanscale
cd titanscale
npm install
```

### 2. Umgebungsvariablen konfigurieren

Erstelle eine `.env.local` Datei im Root-Verzeichnis:

```bash
# Outseta Konfiguration
NEXT_PUBLIC_OUTSETA_DOMAIN=your-domain.outseta.com

# Supabase (optional)
NEXT_PUBLIC_SUPABASE_ENABLED=false
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# Google Analytics (optional)
NEXT_PUBLIC_GA_ENABLED=false
NEXT_PUBLIC_GA_MEASUREMENT_ID=

# Meta Pixel (optional)
NEXT_PUBLIC_META_ADS_ENABLED=false
NEXT_PUBLIC_META_PIXEL_ID=
```

### 3. Projekt konfigurieren

Öffne `config/general-config.ts` und passe die allgemeinen Einstellungen an:

```typescript
export const generalConfig = {
  name: "TitanScale",
  title: "TitanScale: Die Business-Software für skalierende Experten",
  description: "Deine Beschreibung",
  siteUrl: "https://deine-domain.de",
  support: {
    email: "kontakt@deine-domain.de",
  },
};
```

Weitere Konfigurationen findest du im `config/` Verzeichnis:
- `auth-config.ts` - Plan-Konfiguration
- `outseta-config.ts` - Outseta-Einstellungen
- `theme-config.ts` - Theme-Einstellungen
- `supabase-config.ts` - Supabase-Konfiguration
- `google-analytics-config.ts` - Google Analytics-Konfiguration
- `meta-ads-config.ts` - Meta Pixel-Konfiguration

### 4. Entwicklungsserver starten

```bash
npm run dev
```

Besuche `http://localhost:3000` um die App zu sehen und zu testen.

## Projektstruktur

```
titanscale/
├── app/                    # Next.js App Router Seiten
│   ├── (website)/         # Öffentliche Website-Seiten
│   ├── (utility)/         # Utility-Seiten (Login, Sign-up, etc.)
│   └── app/               # Geschützte App-Seiten
├── components/            # React Komponenten
│   ├── auth/             # Authentifizierungs-Komponenten
│   ├── layout/           # Layout-Komponenten (Navbar, Footer)
│   ├── provider/         # Context Provider
│   ├── ui/               # Wiederverwendbare UI-Komponenten
│   └── analytics/        # Analytics-Komponenten
├── config/               # Projekt-Konfigurationen
├── theme/                # Theme-Konfiguration
├── types/                # TypeScript Typdefinitionen
├── utils/                # Utility-Funktionen und Hooks
└── styles/               # Globale Styles
```

## Dokumentation

Ausführliche Dokumentation findest du im `docs/` Verzeichnis:

- [Übersicht](./docs/00-ÜBERSICHT.md)
- [Konfiguration](./docs/01-KONFIGURATION.md)
- [Authentifizierung](./docs/02-AUTHENTIFIZIERUNG.md)
- [Komponenten](./docs/03-KOMPONENTEN.md)
- [Utilities](./docs/04-UTILITIES.md)
- [Theme & Styling](./docs/05-THEME-STYLING.md)
- [Routing](./docs/06-ROUTING.md)
- [Analytics & Supabase](./docs/07-ANALYTICS-UND-SUPABASE.md)

## Verfügbare Scripts

- `npm run dev` - Startet den Entwicklungsserver mit Turbo
- `npm run build` - Erstellt eine Production-Build
- `npm run start` - Startet den Production-Server
- `npm run type-check` - Führt TypeScript-Typ-Prüfung durch

## Technologie-Stack

- **Framework**: Next.js 15.0.4 (App Router)
- **UI Library**: Chakra UI 3.2.2
- **Styling**: Emotion (CSS-in-JS)
- **Authentication**: Outseta
- **Language**: TypeScript 5.6.2
- **React**: 19.0.0

## Lizenz

MIT
