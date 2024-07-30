// components/AccordionClient.tsx
"use client";

import React, { useState, Children, cloneElement, ReactElement } from "react";

interface AccordionClientProps {
  children: React.ReactNode;
}

export const AccordionClient = ({ children }: AccordionClientProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {Children.map(children, (child, index) =>
        React.isValidElement(child)
          ? cloneElement(child as ReactElement, {
              isOpen: openIndex === index,
              onToggle: () => toggle(index),
            })
          : child
      )}
    </>
  );
};
