import React from 'react'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import RedeemIcon from '@mui/icons-material/Redeem';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';

export default function InfoBox(props) {
  return (
    <div style={{boxShadow: "0 0 8px 0px #c9c9c9"}} className='flex justify-between w-80 p-7 bg-white '>
        <div className=' flex flex-col gap-6'>
        <h1>{props.value}</h1>
        <h1>{props.title}</h1>
        </div>
       <img src={props.svgAdrres} alt="" className=' w-20'/>
    </div>
  )
}
