import { React, useState, useEffect} from "react";
import { useRouter } from 'next/router';
import {useSession} from "next-auth/react"
import RoomForm from "../rooms/room-form";

function RoomList() {

  
    const [room, setRooms] = useState([]);
    const { data: session, status} = useSession();
    const router = useRouter();


    useEffect(() => {
      const timerx = setTimeout(() => {
      fetchUniqueRoom();
      console.log("runned")
      }, 1000);
      return () => clearTimeout(timerx);
    }, []);


    useEffect(() => {
      if (status === "unauthenticated") {
        router.push('/');
      }
    }, [status]);
 

 
   // fetch UserRoom info

 const fetchUniqueRoom = () => {
    
    return fetch(`http://localhost:3000/api/rooms/roomId`)
    .then((res)=>res.json())
    .then((data) => setRooms(data));
  }
 




    return (
      <div className=" h-screen flex justify-center items-center bg-slate-100">
         

    <div className="px-6 py-4">
      {room === null ? (
        <>
       <RoomForm/>
        
        </>
      ):(
        <>
         <div className="max-w-sm rounded overflow-hidden shadow-lg border-cyan-100 ">
        <div className="font-bold text-xl mb-2">Room Name: {room.name}</div>
        <p className="text-gray-700 text-base">
      Room Id: {room.roomId}
      </p>
      <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Owner: {room.userEmail}</span>
      </div>
      </div>
        </>
      )}
     
    
    </div>
    </div>
  
    
     
        
        
    )
}

export default RoomList;