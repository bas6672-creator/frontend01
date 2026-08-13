"use client";

import React from "react";
import Link from "next/link";

export default function AboutPage() {
  const stats = [
    { id: 1, value: "10,000+", label: "ลูกค้าที่ไว้วางใจ" },
    { id: 2, value: "15,000+", label: "ไอดีเกมที่ส่งมอบสำเร็จ" },
    { id: 3, value: "100%", label: "รับประกันความปลอดภัย" },
    { id: 4, value: "24/7", label: "ทีมงานดูแลตลอดเวลา" },
  ];

  const highlights = [
    {
      icon: "🎯",
      title: "วิสัยทัศน์ของเรา",
      desc: "มุ่งมั่นเป็นอันดับ 1 เรื่องการให้บริการซื้อขายไอดีเกมออนไลน์ที่ปลอดภัย สะดวกรวดเร็ว และโปร่งใสที่สุดในไทย",
    },
    {
      icon: "🛡️",
      title: "ความปลอดภัยสูงสุด",
      desc: "ตรวจสอบประวัติไอดีเกมทุกชิ้นก่อนนำมาจำหน่าย มีระบบรับประกันเพื่อความมั่นใจของลูกค้า 100%",
    },
    {
      icon: "🤝",
      title: "ซื่อสัตย์และจริงใจ",
      desc: "เน้นการบริการด้วยความซื่อสัตย์ ให้ข้อมูลตรงไปตรงมา และมีทีมงานคอยช่วยเหลือตลอดการใช้งาน",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1c134c] via-[#140c38] to-[#0a0518] text-white">
      
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-16 pb-20 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-sm font-medium">
            ✨ About I Bas Shop
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            จุดเริ่มต้นของ <br />
            <span className="text-amber-400">I Bas Shop</span> ร้านขายไอดีอันดับ 1
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            เราคือศูนย์รวมบริการซื้อขายไอดีเกมออนไลน์ครบวงจร ก่อตั้งขึ้นโดยกลุ่มเกมเมอร์ที่เข้าใจความต้องการของนักเล่นเกมอย่างแท้จริง เพื่อส่งมอบไอดีคุณภาพดี ราคาคุ้มค่า และปลอดภัยที่สุด
          </p>
        </div>

        {/* ==================== STATS SECTION ==================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-[#1e153b]/80 border border-indigo-500/20 rounded-2xl p-6 text-center backdrop-blur-md shadow-xl hover:border-indigo-500/40 transition-all"
            >
              <div className="text-3xl sm:text-4xl font-black text-amber-400 mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== HIGHLIGHTS SECTION ==================== */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            ทำไมต้องเลือกเรา?
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            หลักการทำงานและความมุ่งมั่นที่เรามอบให้กับลูกค้าทุกคน
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#1e153b]/90 border border-indigo-500/20 hover:border-indigo-500/50 rounded-3xl p-8 backdrop-blur-xl shadow-xl hover:shadow-indigo-500/10 transition-all group"
            >
              <div className="w-14 h-14 bg-indigo-600/20 border border-indigo-500/30 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-amber-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-indigo-900/80 to-purple-900/80 border border-indigo-500/30 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden backdrop-blur-xl shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              อยากได้ไอดีเกมเทพๆ ปลอดภัย?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base">
              เลือกซื้อไอดีเกมยอดฮิต คุณภาพสูง ปลอดภัย ไม่โดนดึงคืนแน่นอนที่ I Bas Shop
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link
                href="/"
                className="px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold rounded-xl shadow-lg transition-all transform active:scale-95"
              >
                เลือกซื้อไอดีเลย
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3.5 bg-transparent border border-white/30 hover:bg-white/10 text-white font-bold rounded-xl transition-all"
              >
                สอบถามเพิ่มเติม
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}