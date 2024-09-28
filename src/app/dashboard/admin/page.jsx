import CountCharts from "@/app/components/Charts/CountCharts";
import UserCard from "@/app/components/UserCards";
import React from "react";

export default function AdminPage() {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* Left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {/* Middle Chart */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* Count Chart */}
          <div className="w-full lg:w-1/3 h-[450px]">
            {/* <CountCharts /> */}
          </div>
          {/* Attendance Chart */}
          <div className="w-full lg:w-2/3 h-[450px]"></div>
        </div>
      </div>
      {/* Right */}
      <div className="w-full lg:w-1/3"></div>
    </div>
  );
}
