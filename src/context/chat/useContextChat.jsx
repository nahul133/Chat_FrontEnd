import { useContext } from "react"
import { ChatContext } from "./ChatContext"


const useContextChat = () => {
  return useContext(ChatContext);
}

export default useContextChat