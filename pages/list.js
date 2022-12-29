import Head from 'next/head'

import {signIn, signOut, useSession} from "next-auth/react"
import RoomList from '../components/rooms/room-list';

export default function ListPage() {
  

  return (
    <div>
      <Head>
        <title> Zuum, Room List</title>
      </Head>
      
      <RoomList/>
    </div>
  )
}
