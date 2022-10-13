import React from 'react'
import ChatSelect from '../components/ChatSelect'
import InboxPeople from '../components/InboxPeople'
import Messages from '../components/Messages'
import useContextChat from '../context/chat/useContextChat'

const Chat = () => {

  const {chatState} = useContextChat();

  return (
    <div className="messaging">
        <div className="inbox_msg">

           <InboxPeople />

           {
              (chatState.chatActivo)
                ? <Messages />
                : <ChatSelect /> 
           }

           

           

        </div>


    </div>
  )
}

export default Chat