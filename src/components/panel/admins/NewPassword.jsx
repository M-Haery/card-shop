import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../../../hooks/useFetch'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SideBar from '../side-bar/SideBar'
import Adress from '../adress/Adress';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import BeenhereOutlinedIcon from '@mui/icons-material/BeenhereOutlined';
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';
import { Link } from 'react-router-dom';
import Notification from './Notification';


export default function NewPassword() {
    const [passInputValue, setPassInputValue] = useState("")
    const [reapitPassInputValue, setReapitPassInputValue] = useState("")
    const [isSuccessModalShow, setIsSuccessModalShow] = useState(false)
    const [isFailureModalShow, setIsFailureModalShow] = useState(false)
    const params = useParams()
    const [admin] = useFetch(`http://localhost:3000/admins/${params.id}`)
    const navigate = useNavigate()

    function submitHandler(){
      if(passInputValue.length >5 && passInputValue === reapitPassInputValue){
        fetch(`http://localhost:3000/admins/${params.id}`, {
          method: 'put',
          headers:{"content-type":'application/json'},
          body: JSON.stringify({userID: admin.userID,name: admin.name, userName: admin.userName, password: passInputValue, email: admin.email, phone:admin.phone})
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
    <div className='flex bg-[#f5f5f5]'>
    <SideBar/>
    <div className=' w-full px-10 mt-10'>
      <Adress  adress={"پیشخوان > تغییر رمز عبور"}/>
      <div style={{boxShadow: "0 0 8px 0px #c9c9c9"}} className=' mt-7 bg-white rounded-md py-4 px-10'>
        {isSuccessModalShow && <Notification color={"aqua"} title={"رمز عبور با موفقیت تغییر داده شد"}/>}
        {isFailureModalShow && <Notification color={"darkRed"} title={"رمز عبور تغییر داده نشد"} />}
      <h1><LockOutlinedIcon/> تغییر رمز عبور</h1>
      <div className=' h-[1px] w-full bg-slate-300 mt-4'></div>
      <div className=' border border-cyan-500 mt-10 p-5 text-cyan-500 rounded-sm'>
        <p><NotificationsOutlinedIcon/>  استفاده از کاراکترهای خاص جهت حفظ موارد امنیتی توصیه می گردد. همچنین رمز ورودی باید دست کم 5 کاراکتر باشد.</p>
      </div>
      <div style={{boxShadow: "0 0 10px 0px #c9c9c9"}} className=' w-[400px] h-[550px] bg-white m-auto my-7 rounded-xl py-10 px-5'>
        <div className=' w-20 h-20 border border-cyan-600 rounded-full flex justify-center items-center m-auto'>
        <LockOutlinedIcon fontSize='large' className=' text-cyan-600 '/>
        </div>
        <div className=' w-full h-[1px] bg-slate-300 mt-5'></div>
        <div className='flex flex-col gap-2 mt-5 text-center'>
        <h1>نام کاربری: <span className=' text-cyan-400 text-xl'>{admin.userName}</span></h1>
        <h1>نام و نام خوانوادگی: <span className=' text-cyan-400 text-xl'>{admin.name}</span></h1>
        </div>
        <div className=' mt-16'>
          <div className=' flex flex-col gap-3 mb-5'>
          <h2>رمز عبور جدید</h2>
          <input className=' border-[1px] block m-auto rounded-xl w-full py-1 px-2' type="password" value={passInputValue} onChange={(e)=>{setPassInputValue(e.target.value)}}/>
          </div>
          <div className=' flex flex-col gap-3 mb-5'>
          <h2>تکرار رمز عبور</h2>
          <input className=' border-[1px] block m-auto rounded-xl w-full py-1 px-2' type="password" value={reapitPassInputValue} onChange={(e)=>{setReapitPassInputValue(e.target.value)}}/>
          </div>
        </div>
        <div className='flex justify-around w-full'>
          <button onClick={() => submitHandler()} className=' bg-blue-500 px-3 py-2 rounded-md text-white'><BeenhereOutlinedIcon/> ذخیره</button>
          <Link to={"/admins"} className=' bg-orange-500 px-3 py-2 rounded-md text-white'><CancelPresentationOutlinedIcon/> بازگشت</Link>
        </div>
      </div>
      </div>
    </div>
    </div>

  )
}
