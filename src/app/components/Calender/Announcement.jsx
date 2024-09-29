import React from "react";

export default function Announcement() {
  const announcements = [
    {
      title: "Lorem ipsum dolor, sit",
      date: "2025-01-01",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis officia sed eius aut cupiditate doloremque tenetur aliquam officiis voluptates id impedit, ab beatae recusandae ipsa suscipit. Similique, voluptatibus laboriosam.",
    },
    {
      title: "Lorem ipsum dolor, sit",
      date: "2025-01-01",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis officia sed eius aut cupiditate doloremque tenetur aliquam officiis voluptates id impedit, ab beatae recusandae ipsa suscipit. Similique, voluptatibus laboriosam.",
    },
    {
      title: "Lorem ipsum dolor, sit",
      date: "2025-01-01",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis officia sed eius aut cupiditate doloremque tenetur aliquam officiis voluptates id impedit, ab beatae recusandae ipsa suscipit. Similique, voluptatibus laboriosam.",
    },
  ];

  return (
    <div className="bg-white p-4 rounded-md ">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-black">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>

      {/* Mapping through announcements */}
      {announcements.map((announcement, index) => (
        <div key={index} className="flex flex-col gap-4 mt-4">
          <div className="bg-primary rounded-md p-4">
            <div className="flex items-center justify-between">
              <h2>{announcement.title}</h2>
              <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                {announcement.date}
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              {announcement.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
