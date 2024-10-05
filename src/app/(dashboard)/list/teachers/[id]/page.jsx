import Announcement from "@/app/components/Calender/Announcement";
import BigCalendar from "@/app/components/Calender/BigCalendar";
import PerfomanceChart from "@/app/components/Charts/Perfomance";
import FormModal from "@/app/components/FormModal";
import { role } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TeacherProfile() {
  const teacherInfo = {
    name: "Abdullah",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    profileImage:
      "https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    details: [
      { icon: "/blood.png", label: "A+", alt: "Blood Group" },
      { icon: "/date.png", label: "June 2025", alt: "Date" },
      { icon: "/mail.png", label: "user@gmail.com", alt: "Email" },
      { icon: "/phone.png", label: "+92 331-8899779", alt: "Phone" },
    ],
  };

  const cardData = [
    { imgSrc: "/singleAttendance.png", title: "90%", subtitle: "Attendance" },
    { imgSrc: "/singleBranch.png", title: "2", subtitle: "Branches" },
    { imgSrc: "/singleLesson.png", title: "6", subtitle: "Lessons" },
    { imgSrc: "/singleClass.png", title: "6", subtitle: "Classes" },
  ];

  const shortcuts = [
    { href: "/", label: "Classes", bgColor: "bg-primarylight" },
    { href: "/", label: "Students", bgColor: "bg-secondarylight" },
    { href: "/", label: "Lessons", bgColor: "bg-mainlight" },
    { href: "/", label: "Exams", bgColor: "bg-primarylight" },
    { href: "/", label: "Assignments", bgColor: "bg-secondarylight" },
  ];

  return (
    <div className="flex flex-1 p-4 flex-col gap-4 xl:flex-row">
      {/* Left */}
      <div className="w-full xl:w-2/3">
        {/* Top */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Teacher Info Card */}
          <div className="bg-primary py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src={teacherInfo.profileImage}
                alt="Teacher Profile"
                width={144}
                height={144}
                className="w-40 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <div className="flex items-center gap-4">
                <h1 className="text-xl font-semibold">{teacherInfo.name}</h1>
                {role === "admin" && (
                  <FormModal
                    table="teacher"
                    type="update"
                    data={{
                      id: 1,
                      username: "deanguerrero",
                      email: "deanguerrero@gmail.com",
                      password: "password",
                      firstName: "Dean",
                      lastName: "Guerrero",
                      phone: "+1 234 567 89",
                      address: "1234 Main St, Anytown, USA",
                      bloodType: "A+",
                      dateOfBirth: "2000-01-01",
                      sex: "male",
                      img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200",
                    }}
                  />
                )}
                <p className="text-sm text-gray-500">
                  {teacherInfo.description}
                </p>
              </div>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                {teacherInfo.details.map((detail, index) => (
                  <div
                    key={index}
                    className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2"
                  >
                    <Image
                      src={detail.icon}
                      alt={detail.alt}
                      width={14}
                      height={14}
                    />
                    <span>{detail.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Small Cards */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]"
              >
                <Image
                  src={card.imgSrc}
                  alt={card.subtitle}
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <div>
                  <h1 className="text-xl font-semibold">{card.title}</h1>
                  <span className="text-sm text-gray-400">{card.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Bottom */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1>Teacher's Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      {/* Right */}
      <div className="w-full xl:w-1/3">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            {shortcuts.map((shortcut, index) => (
              <Link
                key={index}
                href={shortcut.href}
                className={`p-3 rounded-md ${shortcut.bgColor}`}
              >
                {shortcut.label}
              </Link>
            ))}
          </div>
        </div>
        <PerfomanceChart />
        <Announcement />
      </div>
    </div>
  );
}
