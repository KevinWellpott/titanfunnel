"use client";

import {
  Heading,
  Text,
  Box,
  Stack,
  VStack,
  HStack,
  Button,
  Container,
  Badge,
  SimpleGrid,
} from "@chakra-ui/react";
import { Section } from "@/components/layout/section";
import { 
  ArrowRight,
  Target,
  Users,
  CreditCard,
  Play,
  TrendUp,
  ChartLine,
  Gear,
  Database,
  Plus,
  X
} from "@phosphor-icons/react";
import { motion, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";

const MotionBox = motion.create(Box);
const MotionVStack = motion.create(VStack);

// Detailed Modal Content for each module - RICH & INDIVIDUAL
const getModalContent = (module) => {
  const content = {
    leads: {
      title: "Automatische Lead-Generierung",
      subtitle: "Nie wieder kalte Akquise – dein System arbeitet für dich",
      description: "Wir bauen intelligente Funnel, die rund um die Uhr qualifizierte Interessenten anziehen und vorqualifizieren – ohne dass du aktiv werden musst.",
      icon: Target,
      features: [
        {
          title: "Individuelle Lead-Magneten",
          description: "Auf dein Angebot zugeschnittene Free-Kurse, Quizze oder Assessments, die automatisch Interessenten anziehen und vorqualifizieren.",
          result: "Signifikant höhere Lead-Qualität und weniger Zeitaufwand für Vorab-Gespräche"
        },
        {
          title: "Automatisierte Follow-up-Sequenzen",
          description: "Intelligente E-Mail- und Messenger-Kampagnen, die Leads automatisch weiter betreuen und wärmen.",
          result: "Keine Leads, die durchs Raster fallen – konstante Lead-Nurturing ohne dein Zutun"
        }
      ],
      stats: [
        { label: "Typische Lead-Steigerung", value: "40-80%" },
        { label: "Zeitersparnis in der Akquise", value: "bis zu 10h/Woche" },
        { label: "Steigerung der Leadqualität", value: "Deutlich höher" }
      ]
    },
    crm: {
      title: "Intelligentes Kundenmanagement",
      subtitle: "Alle Kunden und Leads an einem Ort – mit voller Historie",
      description: "Ein zentrales System, das jeden Kontakt, jedes Gespräch und jeden Kauf speichert und dir so eine 360°-Sicht auf jeden Kunden gibt.",
      icon: Users,
      features: [
        {
          title: "Vollständige Kundenhistorie",
          description: "Du siehst auf einen Blick alle Interaktionen, gekauften Produkte und den aktuellen Status jedes Kunden.",
          result: "Nie wieder Informationen suchen – alles ist sofort da"
        },
        {
          title: "Automatische Segmentierung & Tagging",
          description: "Das System kategorisiert und taggt Kontakte automatisch basierend auf ihrem Verhalten und gekauften Produkten.",
          result: "Präzise Ansprache für gezieltere Kommunikation und bessere Ergebnisse"
        }
      ],
      stats: [
        { label: "Zeitersparnis in der Verwaltung", value: "bis zu 5h/Woche" },
        { label: "Steigerung der Kundenbetreuungsqualität", value: "Spürbar höher" },
        { label: "Reduzierung von Informationsverlust", value: "Nahezu 100%" }
      ]
    },
    verkauf: {
      title: "Nahtloser Verkaufsprozess",
      subtitle: "Vom Interesse zur Zahlung – komplett automatisiert",
      description: "Ein integrierter Sales-Flow, der Vertragsunterzeichnung, Zahlungsabwicklung und Kunden-Onboarding in einem automatischen Prozess vereint.",
      icon: CreditCard,
      features: [
        {
          title: "Digitale Vertragsunterzeichnung",
          description: "Rechtssichere E-Signature-Lösung, die direkt in den Bestellprozess integriert ist.",
          result: "Unterschriften in Minuten, nicht Tagen – schnellere Deal-Abschlüsse"
        },
        {
          title: "Automatisierte Zahlungsabwicklung",
          description: "Integration mit Stripe, PayPal & Co. – Zahlungseingang wird automatisch erkannt und der nächste Schritt ausgelöst.",
          result: "Kein manuelles Rechnungen schreiben und Zahlungen prüfen – alles automatisch"
        }
      ],
      stats: [
        { label: "Beschleunigung des Sales Cycle", value: "50-70%" },
        { label: "Reduzierung manueller Arbeit", value: "bis zu 8h/Woche" },
        { label: "Fehlerquote bei Zahlungen", value: "Nahezu 0%" }
      ]
    },
    wachstum: {
      title: "Automatisches Umsatzwachstum",
      subtitle: "Systematische Steigerung des Kundenwerts",
      description: "Intelligente Automatismen erkennen Upsell- und Cross-Sell-Potenziale und schlagen dem Kunden zum perfekten Zeitpunkt das passende Zusatzangebot vor.",
      icon: TrendUp,
      features: [
        {
          title: "Kontextsensitive Upsell-Engine",
          description: "Das System erkennt, wann ein Kunde bereit für ein Upgrade oder Zusatzprodukt ist und bietet dieses automatisch an.",
          result: "Mehr Umsatz pro Kunde, ohne zusätzlichen Vertriebsaufwand"
        },
        {
          title: "Kunden-Lebenszyklus-Management",
          description: "Automatisierte Pfade für verschiedene Kundentypen, um langfristige Bindung und Wertsteigerung zu sichern.",
          result: "Höhere Kundenbindung und planbare Revenue-Streams"
        }
      ],
      stats: [
        { label: "Steigerung des Customer Lifetime Value", value: "30-60%" },
        { label: "Upsell-Rate", value: "15-25%" },
        { label: "Reduzierung der Churn-Rate", value: "Bis zu 40%" }
      ]
    },
    tracking: {
      title: "Vollständige Erfolgsmessung",
      subtitle: "Wissen, was wirklich funktioniert",
      description: "DSGVO-konformes Tracking über alle Kanäle hinweg, das dir genau zeigt, welche Maßnahmen zu Umsatz führen und welche nicht.",
      icon: ChartLine,
      features: [
        {
          title: "Multi-Channel-Attribution",
          description: "Verfolge den gesamten Kundenweg über Website, Social Media, E-Mails und mehr – ohne Cookie-Probleme.",
          result: "Klarheit, welche Kanäle wirklich profitabel sind – keine Budgetverschwendung mehr"
        },
        {
          title: "Echtzeit-ROI-Dashboard",
          description: "Live-Einblick in alle wichtigen KPIs: Umsatz, Kosten, Conversion-Raten und mehr.",
          result: "Sofortige Entscheidungsgrundlage für optimale Investitionen"
        }
      ],
      stats: [
        { label: "Genauigkeit der Datenerfassung", value: ">95%" },
        { label: "Zeitersparnis im Reporting", value: "bis zu 6h/Woche" },
        { label: "Reduzierung von Marketing-Kosten", value: "Durch optimierte Budgetverteilung" }
      ]
    },
    automatisierung: {
      title: "Komplette Prozessautomatisierung",
      subtitle: "Schluss mit manueller Kleinarbeit",
      description: "Individuell auf dich zugeschnittene Workflows, die repetitive Aufgaben vollständig automatisieren – von Terminbuchung bis Zahlungserinnerung.",
      icon: Gear,
      features: [
        {
          title: "Intelligente Terminbuchung",
          description: "Integration in deinen Kalender – Kunden buchen selbst passende Slots, ohne Hin und Her per E-Mail.",
          result: "Keine manuelle Terminkoordination mehr – Stunden an Zeit gespart"
        },
        {
          title: "Automatische Erinnerungen & Follow-ups",
          description: "Das System erinnert Kunden an anstehende Termine, offene Zahlungen oder nächste Schritte – vollautomatisch.",
          result: "Nie wieder vergessene Follow-ups – professioneller und zuverlässiger"
        }
      ],
      stats: [
        { label: "Reduzierung manueller Tasks", value: "60-80%" },
        { label: "Zeitersparnis", value: "10-15h/Woche" },
        { label: "Steigerung der Prozesszuverlässigkeit", value: "Nahezu 100%" }
      ]
    },
    lieferung: {
      title: "Premium Delivery Platform",
      subtitle: "Dein Wissen, perfekt verpackt und ausgeliefert",
      description: "Ein vollständig auf deine Marke zugeschnittenes Kundenportal, in dem du Kurse, Dokumente und Communitys bereitstellst – ohne technischen Aufwand.",
      icon: Play,
      features: [
        {
          title: "White-Label Kundenportal",
          description: "Eine komplett auf deine Corporate Identity angepasste Plattform, auf der deine Kunden alle Inhalte und Services finden.",
          result: "Professioneller Auftritt, der Vertrauen schafft und deine Preise rechtfertigt"
        },
        {
          title: "Integrierte Kurs- & Content-Plattform",
          description: "Einfache Verwaltung und Auslieferung von Videos, PDFs, Aufgaben und Community-Inhalten.",
          result: "Alles an einem Ort – keine Zersplitterung auf verschiedene Tools"
        }
      ],
      stats: [
        { label: "Steigerung der Kundenzufriedenheit", value: "Deutlich messbar" },
        { label: "Completion-Rate von Kursen", value: "Bis zu 90%" },
        { label: "Reduzierung von Support-Anfragen", value: "30-50%" }
      ]
    },
    einheit: {
      title: "Unified Business Platform",
      subtitle: "Ein System, das alles kann – genau wie du es brauchst",
      description: "Schluss mit dem Flickenteppich aus verschiedenen Tools: Eine integrierte Plattform, die alle Funktionen vereint und perfekt aufeinander abgestimmt ist.",
      icon: Database,
      features: [
        {
          title: "Konsolidierung aller Business-Tools",
          description: "Ersetzt CRM, Buchungstool, Zahlungsabwicklung, Kursplattform, Community-Software und mehr.",
          result: "Weniger Kosten, weniger Aufwand, keine Sync-Probleme"
        },
        {
          title: "Maßgeschneiderte Integrationen",
          description: "Anbindung an bestehende Systeme (wie Telegram, Discord, E-Mail) und Entwicklung individueller Features nach Bedarf.",
          result: "Passt sich deinem Business an – nicht umgekehrt"
        }
      ],
      stats: [
        { label: "Ersparnis an Tool-Kosten", value: "Individuell, oft €1.000+/Monat" },
        { label: "Reduzierung der Systemkomplexität", value: "Ein System statt 8+" },
        { label: "Steigerung der Datennutzung", value: "Vollständige Integration" }
      ]
    }
  };



  return content[module.id] || content.leads;
};

// Animated Modal Visuals - ENHANCED with more animations
const ModalVisual = ({ type, color }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const visuals = {
    leads: (
      <Box position="relative" w="full" h="100%" minH={{ base: "100px", sm: "140px", md: "180px" }} display="flex" alignItems="center" justifyContent="center" bg="gray.850" borderRadius="xl" overflow="hidden">
        {/* Background grid animation */}
        <Box position="absolute" inset="0" opacity="0.1">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: "absolute",
                left: `${10 + (i % 4) * 25}%`,
                top: `${20 + Math.floor(i / 4) * 25}%`,
                width: "2px",
                height: "2px",
                backgroundColor: `var(--chakra-colors-${color}-400)`,
                borderRadius: "50%"
              }}
              animate={{ 
                scale: [0, 1, 0],
                opacity: [0, 0.6, 0]
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                repeatDelay: 1
              }}
            />
          ))}
        </Box>

        {/* Animated Lead Funnel */}
        <VStack gap="4" position="relative" zIndex="2">
          <motion.div
            initial={{ width: 0, x: -60 }}
            animate={{ 
              width: isAnimating ? "120px" : 0,
              x: isAnimating ? 0 : -60
            }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          >
            <Box h="12px" bg={`${color}.400`} borderRadius="full" position="relative" boxShadow={`0 0 20px var(--chakra-colors-${color}-400/50)`}>
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  rotate: 0
                }}
                transition={{ delay: 1.5, duration: 0.6, type: "spring" }}
                style={{ position: "absolute", right: "-12px", top: "50%", transform: "translateY(-50%)" }}
              >
                <Box w="8" h="8" bg={`${color}.400`} borderRadius="full" display="flex" alignItems="center" justifyContent="center" boxShadow="lg">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                  >
                    <Text fontSize="xs" fontWeight="bold" color="white">1K</Text>
                  </motion.div>
                </Box>
              </motion.div>
            </Box>
          </motion.div>
          
          <motion.div
            initial={{ width: 0, x: -40 }}
            animate={{ 
              width: isAnimating ? "90px" : 0,
              x: isAnimating ? 0 : -40
            }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          >
            <Box h="10px" bg={`${color}.300`} borderRadius="full" position="relative" boxShadow={`0 0 15px var(--chakra-colors-${color}-300/40)`}>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8, duration: 0.5, type: "spring" }}
                style={{ position: "absolute", right: "-10px", top: "50%", transform: "translateY(-50%)" }}
              >
                <Box w="6" h="6" bg={`${color}.300`} borderRadius="full" display="flex" alignItems="center" justifyContent="center" boxShadow="md">
                  <Text fontSize="xs" fontWeight="bold" color="white">250</Text>
                </Box>
              </motion.div>
            </Box>
          </motion.div>
          
          <motion.div
            initial={{ width: 0, x: -20 }}
            animate={{ 
              width: isAnimating ? "60px" : 0,
              x: isAnimating ? 0 : -20
            }}
            transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
          >
            <Box h="8px" bg={`${color}.500`} borderRadius="full" position="relative" boxShadow={`0 0 25px var(--chakra-colors-${color}-500/60)`}>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.2, duration: 0.5, type: "spring" }}
                style={{ position: "absolute", right: "-8px", top: "50%", transform: "translateY(-50%)" }}
              >
                <Box w="5" h="5" bg={`${color}.500`} borderRadius="full" display="flex" alignItems="center" justifyContent="center" boxShadow="lg">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Text fontSize="2xs" fontWeight="bold" color="white">50</Text>
                  </motion.div>
                </Box>
              </motion.div>
            </Box>
          </motion.div>
        </VStack>
        
        {/* Enhanced floating leads */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0], 
              y: [-20, -80, -140],
              scale: [0, 1, 0.8]
            }}
            transition={{ 
              duration: 4,
              delay: 2.5 + i * 0.2,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeOut"
            }}
            style={{
              position: "absolute",
              left: `${15 + i * 6}%`,
              top: "30%"
            }}
          >
            <Box 
              w="3" 
              h="3" 
              bg={`${color}.${300 + (i % 3) * 100}`} 
              borderRadius="full" 
              boxShadow={`0 0 10px var(--chakra-colors-${color}-400/50)`}
            />
          </motion.div>
        ))}
      </Box>
    ),
    
    growth: (
      <Box position="relative" w="full" h="100%" minH={{ base: "100px", sm: "140px", md: "180px" }} display="flex" alignItems="center" justifyContent="center" bg="gray.850" borderRadius="xl" overflow="hidden">
        {/* Animated Growth Chart */}
        <Box position="relative" w="85%" h="70%" zIndex="2">
          <svg width="100%" height="100%" viewBox="0 0 300 120">
            {/* Animated growth line with glow */}
            <motion.path
              d="M 20 100 Q 80 80 120 60 T 200 30 T 280 10"
              stroke={`var(--chakra-colors-${color}-400)`}
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5, delay: 0.8, ease: "easeInOut" }}
            />
            
            {/* Data points with enhanced animations */}
            {[
              { x: 80, y: 80, value: "€5K" },
              { x: 140, y: 50, value: "€12K" },
              { x: 200, y: 30, value: "€25K" },
              { x: 260, y: 15, value: "€50K" }
            ].map((point, i) => (
              <motion.g key={i}>
                <motion.circle
                  cx={point.x}
                  cy={point.y}
                  r="5"
                  fill={`var(--chakra-colors-${color}-500)`}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ 
                    scale: [0, 1.3, 1],
                    rotate: 0
                  }}
                  transition={{ 
                    delay: 1.8 + i * 0.3, 
                    duration: 0.6,
                    type: "spring"
                  }}
                />
                <motion.text
                  x={point.x}
                  y={point.y - 20}
                  textAnchor="middle"
                  fill="white"
                  fontSize="12"
                  fontWeight="600"
                  initial={{ opacity: 0, y: point.y }}
                  animate={{ opacity: 1, y: point.y - 20 }}
                  transition={{ delay: 2.2 + i * 0.3, duration: 0.6 }}
                >
                  {point.value}
                </motion.text>
              </motion.g>
            ))}
          </svg>
        </Box>
      </Box>
    ),

    automation: (
      <Box position="relative" w="full" h="100%" minH={{ base: "100px", sm: "140px", md: "180px" }} display="flex" alignItems="center" justifyContent="center" bg="gray.850" borderRadius="xl" overflow="hidden">
        {/* Enhanced Animated Workflow */}
        <HStack gap={{ base: "2", sm: "4", md: "6", lg: "8" }} align="center" zIndex="2" flexWrap="wrap" justify="center" px={{ base: "2", md: "4" }}>
          {[
            { icon: "👤", label: "Lead kommt rein" },
            { icon: "📧", label: "Auto-Email" },
            { icon: "📅", label: "Termin gebucht" },
            { icon: "💰", label: "Deal closed" }
          ].map((step, i) => (
            <VStack key={i} gap={{ base: "1", md: "3" }} align="center">
              <motion.div
                initial={{ scale: 0, rotate: -360, y: 20 }}
                animate={{ 
                  scale: 1, 
                  rotate: 0,
                  y: 0
                }}
                transition={{ 
                  delay: i * 0.6, 
                  duration: 0.8, 
                  type: "spring",
                  bounce: 0.4
                }}
              >
                <Box
                  w={{ base: "12", sm: "16", md: "20" }}
                  h={{ base: "12", sm: "16", md: "20" }}
                  bg={i === 3 ? `${color}.500` : "gray.700"}
                  borderRadius="xl"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="2xl"
                  border={`3px solid var(--chakra-colors-${color}-400)`}
                  position="relative"
                  boxShadow={`0 0 20px var(--chakra-colors-${color}-400/30)`}
                >
                  <motion.div
                    animate={{ 
                      rotate: i === 3 ? [0, 10, -10, 0] : 0,
                      scale: i === 3 ? [1, 1.1, 1] : 1
                    }}
                    transition={{ 
                      duration: 2,
                      delay: 2 + i * 0.6,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  >
                    {step.icon}
                  </motion.div>
                  
                  {i < 3 && (
                    <motion.div
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      transition={{ delay: i * 0.6 + 0.8, duration: 0.8 }}
                      style={{
                        position: "absolute",
                        right: "-24px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: "20px",
                        height: "3px",
                        background: `linear-gradient(90deg, var(--chakra-colors-${color}-400), var(--chakra-colors-${color}-500))`,
                        transformOrigin: "left",
                        borderRadius: "2px"
                      }}
                    />
                  )}
                </Box>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.6 + 0.5, duration: 0.5 }}
              >
                <Text fontSize={{ base: "2xs", md: "xs" }} color="gray.400" textAlign="center" maxW={{ base: "16", md: "20" }} fontWeight="600">
                  {step.label}
                </Text>
              </motion.div>
            </VStack>
          ))}
        </HStack>
      </Box>
    )
  };

  return visuals[type] || visuals.leads;
};

