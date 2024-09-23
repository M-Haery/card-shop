import React, { useEffect, useState } from 'react'
import Slider from '../slider/Slider'
import Product from './Product'
import Footer from '../footer/Footer'
import PageData from '../pageData/PageData'
import useFetch from '../../hooks/useFetch'

export default function Home() {
  //custom hook
  const [datas] = useFetch("http://localhost:3000/posts")
  
  return (
    <>
    
    <div className=' dark:bg-slate-900'>
    <Slider/>
    <PageData isHome={true}/>
    <div className=' grid justify-items-center w-[90%] lg:w-[92%] xl:w-[75%]  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 pb-10 m-auto'>
    {
      datas.map((product) => (
        product.isShow && 
        <Product key={product.id} {...product}/>
      ))
    }
    </div>
    </div>
    <Footer/>
    </>
  )
}
