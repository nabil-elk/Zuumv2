import { React, useState, useEffect} from "react";
import { useRouter } from 'next/router';
import {useSession} from "next-auth/react"
import { selectIsConnectedToRoom,
  useHMSActions,
  useHMSStore,
} from "@100mslive/react-sdk";
import Room from "../zuum/Room";

function JoinRoom() {
  const { data: session, status} = useSession()
    const router = useRouter();
    const endpoint = "https://prod-in2.100ms.live/hmsapi/zuum.app.100ms.live/";
    const hmsActions = useHMSActions();
    const isConnected = useHMSStore(selectIsConnectedToRoom);
    const [inputValues, setInputValues] = useState("");
   

  const [room, setRooms] = useState([]);
  const [RoomId, SetRoomId] = useState('');


  const handleInputChange = (e) => {
    setInputValues(e.target.value);
  };

  const getRoom = (e) => {
    SetRoomId(e.target.value);
  }


 



  useEffect(() => {
    if (status === "unauthenticated") {
      router.push('/');
    }
  }, [status]);

  useEffect(() => {
    const timerx = setTimeout(() => {
    fetchUniqueRoom();
    console.log("runned")
    }, 1000);
    return () => clearTimeout(timerx);
  }, []);


  const fetchUniqueRoom = () => {
    
    return fetch(`http://localhost:3000/api/rooms/roomId`)
    .then((res)=>res.json())
    .then((data) => setRooms(data));
  }


  // connected to hms
  async function UserIsHost() {
    const fetchtoken = async () => {
      const response = await fetch(`${endpoint}api/token`, {
        method: "POST",
        body: JSON.stringify({
          user_id: "1",
          role: "host", 
          type: "app",
          room_id: RoomId, 
        }),
      });
      const { token } = await response.json();
      return token;
      
    };


    
     // connected to hms
    const token = await fetchtoken(inputValues);
    hmsActions.join({
      userName: inputValues,
      authToken: token,
      settings: {
        isAudioMuted: false,
      },
    });

  }




  async function UserIsGuest() {

    const fetchtoken = async () => {
      const response = await fetch(`${endpoint}api/token`, {
        method: "POST",
        body: JSON.stringify({
          user_id: "1",
          role: "guest", 
          type: "app",
          room_id: RoomId, 
        }),
      });
      const { token } = await response.json();
      return token;
      
    };


    
     // connected to hms
    const token = await fetchtoken(inputValues);
    hmsActions.join({
      userName: inputValues,
      authToken: token,
      settings: {
        isAudioMuted: false,
      },
    });

   
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (RoomId !== room.roomId) {
    
      UserIsGuest();
      return;
    }
    UserIsHost();
    
    
    return;

   
  };

  useEffect(() => {
    window.onunload = () => {
     hmsActions.leave();
    };
   }, [hmsActions]);

   const sendBack = (e) => {
    router.push("/list")
   }


  return (
    <>
    {!isConnected? (
      
    <div className=" h-screen flex justify-center items-center bg-slate-100">
      
  

<div className=" flex flex-col gap-6 mt-8">
<input
            type="text"
            placeholder="Insert a Name"
            value={inputValues}
            onChange={handleInputChange}
            className=" focus:outline-none flex-1 px-2 py-3 rounded-md text-black border-2 border-cyan-400"
          />
        <input
            type="text"
            placeholder="Insert a Room ID"
            value={RoomId}
            onChange={getRoom}
            className=" focus:outline-none flex-1 px-2 py-3 rounded-md text-black border-2 border-cyan-400"
          />
      <button onClick={handleSubmit}
        className="flex-1 text-white bg-cyan-500 py-3 px-10 rounded-md"  
      >
        Join
      </button>
      <button onClick={sendBack}
        className="flex-1 text-white bg-red-400 py-3 px-5 rounded-md"  
      >
        Back
      </button>
    </div>
    </div>

      ):(
        <Room/>
      )}
      </>
    
    
  
  
  )
}

export default JoinRoom;
