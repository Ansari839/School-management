import Image from "next/image";
import React from "react";

export default function FormModal({ type }) {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-primary"
      : type === "update"
      ? "bg-secondary"
      : "bg-main";
  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
      >
        <Image src={`/${type}.png`} alt={type} width={16} height={16} />
        {/* Open Modal */}
      </button>
    </>
  );
}
