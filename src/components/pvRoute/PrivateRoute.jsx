import React from 'react'
import { isLoggedIn } from '../../utils'
import { Navigate } from 'react-router-dom'
import Login from '../login/Login'

export default function PrivateRoute({children}) {
    
  return (
    <div>
        {
            isLoggedIn() ? (children) : (<Navigate to={"/login"}/>)
        }
    </div>
  )
}
