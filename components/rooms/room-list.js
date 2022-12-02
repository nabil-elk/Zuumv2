import { React, useState, useEffect} from "react";


function RoomList() {

  
    const [room, setRooms] = useState([]);







 

 
   // fetch UserRoom info

 const fetchUniqueRoom = () => {
    
    return fetch(`http://localhost:3000/api/rooms/roomId`)
    .then((res)=>res.json())
    .then((data) => setRooms(data));
  }
 



  const clickHandler = async  (e) => {
    e.preventDefault();
    await fetchUniqueRoom();
  }
    return (
        <>
        <button onClick={clickHandler}>Get Room</button>
        <p>{room.userEmail}</p>
        
        </>
    )
}

export default RoomList;