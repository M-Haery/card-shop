import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import GoogleIcon from '@mui/icons-material/Google';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
  return (
    <div className=' text-center text-slate-400'>
        <div className='flex flex-col sm:flex-row justify-center items-center py-6 gap-10 dark:bg-[#3A3B3C] bg-[#F1F1F1] text-slate-400'>
            
                <a href='#'>همکاری با ما</a>
                <a href='#'>شعب و نمایندگی ها</a>
                <a href='#'>درباره فروشگاه</a>
            
        </div>
        <div className='flex justify-center sm:justify-around flex-col sm:flex-row gap-6 items-center  px-8 py-6 bg-[#E9E9E9] dark:bg-slate-900'>
            <p>کلیه حقوق این سایت متعلق به فروشگاه انواع سریال و رمز و کد و کارت کارتا میباشد</p>
            <ul className='flex gap-2'>
            <li className=''><FacebookIcon sx={{color:"white"}}/></li>
            <li><InstagramIcon sx={{color:"white"}}/></li>
            <li><TelegramIcon sx={{color:"white"}}/></li>
            <li><GoogleIcon sx={{color:"white"}}/></li>
            <li><WhatsAppIcon sx={{color:"white"}}/></li>
            <li><YouTubeIcon sx={{color:"white"}}/></li>
            </ul>
        </div>
    </div>
  )
}
