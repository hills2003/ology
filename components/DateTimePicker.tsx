"use client";

import * as React from "react";
import { format } from "date-fns";
import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePickerTime() {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);

  const [time, setTime] = React.useState<string | null>(null); // stores the selected time
  const [openTime, setOpenTime] = React.useState<boolean>(false); // controls if input is visible
  return (
    <FieldGroup className="w-full flex flex-col gap-4">
      <Field>
        {/* <FieldLabel
          htmlFor="date-picker-optional"
          className="w-full flex justify-start font-Satoshi text-[#F8F7FC] text-center font-satoshi text-[13px] font-normal leading-6 tracking-[1.95px] uppercase"
        >
          Date of Birth ( MM / DD / YYYY )
        </FieldLabel> */}

        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="date-picker-optional"
              className="w-32 justify-between text-[#F8F7FC] text-[13px] font-normal tracking-[1.95px] font-Satoshi py-6 px-5 border border-[rgba(248,247,252,0.1)]"
            >
              {date ? format(date, "PPP") : "Date of Birth ( MM / DD / YYYY )"}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-full overflow-hidden p-0 bg-[#131827] text-black"
            align="start"
          >
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              defaultMonth={date}
              onSelect={(date) => {
                setDate(date);
                setOpen(false);
              }}
            />
          </PopoverContent>
        </Popover>
      </Field>

      <Field className="w-full relative">
        {openTime ? (
          <input
            type="time"
            value={time || ""}
            onChange={(e) => setTime(e.target.value)}
            onBlur={() => setOpenTime(false)} // closes input when clicked outside
            autoFocus
            className="w-full py-4 px-5 border border-[rgba(248,247,252,0.1)] rounded-[10px] text-[13px] font-normal tracking-[1.95px] font-Satoshi text-[#F8F7FC] bg-background outline-none"
          />
        ) : (
          <button
            type="button"
            className="w-full py-4 px-5 border border-[rgba(248,247,252,0.1)] rounded-[10px] text-[13px] font-normal tracking-[1.95px] font-Satoshi text-[#F8F7FC] flex justify-between items-center"
            onClick={() => setOpenTime(true)}
          >
            {/* Shows entered time if exists, otherwise placeholder */}
            {time ?? "Time of Birth ( HH:MM - AM/PM )"}
            <ChevronDownIcon />
          </button>
        )}
      </Field>
    </FieldGroup>
  );
}
