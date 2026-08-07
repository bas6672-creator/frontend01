import Image from 'next/image';

export default function Cardsection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
       
        {/* หัวข้อ Section */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">จุดเด่นของเรา</h2>
          <p className="mt-2 text-gray-600"> </p>
        </div>

        {/* ตะแกรง Grid แบบ 3 คอลัมน์ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         
          {/* ==================== การ์ดใบที่ 1 ==================== */}
          <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white">
            <div className="relative w-full h-48 bg-gray-100">
              <Image
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                🛡️ปลอดภัย
              </h3>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                ตรวจสอบไอดีทุกบัญชีก่อนขาย
              </p>
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
                ⚡ส่งมอบรวดเร็ว
              </h3>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                ได้รับไอดีทันทีหลังชำระเงิน
              </p>
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
                💬บริการตลอด
              </h3>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                ตอบแชทรวดเร็ว พร้อมช่วยเหลือ
              </p>
              <div className="mt-4 flex items-center justify-between">
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
}