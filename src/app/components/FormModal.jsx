"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function FormModal({ type, id, table }) {
  const [open, setOpen] = useState(false);
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-main"
      : type === "update"
      ? "bg-secondary"
      : "bg-primary";

  const Form = () => {
    return type === "delete" && id ? (
      <form action="" className="p-4 flex flex-col gap-4">
        <span className="text-center font-medium">
          All data will be lost. Are you sure you want to delete this {table}?
        </span>
        <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center">
          Delete
        </button>
      </form>
    ) : (
      "create or update form"
    );
  };

  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
        onClick={() => setOpen(true)}
      >
        <Image src={`/${type}.png`} alt={type} width={16} height={16} />
        {/* Open Modal */}
      </button>
      {open && (
        <div className="w-screen h-screen absolute top-0 left-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white rounded-md p-4 relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            <Form />
            {/* Close Button */}
            <div
              className="absolute top-4 right-4 cursor-pointer z-50"
              onClick={() => setOpen(false)}
            >
              <Image src="/close.png" alt="close" width={14} height={14} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
