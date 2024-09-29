import Image from "next/image";
import Link from "next/link";
import React from "react";
import { role } from "../lib/data";

export default function Menu() {
  const styles = {
    container: "mt-4 text-sm bg-white",
    section: {
      base: "flex flex-col gap-2 px-2",
      title: "hidden lg:block text-gray-400 font-light py-4",
    },
    item: {
      link: "flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-1.5 rounded-md hover:bg-primary",
      title: "hidden lg:block",
      iconSize: 20, // Setting the size here for consistency
    },
  };

  const menuItems = [
    {
      title: "MENU",
      items: [
        {
          icon: "/home.png",
          label: "Home",
          href: "/",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: "/teacher.png",
          label: "Teachers",
          href: "/dashboard/teacher",
          visible: ["admin", "teacher"],
        },
        {
          icon: "/student.png",
          label: "Students",
          href: "/dashboard/student",
          visible: ["admin", "teacher"],
        },
        {
          icon: "/parent.png",
          label: "Parents",
          href: "/dashboard/parent",
          visible: ["admin", "teacher"],
        },
        {
          icon: "/subject.png",
          label: "Subjects",
          href: "/dashboard/subject",
          visible: ["admin"],
        },
        {
          icon: "/class.png",
          label: "Classes",
          href: "/dashboard/classes",
          visible: ["admin", "teacher"],
        },
        {
          icon: "/lesson.png",
          label: "Lessons",
          href: "/dashboard/lessons",
          visible: ["admin", "teacher"],
        },
        {
          icon: "/exam.png",
          label: "Exams",
          href: "/dashboard/exams",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: "/assignment.png",
          label: "Assignments",
          href: "/dashboard/assignments",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: "/result.png",
          label: "Results",
          href: "/dashboard/results",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: "/attendance.png",
          label: "Attendance",
          href: "/dashboard/attendance",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: "/calendar.png",
          label: "Events",
          href: "/dashboard/events",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: "/message.png",
          label: "Messages",
          href: "/dashboard/messages",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: "/announcement.png",
          label: "Announcements",
          href: "/dashboard/announcements",
          visible: ["admin", "teacher", "student", "parent"],
        },
      ],
    },
    {
      title: "OTHER",
      items: [
        {
          icon: "/profile.png",
          label: "Profile",
          href: "/profile",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: "/setting.png",
          label: "Settings",
          href: "/settings",
          visible: ["admin", "teacher", "student", "parent"],
        },
        {
          icon: "/logout.png",
          label: "Logout",
          href: "/logout",
          visible: ["admin", "teacher", "student", "parent"],
        },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      {menuItems.map((i) => (
        <div className={styles.section.base} key={i.title}>
          <span className={styles.section.title}>{i.title}</span>
          {i.items.map((item) => {
            if (item.visible.includes(role)){
             return (
              <Link
                href={item.href}
                key={item.label}
                className={styles.item.link}
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={styles.item.iconSize}
                  height={styles.item.iconSize}
                />
                <span className={styles.item.title}>{item.label}</span>
              </Link>
            )
            }
          })}
        </div>
      ))}
    </div>
  );
}
