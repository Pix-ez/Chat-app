
import React,  { createContext,  useState } from "react";


export const Context = createContext()

export const ContextProvider =(props:any)=>{
    const[friends , setFriends] =useState()
    const[chat ,setChat] = useState()
    const[uid , setUid] = useState()
    const [isLmenuopen, setisLMenuopen] = useState(false)
    const [isRmenuopen, setisRMenuopen] = useState(false)
    const value ={
        friends,
        setFriends,
        uid,
        setUid,
        chat,
        setChat,
        isLmenuopen,
        setisLMenuopen,
        isRmenuopen,
         setisRMenuopen
    }
    return <Context.Provider value={value}>{props.children}</Context.Provider>
}