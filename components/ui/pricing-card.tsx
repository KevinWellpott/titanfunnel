import {
  Badge,
  Button,
  Card,
  Float,
  For,
  HStack,
  List,
  Separator,
  Span,
  Stack,
  type StackProps,
  Text,
} from "@chakra-ui/react";
import {
  LuArrowRight,
  LuBuilding,
  LuMessageSquare,
  LuPackage,
  LuUser,
} from "react-icons/lu";
import type { PlanData } from "../../app/(website)/pricing/data";

const iconMap: Record<string, React.ReactNode> = {
  team: <LuBuilding />,
  user: <LuUser />,
  storage: <LuPackage />,
  help: <LuMessageSquare />,
};

interface PricingCardProps extends StackProps {
  planPaymentTerms: "month" | "annual";
  data: PlanData;
}

export const PricingCard = (props: PricingCardProps) => {
  const { planPaymentTerms, data, ...rest } = props;
  const price =
    planPaymentTerms === "month"
      ? data.monthlyPrice.price
      : data.yearlyPrice.price;
  const isFree = price === 0;
  const isYearly = planPaymentTerms === "annual";
  const monthlyPrice = data.monthlyPrice.price;
  const yearlyPrice = data.yearlyPrice.price;
  const savings = isYearly && !isFree ? monthlyPrice * 2 : 0;
  
  return (
    <Card.Root
      size="lg"
      position="relative"
      overflow="visible"
      borderColor={data.recommended ? "colorPalette.solid" : undefined}
      {...rest}
    >
      {data.recommended && (
        <Float placement="top-center" zIndex={10}>
          <Badge variant="solid" zIndex={10}>
            Beliebteste Wahl
          </Badge>
        </Float>
      )}
      {isYearly && !isFree && savings > 0 && (
        <Float 
          placement="top-end" 
          offsetY="2" 
          offsetX="10"
          zIndex={9}
        >
          <Badge colorPalette="green" variant="solid" zIndex={9}>
            2 Monate gespart
          </Badge>
        </Float>
      )}
      <Card.Body>
        <Stack gap="5">
          <Card.Title fontWeight="normal">{data.title}</Card.Title>
          <Stack gap="1">
            {isFree ? (
              <Span textStyle="5xl" lineHeight="1" fontWeight="medium">
                Kostenlos
              </Span>
            ) : (
              <>
                <HStack gap="2" align="baseline">
                  <Span textStyle="5xl" lineHeight="1" fontWeight="medium">
                    {data.priceSymbol}
                    {price}
                  </Span>
                  {isYearly && (
                    <Span textStyle="lg" color="fg.muted" textDecoration="line-through">
                      {data.priceSymbol}
                      {monthlyPrice * 12}
                    </Span>
                  )}
                </HStack>
                <Span textStyle="sm" color="fg.muted">
                  {isYearly ? "pro Jahr" : "pro Monat"}
                </Span>
              </>
            )}
          </Stack>
          <Card.Description color="fg">{data.description}</Card.Description>
          <Stack gap="2">
            <Button
              size={{ base: "md", md: "lg" }}
              gap="2"
              variant={data.recommended ? "solid" : "outline"}
              colorPalette={!data.recommended ? "gray" : undefined}
              bg={!data.recommended ? "bg.panel" : undefined}
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
              data-o-auth="1"
              data-mode="popup"
              data-widget-mode={isFree ? "login" : "register"}
              data-plan-uid={data.uid}
              data-plan-payment-term={planPaymentTerms}
            >
              {isFree ? "Jetzt starten" : "Jetzt starten"} <LuArrowRight />
            </Button>
            {!isFree && (
              <Text textStyle="xs" color="fg.muted" textAlign="center">
                7 Tage kostenlos testen
              </Text>
            )}
          </Stack>
        </Stack>
      </Card.Body>
      <Separator variant="dashed" />
      <Card.Body gap="6" roundedBottom="l3">
        <List.Root variant="plain" align="center" textStyle="sm" gap="3">
          <For each={data.features}>
            {(item) => (
              <List.Item alignItems="center" key={item.title}>
                <List.Indicator asChild color="fg.muted">
                  {iconMap[item.icon as keyof typeof iconMap]}
                </List.Indicator>
                <HStack gap="2">
                  <Text>{item.title}</Text>
                </HStack>
              </List.Item>
            )}
          </For>
        </List.Root>
      </Card.Body>
    </Card.Root>
  );
};
