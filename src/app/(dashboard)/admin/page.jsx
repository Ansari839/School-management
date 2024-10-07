import Announcement from "@/app/components/Calender/Announcement";
import EventCalender from "@/app/components/Calender/EventCalender";
import AttendanceChart from "@/app/components/Charts/AttendanceChart";
import CountCharts from "@/app/components/Charts/CountCharts";
import FinanceChart from "@/app/components/Charts/FinanceChart";
import UserCard from "@/app/components/UserCards";
import React from "react";

export default function AdminPage() {
  // Define classes as objects
  const styles = {
    container: "p-4 flex flex-col gap-8 lg:flex-row",
    leftSection: "flex flex-col gap-8 lg:w-2/3",
    userCardWrapper: "flex gap-4 justify-between flex-wrap",
    chartContainer: "flex flex-col gap-4 lg:flex-row",
    countChart: "lg:w-1/3 h-[450px]",
    attendanceChart: "lg:w-2/3 h-[450px]",
    financeChart: "h-[500px]",
    rightSection: "flex flex-col gap-8 lg:w-1/3",
  };

  return (
    <div className={styles.container}>
      {/* Left Section */}
      <div className={styles.leftSection}>
        {/* User Cards */}
        <div className={styles.userCardWrapper}>
          {["student", "teacher", "parent", "staff"].map((type) => (
            <UserCard key={type} type={type} />
          ))}
        </div>
        {/* Charts */}
        <div className={styles.chartContainer}>
          <div className={styles.countChart}>
            <CountCharts />
          </div>
          <div className={styles.attendanceChart}>
            <AttendanceChart />
          </div>
        </div>
        <div className={styles.financeChart}>
          <FinanceChart />
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
