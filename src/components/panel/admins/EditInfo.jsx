import React, { useEffect, useState } from 'react'
import SideBar from '../side-bar/SideBar'
import { useParams } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
import Adress from '../adress/Adress'
import EditIcon from '@mui/icons-material/Edit';
import BeenhereOutlinedIcon from '@mui/icons-material/BeenhereOutlined';
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import Notification from './Notification'

export default function EditInfo() {
  const params = useParams()
  const [admin] = useFetch(`http://localhost:3000/admins/${params.id}`)
  const [nameInput, setNameInput] = useState()
  const [phoneInput, setPhoneInput] = useState()
  const [emailInput, setEmailInput] = useState()
  const [isSuccessModalShow, setIsSuccessModalShow] = useState(false)
  const [isFailureModalShow, setIsFailureModalShow] = useState(false)
  const navigate = useNavigate()

    useEffect(()=>{
     setNameInput(admin.name)
     setEmailInput(admin.email)
     setPhoneInput(admin.phone)
    },[admin])

    function submitHandler(){
      if(nameInput.length >5 && phoneInput.length == 11){
        fetch(`http://localhost:3000/admins/${params.id}`, {
          method: 'put',
          headers:{"content-type":'application/json'},
          body: JSON.stringify({userID: admin.userID, name: nameInput, userName: admin.userName, password: admin.password, email:emailInput, phone: phoneInput})
        }).then(()=>{
          setIsSuccessModalShow(true)
          setTimeout(()=>{
            navigate("/admins")
          },5000)
        })
    }else{
      setIsFailureModalShow(true)
    }
  }

  return (
    <div className=' flex bg-[#f5f5f5]'>
    <SideBar/>
    <div className='w-full px-10 mt-10'>
      <Adress adress={"پیشخوان > ویرایش کاربر"}/>
      <div style={{boxShadow: "0 0 8px 0px #c9c9c9"}} className=' bg-white py-5 px-5 rounded-md mt-7'>
      {isSuccessModalShow && <Notification color={"aqua"} title={"اطلاعات با موفقیت تغییر داده شد"}/>}
      {isFailureModalShow && <Notification color={"darkRed"} title={"اطلاعات وارد شده معتبر نمیباشند"} />}
       <h1 className=' mb-3 text-xl'><EditIcon/> ویرایش مدیر</h1>
       <div className=' bg-slate-400 w-full h-[1px]'></div>
       <div className=' flex justify-around mt-5 gap-8'>
        <div className='w-full flex flex-col gap-4 child:flex child:flex-col child:gap-3'>
          <div className='w-full'>
            <h2>نام و نام خوانوادگی</h2>
            <input className=' w-full border border-slate-300 rounded-md px-3 py-2' type="text" onChange={(e)=>setNameInput(e.target.value)} value={nameInput} />
          </div>
          <div>
            <h2>تلفن همراه</h2>
            <input className=' w-full border border-slate-300 rounded-md px-3 py-2'  type="text" onChange={(e)=>setPhoneInput(e.target.value)} value={phoneInput}/>
          </div>
          <div>
            <h2>ایمیل</h2>
            <input className=' w-full border border-slate-300 rounded-md px-3 py-2'  type="email" onChange={(e)=>setEmailInput(e.target.value)} value={emailInput}/>
          </div>
        </div>
        <div className='w-full'>
          <div className='w-full flex flex-col gap-3'>
            <h2>نام کاربری</h2>
            <input readOnly className=' w-full border border-slate-300 rounded-md px-3 py-2 bg-slate-100'  type="text" value={admin.userName}/>
          </div>
        </div>
       </div>
       <div className='flex justify-evenly w-full mt-6 child:text-center child:w-28 child:py-2 child:rounded-md child:text-white'>
          <button onClick={() => submitHandler()} className=' bg-blue-500 '><BeenhereOutlinedIcon/> ذخیره</button>
          <Link to={"/admins"} className=' bg-orange-500 '><CancelPresentationOutlinedIcon/> بازگشت</Link>
        </div>
      </div>
    </div>
    </div>
  )
}
