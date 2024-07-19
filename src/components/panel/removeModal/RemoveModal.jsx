import React from 'react'
import BeenhereOutlinedIcon from '@mui/icons-material/BeenhereOutlined';
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

export default function RemoveModal(props) {
  const navigate = useNavigate()

  function submitHandler(){
    fetch(`http://localhost:3000/${props.table}/${props.id}`, {
      method: 'delete',
    })
    .then(()=>closeHandler())
    .then(()=> window.location.reload())
  }

  function closeHandler(){
    props.onClose()
  }
  return (
    
        <div className='fixed top-0 bottom-0 right-0 left-0 m-auto bg-white h-[350px] w-[500px] rounded-lg flex justify-center items-center flex-col z-50'>
            <div className='flex justify-center items-center flex-col gap-3'>
                <img src="/images/danger-svgrepo-com.svg" alt="" className=' w-24 h-24'/>
                <h1 className=' text-xl'>این عملیات برگشت پذیر نیست</h1>
                <h1 className=' text-lg'>آیا اطمینان دارید که آیتم مورد نظر حذف شود؟</h1>
            </div>
            <div className='flex justify-evenly w-full mt-6 child:text-center child:w-28 child:py-2 child:rounded-md child:text-white'>
            <button onClick={() => submitHandler()} className=' bg-red-500 '><BeenhereOutlinedIcon/> حذف</button>
            <button onClick={() => closeHandler()} className=' bg-green-500 '><CancelPresentationOutlinedIcon/> انصراف</button>
            </div>
        </div>
    
  )
}
