import { useReducer } from "react";
import { createContext } from "react";
import { chatReducer } from "./ChatReducer";


export const ChatContext = createContext();

const initialState = {
    uid: '',
    chatActivo: null, // UID del usuario al que le quiiero mandar mensajes
    usuarios : [],
    mensajes: []
}

export const ChatProvider = ({children}) => {

    const [chatState, dispatch] = useReducer(chatReducer, initialState)

    return (
        <ChatContext.Provider
            value={{
                chatState,
                dispatch
            }}
        >
            {children}
        </ChatContext.Provider>
    )
}