import Image from 'next/image';
import React from 'react'

export default function TableSearch() {
  const styles = {
    container: "flex items-center justify-between p-4",
    search: {
      container:
        " md:flex flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2",
      input: "w-[200px] p-2 bg-transparent outline-none",
      iconSize: 14,
    }
    
  };
  return (
    <div>
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
    </div>
  )
}
