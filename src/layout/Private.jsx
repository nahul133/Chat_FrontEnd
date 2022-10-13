import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import "../css/chat-style.css"
import useContextAuth from '../hooks/useContextAuth'

const Private = () => {

  const {auth} = useContextAuth()



  return (
  <>
    {auth.logged ? <Outlet /> : <Navigate to='/auth'/>}
     
  </>
    
  )
}

export default Private