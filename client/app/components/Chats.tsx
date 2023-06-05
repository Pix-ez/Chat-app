import React, { useContext, useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Chat from './Chat'
import { io } from 'socket.io-client'
import { Context } from '@/context/appContext'
const socket = io('http://localhost:3001')


export default function Chats() {
  const { friends, setFriends, uid, setUid ,chat, } = useContext(Context)
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  
  useEffect(() => {
    socket.on('message', (message) => {
      console.log('Received message:', message);
  
      // Update the state by adding the new message to the existing messages
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  
    return () => {
      socket.disconnect(); // Disconnect the socket when the component unmounts
    };
  }, []);


  const send = (e:any) => {
    e.preventDefault();
    // Assuming you have a reference to the Socket.IO client
    socket.emit('send', { senderUid: uid, receiverUid: chat.uid, message });
  
    // Clear the input after sending the message
    setMessage('');
  };
 

  return (<>
  
    

<div className=' bg-gray-600/20 w-full flex flex-col '>
  <div className='flex flex-row gap-64 '>
  <div className='lg:hidden ' >
      <span className='block w-10 h-1 rounded-xl border-none bg-white   mt-4 shadow-md  shadow-slate-100 brightness-200 ' />
      <span className='block w-10 h-1 rounded-xl border-none bg-white   mt-2 shadow-md  shadow-slate-100 brightness-200' />
      <span className='block w-10 h-1 rounded-xl border-none bg-white   mt-2 shadow-md  shadow-slate-100 brightness-200' />
    </div>
    <div className='lg:hidden  ' >
      <span className='block w-10 h-1 rounded-xl border-none bg-white   mt-4 shadow-md  shadow-slate-100 brightness-200 ' />
      <span className='block w-10 h-1 rounded-xl border-none bg-white   mt-2 shadow-md  shadow-slate-100 brightness-200' />
      <span className='block w-10 h-1 rounded-xl border-none bg-white   mt-2 shadow-md  shadow-slate-100 brightness-200' />
    </div>

  </div>

  <div className='w-full bg-gray-800/25 p-2'>
    title bar
  </div>
  <div className='flex flex-col max-h-[calc(100vh-5.5rem)] overflow-y-auto'>
  <div className='flex flex-col gap-0 overflow-y-auto scrollbar-none'>
  {messages.map((msg) => (
          <Chat key={chat.id}
           img={chat.img}
          msg={msg} />
        ))}
  </div>
</div>

  <div className='w-full bg-gray-700 p-2 flex-shrink-0 bottom-0 fixed flex-row '>
    
    <button className=''>ADD</button>
    <input type="text" className="ml-3 bg-slate-400/25 rounded-2xl outline-none pl-2 pr-2"
    value={message}
    onChange={(e) => setMessage(e.target.value)}/>
    <button className=' ' 
    onClick={send}>Send</button>

  </div>
 
</div>
</>

  )
}
