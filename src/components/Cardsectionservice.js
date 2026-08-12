import Image from 'next/image';

export default function Cardsection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
       
        {/* หัวข้อ Section */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">บริการหลักของเรา</h2>
          <p className="mt-2 text-gray-600">เราให้บริการที่ครบวงจรเพื่อตอบโจทย์ความต้องการของคุณ</p>
        </div>

        {/* ตะแกรง Grid แบบ 3 คอลัมน์ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         
          {/* ==================== การ์ดใบที่ 1 ==================== */}
          <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white">
            <div className="relative w-full h-48 bg-gray-100">
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                🎮 จำหน่ายไอดีเกม
              </h3>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                จำหน่ายไอดีเกมยอดนิยม เช่น Valorant, Free Fire, Blox Fruits และอื่นๆ อีกมากมาย </p>
              <div className="mt-4 flex items-center justify-between">
              </div>
            </div>
          </div>

          {/* ==================== การ์ดใบที่ 2 ==================== */}
          <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white">
            <div className="relative w-full h-48 bg-gray-100">
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                ⚡ ส่งมอบรวดเร็ว
              </h3>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                หลังจากชำระเงิน รับข้อมูลไอดีได้ทันที ไม่ต้องรอนาน ใช้งานได้เลย </p>
              <div className="mt-4 flex items-center justify-between">
              </div>
            </div>
          </div>

          {/* ==================== การ์ดใบที่ 3 ==================== */}
          <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white">
            <div className="relative w-full h-48 bg-gray-100">
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                💬 บริการหลังการขาย
              </h3>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                มีทีมงานคอยให้คำแนะนำและช่วยเหลือหากพบปัญหาตลอดการใช้งาน </p>
              <div className="mt-4 flex items-center justify-between">
              </div>
            </div>
          </div>


        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">ขั้นตอนการใช้บริการ</h2>
          <p className="mt-2 text-gray-600"></p>
        </div>
                  {/* ==================== การ์ดใบที่ 1 ==================== */}

            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                1. เลือกสินค้า
              </h3>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                เลือกไอดีเกมที่ต้องการจากร้านของเรา </p>
              <div className="mt-4 flex items-center justify-between">
              </div>
                  {/* ==================== การ์ดใบที่ 2 ==================== */}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                2. สั่งซื้อสินค้า
              </h3>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                กดสั่งซื้อและกรอกข้อมูลให้ถูกต้อง </p>
              <div className="mt-4 flex items-center justify-between">
              </div>

                  {/* ==================== การ์ดใบที่ 3 ==================== */}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                3. ชำระเงิน
              </h3>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                ชำระเงินผ่านช่องทางที่ร้านค้ากำหนด </p>
              <div className="mt-4 flex items-center justify-between">
              </div>

                  {/* ==================== การ์ดใบที่ 4 ==================== */}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                4. ตรวจสอบการชำระเงิน
              </h3>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                ทีมงานตรวจสอบการชำระเงินและเตรียมข้อมูลไอดี </p>
              <div className="mt-4 flex items-center justify-between">
              </div>

                  {/* ==================== การ์ดใบที่ 5 ==================== */}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                5. รับข้อมูลไอดี
              </h3>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                รับข้อมูลไอดีผ่านทางแชทหรืออีเมลที่ระบุ </p>
              <div className="mt-4 flex items-center justify-between">
              </div>

        </div>
      </div>
    </section>
  );
}