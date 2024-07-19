import React from 'react'
import Slider from '../slider/Slider'
import Footer from '../footer/Footer'

export default function Rules() {
  return (
    <>
      <Slider/>
      <div className='bg-[#f5f5f5] dark:bg-slate-900 py-20'>
        <h1 className=' text-center text-2xl mb-10 dark:text-white'>قوانین خرید</h1>
        <div className=' m-auto w-[90%] md:w-[60%] xl:w-[40%] shadow-2xl dark:text-white dark:bg-slate-700 bg-[#ffffff] rounded-2xl p-6'>
          <ul style={{listStyleType:"none"}}>
            <li>قوانین خرید...</li>
            <li>قوانین خرید...</li>
            <li>قوانین خرید...</li>
            <li>قوانین خرید...</li>
          </ul>
        </div>
      </div>
      <Footer/>
    </>
  )
}
