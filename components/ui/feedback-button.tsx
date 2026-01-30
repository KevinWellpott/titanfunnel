import { MenuContent, MenuRoot, MenuTrigger } from "@/components/ui/menu";
import { Button } from "@/components/ui/button";
import { HStack, VStack } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { ChatTeardropText } from "@phosphor-icons/react/dist/ssr";

export const FeedbackButton = () => {
  const handleSubmit = (feedback: string) => {
    console.log("Feedback sent:", feedback);
  };

  return (
    <MenuRoot positioning={{ placement: "bottom" }}>
      <MenuTrigger asChild>
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
          data-o-account-activity="Open Feedback Form"
        >
          Feedback?
          <ChatTeardropText weight="bold" />
        </Button>
      </MenuTrigger>

      <MenuContent colorPalette={"primary"}>
        <VStack p={2}>
          <Field label="Feedback">
            <Textarea
              placeholder="Start typing..."
              variant="outline"
              h="140px"
            />
          </Field>
          <HStack w="full">
            <Button
              variant="solid"
              w="full"
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
              onClick={() => handleSubmit}
            >
              Send
            </Button>
          </HStack>
        </VStack>
      </MenuContent>
    </MenuRoot>
  );
};
