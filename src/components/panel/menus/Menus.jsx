import React from 'react'
import SideBar from '../side-bar/SideBar'

export default function Menus() {
  localStorage.setItem('selectedSideLink', "مدیریت منو ها")
  return (
    <div className='flex bg-[#f5f5f5]'>
      <SideBar/>
      <div className=' w-full'>
        5
      </div>
    </div>
  )
}
