import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import React from "react";
import { useTheme } from "next-themes";
import { FaQuestionCircle } from "react-icons/fa";

const DiabloAccordion = ({ question, answer }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <Accordion allowToggle className="drop-shadow-xl">
      <AccordionItem
        m={3}
        color={isDarkMode ? "#FFA500" : "#FFF"}
        backgroundColor={isDarkMode ? "#131313" : "#F97316"}
        className="flex flex-col w-full sm:w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 border !mx-auto my-[5px] p-2.5 rounded-tl-[20px] rounded-br-[20px] border-solid border-[#ccc]"
      >
        <AccordionButton className="w-full flex flex-row items-center justify-between">
          <div className="flex flex-row justify-between items-center">
            <FaQuestionCircle className="relative mr-[20px]" />
            {question}
          </div>
          <AccordionIcon className="ml-[30px]" />
        </AccordionButton>

        <AccordionPanel
          pb={4}
          className="w-full text-left"
          color={isDarkMode ? "#CCCCCC" : "#FFF"}
          backgroundColor={isDarkMode ? "#131313" : "transparent"}
        >
          {answer}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default DiabloAccordion;
