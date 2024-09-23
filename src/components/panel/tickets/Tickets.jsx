import React, { useState } from 'react'
import SideBar from '../side-bar/SideBar'
import Adress from '../adress/Adress'
import TicketsDataGrid from './TicketsDataGrid'
import RemoveModal from '../removeModal/RemoveModal'


export default function Tickets() {
  localStorage.setItem('selectedSideLink', "تیکت ها")
  const [isRemoveModalShow, setIsRemoveModalShow] = useState(false)
  const [removedTicketID, setRemovedTicketID] = useState()

  function removeHandler(id){
    setIsRemoveModalShow(true)
    setRemovedTicketID(id)
  }

  function closeModal(){
    setIsRemoveModalShow(false)
  }

  return (
    <div dir='rtl' className='flex bg-[#f5f5f5]'>
      <SideBar/>
     
      <div className='relative w-full px-10'>
        <div className=" mt-9">
        <Adress  adress={"پیشخوان > تیکت ها"}/>
        </div>
        <div style={{boxShadow: "0 0 8px 0px #c9c9c9"}} className=' flex flex-col gap-10 mt-9 bg-white rounded-lg'>
        {isRemoveModalShow && <RemoveModal table={"tickets"} onClose={closeModal} id={removedTicketID} />}
        {isRemoveModalShow && <div onClick={() => setIsRemoveModalShow(false)} style={{backgroundColor: "rgba(0,0,0,0.4)"}} className=' fixed left-0 top-0 z-10 w-full h-full'></div>}
        <TicketsDataGrid onRemove={removeHandler}/>
        </div>
      </div>
    </div>
  )
}
