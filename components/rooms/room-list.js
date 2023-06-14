import { React, useState, useEffect} from "react";
import { useRouter } from 'next/router';
import {useSession} from "next-auth/react"
import RoomForm from "../rooms/room-form";
import Link from 'next/link';
import { CopyToClipboard } from "react-copy-to-clipboard";





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
      <div className="min-h-full">
         


      {room === null ? (
        <>
       <RoomForm/>
        
        </>
      ):(
        <>
           <header className="bg-white shadow">
            
            <div className=" mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">Room List</h1>
              
            </div>
            
            
          </header>
          <main>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
              {/* Room List if user has one */}
              <div className="px-4 py-6 sm:px-0">
              <table className="min-w-full">
          <thead className="border-b bg-gray-200">
            <tr>
             
              <th scope="col" className="text-m font-medium text-gray-900 px-6 py-4 text-left">
               Room Name
              </th>
              <th scope="col" className="text-m font-medium text-gray-900 px-6 py-4 text-left">
                Room Id
              </th>
              <th scope="col" className="text-m font-medium text-gray-900 px-6 py-4 text-left">
                Owner
              </th>
              <th scope="col" className="text-m font-medium text-gray-900 px-6 py-4 text-left">
                </th>
             
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
             
              <td className="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">{room.name}</td>
              <td className="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">{room.roomId}</td>
               <td className="text-m text-gray-900 font-light px-6 py-4 whitespace-nowrap">
               {room.userEmail}
              </td>
               <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
               <CopyToClipboard
     text= {room.roomId}
     onCopy={() => alert("Room Id Copied")}>
       <button className="text-white bg-indigo-400 hover:bg-indigo-300 py-1 px-1 rounded-md">Copy</button>
     </CopyToClipboard>
              </td>
            </tr>
          </tbody>
        </table>
               
              </div>
              {/* /End of it */}
            </div>
          </main>
        </>
      )}

    </div>
    
    )
}

export default RoomList;