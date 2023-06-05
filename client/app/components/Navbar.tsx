"use client"
import { Context } from '@/context/appContext'
import axios from 'axios'
import { setuid } from 'process'
import React, { useContext, useEffect, useState } from 'react'
import { io } from 'socket.io-client'
const socket = io('http://localhost:3001')

// import harsh from '/harsh.png'

export default function Navbar(props: any) {
  const { friends, setFriends, uid, setUid , chat ,setChat ,isRmenuopen, setisRMenuopen } = useContext(Context)




  const [ismenuopen, setisMenuopen] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/user/getfriends?name=${props.name}`);
        const res = await axios.get(`/api/user/fetchinfo?name=${props.name}`);
        setFriends(response.data);
        setUid(res.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
  }, []);

  useEffect(() => {
    if (friends && friends.length > 0) {
      setChat(friends[0]);
    }
  }, [friends, setChat]);
  
  useEffect(() => {
    // if (uid) {
    //   const id = uid.toString();
    //   socket.emit('setUserId', id);
    // } else {
    //   console.error('Invalid uid');
    // }
    socket.on("connection", (socket: any[]) => {
      // socket.join("rahdul");
    });
  }, []);

  if (!friends || !uid) {
    return <div>Loading...</div>;
  }
  
 






  const toggleMenu: any = (e: any) => {
    e.preventDefault()
    setisMenuopen(!ismenuopen)
  }

  const handleSetting = () => {
    props.toggleSetting()
    props.toggleNav()


  }

 
  return (<>

    <div className='lg:hidden ' onClick={toggleMenu}>
      <span className='block w-10 h-1 rounded-xl border-none bg-white   mt-4 shadow-md  shadow-slate-100 brightness-200 ' />
      <span className='block w-10 h-1 rounded-xl border-none bg-white   mt-2 shadow-md  shadow-slate-100 brightness-200' />
      <span className='block w-10 h-1 rounded-xl border-none bg-white   mt-2 shadow-md  shadow-slate-100 brightness-200' />
    </div>
    {ismenuopen && (
      <nav className='bg-blue-950/20 float-left h-screen w-28  flex-col items-center gap-8 pt-3 rounded-l-3xl cursor-pointer '>


        <div className=' float-left h-screen w-28 flex flex-col items-center gap-8 pt-3 rounded-l-3xl cursor-pointer'>

          <a className='w-16 h-1w-16 rounded-full relative transition flex items-center justify-center 
                       shadow-lg shadow-slate-100 ' >

            <img src='/harsh.png' className='block rounded-full relative w-16 ' />
            <span className='absolute bg-green-600 rounded-full w-4 h-4 bottom-0 right-0 shadow-lg brightness-125 shadow-green-500 '></span>

          </a>
          <hr className='block w-8 h-1 rounded-xl border-none bg-white' />

          {/* Dynamic part */}
          <div className='flex flex-col gap-10 flex-grow max-h-[calc(100vh-18rem)]  '>
            <div className='flex flex-col gap-4 overflow-y-auto scrollbar-none' >

              <a className='block w-16 h-16 rounded-full relative bg-slate-500 transition duration-500 hover:rounded-xl hover:bg-green-800 flex-shrink-0'></a>
              <a className='block w-16 h-16 rounded-full relative bg-slate-500 transition duration-500 hover:rounded-xl hover:bg-green-800 flex-shrink-0'></a>
              <a className='block w-16 h-16 rounded-full relative bg-slate-500 transition duration-500 hover:rounded-xl hover:bg-green-800 flex-shrink-0'></a>
              <a className='block w-16 h-16 rounded-full relative bg-slate-500 transition duration-500 hover:rounded-xl hover:bg-green-800 flex-shrink-0'></a>
              <a className='block w-16 h-16 rounded-full relative bg-slate-500 transition duration-500 hover:rounded-xl hover:bg-green-800 flex-shrink-0'></a>
              <a className='block w-16 h-16 rounded-full relative bg-slate-500 transition duration-500 hover:rounded-xl hover:bg-green-800 flex-shrink-0'></a>
              <a className='block w-16 h-16 rounded-full relative bg-slate-500 transition duration-500 hover:rounded-xl hover:bg-green-800 flex-shrink-0'></a>
              <a className='block w-16 h-16 rounded-full relative bg-slate-500 transition duration-500 hover:rounded-xl hover:bg-green-800 flex-shrink-0'></a>
              <a className='block w-16 h-16 rounded-full relative bg-slate-500 transition duration-500 hover:rounded-xl hover:bg-green-800 flex-shrink-0'></a>
              <a className='block w-16 h-16 rounded-full relative bg-slate-500 transition duration-500 hover:rounded-xl hover:bg-green-800 flex-shrink-0'></a>
              <a className='block w-16 h-16 rounded-full relative bg-slate-500 transition duration-500 hover:rounded-xl hover:bg-green-800 flex-shrink-0'></a>
              <a className='block w-16 h-16 rounded-full relative bg-slate-500 transition duration-500 hover:rounded-xl hover:bg-green-800 flex-shrink-0'></a>
            </div>
          </div>





          {/* Dynamic part */}
          {/* Bottom screen */}
          <hr className='block w-14 h-1  fixed bottom-24 rounded-xl border-none bg-white' />
          <a className='w-16 h-16 rounded-full  fixed bottom-4  flex items-center justify-center hover:rotate-90 transition duration-500 ' >

            <svg
              width='45'
              height='45'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='filter brightness-150'
            >
              <circle cx='12' cy='12' r='3'></circle>
              <path d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z'></path>
            </svg>
          </a>
        </div>
      </nav>
    )}



    <nav className='bg-blue-950/20 float-left w-28  flex-col items-center gap-8 pt-3 rounded-l-3xl cursor-pointer hidden md:block '>


      <div className=' float-left w-28 flex flex-col items-center gap-8 pt-3 rounded-l-3xl cursor-pointer'>

        <a className='w-16 h-1w-16 rounded-full relative transition flex items-center justify-center 
                      shadow-lg shadow-slate-100 ' >

          {/* <img src='/harsh.png' className='block rounded-full relative w-16 ' /> */}
          <img src={props.img} className='block rounded-full relative w-16 ' />
          <span className='absolute bg-green-600 rounded-full w-4 h-4 bottom-0 right-0 shadow-lg brightness-125 shadow-green-500 '></span>

        </a>
        <hr className='block w-8 h-1 rounded-xl border-none bg-white' />

        {/* Dynamic part */}
        <div className='flex flex-col gap-10 flex-grow max-h-[calc(100vh-18rem)]  '>
          <div className='flex flex-col gap-4 overflow-y-auto scrollbar-none' >
            <>
              {friends?.map((user, index) => {
                return (
                  <div key={index}>
                    <a className='block w-16 h-16 rounded-full relative bg-slate-500 transition duration-500 hover:rounded-xl hover:bg-green-800 flex-shrink-0'>
                      <img src={user.img} className='w-16 h-16 rounded-full' />
                    </a>
                  </div>
                );
              })}
            </>


            {/* <a className='block w-16 h-16 rounded-full relative bg-slate-500 transition duration-500 hover:rounded-xl hover:bg-green-800 flex-shrink-0'>
              <img src={friends[0].img} className=' w-16 h-16 rounded-full'/>
            </a>
            <a className='block w-16 h-16 rounded-full relative bg-slate-500 transition duration-500 hover:rounded-xl hover:bg-green-800 flex-shrink-0'></a>
            <a className='block w-16 h-16 rounded-full relative bg-slate-500 transition duration-500 hover:rounded-xl hover:bg-green-800 flex-shrink-0'></a>
            <a className='block w-16 h-16 rounded-full relative bg-slate-500 transition duration-500 hover:rounded-xl hover:bg-green-800 flex-shrink-0'></a>
            <a className='block w-16 h-16 rounded-full relative bg-slate-500 transition duration-500 hover:rounded-xl hover:bg-green-800 flex-shrink-0'></a>
            <a className='block w-16 h-16 rounded-full relative bg-slate-500 transition duration-500 hover:rounded-xl hover:bg-green-800 flex-shrink-0'></a>
            <a className='block w-16 h-16 rounded-full relative bg-slate-500 transition duration-500 hover:rounded-xl hover:bg-green-800 flex-shrink-0'></a>
            <a className='block w-16 h-16 rounded-full relative bg-slate-500 transition duration-500 hover:rounded-xl hover:bg-green-800 flex-shrink-0'></a>
            <a className='block w-16 h-16 rounded-full relative bg-slate-500 transition duration-500 hover:rounded-xl hover:bg-green-800 flex-shrink-0'></a>
            <a className='block w-16 h-16 rounded-full relative bg-slate-500 transition duration-500 hover:rounded-xl hover:bg-green-800 flex-shrink-0'></a>
            <a className='block w-16 h-16 rounded-full relative bg-slate-500 transition duration-500 hover:rounded-xl hover:bg-green-800 flex-shrink-0'></a>
            <a className='block w-16 h-16 rounded-full relative bg-slate-500 transition duration-500 hover:rounded-xl hover:bg-green-800 flex-shrink-0'></a> */}
          </div>
        </div>





        {/* Dynamic part */}
        {/* Bottom screen */}
        <hr className='block w-14 h-1  fixed bottom-24 rounded-xl border-none bg-white' />
        <a className='w-16 h-16 rounded-full  fixed bottom-4  flex items-center justify-center hover:rotate-90 transition duration-500 ' onClick={handleSetting} >

          <svg
            width='45'
            height='45'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='filter brightness-150'
          >
            <circle cx='12' cy='12' r='3'></circle>
            <path d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z'></path>
          </svg>
        </a>
      </div>
    </nav>

  </>




  )
}
