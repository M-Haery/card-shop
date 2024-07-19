import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function SideLink(props) {
  const pageName = useState(localStorage.getItem('selectedSideLink'))

  return (
    <Link className={pageName[0] === props.title ? ' bg-sky-300 text-black' : ""} to={props.adress}><li>{props.icon} {props.title}</li></Link>
  )
}
