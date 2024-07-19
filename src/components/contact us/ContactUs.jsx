import React, { useEffect, useState } from 'react'
import Slider from '../slider/Slider'
import Footer from '../footer/Footer'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import useFetch from '../../hooks/useFetch';
import Notification from '../panel/admins/Notification';
import { useNavigate } from 'react-router-dom';

export default function ContactUs() {

  const [nameInput, setNameInput] = useState("")
  const [emailInput, setEmailInput] = useState("")
  const [phoneInput, setPhoneInput] = useState("")
  const [partInput, setPartInput] = useState("فروش")
  const [urgencyInput, setUrgencyInput] = useState("کم")
  const [titleInput, setTitleInput] = useState("")
  const [messageInput, setMessageInput] = useState("")
  const [tickets] = useFetch("http://localhost:3000/tickets")
  const [isFailureModalShow, setIsFailureModalShow] = useState(false)
  const [isSuccessModalShow, setIsSuccessModalShow] = useState(false)
  const navigate = useNavigate()

 

   function submitHandler(){


    if(emailInput.length >5 && messageInput.length > 5){
      fetch(`http://localhost:3000/tickets`, {
        method: 'post',
        headers:{"content-type":'application/json'},
        body: JSON.stringify({ticketID: tickets.length +1, name: nameInput, email:emailInput, phone: phoneInput, urgency: urgencyInput, part: partInput, title: titleInput ,message: messageInput, condition:"در انتظار"})
      }).then(()=>{
        setIsSuccessModalShow(true)
      })
  }else{
    setIsFailureModalShow(true)
  }

  }


 
  return (
    <>
       <Slider/>
       <div className='flex flex-col lg:flex-row pb-20  lg:px-16 justify-center gap-10 bg-[#f5f5f5] dark:bg-[#1c212e] dark:text-white'>
        {isSuccessModalShow && <Notification color={"green"}/>}
        {isFailureModalShow && <Notification color={"red"}/>}

       <div className='flex flex-col gap-3 w-[90%] sm:w-[500px] md:w-[700px] py-9 px-4 m-auto dark:bg-[#292f43] bg-white shadow-2xl rounded-2xl mt-10'>
        <h2>نام:</h2>
        <input value={nameInput} onChange={(e) => setNameInput(e.target.value)} type="text" className='dark:bg-[#292f43] border border-gray-500 py-2 rounded-lg' />
        <h2>ایمیل: <span>*</span></h2>
        <input value={emailInput} onChange={(e) => setEmailInput(e.target.value)} type="email" name="" id="" className='dark:bg-[#292f43] border border-gray-500 py-2 rounded-lg' />
        <h2>شماره همراه:</h2>
        <input value={phoneInput} onChange={(e) => setPhoneInput(e.target.value)} type="text" className='dark:bg-[#292f43] border border-gray-500 py-2 rounded-lg' />
        <h2>فوریت</h2>
        <select value={urgencyInput} onChange={(e) => setUrgencyInput(e.target.value)} className='dark:bg-[#292f43] border border-gray-500 py-2 rounded-lg w-[80%] block m-auto' >
          <option value="کم">کم</option>
          <option value="عادی">عادی</option>
          <option value="زیاد">زیاد</option>
        </select>
        <h2>بخش</h2>
        <select value={partInput} onChange={(e) => setPartInput(e.target.value)}  className='dark:bg-[#292f43] border border-gray-500 py-2 rounded-lg w-[80%] block m-auto' >
          <option value="فروش">فروش</option>
          <option value="پشتیبانی">پشتیبانی</option>
          <option value="همکاری">همکاری</option>
          <option value="سایر">سایر</option>
        </select>
        <h2>عنوان پیام</h2>
        <input value={titleInput} onChange={(e) => setTitleInput(e.target.value)} type="text" className='dark:bg-[#292f43] border border-gray-500 py-2 rounded-lg' />
        <h2>متن پیام: <span>*</span></h2>
        <textarea value={messageInput} onChange={(e) => setMessageInput(e.target.value)} className='dark:bg-[#292f43] border border-gray-500 py-2 rounded-lg' ></textarea>
        
        {/* <div className='flex justify-between lg:justify-evenly'>
        <LoadCanvasTemplate />
        <input type="text"  value={inputValue} onChange={(event) => {setInputValue(event.target.value)}} className='dark:bg-[#292f43] border border-gray-500 h-10 w-32  rounded-lg' />
        </div> */}
        <button onClick={submitHandler} className=' bg-blue-500 rounded-md py-2 text-white'>ارسال پیام</button>
       </div>
       <div className='flex flex-col justify-center gap-3 py-9 px-4 w-[90%] sm:w-[500px] md:w-[700px] m-auto lg:my-10 lg:h-72  dark:bg-[#292f43] bg-white shadow-2xl rounded-2xl mb-10'>
        <h1><LocalPhoneIcon/> تماس با ما</h1>
        <p>
          <LocationOnIcon/> نشانی: تهران، سید خندان
        </p>
        <h2><PhoneEnabledIcon/> 09907220089</h2>
        <h2><EmailIcon/> haerisadra@gmail.com</h2>
       </div>
       </div>
       <Footer/>
    </>
  )
}
