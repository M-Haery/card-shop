import React, { useEffect, useState } from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function Adress(props) {
  const [date, setDate] = useState("")

  useEffect(()=>{
    let currentDate = new Date().toLocaleDateString()
    setDate(currentDate)
  })
  return (
    <div style={{boxShadow: "0 0 8px 0px #c9c9c9"}} className='flex justify-between bg-white px-8 py-3 rounded-md border p-12'>
      <h3>
        {props.adress}
      </h3>
      <h3 className='flex gap-2'>
        {date}
        <CalendarMonthIcon/>
      </h3>
    </div>
  )
}
