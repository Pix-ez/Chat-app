//@ts-nocheck
/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
import { v4 as uuidv4 } from 'uuid';
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth from "next-auth/next";
import { signIn } from "next-auth/react";
import { Router, useRouter } from 'next/router';

// const router = useRouter();



export default NextAuth({



 

  session:{
    strategy: "jwt"
  },

  providers: [
    GoogleProvider({
      clientId:process.env.GOOGLE_CLIENT_ID, 
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    
    })
  ],
  callbacks:{
    
   

    async session({ session, user, token }) {
      
      return session
    },
    

  },

  
 
 
  

  

  secret: process.env.JWT_SECRET,
  
})
