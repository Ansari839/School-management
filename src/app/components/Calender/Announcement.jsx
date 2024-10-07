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

  const styles = {
    container: "bg-white p-4 rounded-md",
    header: "flex items-center justify-between",
    title: "text-xl font-semibold text-black",
    viewAll: "text-xs text-gray-400",
    announcement: "flex flex-col gap-4 mt-4",
    announcementItem: "odd:bg-primary even:bg-main rounded-md p-4",
    announcementHeader: "flex items-center justify-between",
    announcementDate: "text-xs text-gray-400 bg-white rounded-md px-1 py-1",
    announcementDescription: "text-sm text-gray-500 mt-1",
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Announcements</h1>
        <span className={styles.viewAll}>View All</span>
      </div>

      {/* Mapping through announcements */}
      {announcements.map((announcement, index) => (
        <div key={index} className={styles.announcement}>
          <div className={styles.announcementItem}>
            <div className={styles.announcementHeader}>
              <h2>{announcement.title}</h2>
              <span className={styles.announcementDate}>
                {announcement.date}
              </span>
            </div>
            <p className={styles.announcementDescription}>
              {announcement.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
