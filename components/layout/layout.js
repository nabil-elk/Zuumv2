import { React, useState, useEffect, Fragment } from "react";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import Image from "next/image";

import {signIn, signOut, useSession} from "next-auth/react"

function Layout({children }) {

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



    let navigation = [
      { name: 'Dashboard', href: '/list', current: true },
      { name: 'Join a Room', href: '/room', current: false },
    ]
    const userNavigation = [
      { name: 'Sign out', href: '#' },
    ]
    
    function classNames(...classes) {
      return classes.filter(Boolean).join(' ')
    }
     if (room !== null ) {
      navigation = [
        {
          name: 'Dashboard', href: '/list', current: true 
        },
        { name: 'Join a Room', href: '/room', current: false },
      ];

      
     } 
  

  

  return (
    <div className="min-h-full">
   
    {!session ? (
        <></>
        ):
     
     
      
       (
          <>
          <Disclosure as="nav" className="bg-indigo-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <span
                        className="h-8 w-8 font-black text-white"
                        
                      >
                        Zuuum.
                        </span>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-indigo-900 text-white'
                                : 'text-gray-300 hover:bg-indigo-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="sr-only">Open user menu</span>
                            <Image className="h-8 w-8 rounded-full" src={session.user.image} alt="" />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                    onClick={ () => signOut()}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                </div>
              </div>

              
            </>
          )}
        </Disclosure>
          </>
        )}
        
   
  
    <main className="flex-1">{children}</main>
  </div>

  )
}

export default Layout;
