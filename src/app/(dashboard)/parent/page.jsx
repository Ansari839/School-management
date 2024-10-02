import Announcement from "@/app/components/Calender/Announcement";
import BigCalendar from "@/app/components/Calender/BigCalendar";
import React from "react";

export default function ParentPage() {
  return (
    <div className="flex flex-1 p-4 gap-4 xl:flex-row">
      {/* Left */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white rounded-md">
          <h1 className="text-x font-semibold p-4">Schedule (Muhammad Salaar)</h1>
          <BigCalendar />
        </div>
      </div>
      {/* Right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <Announcement />
      </div>
    </div>
  );
}
