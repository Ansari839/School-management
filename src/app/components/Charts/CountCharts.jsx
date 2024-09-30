"use client";
import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
} from "recharts";

// Sample data
const data = [
  { name: "Total", count: 106, fill: "white" },
  { name: "Boys", count: 59, fill: "#d1aae7" },
  { name: "Girls", count: 47, fill: "#ede42d" },
];

// Styles definition
const styles = {
  container: "bg-white rounded-xl w-full h-full p-4",
  header: {
    container: "flex justify-between items-center",
    title: "text-lg font-semibold text-black",
    iconSize: 20,
  },
  chartWrapper: "w-full h-[75%] relative",
  chartCenterIcon: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  statsContainer: "flex justify-center gap-16",
  statItem: {
    container: "flex flex-col gap-1 items-center",
    circleSize: "w-10 h-10 rounded-full",
    number: "font-bold text-black",
    label: "text-xs text-gray-500",
  },
};

export default function CountCharts() {
  return (
    <div className={styles.container}>
      {/* Title */}
      <div className={styles.header.container}>
        <h1 className={styles.header.title}>Students</h1>
        <Image
          src="/moreDark.png"
          alt="more"
          width={styles.header.iconSize}
          height={styles.header.iconSize}
        />
      </div>

      {/* Chart */}
      <div className={styles.chartWrapper}>
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar
              label={{ position: "insideStart", fill: "#fff" }}
              background
              dataKey="count"
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          width={50}
          height={50}
          alt="male female"
          className={styles.chartCenterIcon}
        />
      </div>

      {/* Bottom Stats */}
      <div className={styles.statsContainer}>
        {/* Boys Stats */}
        <div className={styles.statItem.container}>
          <div className={`${styles.statItem.circleSize} bg-primary`} />
          <h1 className={styles.statItem.number}>1,234</h1>
          <h2 className={styles.statItem.label}>Boys (55%)</h2>
        </div>

        {/* Girls Stats */}
        <div className={styles.statItem.container}>
          <div className={`${styles.statItem.circleSize} bg-main`} />
          <h1 className={styles.statItem.number}>1,234</h1>
          <h2 className={styles.statItem.label}>Girls (45%)</h2>
        </div>
      </div>
    </div>
  );
}
