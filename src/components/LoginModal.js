"use client";

import React, { useState } from "react";
import Swal from "sweetalert2";

export default function LoginModal({ isOpen, onClose }) {
  // state สำหรับสลับโหมดหน้า Login และ Register
  const [isRegister, setIsRegister] = useState(false);

  // state เก็บข้อมูลฟอร์ม Register (เปลี่ยน email เป็น username)
  const [registerForm, setRegisterForm] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
  });

  if (!isOpen) return null;

  // ฟังก์ชันจัดการการพิมพ์ข้อมูล
  const handleRegisterChange = (e) => {
    setRegisterForm({
      ...registerForm,
      [e.target.name]: e.target.value,
    });
  };

  // ฟังก์ชันส่งข้อมูลสมัครสมาชิกไปยัง API
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://api.itdev.cmtc.ac.th/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: registerForm.firstname,
          lastname: registerForm.lastname,
          username: registerForm.username, // ส่ง username ไปยัง API
          password: registerForm.password,
        }),
      });

      if (response.ok) {
        // 1. แจ้งเตือนสำเร็จ
        Swal.fire({
          icon: "success",
          title: "สมัครสมาชิกสำเร็จ!",
          text: "ข้อมูลถูกบันทึกเรียบร้อยแล้ว",
          timer: 2000,
          showConfirmButton: false,
        });

        // 2. ล้างข้อมูลในฟอร์ม
        setRegisterForm({
          firstname: "",
          lastname: "",
          username: "",
          password: "",
        });

        // 3. สลับกลับมาหน้า Login
        setIsRegister(false);
      } else {
        Swal.fire({
          icon: "error",
          title: "เกิดข้อผิดพลาด",
          text: "ไม่สามารถบันทึกข้อมูลได้ โปรดลองอีกครั้ง",
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-3xl bg-[#e4ebed] p-8 shadow-2xl">
        
        {/* ปุ่มปิด Modal (X) */}
        <button
          onClick={onClose}
          type="button"
          className="absolute right-6 top-6 text-gray-500 hover:text-gray-800 transition-colors"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Logo M */}
        <div className="mb-6 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#4f50a2] text-3xl font-extrabold text-white shadow-md">
            BAS
          </div>
        </div>

        {isRegister ? (
          /* ==================== ฟอร์มสมัครสมาชิก (REGISTER) ==================== */
          <>
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-bold text-gray-800">สร้างบัญชีใหม่</h2>
              <p className="mt-1 text-sm text-gray-500">เข้าร่วมเป็นส่วนหนึ่งกับเรา เพื่อรับสิทธิพิเศษมากมาย</p>
            </div>

            <form onSubmit={handleRegisterSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">ชื่อ</label>
                  <input
                    type="text"
                    name="firstname"
                    value={registerForm.firstname}
                    onChange={handleRegisterChange}
                    placeholder="ชื่อจริง"
                    required
                    className="w-full rounded-xl border-none bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4f50a2]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">นามสกุล</label>
                  <input
                    type="text"
                    name="lastname"
                    value={registerForm.lastname}
                    onChange={handleRegisterChange}
                    placeholder="นามสกุล"
                    required
                    className="w-full rounded-xl border-none bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4f50a2]"
                  />
                </div>
              </div>

              {/* ปรับแก้ช่องนี้เป็น Username */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ชื่อผู้ใช้ (Username)</label>
                <input
                  type="text"
                  name="username"
                  value={registerForm.username}
                  onChange={handleRegisterChange}
                  placeholder="username"
                  required
                  className="w-full rounded-xl border-none bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4f50a2]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">รหัสผ่าน</label>
                <input
                  type="password"
                  name="password"
                  value={registerForm.password}
                  onChange={handleRegisterChange}
                  placeholder="••••••••"
                  required
                  className="w-full rounded-xl border-none bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4f50a2]"
                />
              </div>

              <button
                type="submit"
                className="mt-4 w-full rounded-xl bg-[#403838] py-3.5 text-sm font-semibold text-white shadow-md hover:bg-[#2b2525] transition-all cursor-pointer"
              >
                สมัครสมาชิก
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
              มีบัญชีอยู่แล้ว?{" "}
              <button
                type="button"
                onClick={() => setIsRegister(false)}
                className="font-semibold text-[#4f50a2] hover:underline cursor-pointer"
              >
                เข้าสู่ระบบ
              </button>
            </p>
          </>
        ) : (
          /* ==================== ฟอร์มเข้าสู่ระบบ (LOGIN) ==================== */
          <>
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-bold text-gray-800">ยินดีต้อนรับกลับมา</h2>
              <p className="mt-1 text-sm text-gray-500">กรุณากรอกข้อมูลเพื่อเข้าสู่ระบบบัญชีของคุณ</p>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ชื่อผู้ใช้ (Username)</label>
                <input
                  type="text"
                  placeholder="username"
                  className="w-full rounded-xl border-none bg-white px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#4f50a2]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">รหัสผ่าน</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-xl border-none bg-white px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#4f50a2]"
                />
              </div>
              <button
                type="submit"
                className="mt-2 w-full rounded-xl bg-[#0f172a] py-3.5 text-sm font-semibold text-white transition-all cursor-pointer"
              >
                เข้าสู่ระบบ
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
              ยังไม่มีบัญชีใช่ไหม?{" "}
              <button
                type="button"
                onClick={() => setIsRegister(true)}
                className="font-semibold text-[#4f50a2] hover:underline cursor-pointer"
              >
                สมัครสมาชิกเลย
              </button>
            </p>
          </>
        )}

      </div>
    </div>
  );
}