import React from 'react'
import SideBar from '../side-bar/SideBar'

export default function Questions() {
  localStorage.setItem('selectedSideLink', "سوالات متداول")
  return (
    <div className='flex bg-[#f5f5f5]'>
      <SideBar/>
      <div className=' w-full'>
        admins
      </div>
    </div>
  )
}
