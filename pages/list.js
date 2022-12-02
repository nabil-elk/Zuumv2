import Head from 'next/head'

import {signIn, signOut, useSession} from "next-auth/react"
import RoomList from '../components/rooms/room-list';

export default function ListPage() {
  

  return (
    <div>
      <Head>
        <title>Testing Auth</title>
      </Head>
      
      <RoomList/>
    </div>
  )
}
