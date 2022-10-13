import axios from 'axios'
import React from 'react'
import useContextChat from '../context/chat/useContextChat'
import { scroll } from '../helpers/scroll'
import { types } from '../types/types'

const SidebarItem = ({usuario}) => {

  const {chatState ,dispatch } = useContextChat() 

  const activarChat = async() => {
    dispatch({
        type: types.activarChat,
        payload: usuario.uid
    })     

    try {
        
        const token = localStorage.getItem('token')

        const config = {
            headers: {
                'x-token': token
            }
        }
        const {data} = await axios(`${import.meta.env.VITE_BACKEND}/mensajes/${usuario.uid}`, config)
        console.log(data);

        dispatch({
            type: types.cargarChat,
            payload: data.mensajes
        })

        scroll('mensajes')

    } catch (error) {
       console.log(error) 
    }


  }  

  return (
     <div className={`chat_list ${ ( usuario.uid === chatState.chatActivo ) && 'active_chat' }`}
          onClick={activarChat}  
     >
        <div className="chat_people">
            <div className="chat_img"> 
                <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
            </div>
            <div className="chat_ib">
                <h5>{ usuario.nombre }</h5>
                {
                    usuario.online ? <span className="text-success">Online</span>
                                   : <span className="text-danger">Offline</span>
                }
            </div>
        </div>
    </div>
  )
}

export default SidebarItem