// Premium Visuals like Linear.com (unchanged)
const PremiumVisual = ({ type, color }) => {
  const visuals = {
    leads: (
      <Box position="relative" w="full" h="full" display="flex" alignItems="center" justifyContent="center">
        <VStack gap="3" align="center">
          <Box w="60px" h="8px" bg={`${color}.400`} borderRadius="full" opacity="0.8" />
          <Box w="45px" h="8px" bg={`${color}.300`} borderRadius="full" opacity="0.6" />
          <Box w="30px" h="8px" bg={`${color}.500`} borderRadius="full" opacity="0.9" />
          <Box w="4px" h="4px" bg={`${color}.400`} borderRadius="full" />
        </VStack>
        <Box position="absolute" top="20%" right="25%" w="3px" h="3px" bg={`${color}.300`} borderRadius="full" />
        <Box position="absolute" bottom="25%" left="20%" w="2px" h="2px" bg={`${color}.400`} borderRadius="full" />
      </Box>
    ),
    crm: (
      <Box position="relative" w="full" h="full" display="flex" alignItems="center" justifyContent="center">
        <VStack gap="2" w="70px" align="start">
          <HStack gap="2" align="center">
            <Box w="8px" h="8px" bg={`${color}.400`} borderRadius="full" />
            <Box w="35px" h="2px" bg={`${color}.300`} borderRadius="full" opacity="0.7" />
          </HStack>
          <HStack gap="2" align="center">
            <Box w="8px" h="8px" bg={`${color}.500`} borderRadius="full" />
            <Box w="25px" h="2px" bg={`${color}.400`} borderRadius="full" opacity="0.8" />
          </HStack>
          <HStack gap="2" align="center">
            <Box w="8px" h="8px" bg={`${color}.300`} borderRadius="full" />
            <Box w="30px" h="2px" bg={`${color}.300`} borderRadius="full" opacity="0.6" />
          </HStack>
        </VStack>
      </Box>
    ),
    payment: (
      <Box position="relative" w="full" h="full" display="flex" alignItems="center" justifyContent="center">
        <HStack gap="3" align="center">
          <Box w="25px" h="16px" bg={`${color}.400`} borderRadius="md" opacity="0.8" />
          <VStack gap="1">
            <Box w="2px" h="2px" bg={`${color}.300`} borderRadius="full" />
            <Box w="2px" h="2px" bg={`${color}.400`} borderRadius="full" />
            <Box w="2px" h="2px" bg={`${color}.300`} borderRadius="full" />
          </VStack>
          <Box w="20px" h="20px" border="2px solid" borderColor={`${color}.400`} borderRadius="full" display="flex" alignItems="center" justifyContent="center">
            <Box w="6px" h="6px" bg={`${color}.400`} borderRadius="full" />
          </Box>
        </HStack>
      </Box>
    ),
    delivery: (
      <Box position="relative" w="full" h="full" display="flex" alignItems="center" justifyContent="center">
        <VStack gap="2" align="center">
          <Box w="40px" h="24px" border="2px solid" borderColor={`${color}.400`} borderRadius="lg" position="relative">
            <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
              <Box w="0" h="0" borderY="3px solid transparent" borderLeft="5px solid" borderColor={`${color}.400`} />
            </Box>
          </Box>
          <HStack gap="1">
            <Box w="12px" h="1px" bg={`${color}.300`} borderRadius="full" />
            <Box w="16px" h="1px" bg={`${color}.400`} borderRadius="full" />
            <Box w="10px" h="1px" bg={`${color}.300`} borderRadius="full" />
          </HStack>
        </VStack>
      </Box>
    ),
    growth: (
      <Box position="relative" w="full" h="full" display="flex" alignItems="center" justifyContent="center">
        <Box position="relative" w="50px" h="30px">
          <svg width="50" height="30" viewBox="0 0 50 30">
            <path
              d="M 2 28 Q 12 18 22 15 T 48 3"
              stroke={`var(--chakra-colors-${color}-400)`}
              strokeWidth="2"
              fill="none"
              opacity="0.8"
            />
            <circle cx="12" cy="20" r="1.5" fill={`var(--chakra-colors-${color}-400)`} opacity="0.6" />
            <circle cx="28" cy="12" r="1.5" fill={`var(--chakra-colors-${color}-400)`} opacity="0.8" />
            <circle cx="42" cy="5" r="1.5" fill={`var(--chakra-colors-${color}-500)`} />
          </svg>
        </Box>
      </Box>
    ),
    analytics: (
      <Box position="relative" w="full" h="full" display="flex" alignItems="center" justifyContent="center">
        <VStack gap="2" align="center">
          <HStack gap="1">
            {[...Array(6)].map((_, i) => (
              <Box 
                key={i} 
                w="3px" 
                h={`${8 + Math.random() * 12}px`} 
                bg={`${color}.${300 + i * 20}`} 
                borderRadius="sm"
                opacity={0.6 + i * 0.1}
              />
            ))}
          </HStack>
          <Box w="20px" h="1px" bg={`${color}.400`} borderRadius="full" opacity="0.5" />
        </VStack>
      </Box>
    ),
    automation: (
      <Box position="relative" w="full" h="full" display="flex" alignItems="center" justifyContent="center">
        <HStack gap="2" align="center">
          <Box w="12px" h="12px" border="2px solid" borderColor={`${color}.400`} borderRadius="full" />
          <Box w="8px" h="1px" bg={`${color}.300`} />
          <Box w="8px" h="8px" border="1px solid" borderColor={`${color}.300`} borderRadius="sm" />
          <Box w="6px" h="1px" bg={`${color}.300`} />
          <Box w="10px" h="10px" border="2px solid" borderColor={`${color}.400`} borderRadius="full" />
        </HStack>
      </Box>
    ),
    platform: (
      <Box position="relative" w="full" h="full" display="flex" alignItems="center" justifyContent="center">
        <VStack gap="1" align="center">
          <Box w="35px" h="20px" border="2px solid" borderColor={`${color}.400`} borderRadius="lg" />
          <HStack gap="1">
            <Box w="6px" h="6px" bg={`${color}.300`} borderRadius="sm" />
            <Box w="6px" h="6px" bg={`${color}.400`} borderRadius="sm" />
            <Box w="6px" h="6px" bg={`${color}.300`} borderRadius="sm" />
            <Box w="6px" h="6px" bg={`${color}.500`} borderRadius="sm" />
          </HStack>
        </VStack>
      </Box>
    ),
  };

  return visuals[type] || visuals.leads;
};

