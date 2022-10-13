import React from 'react'
import { hora } from '../helpers/hora'

const OutgoingMessage = ({msg}) => {
   
  const hoy = hora(msg.createdAt)

  return (
    
     <div className="outgoing_msg">
        <div className="sent_msg">
            <p>{msg.mensaje}</p>
            <span className="time_date">{hoy}</span>
        </div>
     </div>

  )
}

export default OutgoingMessage