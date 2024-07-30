// components/ServerAccordion.tsx

import React from "react";
import { ChevronDown } from "lucide-react";

const AccordionItem = ({ isOpen, onToggle, question, answer }: any) => (
  <div className="border-b">
    <button
      onClick={onToggle}
      className="flex items-center justify-between py-4 font-medium transition-all hover:underline w-full text-left"
    >
      {question}
      <ChevronDown
        className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
    <div
      className={`overflow-hidden text-sm transition-all ${
        isOpen ? "max-h-screen" : "max-h-0"
      }`}
      style={{ transition: "max-height 0.2s ease-out" }}
    >
      <div className="pb-4 pt-0 text-muted-foreground text-[16px]">
        {answer}
      </div>
    </div>
  </div>
);

const ServerAccordion = ({ faqList }: any) => {
  return faqList.map((faq: any, index: any) => (
    <AccordionItem key={index} question={faq.question} answer={faq.answer} />
  ));
};

export { ServerAccordion, AccordionItem };
