export const cookieBannerConfig = {
  root: "body",
  guiOptions: {
    consentModal: {
      layout: "box",
      position: "bottom left",
      equalWeightButtons: false,
      flipButtons: false,
    },
    preferencesModal: {
      layout: "box",
      position: "right",
      equalWeightButtons: true,
      flipButtons: false,
    },
  },
  categories: {
    necessary: {
      enabled: true,
      readOnly: true,
    },
    functionality: {
      enabled: false,
      readOnly: false,
    },
    analytics: {
      enabled: false,
      readOnly: false,
      autoClear: {
        cookies: [
          {
            name: /^_ga/,
          },
        ],
      },
    },
    marketing: {
      enabled: false,
      readOnly: false,
    },
  },
  language: {
    default: "de",
    translations: {
      de: {
        consentModal: {
          description:
            "Wir verwenden Cookies, um deine Erfahrung zu verbessern und den Website-Verkehr zu verstehen. Lies unsere <a href='/legal/cookie-policy'>Cookie-Richtlinie</a> oder <a data-cc='show-preferencesModal'>verwalte deine Einstellungen</a>.",
          acceptAllBtn: "Alle akzeptieren",
          acceptNecessaryBtn: "Alle ablehnen",
        },
        preferencesModal: {
          title: "Cookie-Einstellungen",
          acceptAllBtn: "Alle akzeptieren",
          acceptNecessaryBtn: "Alle ablehnen",
          savePreferencesBtn: "Einstellungen speichern",
          closeIconLabel: "Modal schließen",
          serviceCounterLabel: "Service|Services",
          sections: [
            {
              title: "Cookie-Verwendung",
              description:
                "Wir verwenden verschiedene Arten von Cookies, um dir die bestmögliche Erfahrung auf unserer Website zu bieten. Du kannst deine Präferenzen für jede Kategorie verwalten.",
            },
            {
              title:
                'Notwendige Cookies <span class="pm__badge">Immer aktiviert</span>',
              description:
                "Diese Cookies sind für das ordnungsgemäße Funktionieren der Website erforderlich. Sie können nicht deaktiviert werden, da sie grundlegende Funktionen wie Sicherheit und Zugriff ermöglichen.",
              linkedCategory: "necessary",
            },
            {
              title: "Funktions-Cookies",
              description:
                "Diese Cookies ermöglichen es der Website, erweiterte Funktionalität und Personalisierung bereitzustellen. Sie können von uns oder von Drittanbietern gesetzt werden, deren Dienste wir auf unseren Seiten verwenden.",
              linkedCategory: "functionality",
            },
            {
              title: "Analyse-Cookies",
              description:
                "Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem sie Informationen anonym sammeln und melden. Dies ermöglicht es uns, die Website zu verbessern.",
              linkedCategory: "analytics",
            },
            {
              title: "Marketing-Cookies",
              description:
                "Diese Cookies werden verwendet, um Besuchern auf verschiedenen Websites relevante Anzeigen und Marketingkampagnen zu liefern. Sie werden auch verwendet, um die Anzahl der Besuche und den Verkehrsquellen zu begrenzen.",
              linkedCategory: "marketing",
            },
            {
              title: "Weitere Informationen",
              description:
                'Bei Fragen zu unserer Cookie-Richtlinie und deinen Wahlmöglichkeiten kontaktiere uns bitte <a class="cc__link" href="/contact">hier</a>.',
            },
          ],
        },
      },
    },
  },
};
