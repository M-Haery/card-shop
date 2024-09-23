import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
export default function PageData({isHome, isPay, isMain}) {
    const [pageData, setPageData] = useState()
    let params = useParams()
    
    // console.log("home", isHome)
    // console.log("main", isMain)
    // console.log("pay", isPay)


  return (
    <div className='grid grid-cols-7 justify-around items-center w-[90%] sm:w-[70%] md:w-[650px] rounded-xl shadow-xl bg-[#ffffff]  dark:bg-slate-700 m-auto mt-6 py-5 text-black dark:text-white text-center'>
        <div className='flex flex-col items-center'>
            <div className={isHome ? " bg-teal-500 px-5 py-3 rounded-2xl" : 'bg-gray-100 dark:bg-slate-900 px-5 py-3 rounded-2xl'  }>1</div>
            <h4 className=' text-md'>دسته</h4>
        </div>

        <div className={isHome ?  ' col-span-2 h-1 w-full  bg-black relative bottom-3' : "col-span-2 h-1 w-full  bg-teal-500 relative bottom-3"}></div>

        <div className='flex flex-col items-center'>
            <div className={isMain ?"bg-teal-500 px-5 py-3 rounded-2xl " : ' bg-gray-100 dark:bg-slate-900 px-5 py-3 rounded-2xl'}>2</div>
            <h4 className=' text-sm'>محصول</h4>
        </div>

        <div className={isPay ? "col-span-2 h-1 w-full  bg-teal-500 relative bottom-3" : ' col-span-2 h-1 w-full  bg-black relative bottom-3'}></div>

        <div className='flex flex-col items-center'>
            <div className={isPay ?"bg-teal-500 px-5 py-3 rounded-2xl " : ' bg-gray-100 dark:bg-slate-900 px-5 py-3 rounded-2xl'}>3</div>
            <h4 className=' text-sm'>پرداخت</h4>
        </div>
    </div>
  )
}
