import React from 'react'
import useContextChat from '../context/chat/useContextChat'
import useContextAuth from '../hooks/useContextAuth'
import SidebarItem from './SidebarItem'

const Sidebar = () => {

  const {auth} = useContextAuth()

  const {chatState} = useContextChat()

  const {usuarios} = chatState

  const usuariofiltrado = usuarios.filter( usuario => usuario.email !== auth.email )

  return (
        <div className="inbox_chat">

        { usuariofiltrado.map( usuario => (
          
          <SidebarItem key={usuario.uid} usuario={ usuario }/>   
        )) }

        {/* <!-- Espacio extra para scroll --> */}
        <div className="extra_space"></div>


    </div>
  )
}

export default Sidebar