import FomrModal from "@/app/components/FormModal";
import Pagination from "@/app/components/Pagination";
import Table from "@/app/components/Table";
import TableSearch from "@/app/components/TableSearch";
import { role, parentsData } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function parentList() {
  const columns = [
    { header: "Info", accessor: "info" },
    {
      header: "Student Names",
      accessor: "students",
      className: "hidden md:table-cell",
    },

    { header: "Phone", accessor: "phone", className: "hidden md:table-cell" },
    {
      header: "Address",
      accessor: "address",
      className: "hidden md:table-cell",
    },
    { header: "Actions", accessor: "action" },
  ];

  // renderRow function needs a return statement
  const renderRow = (item) => {
    return (
      <tr
        key={item.id}
        className="border-b border-gray-200 even:bg-slate-50 hover:bg-primary "
      >
        <td className="flex items-center gap-4 p-4">
          <div className="flex flex-col">
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-xs text-gray-500">{item.email}</p>
          </div>
        </td>
        <td className="hidden md:table-cell">{item.students.join(",")}</td>
        <td className="hidden md:table-cell">{item.phone}</td>
        <td className="hidden md:table-cell">{item.address}</td>
        <td>
          <div className="flex items-center gap-2">
            <Link href={`/list/teachers/${item.id}`}>
              {/* <button className="w-7 h-7 flex items-center justify-center rounded-full bg-primary">
                <Image src="/view.png" alt="view" width={16} height={16} />
              </button> */}
            </Link>
            {role === "admin" && (
              // <button className="w-7 h-7 flex items-center justify-center rounded-full bg-secondary">
              //   <Image src="/delete.png" alt="delete" width={16} height={16} />
              // </button>
              <>
                <FomrModal type="update" table="parent" data={item} />
                <FomrModal type="delete" table="parent" id={item.id} />
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
        <h1 className="hidden md:block text-lg font-semibold">All Parents</h1>
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
              // <button className="w-8 h-8 flex items-center justify-center rounded-full bg-main">
              //   <Image src="/plus.png" alt="add" width={14} height={14} />
              // </button>
              <FomrModal type="create" table="parent" />
            )}
          </div>
        </div>
      </div>
      {/* List */}
      <div>
        <Table columns={columns} renderRow={renderRow} data={parentsData} />
      </div>
      {/* Pagination */}
      <div>
        <Pagination />
      </div>
    </div>
  );
}
