import { useContext } from "react"
import { AuthContext } from "../auth/AuthContext"



const useContextAuth = () => {
  return useContext(AuthContext);
}

export default useContextAuth