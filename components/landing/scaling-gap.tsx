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
  Link,
} from "@chakra-ui/react";
import { Section } from "@/components/layout/section";
import { glassCardStyles } from "./glass-card-styles";
import { 
  ArrowRight,
  Funnel,
  Users,
  Handshake,
  Package,
  TrendUp,
  ChartLine,
  Robot,
  PuzzlePiece,
  Gear,
  Plus,
  X
} from "@phosphor-icons/react";
import { motion, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";

const MotionBox = motion.create(Box);
const MotionVStack = motion.create(VStack);

const CALENDLY_URL = "https://calendly.com/vertrieb-titandevelopment/30min";

// Detailed Modal Content for each module - RICH & INDIVIDUAL
const getModalContent = (module) => {
  const content = {
    leads: {
      title: "Planbar neue Kundenanfragen",
      subtitle: "Jeden Tag qualifizierte Anfragen – ganz automatisch",
      description: "Wir bauen Systeme, die dir rund um die Uhr neue Interessenten bringen und diese direkt vorqualifizieren – ohne Kaltakquise oder manuelle Arbeit.",
      icon: Funnel,
      features: [
        {
          title: "Anfragen statt kalter Kontakte",
          description: "Individuelle Funnels, die Interessenten anziehen und direkt filtern.",
          result: "Nur noch Gespräche mit passenden Leads"
        },
        {
          title: "Automatische Nachverfolgung",
          description: "Leads werden automatisch erinnert und weitergeführt.",
          result: "Mehr Abschlüsse ohne Hinterherlaufen"
        }
      ],
      stats: [
        { label: "Mehr Anfragen", value: "40-80%" },
        { label: "Weniger Akquisezeit", value: "bis zu 10h/Woche" },
        { label: "Höhere Abschlusschancen", value: "Deutlich besser" }
      ]
    },
  
    crm: {
      title: "Kein Kundenchaos mehr",
      subtitle: "Alle Leads & Kunden übersichtlich an einem Ort",
      description: "Ein zentrales System, das alle Kontakte, Gespräche und Umsätze automatisch organisiert.",
      icon: Users,
      features: [
        {
          title: "Alles auf einen Blick",
          description: "Jeder Kunde mit kompletter Historie im System.",
          result: "Keine Infos gehen mehr verloren"
        },
        {
          title: "Automatische Struktur",
          description: "Kontakte sortieren sich selbst nach Status & Verhalten.",
          result: "Klarheit statt Chaos"
        }
      ],
      stats: [
        { label: "Weniger Verwaltungsaufwand", value: "bis zu 5h/Woche" },
        { label: "Bessere Kundenbetreuung", value: "Spürbar höher" },
        { label: "Verlorene Leads", value: "Nahezu 0%" }
      ]
    },
  
    verkauf: {
      title: "Automatisch mehr Abschlüsse",
      subtitle: "Von Anfrage bis Zahlung ohne manuelle Schritte",
      description: "Ein Verkaufsprozess, der Kunden automatisch durch Buchung, Vertrag und Zahlung führt.",
      icon: Handshake,
      features: [
        {
          title: "Digitale Abschlüsse",
          description: "Kunden unterschreiben direkt im Prozess.",
          result: "Schnellere Deals"
        },
        {
          title: "Automatische Zahlungen",
          description: "Zahlungen werden direkt abgewickelt.",
          result: "Kein Rechnungschaos mehr"
        }
      ],
      stats: [
        { label: "Schnellerer Abschluss", value: "50-70%" },
        { label: "Weniger manuelle Arbeit", value: "bis zu 8h/Woche" },
        { label: "Zahlungsfehler", value: "Nahezu 0%" }
      ]
    },
  
    wachstum: {
      title: "Mehr Umsatz pro Kunde",
      subtitle: "Zusatzverkäufe laufen automatisch",
      description: "Das System erkennt Chancen für Upgrades und Zusatzangebote und verkauft sie automatisch.",
      icon: TrendUp,
      features: [
        {
          title: "Automatische Zusatzangebote",
          description: "Passende Upsells zur richtigen Zeit.",
          result: "Mehr Umsatz ohne Mehraufwand"
        },
        {
          title: "Langfristige Kundenbindung",
          description: "Kunden bleiben länger und kaufen öfter.",
          result: "Planbares Wachstum"
        }
      ],
      stats: [
        { label: "Mehr Umsatz pro Kunde", value: "30-60%" },
        { label: "Upsell-Quote", value: "15-25%" },
        { label: "Weniger Absprünge", value: "Bis zu 40%" }
      ]
    },
  
    tracking: {
      title: "Volle Zahlenkontrolle",
      subtitle: "Sieh genau, was Geld bringt",
      description: "Du erkennst sofort, welche Kanäle und Prozesse profitabel sind.",
      icon: ChartLine,
      features: [
        {
          title: "Klare Umsatzzuordnung",
          description: "Jeder Kunde wird der richtigen Quelle zugeordnet.",
          result: "Kein Budget verschwenden"
        },
        {
          title: "Live-Übersicht",
          description: "Alle wichtigen Zahlen in einem Dashboard.",
          result: "Schnell bessere Entscheidungen"
        }
      ],
      stats: [
        { label: "Datengenauigkeit", value: ">95%" },
        { label: "Weniger Reportingzeit", value: "bis zu 6h/Woche" },
        { label: "Bessere Budgetnutzung", value: "Deutlich optimiert" }
      ]
    },
  
    automatisierung: {
      title: "Weniger Arbeit täglich",
      subtitle: "Routine läuft komplett automatisch",
      description: "Wiederkehrende Aufgaben erledigen sich selbst – von Terminen bis Erinnerungen.",
      icon: Robot,
      features: [
        {
          title: "Automatische Terminbuchung",
          description: "Kunden buchen selbstständig Termine.",
          result: "Keine Koordination mehr nötig"
        },
        {
          title: "Selbstlaufende Follow-ups",
          description: "Erinnerungen und nächste Schritte laufen automatisch.",
          result: "Mehr Zuverlässigkeit"
        }
      ],
      stats: [
        { label: "Weniger manuelle Arbeit", value: "60-80%" },
        { label: "Zeitersparnis", value: "10-15h/Woche" },
        { label: "Fehlerquote", value: "Nahezu 0%" }
      ]
    },
  
    lieferung: {
      title: "Professionelle Abwicklung",
      subtitle: "Dein Service in einem eigenen System",
      description: "Ein gebrandetes Kundenportal für Inhalte, Prozesse und Kommunikation.",
      icon: Package,
      features: [
        {
          title: "Eigenes Kundenportal",
          description: "Alles unter deinem Branding.",
          result: "Hochwertiger Eindruck"
        },
        {
          title: "Alles an einem Ort",
          description: "Kurse, Inhalte & Kommunikation zentral.",
          result: "Kein Tool-Chaos mehr"
        }
      ],
      stats: [
        { label: "Höhere Kundenzufriedenheit", value: "Deutlich" },
        { label: "Bessere Nutzung der Inhalte", value: "Bis zu 90%" },
        { label: "Weniger Supportaufwand", value: "30-50%" }
      ]
    },
  
    einheit: {
      title: "Alles in einem System",
      subtitle: "Statt 8 Tools nur noch eine Plattform",
      description: "Ein zentrales System ersetzt alle einzelnen Programme.",
      icon: PuzzlePiece,
      features: [
        {
          title: "Weniger Tools",
          description: "Alles läuft an einem Ort zusammen.",
          result: "Weniger Kosten & Stress"
        },
        {
          title: "Individuell angepasst",
          description: "Das System passt sich deinem Business an.",
          result: "Maximale Effizienz"
        }
      ],
      stats: [
        { label: "Tool-Kosten gespart", value: "Oft €1.000+/Monat" },
        { label: "Komplexität", value: "Ein System statt viele" },
        { label: "Datenübersicht", value: "100% integriert" }
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
    icon: Funnel,
    title: "Planbar neue Kundenanfragen",
    description: "Bringt dir automatisch qualifizierte Anfragen – jeden Tag, ohne Kaltakquise",
    benefits: [
      "Kein Outreach mehr nötig",
      "Nur relevante Interessenten",
      "Volle Übersicht über alle Anfragen"
    ],
    color: "blue",
    visual: "leads"
  },
  {
    id: "crm",
    icon: Users,
    title: "Kein Kundenchaos mehr",
    description: "Alle Kontakte und Prozesse laufen strukturiert in einem System",
    benefits: [
      "Kein Lead geht verloren",
      "Automatische Nachverfolgung",
      "Jeder Kunde jederzeit im Blick"
    ],
    color: "green",
    visual: "crm"
  },
  {
    id: "verkauf",
    icon: Handshake,
    title: "Automatisch mehr Abschlüsse",
    description: "Leads werden automatisch durch einen professionellen Kaufprozess geführt",
    benefits: [
      "Kein manuelles Hinterherlaufen",
      "Verträge laufen automatisch",
      "Zahlungen kommen sofort rein"
    ],
    color: "purple",
    visual: "payment"
  },
  {
    id: "lieferung",
    icon: Package,
    title: "Professionelle Abwicklung",
    description: "Deine Kunden arbeiten in einem eigenen, gebrandeten System mit dir",
    benefits: [
      "Wirkt hochwertig & vertrauenswürdig",
      "Kunden sind strukturierter",
      "Du hast alles zentral"
    ],
    color: "orange",
    visual: "delivery"
  },
  {
    id: "wachstum",
    icon: TrendUp,
    title: "Mehr Umsatz pro Kunde",
    description: "Zusatzangebote werden automatisch ausgespielt und verkauft",
    benefits: [
      "Höherer Umsatz pro Kunde",
      "Kein Extra-Aufwand",
      "Skalierbares Wachstum"
    ],
    color: "red",
    visual: "growth"
  },
  {
    id: "tracking",
    icon: ChartLine,
    title: "Volle Zahlenkontrolle",
    description: "Du siehst genau, welche Prozesse Geld bringen – und welche nicht",
    benefits: [
      "Kein Blindflug mehr",
      "Fokus auf profitable Kanäle",
      "Sauberes Tracking ohne Cookies"
    ],
    color: "cyan",
    visual: "analytics"
  },
  {
    id: "automatisierung",
    icon: Robot,
    title: "Weniger Arbeit täglich",
    description: "Wiederkehrende Aufgaben laufen komplett automatisch",
    benefits: [
      "Keine manuellen Follow-ups",
      "Termine organisieren sich selbst",
      "Mehr Zeit fürs Wesentliche"
    ],
    color: "purple",
    visual: "automation"
  },
  {
    id: "einheit",
    icon: PuzzlePiece,
    title: "Alles in einem System",
    description: "Statt Tool-Chaos läuft alles zentral an einem Ort",
    benefits: [
      "Keine unnötigen Software-Kosten",
      "Alles greift ineinander",
      "Ein Login für alles"
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
      <Box as="section" color="white" py={{ base: "12", md: "16" }} w="full" minW="0" maxW="100%" overflowX="hidden">
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
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
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
          css={{
            "@media (min-width: 80em)": {
              paddingLeft: "calc((100vw - 80rem) / 2 + 1.5rem)",
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
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
                      viewport={{ once: true }}
                    >
                      <Box
                        borderRadius="xl"
                        overflow="hidden"
                        h="full"
                        display="flex"
                        flexDirection="column"
                        _hover={{
                          boxShadow: "0 12px 28px rgba(0, 0, 0, 0.15)",
                          transform: "translateY(-2px)",
                        }}
                        transition="transform 0.15s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1)"
                        style={{ willChange: "transform" }}
                        cursor="default"
                        position="relative"
                        {...glassCardStyles}
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
                {...glassCardStyles}
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

                  <Link
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    w={{ base: "full", sm: "auto" }}
                    display="block"
                    _hover={{ textDecoration: "none" }}
                  >
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
                  </Link>
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