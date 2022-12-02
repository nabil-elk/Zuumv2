import Head from 'next/head'

import {signIn, signOut, useSession} from "next-auth/react"

export default function Home() {



  function submitHandler() {
    
   
  }

  const { data: session, status} = useSession()
  console.log(session);
  console.log(status);

  return (
    <div>
      <Head>
        <title>Testing Auth</title>
      </Head>
      <nav>
        {!session ? (
          <button onClick={ () => signIn("google", { callbackUrl: '/room' })}>Sign In</button>
        ): (
          <>
          <span>{session.user.email}</span>
          
          <button onClick={() => signOut()}>Sign Out</button>
          </>
        )}
      </nav>
    </div>
  )
}
