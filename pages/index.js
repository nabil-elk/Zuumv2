import Head from 'next/head'


import Login from '../components/layout/googleLogin';
export default function Home() {




  return (
    <div>
      <Head>
        <title>Zuum</title>
      </Head>
      <div>
       
      <Login/>

      </div>
    </div>
  )
}
