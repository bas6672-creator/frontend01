"use client";

import React from "react";
import Link from "next/link";

export default function ServicesPage() {
  const servicesList = [
    {
      id: 1,
      icon: "🛡️",
      title: "ซื้อ-ขายไอดีเกมปลอดภัย 100%",
      description: "ไอดีเกมทุกไอดีผ่านการตรวจสอบประวัติ สะอาด ปลอดภัย ไม่มีประวัติการโกง และรับประกันการโดนดึงคืน",
      badge: "ยอดนิยม",
      badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    },
    {
      id: 2,
      icon: "💎",
      title: "บริการเติมเกมราคาถูก",
      description: "เติมเกมออนไลน์ทั้งบนมือถือและพีซี ราคาถูกกว่าเติมเองในเกม สะดวกรวดเร็ว เข้าไวภายในไม่กี่นาที",
      badge: "คุ้มค่า",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    },
    {
      id: 3,
      icon: "⚡",
      title: "ส่งมอบไอดีทันทีอัตโนมัติ",
      description: "ระบบจัดส่งไอดีและข้อมูลรหัสผ่านอัตโนมัติผ่านทางหน้าเว็บ รับรหัสไปใช้งานได้เลยทันทีหลังชำระเงิน",
      badge: "อัตโนมัติ",
      badgeColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
    },
    {
      id: 4,
      icon: "🎧",
      title: "บริการดูแลลูกค้า 24 ชั่วโมง",
      description: "ทีมงานพร้อมให้คำปรึกษาและแก้ไขปัญหาทุกขั้นตอน ทั้งก่อนและหลังการขายตลอด 24 ชั่วโมง",
      badge: "24/7 Support",
      badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1c134c] via-[#140c38] to-[#0a0518] text-white">
      
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-12 pb-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* ข้อความฝั่งซ้าย */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm font-medium text-slate-200">

            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              บริการซื้อของเรา <br />
              <span className="text-amber-400">ครบ จบ ในที่เดียว</span> เพื่อ <br />
              เกมเมอร์
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              เรามอบบริการซื้อขายไอดีเกมที่รวดเร็ว ปลอดภัย และเชื่อถือได้ พร้อมดูแลคุณทั้งก่อนและหลังการซื้อ
            </p>

            {/* ปุ่มกด */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/"
                className="px-7 py-3.5 bg-white text-slate-900 hover:bg-slate-100 font-bold rounded-xl shadow-lg transition-all transform active:scale-95"
              >
                เลือกซื้อสินค้า
              </Link>
              <Link
                href="/contact"
                className="px-7 py-3.5 bg-transparent border border-white/40 hover:bg-white/10 text-white font-bold rounded-xl transition-all"
              >
                ติดต่อเรา
              </Link>
            </div>
          </div>

          {/* รูปภาพแบนเนอร์ฝั่งขวา */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-indigo-500/30 shadow-2xl bg-gradient-to-tr from-indigo-900/50 to-purple-900/50 p-2 backdrop-blur-sm">
              {/* ใช้รูปแบนเนอร์จำลองที่ตกแต่งสไตล์ป้ายหน้าร้าน */}
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-950 flex flex-col justify-between p-6 border border-indigo-500/20">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10" />
                
                {/* Background Decor */}
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-indigo-600/30 rounded-full blur-3xl"></div>
                <div className="absolute -left-10 -top-10 w-40 h-40 bg-purple-600/30 rounded-full blur-3xl"></div>

                <div className="relative z-20">
                  <span className="text-xs font-bold px-3 py-1 bg-amber-400 text-slate-950 rounded-md">
                    OFFICIAL SHOP
                  </span>
                </div>

                <div className="relative z-20 text-center space-y-2 my-auto">
                  <h2 className="text-2xl font-black tracking-wide text-white drop-shadow-md">
                    ร้านซื้อขาย <span className="text-amber-400">ไอดีเกม</span>
                  </h2>
                  <div className="inline-block px-4 py-1 bg-indigo-600/80 rounded-full text-xs font-semibold tracking-wider text-indigo-100 border border-indigo-400/30">
                    ปลอดภัย มั่นใจ 100%
                  </div>
                </div>

                {/* จุดเด่น 5 ข้อจำลองแบบแบนเนอร์ */}
                <div className="relative z-20 grid grid-cols-5 gap-1 text-center pt-4 border-t border-white/10 text-[10px]">
                  <div className="flex flex-col items-center">
                    <span>🛡️</span>
                    <span className="text-slate-300 mt-1">ปลอดภัย</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span>⭐</span>
                    <span className="text-slate-300 mt-1">รับประกัน</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span>🎧</span>
                    <span className="text-slate-300 mt-1">ดูแล 24 ชม.</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span>💰</span>
                    <span className="text-slate-300 mt-1">ราคาคุ้มค่า</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span>🚀</span>
                    <span className="text-slate-300 mt-1">ส่งไวทันใจ</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ==================== SERVICES LIST SECTION ==================== */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            บริการทั้งหมดของเรา
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            เลือกรับบริการคุณภาพระดับพรีเมียม ตอบโจทย์ทุกความต้องการของเกมเมอร์ทุกสไตล์
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service) => (
            <div
              key={service.id}
              className="bg-[#1e153b]/80 border border-indigo-500/20 hover:border-indigo-500/50 rounded-2xl p-6 backdrop-blur-md shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${service.badgeColor}`}>
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-indigo-300 font-medium">
                <span>รายละเอียดบริการ</span>
                <span className="group-hover:translate-x-1 transition-transform">➔</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-indigo-900/80 to-purple-900/80 border border-indigo-500/30 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden backdrop-blur-xl shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              พร้อมที่จะยกระดับการเล่นเกมของคุณแล้วหรือยัง?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base">
              เลือกซื้อไอดีเกมยอดฮิต คุณภาพสูง ปลอดภัย ไม่โดนดึงคืนแน่นอนที่ I Bas Shop
            </p>
            <div className="pt-2">
              <Link
                href="/"
                className="inline-block px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold rounded-xl shadow-lg transition-all transform active:scale-95"
              >
                เลือกซื้อไอดีเลย
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}