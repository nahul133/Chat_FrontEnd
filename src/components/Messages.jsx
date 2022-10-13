import React from 'react'
import useContextChat from '../context/chat/useContextChat'
import useContextAuth from '../hooks/useContextAuth'
import IncomingMessage from './IncomingMessage'
import OutgoingMessage from './OutgoingMessage'
import SendMessage from './SendMessage'

const Messages = () => {

  const { chatState } = useContextChat();
  const {auth} = useContextAuth()

  console.log(chatState.mensajes)

  return (
        <div className="mesgs">

            {/* <!-- Historia inicio --> */}
            <div
              id='mensajes' 
              className="msg_history">

                {

                  chatState.mensajes.map( msg => (
                    (msg.de === auth.uid) 
                      ?
                      <OutgoingMessage key={msg._id} msg={msg}/> 
                      :
                      <IncomingMessage key={msg._id} msg={msg}/>
                   ) )

                }

                

            </div>
            {/* <!-- Historia Fin --> */}

            <SendMessage />


        </div>
  )
}

export default Messages