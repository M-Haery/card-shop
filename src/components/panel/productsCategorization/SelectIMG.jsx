import React, { useState } from 'react'
import './selectIMG.css'

export default function SelectIMG(props) {
    const [isClicked, setIsclicked] = useState(false)

   function selectHandleer(){
        props.onSelect(props.adress)
        setIsclicked(true)
    }
  return (
    <>
    <div>
        <img className={props.isSelected ? ('selected w-24 h-24 cursor-pointer rounded-lg ') : "w-24 h-24 cursor-pointer rounded-lg hover:border-8 hover:border-red-700"} src={props.adress} alt={props.adress} onClick={()=> selectHandleer()}/>
    </div>
    </>
  )
}
