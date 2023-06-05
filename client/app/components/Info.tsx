"use client";
import { Context } from '@/context/appContext';
import axios from 'axios';
import { getSession } from 'next-auth/react';
import React, { useContext, useState } from 'react'




export default function Info(props:any) {
  const { isLmenuopen, setisLMenuopen } = useContext(Context)
  const [tag, setTag] = useState("");
  const [status ,setStatus]= useState("none")
  const [rstatus ,setRstatus]= useState("loading")
  const [option , setOption] = useState("info")
  const [msg ,setMsg]= useState("none")
  const [users, setUsers] = useState([])
  const [requests, setReuests] = useState([])
  

// Remove duplicates by comparing the 'id' property
const uniqueRequests = requests.reduce((acc, req) => {
  if (!acc.some(r => r.id === req.id)) {
    acc.push(req);
  }
  return acc;
}, []);

const toggleMenu: any = (e: any) => {
  e.preventDefault()
  setisLMenuopen(!isLmenuopen)
}
  const setinfo =  (e:any) => {
    e.preventDefault();
    setOption('info')

  }
  const setadd =  (e:any) => {
    e.preventDefault();
    setOption('add')  
  }

  //fetching the requests
  const getreq=async(e:any)=>{
    e.preventDefault();
    const name = props.name
 
    setOption('req')
    const req = await axios.post('/api/user/getreq',({name}))
    if(req.status===200){
      // console.log(req.data.requests)
     
       setReuests(req.data.requests)
      //  console.log(requests)
       setRstatus('ready')
    }else if(req.status === 500){
      setRstatus('not')
    }
    }
    


  //making Friend request
  const makereq = async (tag: string) => {
 
    //our name
    const name = props.name
    //searched user tag
    console.log(name)

  
    const req = await axios.post('/api/user/makereq' ,({tag, name}))
    if(req.status === 200){
      alert("Reuests sent successfuly.")
    }
  }

  //Search user
  const submitHandler = async (e:any) => {
    e.preventDefault();
    setStatus('loading')
    try {
      const res = await axios.post('/api/user/finduser', {tag})
      
      if(res.status === 200){
        setStatus('ready')
        console.log(res.data)
        setUsers(res.data)
      }else if(res.status === 404){
        console.log("user not")
        setStatus('not')


      }
    } catch (error) {
      console.log(error)
    }

    
  
    
  }

  const accept=async(name:string)=>{
    const my_name = props.name
    const  user_name = name
  
    try {
      const req = await axios.post('/api/user/accept', {my_name, user_name})
    if(req.status ===200){
      alert("friend added succesfuly")
    }
    } catch (error) {
      console.log(error)
      
    }

    
  }

  const reject=async(name:string)=>{
    const my_name = props.name
    const  user_name = name
  
    try {
      const req = await axios.post('/api/user/reject', {my_name, user_name})
    if(req.status ===200){
      alert("Request deleted successfully.")
    }
    } catch (error) {
      console.log(error)
      
    }

    
  }


  return (<>
  {/* mobile */}

      {/* <div className='lg:hidden ' onClick={toggleMenu}>
      <span className='block w-10 h-1 rounded-xl border-none bg-white   mt-4 shadow-md  shadow-slate-100 brightness-200 ' />
      <span className='block w-10 h-1 rounded-xl border-none bg-white   mt-2 shadow-md  shadow-slate-100 brightness-200' />
      <span className='block w-10 h-1 rounded-xl border-none bg-white   mt-2 shadow-md  shadow-slate-100 brightness-200' />
    </div> */}

    {isLmenuopen && (<>
    dd
    </>)}


    <div className='bg-blue-500/10  ml-1  hidden md:block' style={{ width: "27%" }}>

      <div className='flex flex-col'>
        <div className='flex flex-row gap-8 p-2'>
          <button onClick={setinfo}>INFO</button>
          <button  onClick={setadd}>ADD Friends</button>
          <button  onClick={getreq}>Requests</button>
        </div>
        {option === 'info' && (<div>Info content</div>)}
      {option === 'add' && (
        <div>
        <div className='flex flex-row mt-3 mb-4 gap-5'>
          <input className='bg-white/50 text-black p-2 rounded-xl ' placeholder='type user-tag here'
           type="tag"
           id="tag"
          
           value={tag}
           onChange={(e) => setTag(e.target.value)} />
          <button className='bg-blue-600 rounded-2xl p-2' onClick={submitHandler}>Search</button>
        </div>
        <div className='flex flex-col gap-10 flex-grow max-h-[calc(100vh-3rem)] bg-black'>
          <div className='flex flex-col gap-4 overflow-y-auto scrollbar-none h-fit'>
            {status==='none'?(
           <><div className='text-lg bg-black text-white ml-3 p-2'>Search</div></>)
            :(null)}
            {status==='loading'?(
            <><div className='text-lg bg-black text-white animate-pulse ml-3 p-2'>Loading...</div></>)
            :(null)}
            {status==='ready'?(
              <>
              
             
                <div className='bg-blue-500 flex flex-col w-3/5 m-2 p-2 h-fit'>
                <div className='flex flex-row gap-10 '>
                  <img alt='hello' className='rounded-full w-10 h-10' src={users?.img}></img>
                  <a>name - {users?.name}</a>
                  <a>tag -{users?.tag}</a>
                  <button className='self-center bg-blue-900 text-white p-1 rounded-xl '
                onClick={() => {
                  event.preventDefault();
                  makereq(users?.tag);
                }}
                >ADD</button>
            
            
                </div>
                
            
              </div>
             

              
              </>
              
           
          
            ):(null)}
            {status==='not'?(
            <><div className='text-lg bg-black text-white animate-pulse ml-3 p-2'>User not Found.🤡</div></>)
            :(null)}
          
        
          </div>
        
        </div>
        
        </div>
      
      
      )}
      {option === 'req' && (
        <>
        {rstatus === 'loading'&& (<div className='text-lg bg-black text-white animate-pulse ml-3 p-2'>Loading...</div>  )}
        {rstatus === 'ready'&& (
          <>
         {uniqueRequests.map((req, index) => (
            <>
            <div key={index} className='flex flex-row bg-blue-600 gap-4 p-3 ml-2 mt-2 w-fit  '>
            <img alt='user' src={req.img} className='w-10 h-10 rounded-full'/>
          
            
            <a>{req.name}</a>
            <button className='self-end border-black border-2 p-0.5' 
            onClick={()=>{accept(req.name)}}>accept</button>
            <button className='self-end border-black border-2 p-0.5'
             onClick={()=>{reject(req.name)}}>reject</button>
            
          </div>
            </>
          ))}
           </>
          

          )}

     
      </>
      )}
      </div>
    </div>
    </>
  )
}
