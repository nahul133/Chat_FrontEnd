import React from 'react'
import { useEffect } from 'react'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import useContextAuth from '../hooks/useContextAuth'
import Private from '../layout/Private'
import Public from '../layout/Public'
import Chat from '../pages/Chat'
import Login from '../pages/Login'
import Register from '../pages/Register'


const AppRouter = () => {

   const {auth, verificarToken} = useContextAuth()

   useEffect(() => {
    verificarToken();
   }, [verificarToken]);


   if (auth.checking) {
       return <h1>Espere Por Favor</h1> 
   }


  return (
    <BrowserRouter>
        <Routes>

            <Route path='/' element={ <Private /> }>
                <Route index element={<Chat />} />
                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />
            </Route>

            <Route path='/auth' element={<Public />}>
                <Route index element={ <Login /> } />
                <Route path='register' element={ <Register /> } />
                <Route
                    path="*"
                    element={<Navigate to="/auth" replace />}
                />
            </Route>

        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter