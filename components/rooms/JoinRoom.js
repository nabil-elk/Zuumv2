import { React, useState, useEffect} from "react";


function JoinRoom() {

  const [room, setRooms] = useState([]);
  const [RoomId, SetRoomId] = useState('');
  let roles;



  const fetchUniqueRoom = () => {
    
    return fetch(`http://localhost:3000/api/rooms/roomId`)
    .then((res)=>res.json())
    .then((data) => setRooms(data));
  }

  function handleRoomId(e) {
    SetRoomId(e.target.value);
  }

  async function  handleClick(e) {
  await fetchUniqueRoom();
  e.preventDefault();
  if (RoomId === room.roomId) {
  roles = 'host';
  console.log(roles);
    return;
  }
  roles = 'guest';
  console.log(roles);

}


  return (
   
    <div className=" h-screen flex justify-center items-center bg-slate-100">
    <div className=" flex flex-col gap-6 mt-8">
      <input
        type="text"
        placeholder="Username"
        className=" focus:outline-none flex-1 px-2 py-3 rounded-md text-black border-2 border-cyan-400"
      required/>
        <input
        type="text"
        placeholder="Room Id"
        value={RoomId}
        onChange={handleRoomId}     
        className=" focus:outline-none flex-1 px-2 py-3 rounded-md text-black border-2 border-cyan-400"
        required/>
      <button onClick={handleClick}
        className="flex-1 text-white bg-cyan-500 py-3 px-10 rounded-md"
       
      >
        Join Room
      </button>
    </div>
  </div>
  )
}

export default JoinRoom;
