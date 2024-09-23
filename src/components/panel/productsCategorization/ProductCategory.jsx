import React, { useState } from "react";
import ModeEditOutlineSharpIcon from "@mui/icons-material/ModeEditOutlineSharp";
import RemoveRedEyeSharpIcon from "@mui/icons-material/RemoveRedEyeSharp";
import VisibilityOffSharpIcon from "@mui/icons-material/VisibilityOffSharp";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import { Link } from "react-router-dom";

export default function ProductCategory(props) {
  const [isShow, setIsShow] = useState(props.isShow);

  function deleteHandler() {
    props.onDelete(props.id);
  }

  function isShowFalse(){
    fetch(`http://localhost:3000/posts/${props.id}`, {
      method: 'put',
      headers:{"content-type":'application/json'},
      body: JSON.stringify({
        id: props.id,
        faName: props.faName,
        enName: props.enName,
        img: props.img,
        isShow: false,
        pricing: props.pricing
      })
    }).then(()=>{
      setIsShow(false)
    })
  }

  function isShowTrue(){
    fetch(`http://localhost:3000/posts/${props.id}`, {
      method: 'put',
      headers:{"content-type":'application/json'},
      body: JSON.stringify({
        id: props.id,
        faName: props.faName,
        enName: props.enName,
        img: props.img,
        isShow: true,
        pricing: props.pricing
      })
    }).then(()=>{
      setIsShow(true)
    })
  }

  return (
    <div
      style={{ boxShadow: "0 0 5px 0px #c9c9c9" }}
      className="flex justify-between items-center w-full h-14 py-1 px-10 hover:bg-white hover:text-blue-500 bg-[#fafafa] rounded-md border-gray-300 "
    >
      <h2 className=" text-xl">{props.faName}</h2>
      <div className="flex gap-2 text-white  cursor-pointer child:w-10 child:h-10 child:rounded-full child:flex child:justify-center child:items-center">
        {/* <Link to={`/editCategory/${props.id}`} className=" bg-orange-500 hover:bg-orange-400 transition-all duration-75">
          <ModeEditOutlineSharpIcon />
        </Link> */}
        {isShow ? (
          <div onClick={() => isShowFalse()} className=" bg-green-600 hover:bg-green-500 transition-all duration-75">
            <RemoveRedEyeSharpIcon />
          </div>
        ) : (
          <div onClick={() => isShowTrue()} className=" bg-red-600 hover:bg-red-500 transition-all duration-75">
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
  );
}
