import 'tailwindcss/tailwind.css'
import react from "react";
import { SessionProvider } from "next-auth/react"
import Layout from '../components/layout/layout'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
  ...appProps
})
{
    // use a LayoutComponent variable 
   // that switches to actual Layout or React.Fragment (no layout) 
   //accordingly to pathname

  // use layout in path
  const isLayoutNeeded = [`/list`].includes(appProps.router.pathname);

  const LayoutComponent = isLayoutNeeded ? Layout : react.Fragment;
  
  return (
    <SessionProvider session={session}>
      <LayoutComponent>
      <Component {...pageProps} />
    </LayoutComponent>
    
    </SessionProvider>
  )
}
