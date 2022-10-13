import React from 'react'
import { hora } from '../helpers/hora'

const IncomingMessage = ({msg}) => {

  const hoy = hora(msg.createdAt);

  return (
    
    <div className="incoming_msg">
        <div className="incoming_msg_img">
            <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" />
        </div>
        <div className="received_msg">
            <div className="received_withd_msg">
                <p>{msg.mensaje}</p>
                <span className="time_date">{hoy}</span>
            </div>
        </div>
    </div>

  )
}

export default IncomingMessage