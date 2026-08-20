"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const LOGIN_URL = "https://api.itdev.cmtc.ac.th/auth/login";

export default function LoginPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    txt_username: "",
    txt_password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // 1. ตรวจสอบข้อมูลเบื้องต้นก่อนส่ง Request
    if (!form.txt_username.trim() || !form.txt_password.trim()) {
      Swal.fire({
        icon: "warning",
        title: "กรอกข้อมูลไม่ครบถ้วน",
        text: "กรุณากรอก Username และ รหัสผ่านให้ครบถ้วน",
        confirmButtonText: "ตกลง",
      });
      return;
    }

    try {
      setIsLoading(true);

      const response = await fetch(LOGIN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: form.txt_username,
          password: form.txt_password,
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok) {
        if (result.token) {
          localStorage.setItem("token", result.token);
        }

        if (result.user) {
          localStorage.setItem("user", JSON.stringify(result.user));
        }

        await Swal.fire({
          icon: "success",
          title: "เข้าสู่ระบบสำเร็จ",
          timer: 1200,
          showConfirmButton: false,
        });

        router.push("/users");
        return;
      }

      if (response.status === 401) {
        await Swal.fire({
          icon: "error",
          title: "เข้าสู่ระบบไม่สำเร็จ",
          text: result.message || "Username หรือรหัสผ่านไม่ถูกต้อง",
          confirmButtonText: "ตกลง",
        });
      } else if (response.status === 400) {
        await Swal.fire({
          icon: "warning",
          title: `ข้อมูลไม่ถูกต้อง (status: ${response.status})`,
          text: result.message || "กรุณาตรวจสอบข้อมูลที่กรอก",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#fecc00",
        });
      } else if (response.status >= 500) {
        await Swal.fire({
          icon: "error",
          title: `เกิดข้อผิดพลาดที่เซิร์ฟเวอร์ (status: ${response.status})`,
          text: result.message || "กรุณาลองใหม่ภายหลัง",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#fe0505",
        });
      } else {
        await Swal.fire({
          icon: "error",
          title: `เข้าสู่ระบบไม่สำเร็จ (status: ${response.status})`,
          text: result.message || "เกิดข้อผิดพลาด",
          confirmButtonText: "ตกลง",
        });
      }
    } catch (error) {
      await Swal.fire({
        icon: "warning",
        title: "ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้",
        text: "กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ต แล้วลองใหม่อีกครั้ง",
        confirmButtonText: "ตกลง",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md rounded-lg border bg-white shadow-md">
        {/* Header */}
        <div className="border-b px-6 py-5 text-center">
          <h1 className="text-2xl font-bold text-gray-800">เข้าสู่ระบบ</h1>
          <p className="mt-1 text-sm text-gray-500">
            กรุณากรอก Username และรหัสผ่านของคุณ
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4 p-6">
          <div>
            <label className="mb-1 block text-black">Username</label>
            <input
              type="text"
              name="txt_username"
              value={form.txt_username}
              onChange={handleChange}
              autoComplete="username"
              className="w-full rounded-md border border-black px-4 py-2 text-black"
              placeholder="username"
            />
          </div>

          <div>
            <label className="mb-1 block text-black">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="txt_password"
                value={form.txt_password}
                onChange={handleChange}
                autoComplete="current-password"
                className="w-full rounded-md border border-black px-4 py-2 pr-16 text-black"
                placeholder="password"
              />
              {/* 2. ปุ่มเปิด/ปิดการแสดงรหัสผ่าน */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-blue-600 hover:underline"
              >
                {showPassword ? "ซ่อน" : "แสดง"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-md bg-blue-600 px-5 py-2 text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isLoading ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ"}
          </button>

          <p className="pt-2 text-center text-sm text-gray-600">
            ยังไม่มีบัญชี?{" "}
            <button
              type="button"
              onClick={() => router.push("/register")}
              className="text-blue-600 hover:underline"
            >
              สมัครสมาชิก
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}