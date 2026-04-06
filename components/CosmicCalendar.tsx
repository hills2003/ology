import Image from "next/image";
import React from "react";
import { Calendar } from "./ui/calendar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function CosmicCalendar() {
  return (
    <div className="flex p-[30px_10px_50px_10px] flex-col items-center gap-7.5 rink-0">
      <div className="flex flex-col justify-center items-center gap-12.25">
        <h1
          className="text-[#F8F7FC] 
            text-center
            font-Recoleta
            text-[30px]
            font-medium
            leading-9
            not-italic"
        >
          Astro Calendar
        </h1>
      </div>

      <div className="flex p-[18px_16px] flex-col justify-center items-center gap-2.5 self-stretch">
        <div className="w-full flex justify-between items-center min-h-[53.714px] p-[18px_16px] p-[9.592px_19.184px] rounded-[17.864px] border-[0.893px] border-[rgba(197,209,224,0.20)] bg-[linear-gradient(303deg,rgba(197,209,224,0.04)_0.54%,rgba(232,213,224,0.04)_37.91%,rgba(127,168,212,0.04)_68.56%,rgba(155,143,212,0.03)_98.22%)]">
          <Calendar mode="single" />
        </div>
      </div>

      <Link href="/">
        <span
          className=" text-[#F8F7FC]
            text-center
            font-Satoshi
            text-[10.907px]
            italic
            font-normal
            leading-[16.36px]
            underline
            decoration-solid
            decoration-auto"
        >
          Ask Ology AI →
        </span>
      </Link>

      {/* <div className="flex flex-col items-start self-stretch gap-6.25">
        <Accordion
          type="single"
          collapsible
          defaultValue="shipping"
          className="max-w-lg"
        >
          <AccordionItem value="shipping">
            <AccordionTrigger>What are your shipping options?</AccordionTrigger>
            <AccordionContent>
              We offer standard (5-7 days), express (2-3 days), and overnight
              shipping. Free shipping on international orders.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="returns">
            <AccordionTrigger>What is your return policy?</AccordionTrigger>
            <AccordionContent>
              Returns accepted within 30 days. Items must be unused and in
              original packaging. Refunds processed within 5-7 business days.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="support">
            <AccordionTrigger>
              How can I contact customer support?
            </AccordionTrigger>
            <AccordionContent>
              Reach us via email, live chat, or phone. We respond within 24
              hours during business days.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div> */}
    </div>
  );
}

export default CosmicCalendar;
