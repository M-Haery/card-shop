import React from 'react'
import SideBar from '../side-bar/SideBar'

export default function Pages() {
  localStorage.setItem('selectedSideLink', "مدیریت صفحات")
  return (
    <div className='flex bg-[#f5f5f5]'>
      <SideBar/>
      <div className=' w-full'>
        admins
      </div>
    </div>
  )
}
