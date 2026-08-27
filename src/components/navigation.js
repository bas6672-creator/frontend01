"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navigation() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // เช็คสถานะการเลื่อนหน้าจอ (Scroll)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ฟังก์ชันเช็คสถานะ Login จาก Token
  const checkAuth = () => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  };

  useEffect(() => {
    checkAuth();

    // ดักจับ Custom Event เมื่อมีการ Login หรือ Logout
    window.addEventListener("auth-change", checkAuth);
    return () => {
      window.removeEventListener("auth-change", checkAuth);
    };
  }, []);

  // ฟังก์ชัน Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    window.dispatchEvent(new Event("auth-change"));
    router.push("/login");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-[#0b0f19]/40 backdrop-blur-xl border-slate-800/60 shadow-lg shadow-black/20"
          : "bg-[#0b0f19]/90 backdrop-blur-md border-slate-800"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-slate-300">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-bold text-white shadow-lg shadow-blue-500/30">
            BAS
          </div>
          <div>
            <span className="text-lg font-bold text-white block leading-tight">
              I Bas Shop
            </span>
            <span className="text-xs text-slate-400">ขายไอดีราคากับมิตรภาพ</span>
          </div>
        </Link>

        {/* Desktop Menu & Auth Button */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-white transition-colors">
            หน้าแรก
          </Link>
          <Link href="/about" className="hover:text-white transition-colors">
            เกี่ยวกับเรา
          </Link>
          <Link href="/service" className="hover:text-white transition-colors">
            บริการของเรา
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            ติดต่อเรา
          </Link>
          <Link href="/register" className="hover:text-white transition-colors">
            สมัครสมาชิก
          </Link>

          {/* สลับปุ่ม Login / ออกจากระบบ */}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="rounded-full bg-red-600/20 px-5 py-2 text-sm font-semibold text-red-400 border border-red-500/30 hover:bg-red-600 hover:text-white transition-all duration-200"
            >
              ออกจากระบบ
            </button>
          ) : (
            <Link
              href="/login"
              className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-200 transition-all duration-200"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-300 hover:text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#0d131d]/95 backdrop-blur-xl px-6 pb-6 pt-2">
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="py-2 text-slate-300 hover:text-white"
            >
              หน้าแรก
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="py-2 text-slate-300 hover:text-white"
            >
              เกี่ยวกับเรา
            </Link>
            <Link
              href="/service"
              onClick={() => setIsOpen(false)}
              className="py-2 text-slate-300 hover:text-white"
            >
              บริการของเรา
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="py-2 text-slate-300 hover:text-white"
            >
              ติดต่อเรา
            </Link>
            <Link
              href="/register"
              onClick={() => setIsOpen(false)}
              className="py-2 text-slate-300 hover:text-white"
            >
              สมัครสมาชิก
            </Link>

            <div className="my-2 h-px bg-slate-800 w-full"></div>

            {isLoggedIn ? (
              <button
                onClick={() => {
                  setIsOpen(false);
                  handleLogout();
                }}
                className="w-full text-center rounded-xl bg-red-600/20 py-3 text-sm font-semibold text-red-400 border border-red-500/30 hover:bg-red-600 hover:text-white transition-all"
              >
                ออกจากระบบ
              </button>
            ) : (
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="block text-center rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-all"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}