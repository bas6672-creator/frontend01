import Link from 'next/link'

export default function Herosection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
         
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block rounded-full bg-white/20 px-4 py-2 text-sm text-white backdrop-blur">
              🚀 Welcome to I Bas Shop
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white md:text-6xl">
              เกี่ยวกับ I Bas Shop
              <span className="block text-yellow-300">
                ร้านจำหน่ายไอดีเกมคุณภาพ พร้อมบริการที่รวดเร็ว ปลอดภัย และเชื่อถือได้
              </span>
            </h1>

            <p className="mt-6 text-lg text-blue-100">
             เราคัดเลือกไอดีทุกบัญชี ตรวจสอบก่อนจำหน่าย และพร้อมดูแลลูกค้าทั้งก่อนและหลังการขาย
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href="/about"
                className="rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 shadow-lg transition hover:scale-105"
              >
                เลือกซื้อสินค้า
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-blue-700"
              >
                ติดต่อเรา
              </Link>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 animate-pulse rounded-full bg-white/20 blur-3xl"></div>

              <img
                src="1029.jpg"
                alt="Technology"
                className="relative w-full max-w-lg rounded-3xl shadow-2xl"
              />
            </div>
          </div>
  
        </div>
      </div>
    </section>
  )
}