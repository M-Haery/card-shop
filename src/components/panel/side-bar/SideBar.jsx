import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import WalletOutlinedIcon from '@mui/icons-material/WalletOutlined';
import WorkspacesOutlinedIcon from '@mui/icons-material/WorkspacesOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import PhoneCallbackOutlinedIcon from '@mui/icons-material/PhoneCallbackOutlined';
import PanoramaOutlinedIcon from '@mui/icons-material/PanoramaOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SideLink from './SideLink';

export default function SideBar() {
  const [sideDatas, setSideDatas] = useState([
    {id: 1 ,title: "پیشخوان",icon: <HomeOutlinedIcon/>,adress: "/panel"},
    {id: 2,title: "مدیریت مدیران",icon: <PersonOutlineOutlinedIcon/>,adress: "/admins"},
    {id: 3,title: "دسته بندی محصولات",icon: <WorkspacesOutlinedIcon/>,adress: "/productsCategorization"},
    {id: 4,title: "محصولات",icon: <CategoryOutlinedIcon/>,adress: "/products"},
    {id: 5,title: "سفارشات",icon: <ShoppingCartOutlinedIcon/>,adress: "/orders"},
    {id: 6,title: "تیکت ها",icon: <SendOutlinedIcon/>,adress: "/tickets"},
    {id: 7,title: "سوالات متداول",icon: <HelpOutlineOutlinedIcon/>,adress: "/questionsAdmin"},
    {id: 8,title: "تراکنش ها",icon: <WalletOutlinedIcon/>,adress: "/transactions"},
    {id: 9,title: "کارت ها",icon: <AddCardOutlinedIcon/>,adress: "/cards"},
    {id: 10,title: "کوپن تخفیف",icon: <RedeemOutlinedIcon/>,adress: "/gifts"},
    {id: 11,title: "مدیریت اسلایدر",icon: <PanoramaOutlinedIcon/>,adress: "/slider"},
  ])


 
  const [adminName , setAdminName] = useState(localStorage.getItem("adminName"))
  return (
    <div className=' bg-[#212529] w-80  overflow-y-scroll sticky top-0 h-[100vh]'>
      <div className='flex items-center gap-5'>
        <img src="./images/user.png" alt="" className=' w-20 rounded-full' />
        <h2 className='text-white text-2xl'>{adminName}</h2>
      </div>
      <ul className=' flex flex-col justify-center items-center gap-3 text-xl pt-2 text-gray-300 child-hover:text-gray-700 child-hover:bg-sky-200 child:py-6 child:w-60 child:pr-3 child:rounded-lg child:transition-all child:duration-150'>
      {sideDatas.map((item)=>(

         <SideLink key={item.id} className=" bg-red-800" {...item}/>

      ))}
      </ul>
    </div>
  )
}
