"use client";
import Image from 'next/image';
import React from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    Present: 1000,
    Absent: 2400,
    amt: 2400,
  },
  {
    name: 'Tue',
    Present: 3000,
    Absent: 1398,
    amt: 2210,
  },
  {
    name: 'Wed',
    Present: 2000,
    Absent: 9800,
    amt: 2290,
  },
  {
    name: 'Thus',
    Present: 2780,
    Absent: 3908,
    amt: 2000,
  },
  {
    name: 'Fri',
    Present: 1890,
    Absent: 4800,
    amt: 2181,
  },
  
];


export default function AttendanceChart() {
  return (
    <div className="bg-white rounded-lg p-4 h-full">
        <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold text-black">Attendance</h1>
            <Image
          src="/moreDark.png"
          alt="more"
          width={20}
          height={20}
        />
        </div>
        {/* Attendance Chart */}
        
            <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd' />
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} />
          <YAxis xisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} />
          <Tooltip contentStyle={{borderRadius:"10px" , borderColor:"lightgrey"}} />
          <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop:"20px" , paddingBottom: "40px"}} />
          <Bar dataKey="Present" fill="#d1aae7" legendType='circle' radius={[10,10,0,0]} />
          <Bar dataKey="Absent" fill="#ede42d" legendType='circle' radius={[10,10,0,0]} />
        </BarChart>
      </ResponsiveContainer>
    

        
    </div>
  )
}
