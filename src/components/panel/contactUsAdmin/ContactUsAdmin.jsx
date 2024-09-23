import React from 'react'
import SideBar from '../side-bar/SideBar'

export default function ContactUs() {
  localStorage.setItem('selectedSideLink', "تماس با ما")
  return (
    <div className='flex bg-[#f5f5f5]'>
      <SideBar/>
      <div className=' w-full'>
        2
      </div>
    </div>
  )
}
