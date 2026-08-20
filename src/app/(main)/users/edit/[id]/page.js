"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Swal from "sweetalert2";

const API_URL = "https://api.itdev.cmtc.ac.th/users";

export default function FormEdit() {
  const params = useParams();
  const router = useRouter();
  const id = params.id;

  // ============================================================
  // แก้ที่ 1: hook ทุกตัวต้องอยู่บนสุด ห้ามมี return มาคั่นกลาง
  // ============================================================
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [form, setForm] = useState({
    txt_firstname: "",
    txt_lastname: "",
    txt_username: "",
    txt_password: "",
  });

  useEffect(() => {
    fetchUser();
  }, [id]);

  // ============================================================
  // แก้ที่ 2: ดึงเฉพาะ id ที่กำลังแก้ไข แล้วเติมค่าลงฟอร์ม
  // ============================================================
  const fetchUser = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await fetch(`${API_URL}/${id}`);
      if (!response.ok) throw new Error(`Status ${response.status}`);
      const data = await response.json();

      setForm({
        txt_firstname: data.firstname ?? "",
        txt_lastname: data.lastname ?? "",
        txt_username: data.username ?? "",
        txt_password: "", // ไม่ดึงรหัสผ่านเดิมกลับมาแสดง
      });
    } catch (error) {
      setIsError(true);
      await Swal.fire({ icon: "warning", title: "ไม่สามารถโหลดข้อมูลได้" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    if (!form.txt_firstname.trim()) {
      Swal.fire({
        icon: "warning",
        title: "กรุณาระบุชื่อ",
        text: "กรุณากรอกชื่อ",
        confirmButtonText: "ตกลง",
      });
      return false;
    }

    if (!form.txt_lastname.trim()) {
      Swal.fire({
        icon: "warning",
        title: "กรุณาระบุนามสกุล",
        text: "กรุณากรอกนามสกุล",
        confirmButtonText: "ตกลง",
      });
      return false;
    }

    if (!form.txt_username.trim()) {
      Swal.fire({
        icon: "warning",
        title: "กรุณาระบุ Username",
        text: "กรุณากรอก Username",
        confirmButtonText: "ตกลง",
      });
      return false;
    }

    return true;
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setIsSaving(true);

      // ถ้าไม่ได้กรอกรหัสผ่านใหม่ จะไม่ส่งฟิลด์นี้ไป
      // ป้องกันการทับรหัสผ่านเดิมด้วยค่าว่าง
      const payload = {
        firstname: form.txt_firstname,
        lastname: form.txt_lastname,
        username: form.txt_username,
      };
      if (form.txt_password) {
        payload.password = form.txt_password;
      }

      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      // ============================================================
      // แก้ที่ 4: ประกาศ result ก่อนใช้งาน
      // .catch(() => ({})) กันกรณี server ไม่ได้ส่ง JSON กลับมา
      // ============================================================
      const result = await response.json().catch(() => ({}));

      if (response.ok) {
        await Swal.fire({
          icon: "success",
          title: "บันทึกสำเร็จ!",
          text: "ปรับปรุงข้อมูลผู้ใช้เรียบร้อยแล้ว",
          confirmButtonColor: "#2E75B6",
        });

        router.push("/users"); // กลับไปหน้ารายชื่อ
        return;
      }

      if (response.status === 400) {
        await Swal.fire({
          icon: "warning",
          title: `ข้อมูลไม่ถูกต้อง (status: ${response.status})`,
          text: result.message || "เกิดข้อผิดพลาด",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#fecc00",
        });
      } else if (response.status >= 500) {
        await Swal.fire({
          icon: "error", // แก้ที่ 5: เดิมพิมพ์เป็น con
          title: `เกิดข้อผิดพลาดที่เซิร์ฟเวอร์ (status: ${response.status})`,
          text: result.message || "เกิดข้อผิดพลาด",
          confirmButtonText: "ตกลง",
          confirmButtonColor: "#fe0505",
        });
      } else {
        // แก้ที่ 6: ดักกรณีที่เหลือ เช่น 401 / 403 / 404
        await Swal.fire({
          icon: "error",
          title: `บันทึกไม่สำเร็จ (status: ${response.status})`,
          text: result.message || "เกิดข้อผิดพลาด",
          confirmButtonText: "ตกลง",
        });
      }
    } catch (error) {
      // เข้าที่นี่เฉพาะตอนยิง request ไม่ถึง server เลย
      await Swal.fire({
        icon: "warning",
        title: "ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้",
        text: "กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ต แล้วลองใหม่อีกครั้ง",
        confirmButtonText: "ตกลง",
        confirmButtonColor: "#fc006dcc",
      });
    } finally {
      setIsSaving(false);
    }
  };

  // ============================================================
  // early return ย้ายลงมาไว้ตรงนี้ หลัง hook ทั้งหมดถูกเรียกครบแล้ว
  // ============================================================
  if (isLoading) return <p className="p-6">กำลังโหลดข้อมูล...</p>;
  if (isError) return <p className="p-6">เกิดข้อผิดพลาดในการโหลดข้อมูล</p>;

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
          <h1 className="text-2xl font-bold text-gray-800">แก้ไขข้อมูลบัญชี {id }</h1>
          <p className="mt-1 text-sm text-gray-500">
            เข้าร่วมเป็นส่วนหนึ่งกับเรา เพื่อรับสิทธิพิเศษมากมาย
          </p>
        </div>

        {/* ฟอร์มสมัครสมาชิก */}
        <form onSubmit={handleUpdate} className="space-y-4">
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