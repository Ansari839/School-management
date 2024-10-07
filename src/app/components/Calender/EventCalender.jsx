"use client";
import Image from "next/image";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function EventCalendar() {
  const [value, onChange] = useState(new Date());
  const events = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  const styles = {
    container: "bg-white rounded-md",
    calendar: "",
    header: "flex justify-between items-center p-4",
    title: "text-xl font-semibold text-black my-4",
    eventsContainer: "flex flex-col gap-4",
    eventCard:
      "p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-primary even:border-t-secondary",
    eventTitle: "font-semibold text-gray-600",
    eventTime: "text-gray-300 text-xs",
    eventDescription: "mt-2 text-gray-400 text-sm",
  };

  return (
    <div className={styles.container}>
      <Calendar onChange={onChange} value={value} className={styles.calendar} />
      <div className={styles.header}>
        <h1 className={styles.title}>Events</h1>
        <Image src="/moreDark.png" alt="more" width={20} height={20} />
      </div>
      <div className={styles.eventsContainer}>
        {events.map((event) => (
          <div className={styles.eventCard} key={event.id}>
            <div className="flex items-center justify-between">
              <h1 className={styles.eventTitle}>{event.title}</h1>
              <span className={styles.eventTime}>{event.time}</span>
            </div>
            <p className={styles.eventDescription}>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
