import { useCallback } from "react";
import { useState } from "react";
import {createContext } from "react";
import axios from "axios"
import useContextChat from "../context/chat/useContextChat";
import { types } from "../types/types";


export const AuthContext = createContext();

const initialState = {
    uid: null,
    checking: true,
    logged: false,
    nombre: null,
    email: null
}

export const AuthProvider = ({children}) => {
    
    const [auth, setAuth] = useState(initialState);

    const login = async(emailinput, password) => {
        
        const {data} = await axios.post(`${import.meta.env.VITE_BACKEND}/login`, {email: emailinput, password})
        
        if (data.ok) {
                const {email, nombre, online, uid} = data.existeUsuario;
                localStorage.setItem('token', data.token)

                setAuth({
                    uid,
                    checking: false,
                    logged: true,
                    nombre,
                    email
                })
            }  
        
        return data.ok;

    }

    const register = async(nombre, email, password) => {
        let obj; 
        const {data} = await axios.post(`${import.meta.env.VITE_BACKEND}/login/new`, {nombre ,email, password})

        if (data.ok) {
            obj = {ok: true, msg: data.msg}
        } else {
            obj = {ok: false, msg: data.error} 
        }

        return obj
    }

    const verificarToken = useCallback( async() => {
        
        const token = localStorage.getItem('token')
        if (!token) {
            setAuth({
                uid: null,
                checking: false,
                logged: false,
                nombre: null,
                email: null
            })
            return false
        }

        try {
            const config = {
                headers: {
                    'x-token': token
                }
            }
            const {data} = await axios(`${import.meta.env.VITE_BACKEND}/login/renew`, config)
            if (data.ok) {
                const {email, nombre, online, uid} = data.usuario;
                localStorage.setItem('token', data.token)

                setAuth({
                    uid,
                    checking: false,
                    logged: true,
                    nombre,
                    email
                })
                return true;
            } else {
                setAuth({
                    uid: null,
                    checking: false,
                    logged: false,
                    nombre: null,
                    email: null
                })
                return false;
            }
        } catch (error) {
            console.log(error)
        }


    }, [])

    const logout = () => {
        localStorage.removeItem('token')
        // window.location.reload();
        setAuth({
            uid: null,
            checking: false,
            logged: false,
            nombre: null,
            email: null
        })
    }

    return(
        <AuthContext.Provider
            value={{
                auth,
                login,
                register,
                verificarToken,
                logout,

            }}
        >
            {children}
        </AuthContext.Provider>
    )
}