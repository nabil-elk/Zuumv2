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
            placeholder="Insert your Name"
            value={inputValues}
            onChange={handleInputChange}
            className=" relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            required
          />
        <input
            type="text"
            placeholder="Paste a Room ID"
            value={RoomId}
            onChange={getRoom}
            className=" relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            required
          />
                 <div>
              <button onClick={handleSubmit}
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
               
                Join a Room
              </button>
              <button onClick={sendBack}
                className="group  mt-5 relative flex w-full justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
               
                Back 
              </button>
              
            </div>
    </div>
    </div>

      ):(
        <Room/>
      )}
      </>
    
    
  
  
  )
}

export default JoinRoom;
