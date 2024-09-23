import React from 'react'
import SideBar from '../side-bar/SideBar'

export default function Gifts() {
  localStorage.setItem('selectedSideLink', "کوپن تخفیف")
  return (
    <div className='flex bg-[#f5f5f5]'>
      <SideBar/>
      <div className=' w-full'>
        4
      </div>
    </div>
  )
}
