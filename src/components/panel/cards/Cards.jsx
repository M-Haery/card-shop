import React from 'react'
import SideBar from '../side-bar/SideBar'

export default function Cards() {
  localStorage.setItem('selectedSideLink', "کارت ها")
  return (
    <div className='flex bg-[#f5f5f5]'>
      <SideBar/>
      <div className=' w-full'>
        1
      </div>
    </div>
  )
}
