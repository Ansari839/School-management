"use client";
import Image from "next/image";
import React, { useState } from "react";
import TeacherForm from "../forms/TeacherFrom";
import StudentForm from "../forms/StudentForm";

export default function FormModal({ type, id, table, data }) {
  const [open, setOpen] = useState(false);

  const forms = {
    teacher: <TeacherForm type={type} data={data} />,
    student: <StudentForm type={type} data={data} />,
  };

  const styles = {
    button: `${
      type === "create"
        ? "w-8 h-8 bg-main"
        : type === "update"
        ? "w-7 h-7 bg-secondary"
        : "w-7 h-7 bg-primary"
    } flex items-center justify-center rounded-full`,
    modal:
      "w-screen h-screen absolute top-0 left-0 bg-black bg-opacity-60 z-50 flex items-center justify-center",
    modalContent:
      "bg-white rounded-md p-4 relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]",
    closeButton: "absolute top-4 right-4 cursor-pointer z-50",
    deleteForm: "p-4 flex flex-col gap-4",
    deleteMessage: "text-center font-medium",
    deleteButton:
      "bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center",
  };

  const Form = () => {
    if (type === "delete" && id) {
      return (
        <form className={styles.deleteForm}>
          <span className={styles.deleteMessage}>
            All data will be lost. Are you sure you want to delete this {table}?
          </span>
          <button className={styles.deleteButton}>Delete</button>
        </form>
      );
    }
    if (type === "create" || type === "update") {
      return forms[table] || "Form Not Found";
    }
    return "Form Not Found";
  };

  return (
    <>
      <button className={styles.button} onClick={() => setOpen(true)}>
        <Image src={`/${type}.png`} alt={type} width={16} height={16} />
        {/* Open Modal */}
      </button>
      {open && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <Form />
            {/* Close Button */}
            <div className={styles.closeButton} onClick={() => setOpen(false)}>
              <Image src="/close.png" alt="close" width={14} height={14} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
