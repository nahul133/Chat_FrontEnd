
import { useEffect } from 'react';
import { createContext } from 'react';
import { scroll, scrollAnimado } from '../helpers/scroll';
import useContextAuth from '../hooks/useContextAuth';
import { useSocket } from '../hooks/useSocket'
import { types } from '../types/types';
import useContextChat from './chat/useContextChat';

export const SocketContext = createContext();


export const SocketProvider = ({ children }) => {

    const { socket, online, conectarSocket, desconectarSocket } = useSocket('https://young-mesa-60609.herokuapp.com');
    const {auth} = useContextAuth()
    const { dispatch } = useContextChat()

    useEffect(() => {
       if (auth.logged) {
        conectarSocket()
       }
    }, [auth, conectarSocket]);

    useEffect(() => {
        if (!auth.logged) {
            desconectarSocket()
        }
     }, [auth, desconectarSocket]);

     useEffect(() => {
        
        socket?.on('listar-usuarios', (usuarios) => {
            dispatch({
                type: types.usuariosCargados,
                payload: usuarios
            })
        })

     }, [socket]);
     

     useEffect(() => {
        socket?.on('mensaje-personal', (mensaje) => {
            dispatch({
                type: types.nuevoMensaje,
                payload: mensaje
            })

            scrollAnimado('mensajes');
        })
    }, [socket]);

    return (
        <SocketContext.Provider value={{
                            socket, 
                            online,
                            }}>
            { children }
        </SocketContext.Provider>
    )
}