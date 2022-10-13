import React from 'react'
import { useContext } from 'react'
import { SocketContext } from '../context/SocketContext'

const useContextSocket = () => {
  return useContext(SocketContext)
}

export default useContextSocket