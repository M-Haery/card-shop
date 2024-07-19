import React, { useState } from 'react'
import SideBar from '../side-bar/SideBar'
import Adress from '../adress/Adress'
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import useFetch from '../../../hooks/useFetch'
import BeenhereOutlinedIcon from '@mui/icons-material/BeenhereOutlined';
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';
import { Link } from 'react-router-dom';
import Notification from '../admins/Notification';

export default function NewProduct() {
  const [categorys] = useFetch(`http://localhost:3000/posts`)

  const [categoryInput, setCategoryInput] = useState("-1")
  const [titleInput, setTitleInput] = useState("")
  const [priceInput, setPriceInput] = useState("")
  const [isAvailable, setIsAvailable] = useState(true)

  const [isInputModalShow, setIsInputModalShow] = useState(false)
  const [isSuccessModalShow, setIsSuccessModalShow] = useState(false)


  function submitHandler(){
      if(categoryInput === "-1" || titleInput.length < 1 || priceInput.length < 1){
        setIsInputModalShow(true)
        setTimeout(()=>{
          setIsInputModalShow(false)
        },2000)
      }else{
        let selectedCategory = categorys.find((item) => {
          return item.faName === categoryInput
        })

        let newProduct = {title: titleInput, price:priceInput, isAvailable: isAvailable , category: categoryInput, img: selectedCategory.img}
 
        fetch(`http://localhost:3000/products`, {
          method: 'post',
          headers:{"content-type":'application/json'},
          body: JSON.stringify(newProduct)
        }).then(()=>{
          setIsSuccessModalShow(true)
          setTimeout(()=>{
            setIsSuccessModalShow(false)
          },2000)
          window.location.reload()
        })
      }
  }

  return (
    <div dir='rtl' className='flex bg-[#f5f5f5]'>
      <SideBar/>
     
      <div className='relative w-full px-10'>
      {isInputModalShow && <Notification color={"darkRed"} title={"لطفا همه اینپوت ها را پر کنید"}/>}
      {isSuccessModalShow && <Notification color={"aqua"} title={"محصول جدید با موفقیت اضافه شد"}/>}
        <div className=" mt-9">
        <Adress  adress={"پیشخوان > محصول جدید"}/>
        </div>
        <div style={{boxShadow: "0 0 8px 0px #c9c9c9"}} className=' flex flex-col gap-10 mt-9 bg-white rounded-lg p-5 '>
         
         <div className=' text-lg'>
          <h1 className=' mb-2'><CategoryOutlinedIcon/> محصول جدید </h1>
          <div className=' bg-slate-300 w-full h-[1px] m-auto'></div>
         </div>

         <div className=' flex flex-col gap-5 child:flex child:flex-col child:gap-2 '>
          <div>
            <h2>دسته بندی:</h2>
            <select onChange={(e) => setCategoryInput(e.target.value)} className=' w-full border border-gray-300 rounded-md px-5 py-2'>
              <option value="-1">انتخاب دسته</option>
              {
                categorys.map(item => (
                  <option key={item.id} value={item.faName}>{item.faName}</option>
                ))
              }
            </select>
          </div>

          <div>
            <h2>عنوان:</h2>
            <input onChange={(e) => setTitleInput(e.target.value)} className=' w-full border border-gray-300 rounded-md px-5 py-2' type="text" />
          </div>

          <div>
            <h2>قیمت:</h2>
            <input onChange={(e) => setPriceInput(e.target.value)} className=' w-full border border-gray-300 rounded-md px-5 py-2' type="text" />
          </div>

          <div className=' child:flex child:flex-col child:gap-3'>
           

            <div>
              <h2>وضعیت موجودی</h2>
              <select onChange={(e) => setIsAvailable(e.target.value === 'true')} className=' w-full border border-gray-300 rounded-md px-5 py-2' type="text">
                <option value="true">موجود</option>
                <option value="false">ناموجود</option>
              </select>
            </div>
          </div>
         </div>
         
         <div className='flex justify-evenly w-full mt-6 child:text-center child:w-28 child:py-2 child:rounded-md child:text-white'>
          <button onClick={() => submitHandler()} className=' bg-blue-500 '><BeenhereOutlinedIcon/> ذخیره</button>
          <Link to={"/products"} className=' bg-orange-500 '><CancelPresentationOutlinedIcon/> بازگشت</Link>
        </div>
        </div>
      </div>
    </div>
  )
}
