import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function TabTatooSection() {
  return (
    <Tabs
      defaultValue="account"
      className="flex w-full flex-col items-center justify-center p-2 ring-1 ring-black"
    >
      <TabsList className="w-full gap-1">
        <TabsTrigger
          value="account"
          className="w-1/2 bg-blue-200 ring-1 ring-black/25"
        >
          Tatoos
        </TabsTrigger>
        <TabsTrigger
          value="password"
          className="w-1/2 bg-blue-200 ring-1 ring-black/25"
        >
          Pearcing
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="account"
        className="flex h-60 w-full flex-col bg-slate-500/10"
      >
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </TabsContent>
      <TabsContent value="pearcing">
        <div className="h-32 w-full bg-lime-100">hi</div>
      </TabsContent>
    </Tabs>
  );
}
