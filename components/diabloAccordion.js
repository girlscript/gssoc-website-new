import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { useTheme } from "next-themes";

const DiabloAccordion = ({ question, answer }) => {
  const { theme } = useTheme();
  return (
    <>
      <Accordion allowMultiple className="drop-shadow-xl">
        <AccordionItem
          m={3}
          color={theme === "light" ? "#FFF" : "orange"}
          backgroundColor={theme === "light" ? "#F97316" : "#000"}
        >
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" className="font-medium">
                {question}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={4}
            color={theme === "light" ? "#000" : "white"}
            backgroundColor={theme === "light" ? "#FFFFFF" : ""}
          >
            {answer}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default DiabloAccordion;
