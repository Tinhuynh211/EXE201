"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { addDays, format } from "date-fns";
import { DateRange as DayPickerDateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { fetchBabysitter } from "@/utils/actions";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"; // Import your Card components
import Image from "next/image"; // Import Image component for Next.js
import axios from "axios";

type CustomDateRange = {
  from: Date;
  to: Date;
};

type Babysitter = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  profileImage: string; // Add the profileImage field
  experience: string;
  // Add any other fields you have in your babysitter data
};

export default function DatePickerWithRange({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<CustomDateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 20),
  });
  const [babysitters, setBabysitters] = React.useState<Babysitter[]>([]);

  const transformDateRange = (dateRange: CustomDateRange | undefined) => {
    if (!dateRange) {
      return { startDate: null, endDate: null };
    }
    return { startDate: dateRange.from, endDate: dateRange.to };
  };

  const handleDateChange = async () => {
    const transformedDate = transformDateRange(date);
    const result = await fetchBabysitter(transformedDate);

    // Check if the result contains a babysitters array and set it to state
    if (result && Array.isArray(result.babysitters)) {
      setBabysitters(result.babysitters); // Set only the babysitters array to state
    } else {
      console.error("Invalid data format:", result);
      setBabysitters([]); // Clear the state if no babysitters are found
    }
  };
  const Random = () => Math.floor(Math.random() * 1000000);
  const handleBooking = async (babysitterId: number) => {
    const url = "https://payos-oqu5.onrender.com/create-payment-link";
    const payload = {
      orderCode: Random(),
      amount: 2000,
      description: "Thanh toan don hang",
      returnUrl: "Nguyen",
      cancelUrl: "HIHi",
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Payment link created:", data);
      // Handle the response as needed
    } catch (error) {
      console.error("Error creating payment link:", error);
      // Handle the error as needed
    }
  };

  return (
    <div className={cn("grid gap-4", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date as DayPickerDateRange}
            onSelect={
              setDate as React.Dispatch<
                React.SetStateAction<DayPickerDateRange | undefined>
              >
            }
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
      <Button onClick={handleDateChange}>Log Date Range</Button>

      {/* Render Babysitter Cards */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {babysitters.map((babysitter) => (
          <Card key={babysitter.id} className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <CardTitle className="text-tiny uppercase font-light">
                Babysitter
              </CardTitle>

              <h4 className="font-bold text-large">
                {babysitter.firstName} {babysitter.lastName}
              </h4>
            </CardHeader>
            <CardContent className="overflow-visible py-2">
              <Image
                alt={`${babysitter.firstName} ${babysitter.lastName}`}
                className="object-cover rounded-xl"
                src={babysitter.profileImage}
                width={270}
                height={160} // Set the height as needed
              />
            </CardContent>
            <CardFooter className="flex gap-3">
              <Button
                variant="outline"
                className="bg-blue-500 text-white hover:bg-blue-600 hover:text-white "
                onClick={() => handleBooking(babysitter.id)}
              >
                Booking
              </Button>
              <Button variant="outline">View Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
