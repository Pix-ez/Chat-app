import React, { useState } from 'react'
import { signOut } from 'next-auth/react'


export default function Settings(props:any) {


    const Logout= async()=>{
 
        await signOut()
       
        
    }
  return (
    <div className={`flex flex-row gap-3  h-screen w-full ${props.isNavVisible? 'left-to-right' :null}` }>
        <div className='flex flex-col  bg-black/40 w-1/12   '>
        <a className='font-Rubik p-3 text-3xl font-bold  rounded-2xl hover:bg-slate-800 w-full transition duration-300 self-center '>
            Settings
        </a>
        <hr className='block w-full h-0.5 rounded-xl border-none bg-white  self-center' />
            
        <a className='font-Rubik p-3 text-xl   rounded-2xl hover:bg-slate-800 w-full transition duration-300 self-center '>
            profile
        </a>
        <hr className='block w-28 h-0.5 rounded-xl border-none bg-white  self-center' />
        <a className='font-Rubik p-3 text-xl   rounded-2xl hover:bg-slate-800 w-full transition duration-300 '>
            profile
        </a>
        <hr className='block w-28 h-0.5 rounded-xl border-none bg-white  self-center' />
        <a className='font-Rubik p-3 text-xl   rounded-2xl hover:bg-slate-800 w-full transition duration-300 '>
            profile
        </a>
        <hr className='block w-28 h-0.5 rounded-xl border-none bg-white  self-center' />
        <a className='font-Rubik p-3 text-xl   rounded-2xl hover:bg-slate-800 w-full transition duration-300'>
            profile
        </a>
        <hr className='block w-28 h-0.5 rounded-xl border-none bg-white  self-center' />
        <a className='font-Rubik p-3 text-xl   rounded-2xl hover:bg-slate-800 w-full transition duration-300'>
            profile
        </a>
        <hr className='block w-28 h-0.5 rounded-xl border-none bg-white  self-center' />
        <button className='font-Rubik p-3 text-xl   rounded-2xl hover:bg-black w-full transition duration-300 mt-10 border-white border-2' 
       onClick={Logout}>
            Logout👈
        </button>
  
       
       
        </div>
        <div >
            PRofile
        </div>
        

    </div>
  )
}
