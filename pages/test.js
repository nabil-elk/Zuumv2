import JoinRoom from "../components/rooms/JoinRoom";
import {signOut, useSession} from "next-auth/react"



function JoinRoomPage() {
  const { data: session, status} = useSession()
 
  return <div>
    
    <JoinRoom/>
    
    
    </div>
}

export default JoinRoomPage;