// 8 Business OS Modules - Premium Edition
const coreModules = [
  {
    id: "leads",
    icon: Target,
    title: "Automatische Lead-Generierung",
    description: "Generiert 24/7 qualifizierte Interessenten ohne dein Zutun",
    benefits: [
      "Nie wieder kalte Akquise",
      "Vorqualifizierte Leads",
      "100% Lead-Transparenz"
    ],
    color: "blue",
    visual: "leads"
  },
  {
    id: "crm",
    icon: Users,
    title: "Intelligentes Kundenmanagement",
    description: "Behalte den Überblick über alle Kunden automatisch",
    benefits: [
      "Keine verlorenen Kunden",
      "Automatische Follow-ups",
      "Vollständige Kundenhistorie"
    ],
    color: "green",
    visual: "crm"
  },
  {
    id: "verkauf",
    icon: CreditCard,
    title: "Nahtloser Verkaufsprozess",
    description: "Von Interesse bis Zahlung in einem professionellen Flow",
    benefits: [
      "Kunden kaufen ohne Chaos",
      "Automatische Vertragsabwicklung", 
      "Sofortige Zahlungsabwicklung"
    ],
    color: "purple",
    visual: "payment"
  },
  {
    id: "lieferung",
    icon: Play,
    title: "HighEnd Fullfillment",
    description: "Liefere deine Expertise in einem branded Portal",
    benefits: [
      "Professioneller als Konkurrenz",
      "Kunden arbeiten gern im System",
      "Alles unter deiner Kontrolle"
    ],
    color: "orange",
    visual: "delivery"
  },
  {
    id: "wachstum",
    icon: TrendUp,
    title: "Automatisches Umsatzwachstum",
    description: "Das System verkauft zusätzliche Services automatisch",
    benefits: [
      "Mehr Umsatz ohne mehr Arbeit",
      "Automatische Zusatzleistungen",
      "Du siehst ROI von jeder Aktion"
    ],
    color: "red",
    visual: "growth"
  },
  {
    id: "tracking",
    icon: ChartLine,
    title: "Vollständige Erfolgsmessung",
    description: "Weißt du genau, wo dein Geld herkommt und hingeht",
    benefits: [
      "Kein Geld in unwirksame Werbung",
      "Du siehst wertvollste Kunden",
      "Datenschutz-konform ohne Cookies"
    ],
    color: "cyan",
    visual: "analytics"
  },
  {
    id: "automatisierung",
    icon: Gear,
    title: "Prozessautomatisierung",
    description: "Eliminiert Routinearbeit und spart dir Stunden täglich",
    benefits: [
      "Keine Erinnerungen mehr senden",
      "Terminbuchung läuft automatisch",
      "Du arbeitest nur am Business"
    ],
    color: "purple",
    visual: "automation"
  },
  {
    id: "einheit",
    icon: Database,
    title: "Ein System für alles",
    description: "Schluss mit 8 verschiedenen Tools die nicht sprechen",
    benefits: [
      "Keine teuren Tool-Abos nötig",
      "Alles funktioniert zusammen",
      "Eine Anmeldung für alles"
    ],
    color: "teal",
    visual: "platform"
  },
];

