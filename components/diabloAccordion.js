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
import { FaQuestionCircle } from "react-icons/fa";


const DiabloAccordion = ({ question, answer }) => {
  const { theme } = useTheme();
  return (
    <Accordion allowMultiple className="drop-shadow-xl ">
      <AccordionItem
        m={3}
        color={theme === "light" ? "#FFF" : "orange"}
        backgroundColor={theme === "light" ? "#F97316" : "#131313"}
        className="flex flex-col  w-4/5 border !mx-auto my-[5px] p-2.5 rounded-tl-[20px] rounded-br-[20px] border-solid border-[#ccc]"
      >
        
          <AccordionButton className="w-1 flex flex-row items-center justify-between">
              <div className="flex flex-row justify-between items-center">
              <FaQuestionCircle className="relative mr-[20px] " />
              {question}
              </div>
           
            <AccordionIcon className="ml-[30px]" />
            
          </AccordionButton>
        
        <AccordionPanel 
          pb={4}
          className="w-1 text-left ml-[0px]"
          style={{ width: "100%" }}
          color={theme === "light" ? "yellow" : "#ccc"}
          backgroundColor={theme === "light" ? "" : ""}
        >
          {answer}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default DiabloAccordion;
