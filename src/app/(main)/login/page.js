"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const LOGIN_URL = "https://api.itdev.cmtc.ac.th/auth/login";

// ตั้งค่า SweetAlert2 ธีมมืดให้เข้ากับ UI
const DarkSwal = Swal.mixin({
  background: "#121926",
  color: "#fff",
  customClass: {
    popup: "rounded-2xl border border-[#1e293b] shadow-2xl",
  },
});

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

    if (!form.txt_username.trim() || !form.txt_password.trim()) {
      DarkSwal.fire({
        icon: "warning",
        title: "กรอกข้อมูลไม่ครบถ้วน",
        text: "กรุณากรอก Username และ รหัสผ่านให้ครบถ้วน",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#3b82f6",
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

        window.dispatchEvent(new Event("auth-change"));

        await DarkSwal.fire({
          icon: "success",
          title: "เข้าสู่ระบบสำเร็จ",
          timer: 1200,
          showConfirmButton: false,
        });

        router.push("/users");
        return;
      }

      if (response.status === 401) {
        await DarkSwal.fire({
          icon: "error",
          title: "เข้าสู่ระบบไม่สำเร็จ",
          text: result.message || "Username หรือรหัสผ่านไม่ถูกต้อง",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#ef4444",
        });
      } else if (response.status === 400) {
        await DarkSwal.fire({
          icon: "warning",
          title: `ข้อมูลไม่ถูกต้อง (status: ${response.status})`,
          text: result.message || "กรุณาตรวจสอบข้อมูลที่กรอก",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#f59e0b",
        });
      } else if (response.status >= 500) {
        await DarkSwal.fire({
          icon: "error",
          title: `เกิดข้อผิดพลาดที่เซิร์ฟเวอร์ (status: ${response.status})`,
          text: result.message || "กรุณาลองใหม่ภายหลัง",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#ef4444",
        });
      } else {
        await DarkSwal.fire({
          icon: "error",
          title: `เข้าสู่ระบบไม่สำเร็จ (status: ${response.status})`,
          text: result.message || "เกิดข้อผิดพลาด",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#ef4444",
        });
      }
    } catch (error) {
      await DarkSwal.fire({
        icon: "warning",
        title: "ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้",
        text: "กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ต แล้วลองใหม่อีกครั้ง",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#f59e0b",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-[#0d131d] px-4 py-12 text-slate-200">
      {/* เอฟเฟกต์แสง Background ด้านหลัง */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]"></div>

      <div className="w-full max-w-md rounded-2xl border border-[#1e293b] bg-[#121926] p-8 shadow-2xl backdrop-blur-xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-500 font-bold text-white shadow-lg shadow-blue-500/30 text-xl">
            BAS
          </div>
          <h1 className="text-2xl font-bold text-white">เข้าสู่ระบบ</h1>
          <p className="mt-2 text-sm text-slate-400">
            กรุณากรอก Username และรหัสผ่านของคุณ
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-300">
              Username
            </label>
            <input
              type="text"
              name="txt_username"
              value={form.txt_username}
              onChange={handleChange}
              autoComplete="username"
              className="w-full rounded-xl border border-[#1e293b] bg-[#0b0f19] px-4 py-3 text-sm text-white placeholder-slate-500 transition-all focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="กรอก username ของคุณ"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-300">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="txt_password"
                value={form.txt_password}
                onChange={handleChange}
                autoComplete="current-password"
                className="w-full rounded-xl border border-[#1e293b] bg-[#0b0f19] px-4 py-3 pr-16 text-sm text-white placeholder-slate-500 transition-all focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="กรอกรหัสผ่านของคุณ"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-400 hover:text-blue-400 transition-colors"
              >
                {showPassword ? "ซ่อน" : "แสดง"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="mt-2 flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:from-blue-500 hover:to-indigo-500 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                <span>กำลังเข้าสู่ระบบ...</span>
              </div>
            ) : (
              "เข้าสู่ระบบ"
            )}
          </button>

          <p className="pt-4 text-center text-sm text-slate-400">
            ยังไม่มีบัญชี?{" "}
            <button
              type="button"
              onClick={() => router.push("/register")}
              className="font-medium text-blue-400 hover:text-blue-300 hover:underline transition-colors"
            >
              สมัครสมาชิก
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}