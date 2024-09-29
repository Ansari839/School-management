"use client";
import Image from "next/image";
import react, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function EventCalender() {
  const [value, onChange] = useState(new Date());
  const events = [
    {
      id: 1,
      title: "lorem impsum color",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      title: "lorem impsum color",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      title: "lorem impsum color",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <div className="bg-white rounded-md">
      <Calendar onChange={onChange} value={value} />
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold text-black my-4">Events</h1>
        <Image src="/moreDark.png" alt="more" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((events) => (
          <div className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-primary even:border-t-secondary" key={events.id}>
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{events.title}</h1>
              <span className="text-gray-300 text-xs">{events.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{events.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
