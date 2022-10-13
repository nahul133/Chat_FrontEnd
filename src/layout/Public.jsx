import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useContextChat from '../context/chat/useContextChat';
import '../css/login-register.css';
import useContextAuth from '../hooks/useContextAuth';
import { types } from '../types/types';


const Public = () => {

  const {auth} = useContextAuth()

  const {dispatch} = useContextChat();

  dispatch({
    type: types.cerrarSesion
  })

  return (

    <>
      
      { auth.logged ? <Navigate to='/' /> : 

      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100 p-t-50 p-b-90">
              <Outlet />
          
          </div>
        </div>
      </div>
	
    }

    </>

  )
}

export default Public