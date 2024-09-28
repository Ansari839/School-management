"use client";
import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Sample data
const data = [
  { name: "Total", count: 106,  fill: "white" },
  { name: "Boys", count: 53,  fill: "#d1aae7" },
  { name: "Girls", count: 53, fill: "#ede42d" },
  ];

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

export default function CountCharts() {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* Title */}
      <div className="flex justify-between items-center ">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src="/moreDark.png" alt="more" width={20} height={20} />
      </div>

      {/* Chart */}
      <div className="w-full h-[75%] relative">
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
        <Image src='/maleFemale.png' width={50} height={50} alt="male female" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " />
      </div>

      {/* Bottom Stats */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1 items-center">
          <div className="w-10 h-10 bg-primary rounded-full" />
          <h1 className="font-bold text-black">1,234</h1>
          <h2 className="text-xs text-gray-500">Boys (55%)</h2>
        </div>

        <div className="flex flex-col gap-1 items-center">
          <div className="w-10 h-10 bg-main rounded-full" />
          <h1 className="font-bold text-black">1,234</h1>
          <h2 className="text-xs text-gray-500">Girls (45%)</h2>
        </div>
      </div>
    </div>
  );
}

