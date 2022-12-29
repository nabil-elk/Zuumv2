
import { React, useState, useEffect} from "react";
import { useRouter } from 'next/router';
import {useSession} from "next-auth/react"

function Room() {
  
    const [rooms, setRooms] = useState([]);
    const [tokens, setTokens] = useState([]);
    const [roomName, setRoomNames] = useState("");
    const [counts, setCounts] = useState();

    
    const { data: session, status} = useSession();
    const router = useRouter();

    useEffect(() => {
      if (status === "unauthenticated") {
        router.push('/');
      }
    }, [status]);
  
  
    const handleRoomChange = (e) => {
      setRoomNames(e.target.value);
    };
  
  
    // fetch mana token
    const fetchManagment = () => {
        return fetch('http://localhost:3000/api/mana')
    .then((res) => res.json())
    .then((data) => setTokens(data));
   
    }

    
 const fetchUniqueRoom = () => {
    
  return fetch(`http://localhost:3000/api/rooms/roomId`)
  
  .then((res) => res.json())
  .then((data) => setCounts(data));

  
}


    useEffect(() => {
      const timerx = setTimeout(() => {
        fetchManagment();
      fetchUniqueRoom();
      
      console.log("runned")
    

      }, 1000);
      return () => clearTimeout(timerx);
    }, []);

 

 

    // create the room
    const createRoom  = async () => {
      const response = await fetch("https://api.100ms.live/v2/rooms", {
        method: "POST",
        body:JSON.stringify({
            name: roomName,
            description: 'description',
            template_id: "634d31342ddb51c99bdc7ba6",
        recording_info: {
              enabled: false,
            },
            region: "eu"
          }),
        headers: {
            'Authorization': `Bearer ${tokens.management_token}`,
            'Content-Type': 'application/json'
           
        }
      }).then((res) => res.json())
      .then((data) => setRooms(data));
     
    };

    // save room in prisma
    const saveRoom = async () => {

      const roomId = rooms.id;
         

      const data = await fetch("http://localhost:3000/api/rooms/room", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          roomId: roomId, 
          name: roomName, 
          description: "description",
          userId:  session.user.email
        }),
      })

    }


   
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        
        if (roomName !== "") {
         
         await createRoom();
         await saveRoom();
         
         
  
      
          console.log('create Room');


        }

    
      };

     
  return (
    
  
    <div className=" h-screen flex justify-center items-center bg-slate-100">
    <div className=" flex flex-col gap-6 mt-8">
      <input
        type="text"
        placeholder="Room Name"
        value={roomName}
        onChange={handleRoomChange}
        className=" focus:outline-none flex-1 px-2 py-3 rounded-md text-black border-2 border-cyan-400"
      required/>
      <button
        className="flex-1 text-white bg-cyan-500 py-3 px-10 rounded-md"
        onClick={handleSubmit}
      >
        Create Room
      </button>
    </div>
  </div>
   
   
    
 
  
    
  

    
  );
}
export default Room;