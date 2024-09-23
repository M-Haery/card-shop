import React, { useState } from "react";
import { Link } from "react-router-dom";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';

export default function NavBar(props) {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("display"));
  const [menu, setMenu] = useState(false)

  function themeHandler() {
    props.onChange();
    if (localStorage.getItem("display") === "dark") {
      setDarkMode("dark");
    } else {
      setDarkMode("light");
    }
  }

  function menuHandler(){
  setMenu((prevState)=>{
    return !prevState
  })

  }

  return (
    <>
    <nav className=" relative  flex px-3 sm:px-20 items-center justify-between py-1 dark:bg-slate-900 ">

      <div className=" flex gap-10">
      <Link to={"./"}>
        <img src="/images/karta-logo.png" alt="" />
      </Link>

      <ul className="hidden lg:flex gap-10 items-center ">
        <li className=" dark:text-slate-400 text-slate-500 hover:text-slate-700 transition-colors duration-100">
          <Link to={"./panel"}>پنل مدیریت</Link>
        </li>
        <li className="dark:text-slate-400 text-slate-500 hover:text-slate-700 transition-colors duration-100">
          <Link to={"./rules"}>قوانین خرید</Link>
        </li>
        <li className="dark:text-slate-400 text-slate-500 hover:text-slate-700 transition-colors duration-100">
          <Link to={"./contact"}>تماس باما</Link>
        </li>
        <li className="dark:text-slate-400 text-slate-500 hover:text-slate-700 transition-colors duration-100">
          <Link to={"./questions"}>پرسش های متداول</Link>
        </li>
      </ul>
      </div>

      <div className="flex items-center justify-center gap-5">
        <div onClick={themeHandler}>
          {darkMode === "dark" ? (
            <div className=" bg-slate-800 rounded-md p-1">
            <DarkModeOutlinedIcon
            fontSize="large"
              className=" cursor-pointer"
              sx={{ color: "#616161" }}
            />
            </div>
          ) : (
            <WbSunnyOutlinedIcon
            fontSize="large"
              className=" cursor-pointer"
              sx={{ color: "#616161" }}
            />
          )}
        </div>
        <Link to={"/login"}>
        <button className=" text-sm rounded-lg w-32 h-9 text-white hover:bg-teal-600 transition-colors duration-100 bg-teal-500">
          ورود / ثبت نام
          <PersonIcon fontSize="small" />
        </button>
        </Link>
        <div className=" lg:hidden block" onClick={menuHandler}>
          {
            menu ? (<CloseIcon sx={{ color: "#616161" }} fontSize="large" />) : (<MenuIcon sx={{ color: "#616161" }} fontSize="large" />)
          }
          
        </div>
      </div>
    </nav>
    
    {
      menu && 
      <div className=" absolute left-0 right-0 m-auto z-10 w-[90%] bg-white dark:bg-slate-800  text-xl">
        <ul className=" flex gap-10 p-5 flex-col h-96 child:dark:text-slate-400 child:text-slate-500 child:hover:text-slate-700 child:transition-colors child:duration-100">
        <li>
          <Link to={"./panel"}>پنل مدیریت</Link>
        </li>
        <li>
          <Link to={"./rules"}>قوانین خرید</Link>
        </li>
        <li>
          <Link to={"./contact"}>تماس باما</Link>
        </li>
        <li>
          <Link to={"./questions"}>پرسش های متداول</Link>
        </li>
        </ul>
      </div>
    }
    </>
  );
}
