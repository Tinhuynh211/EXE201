import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const accordionData = [
  {
    value: "item-1",
    title: "Is it accessible?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    value: "item-2",
    title: "Is it customizable?",
    content: "Yes. You can customize it as per your needs.",
  },
  {
    value: "item-3",
    title: "Is it easy to use?",
    content: "Yes. It is very easy to use and integrate.",
  },
];

export function AccordionComponent() {
  return (
    <Accordion type="single" collapsible>
      {accordionData.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
