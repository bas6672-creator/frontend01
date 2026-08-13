"use client";

import React, { useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";

export default function FormRegister() {
  const [form, setForm] = useState({
    txt_firstname: "",
    txt_lastname: "",
    txt_username: "",
    txt_password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://api.itdev.cmtc.ac.th/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: form.txt_firstname,
          lastname: form.txt_lastname,
          username: form.txt_username,
          password: form.txt_password,
        }),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "สมัครสมาชิกสำเร็จ",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "เกิดข้อผิดพลาด",
          text: "ไม่สามารถบันทึกข้อมูลได้",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "เกิดข้อผิดพลาด",
        text: "ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้",
      });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 p-4">
      {/* Card Container */}
      <div className="relative w-full max-w-md rounded-3xl bg-[#e4ebed] p-8 shadow-2xl">
        
        {/* ปุ่มปิด (X) */}
        <Link
          href="/"
          className="absolute right-6 top-6 text-gray-500 hover:text-gray-800 transition-colors"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </Link>

        {/* Logo Icon 'M' */}
        <div className="mb-6 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#4f50a2] text-3xl font-extrabold text-white shadow-md">
            M
          </div>
        </div>

        {/* หัวข้อ */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800">สร้างบัญชีใหม่</h1>
          <p className="mt-1 text-sm text-gray-500">
            เข้าร่วมเป็นส่วนหนึ่งกับเรา เพื่อรับสิทธิพิเศษมากมาย
          </p>
        </div>

        {/* ฟอร์มสมัครสมาชิก */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* แถว ชื่อ - นามสกุล */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ชื่อ
              </label>
              <input
                type="text"
                name="txt_firstname"
                value={form.txt_firstname}
                onChange={handleChange}
                placeholder="ชื่อจริง"
                required
                className="w-full rounded-xl border-none bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4f50a2]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                นามสกุล
              </label>
              <input
                type="text"
                name="txt_lastname"
                value={form.txt_lastname}
                onChange={handleChange}
                placeholder="นามสกุล"
                required
                className="w-full rounded-xl border-none bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4f50a2]"
              />
            </div>
          </div>

          {/* ช่อง อีเมล / Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              อีเมล
            </label>
            <input
              type="text"
              name="txt_username"
              value={form.txt_username}
              onChange={handleChange}
              placeholder="name@example.com"
              required
              className="w-full rounded-xl border-none bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4f50a2]"
            />
          </div>

          {/* ช่อง รหัสผ่าน */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              รหัสผ่าน
            </label>
            <input
              type="password"
              name="txt_password"
              value={form.txt_password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="w-full rounded-xl border-none bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4f50a2]"
            />
          </div>

          {/* ปุ่ม สมัครสมาชิก */}
          <button
            type="submit"
            className="mt-4 w-full rounded-xl bg-[#403838] py-3.5 text-sm font-semibold text-white shadow-md hover:bg-[#2b2525] transition-all"
          >
            สมัครสมาชิก
          </button>
        </form>

      </div>
    </div>
  );
}