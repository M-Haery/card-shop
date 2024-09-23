import React, { useState } from 'react'
import './Login.css'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import { useCookies} from 'react-cookie';
import useFetch from '../../hooks/useFetch'

export default function Login() {
    const [userAnswer, setUserAnswer] = useState("") 
    const [userName, setUserName] = useState("") 
    const [userPass, setUserPass] = useState("") 
    const [shouldRedirect, setShouldRedirect] = useState(false);

    const [cookies, setCookies] = useCookies(['user'])

    const [adminData] = useFetch("http://localhost:3000/admins")

    

    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])

    function submitHandler(){
        let user = adminData.filter(item => {
           return item.userName === userName
        })

        if(user.length === 0){

            alert('اطلاعات وارد شده نادرست میباشند');

        }else if (validateCaptcha(userAnswer)==true && userPass == user[0].password) {

            setShouldRedirect(true);
            setCookies('user', { username: 'exampleUser' }, { path: '/' })
            localStorage.setItem("adminName", user[0].name)

        }else {

            alert('اطلاعات وارد شده نادرست میباشند');
        }
        setUserAnswer("")
        setUserName("")
        setUserPass("")
    }

    if (shouldRedirect) {
        return <Navigate to="/panel" />;
    }

  return (
    <div className='formContainer relative'>
        <p className=' text-center w-[50%] p-5 bg-[darkRed] text-white m-auto rounded-md'>
    پنل مدیریت هنوز به صورت ریسپانسیو طراحی نشده است و در صفحه نمایش های کوچک، به درستی قابل مشاهده نیست
        </p>
        <div className='flex flex-col items-center justify-center gap-5  m-auto w-[300px] sm:w-[400px] h-[550px] bg-slate-400 opacity-50 absolute top-48 right-0 left-0 rounded-xl'>
            <img src="./images/admin-logo.png" alt=""  />
            <div className='flex justify-around py-7 rounded-lg w-[90%] bg-white border-2 border-r-4 border-green-500 '>
                <h2>نام کاربری: admin</h2>
                <h2>رمز عبور: 123456</h2>
            </div>
            <input className='w-[90%] py-2 px-1 rounded-md' type="text" placeholder='نام کاربری' value={userName} onChange={(event) => setUserName(event.target.value)}/>
            <input className='w-[90%] py-2 px-1 rounded-md' type="text" placeholder='رمز عبور' value={userPass} onChange={(event) => setUserPass(event.target.value)}/>
            <LoadCanvasTemplate />
            <input placeholder='کد امنیتی را وارد کنید' className='w-[70%] py-3 px-1 rounded-md' type="text" value={userAnswer} onChange={(event) => setUserAnswer(event.target.value)}/>
            <button className='w-[40%] py-1 rounded-md mt-2 bg-sky-400 text-white ' onClick={submitHandler}><SendIcon/> ورود</button>
        </div>
        
    </div>
  )
}
