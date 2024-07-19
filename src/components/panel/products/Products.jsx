import React, { useEffect, useState } from 'react'
import SideBar from '../side-bar/SideBar'
import Adress from '../adress/Adress'
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import { Link } from 'react-router-dom';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Product from './Product';
import useFetch from "../../../hooks/useFetch";
import RemoveModal from '../removeModal/RemoveModal';

export default function products() {
  localStorage.setItem('selectedSideLink', "محصولات")
  const [productsData] = useFetch("http://localhost:3000/products")
  
  const [isDeleteModalShow, setIsDeleteModalShow] = useState(false)
  const [removedProductId, setRemovedProductId] = useState()

  function modalCloseHandler(){
    setIsDeleteModalShow(false)
  }

  function deleteHandler(id){
    setRemovedProductId(id)
    setIsDeleteModalShow(true)
  }

  return (
    <div dir='rtl' className='flex bg-[#f5f5f5]'>
      <SideBar/>
     
      <div className='relative w-full px-10 '>
        <div className=" mt-9">
        <Adress  adress={"پیشخوان > محصولات"}/>
        </div>
        <div style={{boxShadow: "0 0 8px 0px #c9c9c9"}} className=' flex flex-col gap-5 mt-9 bg-white rounded-lg p-5'>
        {isDeleteModalShow && <RemoveModal onClose={modalCloseHandler} id={removedProductId} table={"products"}/>}
        {isDeleteModalShow && <div onClick={() => setIsDeleteModalShow(false)} style={{backgroundColor: "rgba(0,0,0,0.4)"}} className=' fixed left-0 top-0 z-10 w-full h-full'></div>}
         <div className=' text-lg'>
          <h1 className=' mb-2'><CategoryOutlinedIcon/> محصولات</h1>
          <div className=' bg-slate-300 w-full h-[1px] m-auto'></div>
         </div>
         <Link className=' bg-sky-500 w-11 h-11 rounded-full flex justify-center items-center text-white hover:bg-sky-400 transition-all duration-75' to={"/newProduct"}><AddCircleOutlineOutlinedIcon/></Link>
         <div className=' flex flex-col gap-4'>
          <div className='flex justify-between items-center py-1 px-10 w-full bg-slate-200 h-12 rounded-md text-center'>
            <h2>عنوان</h2>
            <h2>دسته</h2>
            <h2>قیمت</h2>
            <h2>عملیات</h2>
          </div>
            {
              productsData.map((product) => (
                <Product onDelete={deleteHandler} key={product.id} {...product}/>
              ))
            }
         </div>
        </div>
      </div>
    </div>
  )
}
