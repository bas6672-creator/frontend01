"use client";

import React, { useState } from "react";
import Swal from "sweetalert2";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "สอบถามทั่วไป",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // แจ้งเตือนส่งข้อความสำเร็จ
    Swal.fire({
      icon: "success",
      title: "ส่งข้อความเรียบร้อย!",
      text: "ทีมงานได้รับข้อความของคุณแล้ว จะติดต่อกลับโดยเร็วที่สุด",
      confirmButtonColor: "#4f50a2",
    });

    // ล้างข้อมูลฟอร์ม
    setFormData({
      name: "",
      email: "",
      topic: "สอบถามทั่วไป",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1b1035] via-[#120a27] to-[#0a0518] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-indigo-400 text-sm font-medium mb-4">
            💬 Contact Us
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            ติดต่อเรา
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            มีปัญหาเกี่ยวกับการซื้อขายไอดีเกม หรือต้องการสอบถามข้อมูลเพิ่มเติม สามารถติดต่อทีมงาน <span className="text-indigo-400 font-semibold">I Bas Shop</span> ได้ตลอด 24 ชั่วโมง
          </p>
        </div>

        {/* Content Section: Info Cards & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Column: ช่องทางติดต่ออื่นๆ */}
          <div className="space-y-6 lg:col-span-1">
            
            {/* Box 1: Facebook / Line */}
            <div className="bg-[#1e153b]/80 border border-indigo-500/20 rounded-2xl p-6 backdrop-blur-md shadow-xl hover:border-indigo-500/40 transition-all">
              <div className="w-12 h-12 bg-indigo-600/20 text-indigo-400 rounded-xl flex items-center justify-center mb-4 text-2xl">
                🌐
              </div>
              <h3 className="text-xl font-bold mb-2">ช่องทางออนไลน์</h3>
              <p className="text-slate-400 text-sm mb-4">
                ติดต่อสอบถามและรับข่าวสารโปรโมชั่นได้ที่โซเชียลมีเดีย
              </p>
              <div className="space-y-2 text-sm text-slate-200">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-indigo-400">Facebook:</span> I Bas Shop
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-emerald-400">Line Official:</span> @ibasshop
                </div>
              </div>
            </div>

            {/* Box 2: เวลาทำการ / ซัพพอร์ต */}
            <div className="bg-[#1e153b]/80 border border-indigo-500/20 rounded-2xl p-6 backdrop-blur-md shadow-xl hover:border-indigo-500/40 transition-all">
              <div className="w-12 h-12 bg-purple-600/20 text-purple-400 rounded-xl flex items-center justify-center mb-4 text-2xl">
                ⚡
              </div>
              <h3 className="text-xl font-bold mb-2">เวลาให้บริการ</h3>
              <p className="text-slate-400 text-sm mb-3">
                ทีมงานพร้อมดูแลและแก้ไขปัญหาให้คุณ
              </p>
              <p className="text-indigo-300 font-semibold text-lg">
                เปิดให้บริการทุกวัน 24 ชั่วโมง
              </p>
            </div>

            {/* Box 3: การรับประกัน */}
            <div className="bg-[#1e153b]/80 border border-indigo-500/20 rounded-2xl p-6 backdrop-blur-md shadow-xl hover:border-indigo-500/40 transition-all">
              <div className="w-12 h-12 bg-emerald-600/20 text-emerald-400 rounded-xl flex items-center justify-center mb-4 text-2xl">
                🛡️
              </div>
              <h3 className="text-xl font-bold mb-2">ปลอดภัย มั่นใจ 100%</h3>
              <p className="text-slate-400 text-sm">
                สินค้าทุกชิ้นผ่านการตรวจสอบ รวดเร็ว ฉับไว ปลอดภัย ไม่โดนดึงคืนแน่นอน
              </p>
            </div>

          </div>

          {/* Right Column: ฟอร์มส่งข้อความ */}
          <div className="bg-[#1e153b]/90 border border-indigo-500/30 rounded-3xl p-8 lg:col-span-2 backdrop-blur-xl shadow-2xl">
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              <span>📩</span> ส่งข้อความถึงเรา
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* ชื่อผู้ติดต่อ */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    ชื่อของคุณ / ชื่อผู้ใช้งาน
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="กรอกชื่อของคุณ"
                    required
                    className="w-full bg-[#120a27] border border-indigo-500/30 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                  />
                </div>

                {/* อีเมล หรือ ช่องทางติดต่อกลับ */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    อีเมล หรือ เบอร์โทรศัพท์
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@email.com หรือ 08X-XXX-XXXX"
                    required
                    className="w-full bg-[#120a27] border border-indigo-500/30 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                  />
                </div>
              </div>

              {/* หัวข้อเรื่อง */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  หัวข้อเรื่อง
                </label>
                <select
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  className="w-full bg-[#120a27] border border-indigo-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                >
                  <option value="สอบถามทั่วไป">สอบถามข้อมูลทั่วไป</option>
                  <option value="พบปัญหาการเติมเงิน/ชำระเงิน">พบปัญหาการเติมเงิน / ชำระเงิน</option>
                  <option value="พบปัญหาเกี่ยวกับไอดีเกม">พบปัญหาเกี่ยวกับไอดีเกม</option>
                  <option value="แจ้งปัญหาการใช้งานเว็บไซต์">แจ้งปัญหาการใช้งานเว็บไซต์</option>
                  <option value="อื่นๆ">อื่นๆ</option>
                </select>
              </div>

              {/* รายละเอียดข้อความ */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  รายละเอียดข้อความ
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="พิมพ์รายละเอียดที่ต้องการสอบถามหรือแจ้งปัญหาที่นี่..."
                  required
                  className="w-full bg-[#120a27] border border-indigo-500/30 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none"
                ></textarea>
              </div>

              {/* ปุ่มส่งข้อความ */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-indigo-500/25 transition-all transform active:scale-[0.99] cursor-pointer"
              >
                ส่งข้อความ
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}