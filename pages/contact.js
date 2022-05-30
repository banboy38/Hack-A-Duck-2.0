import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar/navbar'

export default function About() {

  return (
    <>
    <Head>
        <title>
          Hack-A-Duck 2.0
        </title>
      </Head>

    <Navbar/>
      
        <div className="w-screen h-screen bg-gradient-to-r from-yellow-500 to-blue-300 rounded-md ">
            <div className="flex justify-center bg-red-300 place-content-center">
              <img src='./psyberduck.png' className='w-[150px]'/>
              <div>why</div>
            </div>
        </div>

        <div className="w-screen h-screen bg-gradient-to-r from-yellow-500 to-blue-300 rounded-md">
            <div className="flex justify-center bg-red-300 place-content-center">
              <img src='./SDS.png' className='w-[150px]'/>
              <div>why</div>
            </div>
        </div>
        
        <div className="w-full h-screen bg-gradient-to-r from-yellow-500 to-blue-300 rounded-md">IET</div>
    </>
  )
}
