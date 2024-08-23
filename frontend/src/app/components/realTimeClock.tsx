"use client";

import { useState, useEffect } from "react";
import { FaClock } from "react-icons/fa";

export function RealTimeClock() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  if (!time) {
    return null; 
  }

  return (
    <div className="flex items-center">
      <FaClock className="ml-2 text-foreground" />
      <span className="ml-2 text-foreground">{time.toLocaleTimeString()}</span>
    </div>
  );
}
