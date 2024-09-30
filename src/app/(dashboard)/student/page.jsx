import Announcement from "@/app/components/Calender/Announcement";
import BigCalendar from "@/app/components/Calender/BigCalendar";
import EventCalender from "@/app/components/Calender/EventCalender";
import React from "react";


export default function StudentPage() {
  return (
    <div className="flex flex-col xl:flex-row gap-4 p-4">
      {/* Left */}
      <div className="w-full xl:w2/3">
        <div className="h-full bg-white rounded-md">
          <h1 className="text-x font-semibold p-4">Schedule 4(A)</h1>
          <BigCalendar />
        </div>
      </div>

      {/* Right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <EventCalender />
        <Announcement />
      </div>
    </div>
  );
}
