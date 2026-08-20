"use client";

import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const API_URL = "https://api.itdev.cmtc.ac.th/users";

export default function UsersPage() {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error(`Status ${response.status}`);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      setIsError(true);
      await Swal.fire({
        icon: "error",
        title: "เกิดข้อผิดพลาด",
        text: "ไม่สามารถโหลดข้อมูลได้",
        background: "#121926",
        color: "#fff",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "ยืนยันการลบข้อมูล?",
      text: "คุณต้องการลบผู้ใช้งานนี้ใช่หรือไม่",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#374151",
      confirmButtonText: "ลบข้อมูล",
      cancelButtonText: "ยกเลิก",
      background: "#121926",
      color: "#fff",
      customClass: {
        popup: "rounded-2xl border border-[#1e293b]",
      },
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch(`${API_URL}/${id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          await Swal.fire({
            icon: "success",
            title: "ลบสำเร็จ!",
            text: "ข้อมูลถูกลบเรียบร้อยแล้ว",
            timer: 1500,
            showConfirmButton: false,
            background: "#121926",
            color: "#fff",
          });
          fetchUsers();
        } else {
          throw new Error("ลบข้อมูลไม่สำเร็จ");
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "ลบไม่สำเร็จ",
          text: "เกิดข้อผิดพลาดในการเชื่อมต่อเซิร์ฟเวอร์",
          background: "#121926",
          color: "#fff",
        });
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0d131d]">
        <div className="flex items-center space-x-3 text-slate-300">
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-indigo-400 border-t-transparent"></div>
          <span>กำลังโหลดข้อมูล...</span>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0d131d]">
        <p className="text-red-400 font-medium">เกิดข้อผิดพลาดในการโหลดข้อมูล</p>
      </div>
    );
  }

  return (
    // เพิ่ม pt-24 (หรือ pt-28) เพื่อเว้นระยะจาก Navbar ลงมา
    <div className="min-h-screen bg-[#0d131d] px-4 pb-8 pt-24 text-slate-200 md:px-8 md:pt-28">
      <div className="mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">รายชื่อสมาชิก</h1>
            <p className="text-sm text-slate-400">
              จัดการสมาชิกทั้งหมดในระบบ ({users.length} คน)
            </p>
          </div>
        </div>

        {users.length === 0 ? (
          <div className="rounded-2xl bg-[#121926] p-12 text-center shadow-lg border border-[#1e293b]">
            <p className="text-slate-400">ยังไม่มีข้อมูลสมาชิกในระบบ</p>
          </div>
        ) : (
          <>
            {/* Desktop View: Table */}
            <div className="hidden md:block overflow-hidden rounded-2xl border border-[#1e293b] bg-[#121926] shadow-xl">
              <table className="w-full text-left text-sm text-slate-300">
                <thead className="bg-[#182232] text-xs font-semibold uppercase text-slate-400 border-b border-[#1e293b]">
                  <tr>
                    <th className="px-6 py-4 text-center w-16">ลำดับ</th>
                    <th className="px-6 py-4">ชื่อ</th>
                    <th className="px-6 py-4">นามสกุล</th>
                    <th className="px-6 py-4">Username / อีเมล</th>
                    <th className="px-6 py-4 text-center w-40">จัดการ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1e293b]">
                  {users.map((user, index) => (
                    <tr
                      key={user.id}
                      className="transition-colors hover:bg-[#1c273a]"
                    >
                      <td className="px-6 py-4 text-center font-medium text-slate-400">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 font-medium text-white">
                        {user.firstname}
                      </td>
                      <td className="px-6 py-4 text-slate-300">{user.lastname}</td>
                      <td className="px-6 py-4 text-slate-400 font-mono text-xs">
                        {user.username}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <button
                            onClick={() => router.push(`/users/edit/${user.id}`)}
                            className="rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3 py-1.5 text-xs font-semibold transition-all hover:bg-amber-500 hover:text-slate-900"
                          >
                            แก้ไข
                          </button>
                          <button
                            onClick={() => handleDelete(user.id)}
                            className="rounded-lg bg-red-500/20 text-red-300 border border-red-500/30 px-3 py-1.5 text-xs font-semibold transition-all hover:bg-red-600 hover:text-white"
                          >
                            ลบ
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile View: Cards */}
            <div className="grid gap-4 md:hidden">
              {users.map((user, index) => (
                <div
                  key={user.id}
                  className="rounded-xl border border-[#1e293b] bg-[#121926] p-4 shadow-lg"
                >
                  <div className="flex items-start justify-between border-b border-[#1e293b] pb-3 mb-3">
                    <span className="rounded-full bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 text-xs font-semibold text-indigo-400">
                      #{index + 1}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      ID: {user.id}
                    </span>
                  </div>
                  
                  <div className="space-y-1.5 mb-4">
                    <p className="text-base font-semibold text-white">
                      {user.firstname} {user.lastname}
                    </p>
                    <p className="text-xs text-slate-400 font-mono">
                      {user.username}
                    </p>
                  </div>

                  <div className="flex gap-2 pt-2 border-t border-[#1e293b]">
                    <button
                      onClick={() => router.push(`/users/edit/${user.id}`)}
                      className="flex-1 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 py-2 text-center text-xs font-semibold transition-colors hover:bg-amber-500 hover:text-slate-900"
                    >
                      แก้ไข
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="flex-1 rounded-lg bg-red-500/20 text-red-300 border border-red-500/30 py-2 text-center text-xs font-semibold transition-colors hover:bg-red-600 hover:text-white"
                    >
                      ลบ
                    </button>
                  </div>
                </div>

              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}