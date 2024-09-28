import Image from "next/image";
import React from "react";

export default function UserCard({ type }) {
  const styles = {
    container:
      "rounded-2xl odd:bg-primary even:bg-main p-4 flex-1 min-w-[130px]",
    header: {
      container: "flex justify-between items-center",
      yearBadge: "text-[10px] bg-white px-2 py-1 rounded-full text-green-600",
      iconSize: 20,
    },
    stats: {
      number: "text-2xl font-semibold my-4",
      label: "capitalize text-sm font-medium text-gray-500",
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.header.container}>
        <span className={styles.header.yearBadge}>2024/25</span>
        <Image
          src="/more.png"
          alt="more"
          width={styles.header.iconSize}
          height={styles.header.iconSize}
        />
      </div>
      <h1 className={styles.stats.number}>1,234</h1>
      <h2 className={styles.stats.label}>{type}s</h2>
    </div>
  );
}
