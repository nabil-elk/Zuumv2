import { React, useState, useEffect} from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import {signIn, signOut, useSession} from "next-auth/react"

function Login() {
    const { data: session, status} = useSession()
    const router = useRouter();

    useEffect(() => {
        if (status === "authenticated") {
          router.push('/list');
        }
      }, [status]);
  

  return (
    <div>
     
    <div className=" h-screen flex justify-center items-center bg-slate-100">

    <div className=" flex flex-col gap-6 ">
      <h1 className="justify-center text-gray-900 font-medium text-1.0625 text-3xl	mb-48 ">Welcome to Zuum</h1>
      
    
   
    <button className="btn text-gray-900 justify-center bg-gray-200 flex p-2 rounded hover:bg-slate-200 cursor-pointer font-medium text-1.0625 hover:text-gray-800 focus:text-gray-800  flex-row flex items-center w-full" onClick={ () => signIn("google", { callbackUrl: '/list' })}>
        <img className="h-6 w-6 mr-2" alt="google logo" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/><p>Connect with Google</p>
        </button>
        
    
    </div>
  </div>
  </div>
   
  )
}

export default Login;