export function BusinessOSModules() {
  const containerRef = useRef(null);
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (moduleId) => {
    setActiveModal(moduleId);
    // Lock body scroll when modal opens
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    // Restore body scroll when modal closes
    document.body.style.overflow = 'unset';
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.keyCode === 27 && activeModal) {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  }, [activeModal]);

  return (
    <>
      <Box as="section" bg="gray.900" color="white" py={{ base: "12", md: "16" }} w="full" minW="0" maxW="100%" overflowX="hidden">
        {/* Header – bleibt im Container, links/zentriert wie bisher */}
        <Container maxW="8xl" w="full" minW="0" px={{ base: "4", md: "6" }}>
          <VStack gap={{ base: "12", md: "18", lg: "24" }} w="full" minW="0">
            <MotionVStack
              gap={{ base: "5", md: "8" }}
              textAlign="center"
              maxW="4xl"
              px={{ base: "2", md: "0" }}
              w="full"
              minW="0"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
    

              <Heading
                as="h2"
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                fontWeight="600"
                lineHeight="1.2"
                letterSpacing="-0.01em"
                color="white"
              >
                8 Module, die dein Business transformieren
              </Heading>
              
              <Text color="gray.400" fontSize="lg" maxW="3xl" lineHeight="relaxed">
                Jedes Modul löst ein konkretes Problem und spart dir Zeit und Geld.
              </Text>
            </MotionVStack>
          </VStack>
        </Container>

        {/* Premium Cards – bis rechter Bildschirmrand, links bündig mit Container */}
        <Box
          w="100vw"
          maxW="100%"
          position="relative"
          left="50%"
          right="50%"
          marginLeft="-50vw"
          marginRight="-50vw"
          pl={{ base: "4", md: "6" }}
          pr="0"
          sx={{
            "@media (min-width: 80em)": {
              pl: "calc((100vw - 80rem) / 2 + 1.5rem)",
            },
          }}
        >
          <Box
            ref={containerRef}
            overflowX="auto"
            overflowY="hidden"
            w="full"
            css={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              "&::-webkit-scrollbar": { display: "none" },
              scrollBehavior: "smooth",
            }}
          >
            <HStack gap="6" pb="6" py="6" pr="4" minW="max-content">
                  {coreModules.map((module, index) => (
                    <MotionBox
                      key={module.id}
                      w="320px"
                      h="420px"
                      flexShrink="0"
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Box
                        bg="gray.800"
                        border="1px solid"
                        borderColor="gray.700"
                        borderRadius="xl"
                        overflow="hidden"
                        h="full"
                        display="flex"
                        flexDirection="column"
                        _hover={{
                          borderColor: `${module.color}.500`,
                          boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.4)`,
                          transform: "translateY(-8px)"
                        }}
                        transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                        cursor="default"
                        position="relative"
                      >
                        {/* Premium Visual Area */}
                        <Box
                          h="140px"
                          bg="gray.850"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          flexShrink="0"
                          position="relative"
                          borderBottom="1px solid"
                          borderColor="gray.700"
                        >
                          <PremiumVisual type={module.visual} color={module.color} />
                        </Box>
                        
                        {/* Content */}
                        <Box p={{ base: "4", md: "6" }} flex="1" display="flex" flexDirection="column" minW="0">
                          <VStack gap="4" align="start" h="full">
                            {/* Header */}
                            <VStack align="start" gap="3" flex="0">
                              <HStack gap="2" align="center">
                                <module.icon size={16} color={`var(--chakra-colors-${module.color}-400)`} />
                                <Text fontSize="xs" color="gray.500" fontWeight="600" textTransform="uppercase">
                                  Modul {index + 1}
                                </Text>
                              </HStack>
                              <Heading as="h3" fontSize={{ base: "sm", md: "md" }} fontWeight="600" color="white" lineHeight="tight">
                                {module.title}
                              </Heading>
                              <Text color="gray.400" fontSize={{ base: "xs", md: "sm" }} lineHeight="1.5">
                                {module.description}
                              </Text>
                            </VStack>

                            {/* Benefits */}
                            <VStack gap="2" align="start" w="full" flex="1">
                              {module.benefits.map((benefit, i) => (
                                <HStack key={i} gap="3" align="start">
                                  <Box
                                    w="3px"
                                    h="3px"
                                    bg={`${module.color}.400`}
                                    borderRadius="full"
                                    mt="1.5"
                                    flexShrink="0"
                                  />
                                  <Text fontSize="xs" color="gray.300" lineHeight="1.4">
                                    {benefit}
                                  </Text>
                                </HStack>
                              ))}
                            </VStack>

                            {/* Plus Button */}
                            <HStack justify="space-between" align="center" w="full" mt="auto">
                              <Text fontSize="xs" color={`${module.color}.400`} fontWeight="600">
                                Detaillierte Analyse →
                              </Text>
                              <motion.div
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                transition={{ duration: 0.2 }}
                                onClick={() => openModal(module.id)}
                              >
                                <Box
                                  w="9"
                                  h="9"
                                  display="flex"
                                  alignItems="center"
                                  justifyContent="center"
                                  bg="gray.700"
                                  borderRadius="full"
                                  border="1px solid"
                                  borderColor="gray.600"
                                  cursor="pointer"
                                  _hover={{ 
                                    bg: `${module.color}.500`,
                                    borderColor: `${module.color}.400`
                                  }}
                                  transition="all 0.2s"
                                >
                                  <Plus size="16" color="white" />
                                </Box>
                              </motion.div>
                            </HStack>
                          </VStack>
                        </Box>
                      </Box>
                    </MotionBox>
                  ))}
                </HStack>
          </Box>
        </Box>

        {/* Premium CTA – wieder im Container */}
        <Container maxW="8xl" w="full" minW="0" px={{ base: "4", md: "6" }}>
          <VStack gap={{ base: "12", md: "18", lg: "24" }} w="full" minW="0">
            <MotionBox
              w="full"
              maxW="4xl"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Box
                bg="gray.800"
                border="1px solid"
                borderColor="gray.700"
                borderRadius="xl"
                p={{ base: "5", md: "8" }}
                textAlign="center"
                position="relative"
                overflow="hidden"
                minW="0"
                _before={{
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "1px",
                  bg: "linear-gradient(90deg, transparent, rgba(1, 173, 213, 0.5), transparent)"
                }}
              >
                  <VStack gap={{ base: "4", md: "6" }}>
                  <VStack gap={{ base: "2", md: "3" }} px={{ base: "2", md: "0" }}>
                    <Heading as="h4" fontSize={{ base: "md", md: "lg" }} color="white" fontWeight="600">
                      Brauchst du etwas Individuelles?
                    </Heading>
                    <Text color="gray.400" fontSize={{ base: "sm", md: "md" }} maxW="2xl" lineHeight="relaxed">
                      Diese 8 Module lösen 95% aller Geschäftsprobleme. Falls nicht – entwickeln wir deine maßgeschneiderte Lösung.
                    </Text>
                  </VStack>

                  <Button
                    size={{ base: "md", md: "lg" }}
                    gap="2"
                    bg="#01ADD5"
                    color="white"
                    px={{ base: "5", md: "8" }}
                    py={{ base: "3", md: "4" }}
                    fontSize={{ base: "xs", md: "sm" }}
                    fontWeight="600"
                    borderRadius="lg"
                    w={{ base: "full", sm: "auto" }}
                    whiteSpace="normal"
                    _hover={{
                      boxShadow: "0 4px 20px rgba(1, 173, 213, 0.45)",
                      transform: "translateY(-1px)",
                    }}
                    transition="all 0.2s ease"
                  >
                    Individuelle Lösung besprechen
                    <ArrowRight size={16} />
                  </Button>
                </VStack>
              </Box>
            </MotionBox>
          </VStack>
        </Container>
      </Box>

      {/* Premium Modals – immer mittig im Viewport (Portal in document.body) */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {activeModal && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  position: "fixed",
                  inset: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                  zIndex: 1000,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "clamp(12px, 4vw, 20px)",
                  boxSizing: "border-box",
                }}
                onClick={closeModal}
              >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              style={{ width: "100%", height: "100%", maxWidth: "600px", maxHeight: "100%", minHeight: 0, display: "flex", flexDirection: "column" }}
            >
              <Box
                as="div"
                bg="gray.800"
                border="1px solid"
                borderColor="gray.700"
                borderRadius={{ base: "12px", md: "16px" }}
                w="full"
                h={{ base: "92vh", sm: "90vh", md: "85vh" }}
                maxH={{ base: "none", md: "700px" }}
                position="relative"
                overflow="hidden"
                display="flex"
                flexDirection="column"
                minW="0"
              >
              {/* Close Button - Always visible */}
              <Box
                position="absolute"
                top={{ base: "3", md: "4" }}
                right={{ base: "3", md: "4" }}
                zIndex="20"
                cursor="pointer"
                onClick={closeModal}
                w={{ base: "9", md: "10" }}
                h={{ base: "9", md: "10" }}
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg="blackAlpha.700"
                borderRadius="full"
                backdropFilter="blur(10px)"
                _hover={{ bg: "blackAlpha.800" }}
                transition="background 0.2s"
              >
                <X size={16} color="white" />
              </Box>

              {/* Fixed Visual Header */}
              <Box
                h={{ base: "100px", sm: "140px", md: "180px" }}
                minH={{ base: "100px", sm: "140px", md: "180px" }}
                flexShrink={0}
                position="relative"
                overflow="hidden"
                borderTopRadius={{ base: "12px", md: "16px" }}
              >
                <ModalVisual
                  type={activeModal}
                  color={coreModules.find(m => m.id === activeModal)?.color || "blue"}
                />
              </Box>

              {/* Scrollable Content */}
              <Box
                flex="1"
                minH="0"
                overflowY="auto"
                overflowX="hidden"
                color="white"
                css={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "rgba(255,255,255,0.2) transparent",
                  "&::-webkit-scrollbar": { width: "6px" },
                  "&::-webkit-scrollbar-track": { background: "transparent" },
                  "&::-webkit-scrollbar-thumb": { background: "rgba(255,255,255,0.2)", borderRadius: "3px" },
                  "&::-webkit-scrollbar-thumb:hover": { background: "rgba(255,255,255,0.3)" },
                }}
              >
                <VStack gap={{ base: "4", md: "6" }} align="start" p={{ base: "4", md: "6", lg: "8" }} pb={{ base: "6", md: "10", lg: "12" }} w="full" minW="0">
                  {/* Header with Individual Icon */}
                  <VStack gap={{ base: "2", md: "3" }} align="start" w="full" minW="0">
                    <HStack gap={{ base: "2", md: "3" }} align="center" flexWrap="wrap">
                      {(() => {
                        const currentModule = coreModules.find(m => m.id === activeModal);
                        const modalContent = getModalContent(currentModule || {});
                        const ModuleIcon = modalContent.icon;
                        return <ModuleIcon size={20} color={`var(--chakra-colors-${currentModule?.color}-400)`} />;
                      })()}
                      <Badge
                        bg={`${coreModules.find(m => m.id === activeModal)?.color}.500/20`}
                        color={`${coreModules.find(m => m.id === activeModal)?.color}.300`}
                        px={{ base: "2", md: "3" }}
                        py="1"
                        borderRadius="full"
                        fontSize={{ base: "2xs", md: "xs" }}
                        fontWeight="600"
                      >
                        Premium Feature
                      </Badge>
                    </HStack>
                    <Heading as="h3" fontSize={{ base: "lg", sm: "xl", md: "2xl" }} fontWeight="700" lineHeight="tight" wordBreak="break-word">
                      {getModalContent(coreModules.find(m => m.id === activeModal) || {}).title}
                    </Heading>
                    <Text color="gray.400" fontSize={{ base: "sm", md: "md" }} lineHeight="1.6" wordBreak="break-word">
                      {getModalContent(coreModules.find(m => m.id === activeModal) || {}).description}
                    </Text>
                  </VStack>

                  {/* Individual Stats Grid - Stack on mobile */}
                  <SimpleGrid
                    columns={{ base: 1, sm: 3 }}
                    gap={{ base: "3", md: "4" }}
                    w="full"
                    minW="0"
                    bg="gray.800"
                    p={{ base: "4", md: "5" }}
                    borderRadius="xl"
                    border="1px solid"
                    borderColor="gray.700"
                  >
                    {getModalContent(coreModules.find(m => m.id === activeModal) || {}).stats?.map((stat, i) => (
                      <VStack key={i} gap={{ base: "1", md: "2" }} textAlign="center" minW="0">
                        <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="800" color={`${coreModules.find(m => m.id === activeModal)?.color}.400`} wordBreak="break-word">
                          {stat.value}
                        </Text>
                        <Text fontSize={{ base: "2xs", md: "xs" }} color="gray.400" textAlign="center" lineHeight="1.3" wordBreak="break-word">
                          {stat.label}
                        </Text>
                      </VStack>
                    ))}
                  </SimpleGrid>

                  {/* Key Features */}
                  <VStack gap={{ base: "3", md: "4" }} align="start" w="full" minW="0">
                    <HStack gap="2" align="center">
                      <Box w="3" h="3" bg={`${coreModules.find(m => m.id === activeModal)?.color}.400`} borderRadius="sm" flexShrink={0} />
                      <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500" fontWeight="700" textTransform="uppercase" letterSpacing="wide">
                        Key Features
                      </Text>
                    </HStack>
                    {getModalContent(coreModules.find(m => m.id === activeModal) || {}).features?.slice(0, 2).map((feature, i) => (
                      <Box key={i} w="full" p={{ base: "3", md: "4" }} bg="gray.800/50" borderRadius="lg" border="1px solid" borderColor="gray.700" minW="0">
                        <VStack align="start" gap={{ base: "2", md: "3" }} w="full" minW="0">
                          <HStack gap={{ base: "2", md: "3" }} align="start" w="full" minW="0">
                            <Box
                              w="2"
                              h="2"
                              bg={`${coreModules.find(m => m.id === activeModal)?.color}.400`}
                              borderRadius="full"
                              mt="2"
                              flexShrink={0}
                            />
                            <VStack align="start" gap="2" flex="1" minW="0">
                              <Text fontSize={{ base: "xs", md: "sm" }} fontWeight="600" color="white" wordBreak="break-word">
                                {feature.title}
                              </Text>
                              <Text fontSize={{ base: "2xs", md: "xs" }} color="gray.400" lineHeight="1.5" wordBreak="break-word">
                                {feature.description}
                              </Text>
                            </VStack>
                          </HStack>
                          <Box
                            bg={`${coreModules.find(m => m.id === activeModal)?.color}.500/10`}
                            px={{ base: "3", md: "4" }}
                            py="2"
                            borderRadius="md"
                            alignSelf="flex-start"
                            w="full"
                            maxW="full"
                          >
                            <Text fontSize={{ base: "2xs", md: "xs" }} color={`${coreModules.find(m => m.id === activeModal)?.color}.300`} fontWeight="600" wordBreak="break-word">
                              → {feature.result}
                            </Text>
                          </Box>
                        </VStack>
                      </Box>
                    ))}
                  </VStack>

                  {/* Success Stories */}
                  <VStack gap={{ base: "3", md: "4" }} align="start" w="full" minW="0">
                    <HStack gap="2" align="center">
                      <Box w="3" h="3" bg={`${coreModules.find(m => m.id === activeModal)?.color}.400`} borderRadius="sm" flexShrink={0} />
                      <Text fontSize={{ base: "xs", md: "sm" }} color="gray.500" fontWeight="700" textTransform="uppercase" letterSpacing="wide">
                        Success Stories
                      </Text>
                    </HStack>
                    <Box w="full" p={{ base: "3", md: "4" }} bg="gray.800/30" borderRadius="lg" border="1px solid" borderColor="gray.700" minW="0">
                      <Text fontSize={{ base: "xs", md: "sm" }} color="gray.300" lineHeight="1.6" wordBreak="break-word">
                        "Seit wir dieses Modul implementiert haben, hat sich unser Business komplett transformiert.
                        Die Automatisierung spart uns täglich 5+ Stunden und der ROI ist messbar gestiegen."
                      </Text>
                      <Text fontSize={{ base: "2xs", md: "xs" }} color="gray.500" mt="2" fontWeight="600">
                        - TitanDevelopment Kunde
                      </Text>
                    </Box>
                  </VStack>

                  {/* CTA */}
                  <Box w="full" pt={{ base: "3", md: "4" }} borderTop="1px solid" borderColor="gray.700" minW="0">
                    <Button
                      w="full"
                      size={{ base: "md", md: "lg" }}
                      gap="2"
                      bg="#01ADD5"
                      color="white"
                      px={{ base: "5", md: "8" }}
                      py={{ base: "3", md: "4" }}
                      fontSize={{ base: "xs", md: "sm" }}
                      fontWeight="600"
                      borderRadius="lg"
                      whiteSpace="normal"
                      _hover={{
                        boxShadow: "0 4px 20px rgba(1, 173, 213, 0.45)",
                        transform: "translateY(-1px)",
                      }}
                      transition="all 0.2s ease"
                    >
                      Jetzt implementieren lassen
                    </Button>
                  </Box>
                </VStack>
              </Box>
              </Box>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
          document.body
        )}
    </>
  );
}