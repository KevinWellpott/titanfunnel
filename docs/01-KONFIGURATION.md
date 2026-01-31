# Konfiguration

Alle Konfigurationsdateien befinden sich im `config/` Verzeichnis und werden über `config/index.ts` zentral exportiert.

## Zentrale Konfiguration

```typescript
import { projectConfig } from "@/config";
```

Die `projectConfig` enthält alle Unterkonfigurationen:

```typescript
projectConfig = {
  general: generalConfig,
  theme: themeConfig,
  cookieBannerOptions: cookieBannerConfig,
  seo: seoConfig,
  links: socialConfig,
  outsetaOptions: outsetaConfig,
  auth: authConfig,
  outsetaExtraOptions: { showChatOn: "**" }
}
```

## Allgemeine Konfiguration (`general-config.ts`)

```typescript
export const generalConfig = {
  name: "Project Starter",
  title: "Build Web Apps Faster",
  description: "A powerful starter template for building web applications",
  siteUrl: "https://project-rocket.danielwirtz.com/",
  support: {
    email: "support@project-rocket.com",
  },
};
```

**Verwendung:**
- Projektname und Beschreibung
- Basis-URL für SEO und Links
- Support-Kontaktinformationen

## Theme-Konfiguration (`theme-config.ts`)

```typescript
export const themeConfig = {
  colorMode: "light",              // "light" | "dark" | "auto"
  neutralColorPalette: "gray",     // Neutral-Farbpalette
  primaryColorPalette: "red",      // Primär-Farbpalette
  secondaryColorPalette: "gray",   // Sekundär-Farbpalette
  headingFont: "Inter",            // Schriftart für Überschriften
  bodyFont: "Inter",               // Schriftart für Body-Text
  radius: "md",                    // Border-Radius (none, xs, sm, md, lg, xl, 2xl, 3xl, full)
};
```

**Verfügbare Farbpaletten:**
- Neutral: `gray`, `slate`, `zinc`, `stone`, `neutral`
- Primary/Secondary: `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`

## SEO-Konfiguration (`seo-config.ts`)

```typescript
export const seoConfig = {
  titleTemplate: `%s | ${generalConfig.name}`,
  defaultTitle: `${generalConfig.name} - ${generalConfig.title}`,
  defaultDescription: generalConfig.description,
  ogImage: "/og-image.jpg",
  robotsDisallowPaths: ["/app/*", "/api/*"],
  twitterHandle: "@yourtwitterhandle",
  locale: "en_US",
};
```

**Verwendung:**
- Meta-Tags für SEO
- Open Graph Tags
- Twitter Cards
- Robots.txt Konfiguration

## Authentifizierungs-Konfiguration (`auth-config.ts`)

```typescript
export const authConfig = {
  plans: {
    free: {
      uid: "7maOrK9E",
      label: "Free",
    },
    basic: {
      uid: "L9nqaeQZ",
      label: "Basic",
    },
    pro: {
      uid: "LmJZpYmP",
      label: "Pro",
    },
  },
};
```

**Verwendung:**
- Plan-UIDs für Outseta-Integration
- Plan-Labels für UI-Anzeige
- Zugriffskontrolle basierend auf Plänen

**Wichtig:** Die UIDs müssen mit den Outseta-Plänen übereinstimmen.

## Outseta-Konfiguration (`outseta-config.ts`)

```typescript
export const outsetaConfig = {
  domain: "project-rocket.outseta.com",
  load: "auth,profile,support,chat,emailList,leadCapture,nocode",
  monitorDom: true,
  tokenStorage: "cookie",
  translationLang: "en",
  auth: {
    postRegistrationUrl: "...",           // Nach Registrierung
    authenticationCallbackUrl: "...",     // Nach Login
    rememberLastEmail: true,
    publicKey: `-----BEGIN CERTIFICATE-----...`,  // JWT Public Key
  },
};
```

**Konfigurationsoptionen:**
- `domain`: Outseta-Domain
- `load`: Zu ladende Outseta-Module
- `monitorDom`: DOM-Überwachung für Widgets
- `tokenStorage`: "cookie" oder "localStorage"
- `auth.publicKey`: Öffentlicher Schlüssel für JWT-Verifikation

**Umgebungsabhängige URLs:**
Die URLs werden automatisch basierend auf `NODE_ENV` gesetzt:
- Production: `https://project-rocket.danielwirtz.com/...`
- Development: `http://localhost:3000/...`

## Cookie-Banner-Konfiguration (`cookie-banner-config.ts`)

Konfiguration für `vanilla-cookieconsent`:

```typescript
export const cookieBannerConfig = {
  root: "body",
  guiOptions: {
    consentModal: { ... },
    preferencesModal: { ... },
  },
  categories: {
    necessary: { enabled: true, readOnly: true },
    functionality: { enabled: false, readOnly: false },
    analytics: { enabled: false, readOnly: false },
    marketing: { enabled: false, readOnly: false },
  },
  language: {
    default: "en",
    translations: { en: { ... } },
  },
};
```

**Cookie-Kategorien:**
- `necessary`: Immer aktiviert (readOnly)
- `functionality`: Funktionalitäts-Cookies
- `analytics`: Analytics-Cookies (z.B. Google Analytics)
- `marketing`: Marketing-Cookies

## Social-Links-Konfiguration (`social-config.ts`)

```typescript
export const socialConfig = {
  twitter: "https://x.com/wirtzdan",
  github: "https://github.com/wirtzdan/project-rocket",
  linkedin: "https://www.linkedin.com/in/wirtzdan/",
};
```

**Verwendung:**
- Footer-Social-Links
- Open Graph Meta-Tags

## Vimeo-Videos (Einbettung)

Damit eingebettete Vimeo-Videos im **Deployment** abspielen (nicht nur lokal), muss die **Produktions-Domain** in Vimeo freigegeben sein:

1. Vimeo → Video öffnen → **Share** → **Embed**
2. Unter **„Where can this be embedded?“** entweder **„Any website“** wählen oder unter **„Specific domains“** die Domain(s) eintragen (z. B. `deine-app.vercel.app`, `www.deine-domain.de`).
3. Ohne Eintrag zeigt Vimeo im Deploy „Melde dich bei Vimeo an“.

Der Player sendet die Einbettungs-Origin per `referrerPolicy="strict-origin-when-cross-origin"`, damit Vimeo die Domain prüfen kann.

## Best Practices

1. **Zentrale Konfiguration**: Alle Konfigurationen über `projectConfig` importieren
2. **Umgebungsvariablen**: Sensible Daten über `.env` Dateien verwalten
3. **TypeScript**: Konfigurationen sind typisiert für bessere Entwicklererfahrung
4. **Konsistenz**: Ähnliche Werte (z.B. URLs) zentral definieren

