import React, { useState } from 'react'
import SideBar from '../side-bar/SideBar'
import Adress from '../adress/Adress'
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import { Link } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import ProductCategory from './ProductCategory';
import RemoveModal from '../removeModal/RemoveModal';

export default function ProductsCategorization() {
  const [posts] = useFetch("http://localhost:3000/posts")
  const [isDeleteModalShow, setIsDeleteModalShow] = useState(false)
  const [removedProductId, setRemovedProductId] = useState()

  localStorage.setItem('selectedSideLink', "دسته بندی محصولات")
  
  function deleteHandler(id){
    setRemovedProductId(id)
    setIsDeleteModalShow(true)
  }

  function modalCloseHandler(){
    setIsDeleteModalShow(false)
  }

  return (
    <div dir='rtl' className='flex bg-[#f5f5f5]'>
      <SideBar/>
     
      <div className='relative w-full px-10'>
        <div className=" mt-9">
        <Adress  adress={"پیشخوان >  دسته بندی محصولات"}/>
        </div>
        <div style={{boxShadow: "0 0 8px 0px #c9c9c9"}} className=' flex flex-col gap-10 mt-9 bg-white rounded-lg p-5'>
          {isDeleteModalShow && <RemoveModal onClose={modalCloseHandler} id={removedProductId} table={"posts"}/>}
          {isDeleteModalShow && <div onClick={() => setIsDeleteModalShow(false)} style={{backgroundColor: "rgba(0,0,0,0.4)"}} className=' fixed left-0 top-0 z-10 w-full h-full'></div>}
         <div className=' text-lg'>
          <h1 className=' mb-2'><CategoryOutlinedIcon/> دسته بندی محصولات</h1>
          <div className=' bg-slate-300 w-full h-[1px] m-auto'></div>
         </div>
         <div>
          <Link to={"/newCategory"} className='flex justify-center items-center bg-cyan-400 hover:bg-cyan-300 transition-all duration-75 rounded-full w-32 px-3 py-2 text-white'><AddCircleSharpIcon className=''/> دسته جدید</Link>
          <div className=' bg-slate-300 w-full h-[1px] m-auto my-4'></div>
          <div className=' flex flex-col gap-4'>
            {
              posts.map((product)=>(
                <ProductCategory onDelete={deleteHandler} {...product} key={product.id}/>
              ))
            }
          </div>
         </div>
        </div>
      </div>
    </div>
  )
}
