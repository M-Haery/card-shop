import React from 'react'
import SideBar from '../side-bar/SideBar'
import Adress from '../adress/Adress'
import { Link } from 'react-router-dom'
import OrdersDataGrid from './OrdersDataGrid'

export default function Orders() {
  localStorage.setItem('selectedSideLink', "سفارشات")
  return (
    <div dir='rtl' className='flex  bg-[#f5f5f5]'>
      <SideBar/>
      <div className='relative w-full px-10'>
        <div className=" mt-9">
        <Adress  adress={"پیشخوان > سفارشات"}/>
        </div>
        <div style={{boxShadow: "0 0 8px 0px #c9c9c9"}} className=' flex flex-col gap-10 mt-9 bg-white rounded-lg'>
          <div className=' mx-4 mt-4'>
          <OrdersDataGrid />
          </div>

        </div>
      </div>
    </div>
  )
}
