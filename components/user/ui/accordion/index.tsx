"use client";
// import * as React from "react";
// import * as AccordionPrimitive from "@radix-ui/react-accordion";
// import { ChevronDown } from "lucide-react";

// import { cn } from "@/lib/utils";

// const Accordion = AccordionPrimitive.Root;

// const AccordionItem = React.forwardRef<
//   React.ElementRef<typeof AccordionPrimitive.Item>,
//   React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
// >(({ className, ...props }, ref) => (
//   <AccordionPrimitive.Item
//     ref={ref}
//     className={cn("border-b", className)}
//     {...props}
//   />
// ));
// AccordionItem.displayName = "AccordionItem";

// const AccordionTrigger = React.forwardRef<
//   React.ElementRef<typeof AccordionPrimitive.Trigger>,
//   React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
// >(({ className, children, ...props }, ref) => (
//   <AccordionPrimitive.Header className="flex">
//     <AccordionPrimitive.Trigger
//       ref={ref}
//       className={cn(
//         "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
//         className
//       )}
//       {...props}
//     >
//       {children}
//       <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
//     </AccordionPrimitive.Trigger>
//   </AccordionPrimitive.Header>
// ));
// AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

// const AccordionContent = React.forwardRef<
//   React.ElementRef<typeof AccordionPrimitive.Content>,
//   React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
// >(({ className, children, ...props }, ref) => (
//   <AccordionPrimitive.Content
//     ref={ref}
//     className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
//     {...props}
//   >
//     <div
//       className={cn("pb-4 pt-0 text-muted-foreground text-[16px]", className)}
//     >
//       {children}
//     </div>
//   </AccordionPrimitive.Content>
// ));

// AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

// components/AccordionClient.tsx

// components/AccordionClient.tsx

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export const AccordionItem = ({ id, children }: any) => {
  return (
    <div className="border-b" id={id}>
      {children}
    </div>
  );
};

export const AccordionTrigger = ({ id, children }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <button
        onClick={handleClick}
        className="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline"
      >
        {children}
        <ChevronDown
          className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
    </div>
  );
};

export const AccordionContent = ({ isOpen, children }: any) => {
  return (
    <div
      className={`overflow-hidden text-sm transition-all ${
        isOpen ? "max-h-screen" : "max-h-0"
      }`}
      style={{ transition: "max-height 0.2s ease-out" }}
    >
      <div className="pb-4 pt-0 text-muted-foreground text-[16px]">
        {children}
      </div>
    </div>
  );
};
