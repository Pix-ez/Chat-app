"use client";


import axios from 'axios';
import { SessionProvider, getSession, useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';


const  Signin=()=> {
  const { push } = useRouter();
  
  const [tag, setTag] = useState("");
  const [ok, setOK] = useState(Boolean)
  
  
  const { data: session, status } = useSession();
  useEffect(() => {
    
    console.log(session)

  }, [session]);
  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  

  if (!session || !session.user) {
    return <div>Please sign in</div>;
  }
  


  
  const { user } = session;
  const name = user?.name;
  const email = user?.email;
  const img = user?.image;

  const createUser=async()=>{

    }

    

  const check= async()=>{
    
    try {
        const response =  await axios.post('/api/user/checkuser',{email})
        // console.log(response.data.msg)
        if(response.data.msg){
          sessionStorage.setItem('name',session.user?.name)
          push('/');
        }else{
          setOK(true)
        }
        
       }
      catch (error) {
      console.error(error);
    }

  }
 
 check()


  
    const submitHandler = async (e:any) => {
        e.preventDefault();
        if(ok){
          try {
            const res = await axios.post('/api/user/createuser',{email, name, img, tag})
            console.log(res.data.msg)
            push('/')
          } catch (error) {
            console.log(error)
          }

        }
      
        
      }


  



  return (
    <div className="container container-fluid">
   
    <div className="row mt-5 d-flex justify-content-center">
      <div className="col-10 col-lg-5 ">
        <form
          className="border border-secondary rounded p-4"
          onSubmit={submitHandler}
        >
    
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="email_field">
             USerTag with nospaces
            </label>
            <input
              type="tag"
              id="tag"
              className="form-control"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            />
          </div>

          

          <button
            type="submit"
            className="btn btn-block w-100 btn-primary btn-block mb-4"
          >
            Sign in
          </button>


          </form>
          </div>
        
      </div>
    </div>
 
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

const SignPage = ({ session }) => (
    <SessionProvider session={session}>
      <Signin />
    </SessionProvider>
  );
  
  export default SignPage;
