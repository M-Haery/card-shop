import React from 'react'
import SideBar from '../side-bar/SideBar'
import Adress from '../adress/Adress'
import { Link } from 'react-router-dom'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function Questions() {
  localStorage.setItem('selectedSideLink', "سوالات متداول")
  return (
    <div dir='rtl' className='flex  bg-[#f5f5f5]'>
    <SideBar/>

    <div className='relative w-full px-10'>
      <div className=" mt-9">
      <Adress  adress={"پیشخوان > سوالات متداول"}/>
      </div>
      <div style={{boxShadow: "0 0 8px 0px #c9c9c9"}} className=' flex flex-col gap-10 mt-9 bg-white rounded-lg'>
        <div className=' mx-4 my-4'>
          <div className=' bg-sky-500 hover:bg-sky-400 transition-all duration-75 w-12 h-12 rounded-full'>

          <Link className=''><AddCircleOutlineIcon/></Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
