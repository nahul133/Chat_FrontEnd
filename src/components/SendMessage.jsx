import React from 'react'
import { useState } from 'react'
import useContextChat from '../context/chat/useContextChat';
import useContextAuth from '../hooks/useContextAuth';
import useContextSocket from '../hooks/useContextSocket';

const SendMessage = () => {

  const { socket } = useContextSocket()
  const {auth} = useContextAuth()
  const {chatState} = useContextChat()

  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mensaje.length === 0) {
      return;
    }

    socket.emit('mensaje-personal', {
      de: auth.uid,
      para: chatState.chatActivo,
      mensaje
    })

    setMensaje('')

  }

  return (
    <form
        onSubmit={ handleSubmit }
    >
        <div className="type_msg row">
          <div className="input_msg_write col-sm-9">
              <input type="text" className="write_msg" placeholder="Mensaje..."  value={mensaje} onChange={ e => setMensaje(e.target.value) }/>
          </div>
          <div className="col-sm-3 text-center">
              <button className="msg_send_btn mt-3" type="submit">
                  enviar
              </button>
          </div>
      </div>
    </form>
  )
}

export default SendMessage