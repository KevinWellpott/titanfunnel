"use client";

import { useAuth } from "../provider/auth-provider";
import { Button } from "@/components/ui/button";
import { projectConfig } from "@/config";

import {
  AbsoluteCenter,
  Box,
  Spinner,
  Text,
  VStack,
  Group,
} from "@chakra-ui/react";
import { EmptyState } from "@/components/ui/empty-state";
import { Lock, SignIn } from "@phosphor-icons/react/dist/ssr";
import { OutsetaUser } from "@/types/outseta";
import { Profile, Login, SignUp } from "./embed";

// Add readonly to prevent accidental mutations
interface Plan
  extends Readonly<{
    uid: string;
    label: string;
  }> {}

interface ProtectedRouteProps
  extends Readonly<{
    children: React.ReactNode;
    plansWithAccess?: string;
    fallback?: React.ReactNode;
  }> {}

function userHasAccessToPlans(
  plans: Plan[],
  user: OutsetaUser | null
): boolean {
  if (!user?.Account) return false;
  const planIdForUser = user.Account.CurrentSubscription?.Plan?.Uid;
  // If no specific plans are required, any plan is valid
  if (plans.length === 0) return true;
  return !!plans.find((plan) => plan.uid === planIdForUser);
}

export default function ProtectedRoute({
  children,
  plansWithAccess,
}: ProtectedRouteProps): React.ReactElement {
  const { user, isLoading } = useAuth();

  console.log("ProtectedRoute:", {
    isLoading,
    hasUser: !!user,
    userPlan: user?.Account?.CurrentSubscription?.Plan?.Uid,
    plansWithAccess,
  });

  const requiredPlans = (() => {
    if (!plansWithAccess) return [];
    const plans = plansWithAccess
      .split(",")
      .map((p) => p.trim().toLowerCase())
      .map((planName) => {
        const configPlan =
          projectConfig.auth.plans[
            planName as keyof typeof projectConfig.auth.plans
          ];
        if (!configPlan) {
          console.warn(`Unknown plan: ${planName}`);
          return null;
        }
        return configPlan;
      })
      .filter((p): p is Plan => p !== null);

    console.log(
      "Required Plans:",
      plans.map((p) => ({ uid: p.uid, label: p.label }))
    );
    return plans;
  })();

  if (isLoading) {
    console.log("ProtectedRoute: Loading state");
    return (
      <Box position="relative" h="100vh" w="100vw">
        <AbsoluteCenter>
          <VStack>
            <Spinner
              color="primary.600"
              size="xl"
              borderWidth="4px"
              css={{ "--spinner-track-color": "colors.neutral.200" }}
            />
            <Text textStyle="lg" color="fg.subtle">
              Lädt...
            </Text>
          </VStack>
        </AbsoluteCenter>
      </Box>
    );
  }

  if (!user) {
    console.log("ProtectedRoute: No user - showing login screen");
    return (
      <Box position="relative" h="100vh" w="100vw">
        <AbsoluteCenter>
          <VStack>
            <EmptyState
              icon={<SignIn />}
              title="Anmelden um fortzufahren"
              description={`Diese Seite ist nur für ${
                plansWithAccess
                  ? requiredPlans.map((p) => p.label).join(" oder ")
                  : "registrierte"
              } Nutzer verfügbar. Um fortzufahren, melde dich mit deinem bestehenden Konto an oder registriere dich.`}
            >
              <Group>
                <Login popup>
                  <Button
                    size={{ base: "md", md: "lg" }}
                    gap="2"
                    bg="blue"
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
                    Anmelden
                  </Button>
                </Login>
                <SignUp popup>
                  <Button
                    variant="outline"
                    size={{ base: "md", md: "lg" }}
                    gap="2"
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
                    Registrieren
                  </Button>
                </SignUp>
              </Group>
            </EmptyState>
          </VStack>
        </AbsoluteCenter>
      </Box>
    );
  }

  if (!plansWithAccess) {
    console.log("ProtectedRoute: No plans required - allowing access");
    return children as React.ReactElement;
  }

  const allowAccess = userHasAccessToPlans(requiredPlans, user);
  console.log("ProtectedRoute: Plan check result:", {
    allowAccess,
    userPlan: user.Account?.CurrentSubscription?.Plan?.Uid,
    requiredPlans: requiredPlans.map((p) => p.uid),
  });

  if (!allowAccess) {
    console.log("ProtectedRoute: Access denied - showing upgrade screen");
    return (
      <Box position="relative" h="100vh" w="100vw">
        <AbsoluteCenter>
          <VStack>
            <EmptyState
              icon={<Lock />}
              title="Upgrade zum Freischalten"
              description={`Diese Seite ist nur für Nutzer mit einem ${requiredPlans[0].label} Plan verfügbar. Um fortzufahren, bitte auf einen ${requiredPlans[0].label} Plan upgraden.`}
            >
              {/* TODO: Directly open the right plan to upgrade to */}
              <Profile popup data-tab="planChange">
                <Button
                  size={{ base: "md", md: "lg" }}
                  gap="2"
                  bg="blue"
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
                  Plan ändern
                </Button>
              </Profile>
            </EmptyState>
          </VStack>
        </AbsoluteCenter>
      </Box>
    );
  }

  console.log("ProtectedRoute: Access granted");
  return children as React.ReactElement;
}
