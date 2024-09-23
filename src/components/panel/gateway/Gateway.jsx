import React from 'react'
import SideBar from '../side-bar/SideBar'

export default function Gateway() {
  localStorage.setItem('selectedSideLink', "مدیریت درگاه ها")
  return (
    <div className='flex bg-[#f5f5f5]'>
      <SideBar/>
      <div className=' w-full'>
        3
      </div>
    </div>
  )
}
