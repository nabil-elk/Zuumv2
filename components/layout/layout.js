import { React, useState, useEffect} from "react";
import Link from 'next/link';

import {signIn, signOut, useSession} from "next-auth/react"

function Layout({ children }) {

    const { data: session, status} = useSession()
    const [room, setRooms] = useState([]);

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

    let menuItems = [
      {
        href: '/list',
        title: 'Create a Room',
      }
    ];
     if (room !== null ) {
      menuItems = [
        {
          href: '/list',
          title: 'Your Room',
        }
      ];

      
     } 
  

  

  return (
    <div className="min-h-screen flex flex-col">
  <div className="flex flex-col md:flex-row flex-1">
    <aside className="bg-gray-700 w-full md:w-60">
    <nav>
    <ul>
    {!session ? (
        <></>
        ):
     
     
      
       (
          <>
          {menuItems.map(({ href, title }) => (
            <li className='m-5  text-black' key={title}>
              <Link href={href} className={`btn text-gray-900 justify-center bg-gray-200 flex p-2 rounded hover:bg-slate-200 cursor-pointer font-medium text-1.0625 hover:text-gray-800 focus:text-gray-800  flex-row flex items-center w-full`}>
                
                {title}
                 
                
              </Link>
            </li>
          ))}
          
          <div  className='m-5  text-black'>
          <button className={`btn text-gray-900 justify-center bg-gray-200 flex p-2 rounded hover:bg-slate-200 cursor-pointer font-medium text-1.0625 hover:text-gray-800 focus:text-gray-800  flex-row flex items-center w-full`} onClick={() => signOut()}>
          <img className="h-6 w-6 mr-2" alt="google logo" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
            Sign Out</button>
          </div>
          </>
        )}
        
    </ul>
  </nav>

    </aside>
    <main className="flex-1">{children}</main>
  </div>
</div>
  )
}

export default Layout;
