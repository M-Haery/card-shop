import React, { useEffect } from 'react'
import RemoveRedEyeSharpIcon from "@mui/icons-material/RemoveRedEyeSharp";
import VisibilityOffSharpIcon from "@mui/icons-material/VisibilityOffSharp";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import { useState } from 'react';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import DangerousOutlinedIcon from '@mui/icons-material/DangerousOutlined';
import useFetch from "../../../hooks/useFetch";


export default function Product(props) {
  const [productData, setProductData] = useFetch(`http://localhost:3000/products/${props.id}`)
  const [isAvailable, setIsAvailable] = useState(true)

  
  useEffect(()=>{
    setIsAvailable(productData.isAvailable)
  },[productData])
  function isReleasedFalse(){
    setIsAvailable(false)

    fetch(`http://localhost:3000/products/${props.id}`,{
      method: 'put',
      headers:{"content-type":'application/json'},
      body: JSON.stringify({
        id: props.id,
        title: props.title,
        price: props.price,
        isAvailable: false,
        isReleased: props.isReleased,
        category: props.category,
        img: props.img
      })
    }).then(()=>{
      
    })
  }

  function isReleasedTrue(){
    setIsAvailable(true)

    fetch(`http://localhost:3000/products/${props.id}`,{
      method: 'put',
      headers:{"content-type":'application/json'},
      body: JSON.stringify({
        id: props.id,
        title: props.title,
        price: props.price,
        isAvailable: true,
        isReleased: props.isReleased,
        category: props.category,
        img: props.img
      })
    }).then(()=>{
      
    })
  }

  function deleteHandler() {
    props.onDelete(props.id);
  }

  return (
    <div
      style={{ boxShadow: "0 0 5px 0px #c9c9c9" }}
      className=" flex justify-between items-center w-full h-14 py-1 px-10 hover:bg-white hover:text-blue-500 bg-[#fafafa] rounded-md border-gray-300 "
    >
      <h2 className=" text-xl">{props.title}</h2>
      <h2 className=" text-xl">{props.category}</h2>
      <h2 className=" text-xl">{props.price}</h2>
      <div className="flex gap-2 text-white  cursor-pointer child:w-10 child:h-10 child:rounded-full child:flex child:justify-center child:items-center">
        {isAvailable ? (
          <div onClick={() => isReleasedFalse()} className=" bg-green-600 hover:bg-green-500 transition-all duration-75">
            <RemoveRedEyeSharpIcon />
          </div>
        ) : (
          <div onClick={() => isReleasedTrue()} className=" bg-red-600 hover:bg-red-500 transition-all duration-75">
            <VisibilityOffSharpIcon />
          </div>
        )}

        <div
          onClick={() => deleteHandler()}
          className=" bg-red-500 hover:bg-red-400 transition-all duration-75"
        >
          <DeleteSharpIcon />
        </div>
        
      </div> 
    </div>
  )
}
