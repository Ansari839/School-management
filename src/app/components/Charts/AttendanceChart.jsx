"use client";
import Image from "next/image";
import React from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  Legend,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", Present: 1000, Absent: 2400, amt: 2400 },
  { name: "Tue", Present: 3000, Absent: 1398, amt: 2210 },
  { name: "Wed", Present: 2000, Absent: 9800, amt: 2290 },
  { name: "Thus", Present: 2780, Absent: 3908, amt: 2000 },
  { name: "Fri", Present: 1890, Absent: 4800, amt: 2181 },
];

export default function AttendanceChart() {
  const styles = {
    container: "bg-white rounded-lg p-4 h-full",
    header: "flex justify-between items-center",
    title: "text-lg font-semibold text-black",
    tooltip: { borderRadius: "10px", borderColor: "lightgrey" },
    legend: { paddingTop: "20px", paddingBottom: "40px" },
    axisTick: { fill: "#d1d5db" },
    grid: { strokeDasharray: "3 3", vertical: false, stroke: "#ddd" },
    barPresent: {
      fill: "#d1aae7",
      legendType: "circle",
      radius: [10, 10, 0, 0],
    },
    barAbsent: {
      fill: "#ede42d",
      legendType: "circle",
      radius: [10, 10, 0, 0],
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Attendance</h1>
        <Image src="/moreDark.png" alt="more" width={20} height={20} />
      </div>
      {/* Attendance Chart */}
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid {...styles.grid} />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={styles.axisTick}
            tickLine={false}
          />
          <YAxis axisLine={false} tick={styles.axisTick} tickLine={false} />
          <Tooltip contentStyle={styles.tooltip} />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={styles.legend}
          />
          <Bar dataKey="Present" {...styles.barPresent} />
          <Bar dataKey="Absent" {...styles.barAbsent} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
