"use client";

import Link from "next/link";

import React, { useState } from "react";
import { SessionProvider, signIn , useSession ,signOut , getSession} from "next-auth/react";



const Login = () => {
 
  const {data: session} = useSession()
  console.log(session)



    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    //googlelogin
    async function googlelogin() {
      signIn('google',{callbackUrl:'http://localhost:3000/sign-in'})
      
    }
  
    const submitHandler = async (e:any) => {
      e.preventDefault();
  
      try {
        const data = await signIn("credentials", {
          redirect: false,
          email,
          password,
        });
  
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    // if(session){
    //   return (
    //     <div> 
    //      <p> hello , {session.user?.email}</p>
    //      <button onClick={()=> signOut()}>Sign out</button>
    //       </div>
    //   )
    // }
    // const handleGoogleSignIn = async () => {
    //   try {
    //     await signIn("google");
   
       
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
  
    return (
      
      <div className="container container-fluid">
    
        <div className="row mt-5 d-flex justify-content-center">
          <div className="col-10 col-lg-5 ">
            <form
              className="border border-secondary rounded p-4"
              onSubmit={submitHandler}
            >
              
           
          
  
  
              <div className="text-center">
                
                <p>Sign In with GOOGLE</p>
                <button
                  type="button"
                  className="btn btn-link btn-floating-mx-1"
                  onClick={googlelogin}
                >
                  Click here 👈
                </button>
  
               
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  
  // export default Login;
  //@ts-ignore
  export async function getServerSideProps(context) {
    const session = await getSession(context);
    return {
      props: {
        session,
      },
    };
  }
  
  const LoginPage = ({ session }) => (
    <SessionProvider session={session}>
      <Login />
    </SessionProvider>
  );
  
  export default LoginPage;