"use client";

import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const API_URL = "https://api.itdev.cmtc.ac.th/users";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // State สำหรับการแบ่งหน้า (Pagination)
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // แสดง 10 คนต่อหน้า

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
      setCurrentPage(1); // รีเซ็ตกลับไปหน้า 1 เมื่อโหลดข้อมูลใหม่
    } catch (error) {
      setIsError(true);
      await Swal.fire({
        icon: "error",
        title: "เกิดข้อผิดพลาด",
        text: "ไม่สามารถโหลดข้อมูลสมาชิกได้",
        confirmButtonColor: "#4f50a2",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // คำนวณข้อมูลที่จะแสดงในหน้าปัจจุบัน
  const totalPages = Math.ceil(users.length / itemsPerPage);
  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // ฟังก์ชันลบข้อมูล
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "ยืนยันการลบ?",
      text: "คุณต้องการลบผู้ใช้งานนี้ใช่หรือไม่!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "ใช่, ลบเลย!",
      cancelButtonText: "ยกเลิก",
    });

    if (result.isConfirmed) {
      try {
        const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
        if (res.ok) {
          Swal.fire({
            icon: "success",
            title: "ลบสำเร็จ!",
            text: "ลบข้อมูลผู้ใช้งานเรียบร้อยแล้ว",
            timer: 1500,
            showConfirmButton: false,
          });
          fetchUsers();
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "เกิดข้อผิดพลาด",
          text: "ไม่สามารถลบข้อมูลได้",
        });
      }
    }
  };

  // ฟังก์ชันแก้ไข
  const handleEdit = (id) => {
    Swal.fire({
      icon: "info",
      title: "แก้ไขข้อมูล",
      text: `กำลังเปิดหน้าจัดการสำหรับ User ID: ${id}`,
      confirmButtonColor: "#4f50a2",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1b1035] via-[#120a27] to-[#0a0518] text-white p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 bg-[#1e153b]/80 border border-indigo-500/20 p-6 rounded-2xl backdrop-blur-md shadow-xl">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold flex items-center gap-3">
              <span>👥</span> รายชื่อสมาชิกในระบบ
            </h1>
            <p className="text-slate-400 text-sm mt-1">
              จัดการและตรวจสอบข้อมูลผู้ใช้งานทั้งหมด (แสดง 10 คน/หน้า)
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3 py-1.5 bg-indigo-500/20 text-indigo-300 text-xs font-semibold rounded-full border border-indigo-500/30">
              สมาชิกทั้งหมด: {users.length} คน
            </span>
            <button
              onClick={fetchUsers}
              className="px-4 py-2 bg-indigo-600/80 hover:bg-indigo-600 text-white rounded-xl text-sm font-medium transition-all shadow-md active:scale-95"
            >
              🔄 รีเฟรช
            </button>
          </div>
        </div>

        {/* State 1: Loading */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-20 bg-[#1e153b]/40 rounded-2xl border border-indigo-500/10">
            <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-slate-300 font-medium animate-pulse">กำลังโหลดข้อมูลสมาชิก...</p>
          </div>
        )}

        {/* State 2: Error */}
        {!isLoading && isError && (
          <div className="text-center py-16 bg-red-500/10 border border-red-500/20 rounded-2xl">
            <p className="text-red-400 font-semibold mb-4">❌ เกิดข้อผิดพลาดในการโหลดข้อมูล</p>
            <button
              onClick={fetchUsers}
              className="px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white rounded-xl text-sm font-medium transition-all shadow-md"
            >
              ลองใหม่อีกครั้ง
            </button>
          </div>
        )}

        {/* State 3: Empty Data */}
        {!isLoading && !isError && users.length === 0 && (
          <div className="text-center py-16 bg-[#1e153b]/40 border border-indigo-500/10 rounded-2xl">
            <p className="text-slate-400">📭 ยังไม่มีข้อมูลสมาชิกในระบบ</p>
          </div>
        )}

        {/* State 4: Data Content */}
        {!isLoading && !isError && users.length > 0 && (
          <>
            {/* Desktop View: ตาราง */}
            <div className="hidden md:block overflow-hidden rounded-2xl border border-indigo-500/20 bg-[#1e153b]/80 backdrop-blur-md shadow-2xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-indigo-950/60 text-indigo-200 text-sm border-b border-indigo-500/20">
                    <th className="p-4 text-center w-16">#</th>
                    <th className="p-4">ชื่อ</th>
                    <th className="p-4">นามสกุล</th>
                    <th className="p-4">Username</th>
                    <th className="p-4 text-center w-40">จัดการ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-indigo-500/10 text-sm text-slate-200">
                  {currentUsers.map((user, index) => (
                    <tr key={user.id || index} className="hover:bg-indigo-500/10 transition-colors">
                      <td className="p-4 text-center font-medium text-slate-400">
                        {indexOfFirstUser + index + 1}
                      </td>
                      <td className="p-4 font-semibold text-white">{user.firstname}</td>
                      <td className="p-4">{user.lastname}</td>
                      <td className="p-4">
                        <span className="px-2.5 py-1 bg-slate-800 text-indigo-300 rounded-lg text-xs border border-indigo-500/20">
                          @{user.username}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            onClick={() => handleEdit(user.id)}
                            className="px-3 py-1.5 bg-amber-500/20 text-amber-300 border border-amber-500/30 hover:bg-amber-500 hover:text-slate-900 rounded-lg text-xs font-semibold transition-all"
                          >
                            ✏️ แก้ไข
                          </button>
                          <button
                            onClick={() => handleDelete(user.id)}
                            className="px-3 py-1.5 bg-rose-500/20 text-rose-300 border border-rose-500/30 hover:bg-rose-600 hover:text-white rounded-lg text-xs font-semibold transition-all"
                          >
                            🗑️ ลบ
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile View: การ์ด */}
            <div className="grid grid-cols-1 gap-4 md:hidden">
              {currentUsers.map((user, index) => (
                <div
                  key={user.id || index}
                  className="bg-[#1e153b]/90 border border-indigo-500/20 rounded-2xl p-5 shadow-lg flex flex-col gap-3"
                >
                  <div className="flex justify-between items-start border-b border-indigo-500/10 pb-3">
                    <span className="text-xs font-bold px-2.5 py-1 bg-indigo-500/20 text-indigo-300 rounded-md">
                      ลำดับที่ #{indexOfFirstUser + index + 1}
                    </span>
                    <span className="text-xs text-indigo-300 bg-slate-800 px-2 py-1 rounded-lg border border-indigo-500/20">
                      @{user.username}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs text-slate-400">ชื่อ - นามสกุล</p>
                    <p className="text-base font-bold text-white">
                      {user.firstname} {user.lastname}
                    </p>
                  </div>

                  <div className="flex gap-2 pt-2 border-t border-indigo-500/10">
                    <button
                      onClick={() => handleEdit(user.id)}
                      className="flex-1 py-2 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-xl text-xs font-semibold text-center"
                    >
                      ✏️ แก้ไข
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="flex-1 py-2 bg-rose-500/20 text-rose-300 border border-rose-500/30 rounded-xl text-xs font-semibold text-center"
                    >
                      🗑️ ลบ
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* ==================== PAGINATION BAR (แถบเปลี่ยนหน้า) ==================== */}
            {totalPages > 1 && (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 bg-[#1e153b]/60 border border-indigo-500/20 p-4 rounded-2xl">
                <p className="text-sm text-slate-400">
                  แสดงลำดับที่ <span className="text-indigo-400 font-semibold">{indexOfFirstUser + 1}</span> ถึง{" "}
                  <span className="text-indigo-400 font-semibold">
                    {Math.min(indexOfLastUser, users.length)}
                  </span>{" "}
                  จากทั้งหมด <span className="text-indigo-400 font-semibold">{users.length}</span> คน
                </p>

                <div className="flex items-center gap-2">
                  {/* ปุ่มย้อนกลับ */}
                  <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-950/80 border border-indigo-500/30 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-indigo-600 transition-all"
                  >
                    ◀ ก่อนหน้า
                  </button>

                  {/* เลขหน้า */}
                  <div className="flex gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                          currentPage === page
                            ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                            : "bg-indigo-950/40 text-slate-400 border border-indigo-500/20 hover:bg-indigo-500/20 hover:text-white"
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  {/* ปุ่มถัดไป */}
                  <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-950/80 border border-indigo-500/30 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-indigo-600 transition-all"
                  >
                    ถัดไป ▶
                  </button>
                </div>
              </div>
            )}
          </>
        )}

      </div>
    </div>
  );
}