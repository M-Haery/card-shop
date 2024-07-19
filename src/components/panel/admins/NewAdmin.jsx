import React, { useEffect, useState } from "react";
import Adress from "../adress/Adress";
import SideBar from "../side-bar/SideBar";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import BeenhereOutlinedIcon from '@mui/icons-material/BeenhereOutlined';
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';
import { Link } from "react-router-dom";
import useFetch from '../../../hooks/useFetch'
import Notification from "./Notification";
import { useNavigate } from "react-router-dom";

export default function NewAdmin() {
  const [nameInput, setNameInput] = useState("")
  const [phoneInput, setPhoneInput] = useState("")
  const [emailInput, setEmailInput] = useState("")
  const [userNameInput, setUserNameInput] = useState("")
  const [passInput, setPassInput] = useState("")
  const [reapitPassInput, setReapitPassInput] = useState("")
  const [isPassErrorShow, setIsPassErrorShow] = useState(false)
  const [isUserNameUsed, setIsUserNameUsed] = useState(false)
  const [newAdmin,setNewAdmin] = useState()
  const [canSubmit, setCanSubmit] = useState(false)
  const [isSuccessModalShow, setIsSuccessModalShow] = useState(false)
  const navigate = useNavigate()
  const [admins] = useFetch(`http://localhost:3000/admins`)
  


  

  function submitHandler(){
    let isUserNameValid = admins.some((admin)=>{
      return admin.userName === userNameInput
    })
    setIsUserNameUsed(isUserNameValid)

    if (isUserNameValid){
      setIsUserNameUsed(true)
      setTimeout(()=>{
        setIsUserNameUsed(false)
      },2000)
  }else if (passInput !== reapitPassInput || passInput.length < 5){
    setIsPassErrorShow(true)
    setTimeout(()=>{
      setIsPassErrorShow(false)
    },2000)
    }else{

      setNewAdmin({
        userID:admins.length+1,
        name: nameInput,
        userName: userNameInput,
        password: passInput,
        email: emailInput,
        phone: phoneInput
      })
      setCanSubmit(true)
      
    }
  }

  useEffect(()=>{
    if(canSubmit){
      fetch(`http://localhost:3000/admins`, {
        method: 'post',
        headers:{"content-type":'application/json'},
        body: JSON.stringify(newAdmin)
      }).then(()=>{
        setIsSuccessModalShow(true)
        setTimeout(()=>{
          navigate("/admins")
        },2000)
      })
    }
  },[canSubmit])

  return (
    <div dir="rtl" className="flex bg-[#f5f5f5]">
      <SideBar />
      <div className="relative w-full px-10">
      {isPassErrorShow && <Notification color={"darkRed"} title={"رمز عبور وارد شده معتبر نمیباشد"}/>}
      {isUserNameUsed && <Notification color={"darkRed"} title={"نام کاربری وارد شده معتبر نمیباشد"}/>}
      {isSuccessModalShow && <Notification color={"aqua"} title={"مدیر با موفقیت اضافه شد"}/>}
        <div className=" mt-9">
          <Adress adress={"پیشخوان > مدیر جدید"} />
        </div>
        <div
          style={{ boxShadow: "0 0 8px 0px #c9c9c9" }}
          className=" flex flex-col gap-10 mt-9 bg-white rounded-lg px-5 py-3"
        >
          <div>
            <h1 className=" text-xl">
              <AddCircleOutlinedIcon /> مدیر جدید
            </h1>
            <div className=" bg-slate-400 w-full h-[1px] mt-5"></div>
          </div>
          <div className=" flex gap-4 justify-between w-full child:w-full">
            <div className=" child:flex child:flex-col child:gap-3">
              <div>
                <h2>نام ونام خانوادگی</h2>
                <input
                  className=" w-full border border-slate-300 rounded-md px-3 py-2"
                  type="text"
                  onChange={(e) => setNameInput(e.target.value)}
                />
              </div>

              <div>
                <h2>تلفن همراه</h2>
                <input
                  className=" w-full border border-slate-300 rounded-md px-3 py-2"
                  type="text"
                  onChange={(e) => setPhoneInput(e.target.value)}
                />
              </div>
              <div>
                <h2>ایمیل</h2>
                <input
                  className=" w-full border border-slate-300 rounded-md px-3 py-2"
                  type="email"
                  onChange={(e) => setEmailInput(e.target.value)}
                />
              </div>
              
            </div>
            <div className=" child:flex child:flex-col child:gap-3">
            <div>
                <h2>نام کاربری</h2>
                <input
                  className=" w-full border border-slate-300 rounded-md px-3 py-2"
                  type="text"
                  onChange={(e) => setUserNameInput(e.target.value)}
                />
              </div>
              <div>
                <h2>رمز عبور</h2>
                <input
                  className=" w-full border border-slate-300 rounded-md px-3 py-2"
                  type="password"
                  onChange={(e) => setPassInput(e.target.value)}
                />
              </div>
              <div>
                <h2>تکرار رمز عبور</h2>
                <input
                  className=" w-full border border-slate-300 rounded-md px-3 py-2"
                  type="password"
                  onChange={(e) => setReapitPassInput(e.target.value)}
                />
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
  );
}
