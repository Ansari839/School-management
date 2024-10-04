import BigCalendar from "@/app/components/Calender/BigCalendar";
import Image from "next/image";
import React from "react";

export default function TeacherProfile() {
  return (
    <div className="flex flex-1 flex-col gap-4 xl:flex-row">
      {/* Left */}
      <div className="w-full xl:2/3">
        {/* Top */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Teacher Info Card */}
          <div className="bg-primary py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Teacher Profile"
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl  font-semibold">Abdullah</h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dodlor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full flex items-center gap-2">
                  <Image src="/blood.png" alt="blood" width={14} height={14} />
                  <span>A+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full flex items-center gap-2">
                  <Image src="/date.png" alt="blood" width={14} height={14} />
                  <span>June 2025</span>
                </div>

                <div className="w-full md:w-1/3 lg:w-full flex items-center gap-2">
                  <Image src="/mail.png" alt="blood" width={14} height={14} />
                  <span>user@gmail.com</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full flex items-center gap-2">
                  <Image src="/phone.png" alt="blood" width={14} height={14} />
                  <span>+92 331-8899779</span>
                </div>
              </div>
            </div>
          </div>
          {/* Small Cards */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            {/* Cards */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:[45%] 2xl:w-[48%]">
              <Image
                src="/singleAttendance.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>
            {/* Cards */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:[45%] 2xl:w-[48%]">
              <Image
                src="/singleBranch.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">2</h1>
                <span className="text-sm text-gray-400">Branches</span>
              </div>
            </div>
            {/* Cards */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:[45%] 2xl:w-[48%]">
              <Image
                src="/singleLesson.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm text-gray-400">Lessons</span>
              </div>
            </div>
            {/* Cards */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:[45%] 2xl:w-[48%]">
              <Image
                src="/singleClass.png"
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">6</h1>
                <span className="text-sm text-gray-400">Classes</span>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
            <h1>Teacher's Schedule</h1>
            <BigCalendar />
        </div>
      </div>
      {/* Right */}
      <div className="w-full xl:1/3"></div>
    </div>
  );
}
