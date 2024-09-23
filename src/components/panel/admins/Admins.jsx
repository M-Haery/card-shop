import React, { useState } from 'react'
import SideBar from '../side-bar/SideBar'
import Adress from '../adress/Adress'
import AdminsDataGrid from './AdminsDataGrid'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { Link } from 'react-router-dom'
import RemoveModal from '../removeModal/RemoveModal';


export default function Admins() {
  const [isRemoveModalShow, setIsRemoveModalShow] = useState(false)
  const [removedAdminID, setRemovedAdminID] = useState()

  localStorage.setItem('selectedSideLink', "مدیریت مدیران")
  
  function removeHandler(id){
    setIsRemoveModalShow(true)
    setRemovedAdminID(id)
  }

  function closeModal(){
    setIsRemoveModalShow(false)
  }

  return (
    <div dir='rtl' className='flex  bg-[#f5f5f5]'>
      <SideBar/>
      {isRemoveModalShow && <RemoveModal table={"admins"} onClose={closeModal} id={removedAdminID} />}
      {isRemoveModalShow && <div onClick={() => setIsRemoveModalShow(false)} style={{backgroundColor: "rgba(0,0,0,0.4)"}} className=' fixed left-0 top-0 z-10 w-full h-full'></div>}
      <div className='relative w-full px-10'>
        <div className=" mt-9">
        <Adress  adress={"پیشخوان > مدیران"}/>
        </div>
        <div style={{boxShadow: "0 0 8px 0px #c9c9c9"}} className=' flex flex-col gap-10 mt-9 bg-white rounded-lg'>
          <div className=' mx-4 mt-4'>
            <Link  to={"/newAdmin"} className="flex justify-center items-center text-white rounded-full w-10 h-10 bg-green-500"><AddCircleOutlinedIcon/></Link>
          </div>
      <AdminsDataGrid onRemove={removeHandler}/>
        </div>
      </div>
    </div>
  )
}
