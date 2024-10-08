import FormModal from "@/app/components/FormModal";
import Pagination from "@/app/components/Pagination";
import Table from "@/app/components/Table";
import TableSearch from "@/app/components/TableSearch";
import { announcementsData, eventsData, role } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function lessonsList() {
  const columns = [
    { header: "Title", accessor: "title" },
    { header: "Class", accessor: "class", className: "hidden md:table-cell" },
    { header: "Date", accessor: "date", className: "hidden md:table-cell" },
    { header: "Actions", accessor: "action" },
  ];

  // renderRow function needs a return statement
  const renderRow = (item) => {
    return (
      <tr
        key={item.id}
        className="border-b border-gray-200 even:bg-slate-50 hover:bg-primary "
      >
        <td className="flex items-center gap-4 p-4">{item.title}</td>
        <td className="hidden md:table-cell">{item.class}</td>
        <td className="hidden md:table-cell">{item.date}</td>
        <td>
          <div className="flex items-center gap-2">
            {role === "admin" && (
              <>
                <FormModal table="announcement" type="update" data={item} />
                <FormModal table="announcement" type="delete" id={item.id} />
              </>
            )}
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* Top */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Classes</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end ">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-main">
              <Image src="/filter.png" alt="filter" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-main">
              <Image src="/sort.png" alt="sort" width={14} height={14} />
            </button>
            {role === "admin" && (
              <FormModal table="announcement" type="create" />
            )}
          </div>
        </div>
      </div>
      {/* List */}
      <div>
        <Table
          columns={columns}
          renderRow={renderRow}
          data={announcementsData}
        />
      </div>
      {/* Pagination */}
      <div>
        <Pagination />
      </div>
    </div>
  );
}
