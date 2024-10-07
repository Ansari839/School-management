import React from "react";

export default function Pagination() {
  const styles = {
    container: "p-4 flex items-center justify-between text-gray-500",
    button:
      "py-2 px-4 rounded-md text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed",
    activePage: "px-2 rounded-sm bg-primary",
    page: "px-2 rounded-sm",
  };

  return (
    <div className={styles.container}>
      <button disabled className={`${styles.button} bg-slate-200`}>
        Prev
      </button>
      <div className="flex items-center gap-2 text-sm">
        <button className={styles.activePage}>1</button>
        <button className={styles.page}>2</button>
        <button className={styles.page}>3</button>
      </div>
      <button className={`${styles.button} bg-slate-200`}>Next</button>
    </div>
  );
}
