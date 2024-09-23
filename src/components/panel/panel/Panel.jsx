import React, { useEffect, useState } from 'react'
import SideBar from '../side-bar/SideBar'
import Adress from '../adress/Adress'
import InfoBox from './InfoBox'
import useFetch from '../../../hooks/useFetch'
import DialyChart from './charts/DialyChart'
import MounthlyChart from './charts/MounthlyChart'

export default function Panel() {

   const [informations] = useFetch("http://localhost:3000/panelInfo")
   localStorage.setItem('selectedSideLink', "پیشخوان")

  return (
    <div className='flex bg-[#f5f5f5]'>
        <SideBar/>
        <div className=' w-full px-10 mt-9 mb-9'>
        <Adress adress={"پیشخوان"}/>
        <div className=' flex justify-between my-9 w-full'>
        {
          informations.map(item => (
            <InfoBox key={item.id} {...item}/>
          ))
        }
        </div>
        <div style={{boxShadow: "0 0 8px 0px #c9c9c9"}} className=' w-full bg-white rounded-lg mt-14 py-5 px-7'>
          <h1 className=' mb-3 text-2xl'>فروش روزانه</h1>
          <div className=' w-full h-[1px] mb-10 bg-slate-500'></div>
        <DialyChart/>
        </div>

        <div style={{boxShadow: "0 0 8px 0px #c9c9c9"}} className=' w-full bg-white rounded-lg mt-14 py-5 px-7'>
          <h1 className=' mb-3 text-2xl'>فروش ماهانه</h1>
          <div className=' w-full h-[1px] mb-10 bg-slate-500'></div>
        <MounthlyChart/>
        </div>
        </div>
    </div>
  )
}
