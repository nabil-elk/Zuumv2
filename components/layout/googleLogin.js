/* This example requires Tailwind CSS v3.0+ */
import { useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router';
import {signIn,useSession} from "next-auth/react"


   
  
const navigation = [
  { name: 'Home', href: '/#home' },
  { name: 'Features', href: '/#feature' },
]

export default function Login() {
  const { data: session, status} = useSession()
  const router = useRouter();

  useEffect(() => {
      if (status === "authenticated") {
        router.push('/list');
      }
    }, [status]);


  return (
    <div className="isolate bg-white bg-gray-50">
     
      <div id="home" className="px-6 pt-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span  className="h-8 w-8 font-black text-gray-900">Zuum</span>
             
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <button className="text-sm font-semibold leading-6 text-gray-900"
            onClick={ () => signIn("google", { callbackUrl: '/list' })}
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </nav>
      </div>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
         
            <div className="text-center text-4xl font-bold   sm:text-6xl ">
              <span className="tracking-tight text-gray-900">
              One Platform to&nbsp;
              </span>
              <span className="relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-500 md:inline-block">Connect</span>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Award winning tool that will take your productivity to the next level!
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <button
                  
                  className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-full"
                  onClick={ () => signIn("google", { callbackUrl: '/list' })}
                >
                  Try it Free
                </button>
              </div>
            </div>
          </div>
        
        </div>
      </main>
      <section id ="feature" className="py-20 bg-gray-50 "
  
>
  <div className="container items-center max-w-6xl px-4 px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
    <div className="flex flex-wrap items-center -mx-3">
      <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
        <div className="w-full lg:max-w-md">
          <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">
            Jam-packed with all the tools you need to succeed!
          </h2>
          <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">
            It's never been easier to build a business of your own. Our tools
            will help you with the following:
          </p>
          <ul className="">
            <li className="flex items-center py-2 space-x-4 xl:py-3">
             
              <span className="font-medium text-gray-500">
                Meet face-to-face
              </span>
            </li>
            <li className="flex items-center py-2 space-x-4 xl:py-3">
             
              <span className="font-medium text-gray-500">
                Enhance collaboration with Team Chat
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
        <img
          className="mx-auto sm:max-w-sm lg:max-w-full"
          src="https://cdn.devdojo.com/tails/images/nPaBm3tBHhRYGX92RKxfzgp17QpOominUrpxTT6I.png"
          alt="feature image"
        />
      </div>
    </div>
  </div>
</section>
<section
  className="text-gray-700 bg-white body-font bg-gray-50 tails-selected-element"
  
>
  <div className="container flex flex-col items-center px-8 py-8 mx-auto max-w-7xl sm:flex-row">
    <a
      href="#_"
      className="text-xl font-black leading-none text-gray-900 select-none logo"
    >
      Zuum<span className="text-indigo-600">.</span>
    </a>
    <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0">
      © 2022 Zuum
    </p>

   
  </div>
</section>

    </div>
  )
}
