"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

import FormModal from "@/app/components/FormModal";
import Pagination from "@/app/components/Pagination";
import Table from "@/app/components/Table";
import TableSearch from "@/app/components/TableSearch";
import { role } from "@/app/lib/data"; // static role

export default function StudentList() {
  const [studentsData, setStudentsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const columns = [
    { header: "Info", accessor: "info" },
    {
      header: "Student ID",
      accessor: "studentId",
      className: "hidden md:table-cell",
    },
    {
      header: "Grade",
      accessor: "grade",
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

  const fetchStudents = async () => {
    try {
      const res = await axios.get("/api/get-student");
      const data = res.data.map((item) => ({
        ...item,
        studentId: item.id.slice(0, 6), // Optional short ID
        grade: item.grade?.level ?? "N/A", // Show grade level
        photo: item.img, // For Image tag
      }));
      setStudentsData(data);
    } catch (err) {
      console.error(err);
      setError("Failed to load students");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const renderRow = (item) => {
    return (
      <tr
        key={item.id}
        className="border-b border-gray-200 even:bg-slate-50 hover:bg-primary "
      >
        <td className="flex items-center gap-4 p-4">
          <Image
            src={item.photo || "/avatar.png"}
            alt="Student Pic"
            height={40}
            width={40}
            className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-xs text-gray-500">{item.email}</p>
          </div>
        </td>
        <td className="hidden md:table-cell">{item.studentId}</td>
        <td className="hidden md:table-cell">{item.grade}</td>
        <td className="hidden md:table-cell">{item.phone}</td>
        <td className="hidden md:table-cell">{item.address}</td>
        <td>
          <div className="flex items-center gap-2">
            <Link href={`/list/students/${item.id}`}>
              <button className="w-7 h-7 flex items-center justify-center rounded-full bg-primary">
                <Image src="/view.png" alt="view" width={16} height={16} />
              </button>
            </Link>
            {role === "admin" && (
              <FormModal type="delete" table="student" id={item.id} />
            )}
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Students</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-main">
              <Image src="/filter.png" alt="filter" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-main">
              <Image src="/sort.png" alt="sort" width={14} height={14} />
            </button>
            {role === "admin" && (
              <FormModal type="create" table="student" />
            )}
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div>
        {loading ? (
          <p className="p-4">Loading students...</p>
        ) : error ? (
          <p className="text-red-500 p-4">{error}</p>
        ) : (
          <Table columns={columns} renderRow={renderRow} data={studentsData} />
        )}
      </div>

      <div>
        <Pagination />
      </div>
    </div>
  );
}
