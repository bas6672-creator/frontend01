"use client";

import React from "react";
import Link from "next/link";
import Cardsection from "@/components/Cardsection";
import Footersection from "@/components/Footersection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d071e] text-white selection:bg-indigo-500 selection:text-white">
      
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1c134c] via-[#150d3b] to-[#120a27] pt-12 pb-20 px-4 sm:px-6 lg:px-8">
        
        {/* Background Glow Deco */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-purple-600/15 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs sm:text-sm font-medium text-indigo-200">

            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              ซื้อขายไอดีเกม <br />
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                สะดวก สะดวกรวดเร็วทันใจ
              </span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed">
              ราคาถูกและปลอดภัย มั่นใจ 100% ศูนย์รวมไอดีเกมระดับพรีเมียม พร้อมการรับประกันและบริการดูแลตลอด 24 ชั่วโมง
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/about"
                className="px-8 py-3.5 bg-white hover:bg-slate-100 text-slate-950 font-extrabold rounded-2xl shadow-lg shadow-white/10 transition-all active:scale-95"
              >
                เรียนรู้เพิ่มเติม
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3.5 bg-indigo-950/60 hover:bg-indigo-900/80 border border-indigo-500/40 text-white font-bold rounded-2xl backdrop-blur-md transition-all active:scale-95"
              >
                ติดต่อเรา
              </Link>
            </div>
          </div>

          {/* Hero Right Banner Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-md">
              {/* Glow Border Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-indigo-500 to-purple-600 rounded-3xl blur-md opacity-50 group-hover:opacity-80 transition duration-500"></div>
              
              <div className="relative rounded-2xl overflow-hidden border border-indigo-500/30 bg-[#160e36] p-2 shadow-2xl">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 flex flex-col justify-between p-6 border border-indigo-500/20">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent z-10" />

                  <div className="relative z-20">
                    <span className="text-[10px] font-black px-3 py-1 bg-amber-400 text-slate-950 rounded-md uppercase tracking-wider">
                      Official Shop
                    </span>
                  </div>

                  <div className="relative z-20 text-center space-y-1 my-auto">
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-wide drop-shadow-md">
                      ร้านซื้อขาย <span className="text-amber-400">ไอดีเกม</span>
                    </h3>
                    <p className="text-xs font-semibold text-indigo-300">
                      ปลอดภัย มั่นใจ 100%
                    </p>
                  </div>

                  {/* Feature Badges */}
                  <div className="relative z-20 grid grid-cols-5 gap-1 text-center pt-3 border-t border-white/10 text-[10px]">
                    <div className="flex flex-col items-center">
                      <span>🛡️</span>
                      <span className="text-slate-300 mt-0.5">ปลอดภัย</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span>⭐</span>
                      <span className="text-slate-300 mt-0.5">รับประกัน</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span>🎧</span>
                      <span className="text-slate-300 mt-0.5">24 ชม.</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span>💰</span>
                      <span className="text-slate-300 mt-0.5">ราคาคุ้ม</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span>🚀</span>
                      <span className="text-slate-300 mt-0.5">ส่งไว</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ==================== CARD SECTION (สินค้าแนะนำ) ==================== */}
      <Cardsection />

      {/* ==================== FOOTER SECTION ==================== */}
      <Footersection />

    </div>
  );
}