
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
  .then((data) => setCounts(data)).then((data)=> console.log(data));

  
}


    useEffect(() => {
      const timerx = setTimeout(() => {
        fetchManagment();
      fetchUniqueRoom();
      
      console.log("runned")
    

      }, 1000);
      return () => clearTimeout(timerx);
    }, []);


  let roomNewName = roomName.replace(/\s+/g, '').trim();

 

    // create the room
    const createRoom  = async () => {
      const response = await fetch("https://api.100ms.live/v2/rooms", {
        method: "POST",
        body:JSON.stringify({
            name: roomNewName,
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
      .then((data) =>
      {
        return fetch("http://localhost:3000/api/rooms/room", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            roomId: data.id, 
            name: roomName, 
            description: "description",
            userId:  session.user.email
          }),
        })
      }
      );
      
      router.push("/")
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        
        if (roomName !== "") {
         
         await createRoom();
         
         
         
  
      
          console.log('create Room');


        }

    
      };

     
  return (
    
    <div className=" h-screen flex justify-center items-center bg-slate-100">
      
  

    <div className=" flex flex-col gap-4">
    <input
                type="text"
                      placeholder="Room Name"
                      value={roomName}
                      onChange={handleRoomChange}
           
                className=" relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                required
              />
            
                     <div>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                  
                    Create a Room
                  </button>
                  
                </div>
        </div>
        </div>
 
  );
}
export default Room;