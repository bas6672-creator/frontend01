import React from 'react'

export default function FromRegister() {
  return (
   <div className="max-w-12xl mx-auto p-6">
       <div className="bg-white rounded-lg shadow-md border">
       
       {/*Header*/}
      <div classname="border-b px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-800">
            ฟอร์มสมัครมสาชิก
        </h1>
    </div>

        <form className='p-6 space-y5'>
            <input type="text" name="txt_fristname" defaultValue="" className='w-full border border-black rounded-md px-4 py-2' />
            <button type="submit" className="px-5 py-2 bg-blue-600 text-white rounded-md hover :bg-blue-700">บันทึกข้อมูล</button>
        </form>
        </div>
        </div>
    )
}