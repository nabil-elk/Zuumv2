import RoomForm from "../components/rooms/room-form";
import {signOut, useSession} from "next-auth/react"



function RoomPage() {
  const { data: session, status} = useSession()
 
  return <div>
    
    <RoomForm/>
    {/* <button onClick={() => signOut({ callbackUrl: '/' })}>Sign Out</button> */}
    
    </div>
}

export default RoomPage;