"use client";
import Image from 'next/image'
import Navbar from './components/Navbar'
import Chats from './components/Chats'
import Info from './components/Info'
import { Main } from 'next/document'
import Link from 'next/link'
import { SessionProvider, getSession, useSession } from "next-auth/react";
import Settings from './components/Settings';
import { useContext, useEffect, useState } from 'react';
import { ContextProvider } from '@/context/appContext';
import { Context } from '@/context/appContext';

const Home=()=> {
  const { data: session, status } = useSession();
  const user = session?.user;


  const [setting ,setSetting] = useState(false)
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
   
  };

  const toggleSetting=()=>{
    setSetting(!setting)
  }

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

    if (!session || !session.user) {

      
      
    return ( <>
      <div className='w-screen h-screen'>

      
      <h1>U are not logged in</h1>
      <Link href={'/login'}>Login 🤡</Link>
  
      </div>
      </>)
  }


  return (
    <>

      
   <div className='flex flex-row  h-[calc(100vh)] '>
    {session?(
      <> <Navbar name={user?.name} img ={user?.image} toggleSetting={toggleSetting} toggleNav={toggleNav}/>

      {setting?(
         <Settings isNavVisible={isNavVisible}/>


      ):(
        <>
          <Chats/>
          <Info name={session.user.name}/> 
        
        </>
     

      )}
     
    
    
      
    
     

      </>
    ):(
     null
    )}
   
 

 
  
      
      

    </div>
   
   
    </>
  )
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}

const HomePage = ({ session }) => (
  <ContextProvider>
  <SessionProvider session={session}>
    <Home  />
  </SessionProvider>
  </ContextProvider>
);

export default HomePage;
