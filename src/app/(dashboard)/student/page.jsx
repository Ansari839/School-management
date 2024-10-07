"use client";
import Announcement from "@/app/components/Calender/Announcement";
import BigCalendar from "@/app/components/Calender/BigCalendar";
import EventCalender from "@/app/components/Calender/EventCalender";
import React from "react";

export default function StudentPage() {
  // Define classes as objects
  const styles = {
    container: "flex flex-col xl:flex-row gap-4 p-4",
    leftSection: "w-full xl:w-2/3",
    leftContent: "h-full bg-white rounded-md",
    title: "text-x font-semibold p-4",
    rightSection: "w-full xl:w-1/3 flex flex-col gap-8",
  };

  return (
    <div className={styles.container}>
      {/* Left Section */}
      <div className={styles.leftSection}>
        <div className={styles.leftContent}>
          <h1 className={styles.title}>Schedule 4(A)</h1>
          <BigCalendar />
        </div>
      </div>
      {/* Right Section */}
      <div className={styles.rightSection}>
        <EventCalender />
        <Announcement />
      </div>
    </div>
  );
}
