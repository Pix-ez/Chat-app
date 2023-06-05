import React from 'react'

export default function Chat(props) {

  // console.log(props.msg)
  return (
    <>
   
    
   <div className='flex flex-row mb-2 bg-slate-700/50 hover:bg-slate-800/60 transition duration-500 group'>
    <img alt='img' src={props.img}  className='block rounded-full relative  ' style={{width:"3rem" , height:"3rem"}} />
    
    <div className='flex flex-col relative w-full'>
        <div className='flex flex-row '>
        <span className='text-gray-300 p-2'>9:34 AM 21-May</span>
        <div className='group-hover:block hidden  absolute top-0 right-3'>options</div>

        </div>
   
        <article className='text-gray-300 p-2'>
            {props.msg}</article>

    </div>
        
      
        

    </div>
   
    </>
  )
}
