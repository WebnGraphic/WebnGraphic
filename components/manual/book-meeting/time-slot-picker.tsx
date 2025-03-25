"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface TimeSlotPickerProps {
  selectedDate: Date;
  onTimeSelect: (time: string) => void;
}

// Generate time slots from 9 AM to 5 PM with 30-minute intervals
const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 8; hour < 18; hour++) {
    const hourFormatted = hour % 12 === 0 ? 12 : hour % 12;
    const ampm = hour < 12 ? "AM" : "PM";

    slots.push(`${hourFormatted}:00 ${ampm}`);
    slots.push(`${hourFormatted}:30 ${ampm}`);
  }
  return slots;
};

export default function TimeSlotPicker({
  selectedDate,
  onTimeSelect,
}: TimeSlotPickerProps) {
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real app, you would fetch available slots from your API
    // For this example, we'll simulate a loading state and then show all slots
    setIsLoading(true);

    const loadSlots = async () => {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Generate time slots
      const slots = generateTimeSlots();

      // Randomly mark some slots as unavailable (for demo purposes)
      const availableSlotsList = slots.filter(() => Math.random() > 0.3);

      setAvailableSlots(availableSlotsList);
      setIsLoading(false);
    };

    loadSlots();
  }, [selectedDate]);

  if (isLoading) {
    return (
      <div className="flex h-60 items-center justify-center">
        <div className="text-center">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent mx-auto"></div>
          <p className="mt-2 text-sm text-muted-foreground">
            Loading available times...
          </p>
        </div>
      </div>
    );
  }

  if (availableSlots.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">
          No available time slots for this date.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        All times are shown in your local timezone (
        {Intl.DateTimeFormat().resolvedOptions().timeZone})
      </p>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
        {availableSlots.map((time) => (
          <Button
            key={time}
            variant="outline"
            className="h-12 hover:bg-Ttext/10"
            onClick={() => onTimeSelect(time)}
          >
            {time}
          </Button>
        ))}
      </div>
    </div>
  );
}
