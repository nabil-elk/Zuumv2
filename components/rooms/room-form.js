
import { React, useState, useEffect} from "react";
import {useSession} from "next-auth/react";

function Room() {
    const [rooms, setRooms] = useState([]);
    const [tokens, setTokens] = useState([]);
    const [roomName, setRoomNames] = useState("");
    const [roomDesc, setRoomDesc] = useState("");
    const { data: session, status} = useSession();

  
  
  
    const handleRoomChange = (e) => {
      setRoomNames(e.target.value);
    };
  
  
    const handleRoomDesc = (e) => {
      setRoomDesc(e.target.value);
    }
    // fetch mana token
    const fetchManagment = () => {
        return fetch('http://localhost:3000/api/mana')
    .then((res) => res.json())
    .then((data) => setTokens(data));
   
    }

    useEffect(() => {
      fetchManagment();
    }, []);

 

    // create the room
    const createRoom  = async () => {
      const response = await fetch("https://api.100ms.live/v2/rooms", {
        method: "POST",
        body:JSON.stringify({
            name: roomName,
            description: roomDesc,
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
          description: roomDesc,
          userId:  session.user.email
        }),
      })

    }


   
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        
        if (roomName !== "" && roomDesc !== "") {
         
         await createRoom();
         await saveRoom();
         
  
      
          console.log('create Room');


        }


       
        
      
    
      };

     





  

  return (
    
   
     <div className=" h-screen flex justify-center items-center bg-slate-400">
       <div className=" flex flex-col gap-6 mt-8">
         <input
           type="text"
           placeholder="Room Name"
           value={roomName}
           onChange={handleRoomChange}
           className=" focus:outline-none flex-1 px-2 py-3 rounded-md text-black border-2 border-cyan-400"
         required/>
           <input
           type="text"
           placeholder="Room Description"
           value={roomDesc}
           onChange={handleRoomDesc}
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