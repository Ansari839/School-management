"use client";
import Image from "next/image";
import React from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 92, fill: "#C3EBFA" },
  { name: "Group B", value: 8, fill: "#FAE27C" },
];

export default function PerfomanceChart() {
  const styles = {
    container: "bg-white p-4 rounded-md h-80 relative",
    header: "flex justify-between items-center",
    title: "text-lg font-semibold text-black",
    pieContainer: {
      width: "100%",
      height: "100%",
    },
    centerText:
      "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center",
    centerTitle: "text-xl font-semibold text-black",
    centerSubtitle: "text-xs text-gray-300",
    semesterText:
      "font-medium absolute bottom-16 left-0 right-0 m-auto text-center",
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Perfomance</h1>
        <Image src="/moreDark.png" alt="more" width={20} height={20} />
      </div>
      <ResponsiveContainer {...styles.pieContainer}>
        <PieChart>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            fill="#8884d8"
            label
          />
        </PieChart>
      </ResponsiveContainer>
      <div className={styles.centerText}>
        <h1 className={styles.centerTitle}>9.2</h1>
        <p className={styles.centerSubtitle}>of 10 max LTS</p>
      </div>
      <h2 className={styles.semesterText}>1st Semester - 2nd Semester</h2>
    </div>
  );
}
