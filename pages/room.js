import JoinRoom from "../components/rooms/JoinRoom";

import { HMSRoomProvider } from "@100mslive/react-sdk";
import {signOut, useSession} from "next-auth/react"



function RoomPage() {
  const { data: session, status} = useSession()
 
  return <div>
    <HMSRoomProvider>

    <JoinRoom/>

    </HMSRoomProvider>
    
    
    </div>
}

export default RoomPage;