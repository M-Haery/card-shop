import Slider from '../slider/Slider'
import React, { useState } from 'react'

export default function ProduCtWithPrice({title, price, img}) {


  return (
    
    <div className='flex md:justify-center md:items-center md:flex-col w-[90%] sm:w-[70%] md:w-80 lg:w-60    gap-1    dark:text-white dark:bg-slate-800 dark:hover:bg-slate-700  dark:duration-100 cursor-pointer  rounded-lg bg-[#ffffff] hover:shadow-2xl shadow-md transition-all duration-300 py-4'>
        
      <img className='  w-20 md:w-72 lg:w-56  rounded-xl  mx-5 md:mx-0 mb-4' src={img} alt="sss" />
      <div className='flex items-center justify-center flex-col gap-6 '>
        <h1 className=''>{title}</h1>
        <h1>{price} تومان</h1>
      </div>

    </div>
    

  )
}
