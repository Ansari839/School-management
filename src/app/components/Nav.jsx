import Image from "next/image";
import React from "react";

export default function Nav() {
  const styles = {
    container: "flex items-center justify-between p-4",
    search: {
      container:
        "hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2",
      input: "w-[200px] p-2 bg-transparent outline-none",
      iconSize: 14,
    },
    icons: {
      container: "flex items-center gap-6 justify-end w-full",
      iconButton:
        "bg-white rounded-full h-7 flex items-center justify-center cursor-pointer",
      announcement: {
        relativeContainer:
          "bg-white rounded-full h-7 flex items-center justify-center cursor-pointer relative",
        notificationBadge:
          "absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs",
      },
    },
    userProfile: {
      container: "flex flex-col",
      name: "text-xs leading-3 font-medium",
      role: "text-[10px] text-gray-500 text-right",
      avatarSize: 36,
    },
  };

  return (
    <div className={styles.container}>
      {/* Search Bar */}
      <div className={styles.search.container}>
        <Image
          src="/search.png"
          alt="search"
          width={styles.search.iconSize}
          height={styles.search.iconSize}
        />
        <input
          type="text"
          placeholder="search...."
          className={styles.search.input}
        />
      </div>
      {/* Icon And User Profile */}
      <div className={styles.icons.container}>
        <div className={styles.icons.iconButton}>
          <Image src="/message.png" alt="message" width={20} height={20} />
        </div>
        <div className={styles.icons.announcement.relativeContainer}>
          <Image
            src="/announcement.png"
            alt="announcement"
            width={20}
            height={20}
          />
          <div className={styles.icons.announcement.notificationBadge}>1</div>
        </div>
        <div className={styles.userProfile.container}>
          <span className={styles.userProfile.name}>ABD</span>
          <span className={styles.userProfile.role}>Admin</span>
        </div>
        <Image
          src="/avatar.png"
          alt="user image"
          width={styles.userProfile.avatarSize}
          height={styles.userProfile.avatarSize}
          className="rounded-full"
        />
      </div>
    </div>
  );
}
