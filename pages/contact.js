import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar/navbar'
import {BsChevronDoubleDown} from 'react-icons/bs'

import { useEffect, useState } from 'react'

export default function About() {


  const [browser, setbrowser] = useState(false)
  useEffect(() => {
    setbrowser(true)
  }, [])
  

  if(browser){

  return (
    <>

            <Head>
                <title>
                Hack-A-Duck 2.0
                </title>
            </Head>    
            <Navbar/>

            {/* <div className='mt-[-5rem]  mb-[5rem] md:mt-[3.7rem] come p-[2rem] md:p-[3rem] w-screen z-0 h-screen flex flex-col justify-center place-items-center'>
      

                <div className='md:mb-[4rem] hover:tracking-widest ease-in-out duration-500 font-extrabold mt-[4rem] text-7xl md:text-8xl break-words'>Showcase 📽️</div>
                <a href="#showcase"><BsChevronDoubleDown className='fadedown hidden sm:block' color='#F2F2F2' fontSize="10rem"/></a>      

            </div> */}
     
        {/* <div className="w-full h-screen bg-[url('../public/contact.png')] bg-cover rounded-md my-10 max-w-[70%] sm:max-w-[80%] border-solid ml-5">
            <div className="flex flex-col drop-shadow-lg"><img src='./psyberduck.png' className='basis-3/4 border-1 rounded-md mt-7 mb-- bg-contain bg-center max-w-xl ml-5'>
            </img><span className='min-h-48 basis-1/4 border-1 bg-right flex-row-reverse rounded-md'>Detail card</span></div>
        </div>

        <div className="w-full h-screen bg-[url('../public/contact.png')] bg-cover rounded-md my-10 max-w-[70%] sm:max-w-[80%] ml-5">
            <div className="flex flex-col drop-shadow-lg"><img src='./SDS.png' className='basis-2/3 border-1 rounded-md mt-7 mb-- bg-contain bg-center max-w-xl ml-5'>
            </img><span className='min-h-48 basis-1/3 border-1 bg-right flex-row-reverse rounded-md'>Detail card</span></div></div>
        
        <div className="w-full h-screen bg-[url('../public/contact.png')] bg-cover rounded-md my-10 max-w-[70%] sm:max-w-[80%] ml-5">
            <div className="flex flex-col drop-shadow-lg"><img src='./bit.png' className='basis-3/4 border-1 rounded-md mt-7 mb-- bg-contain bg-center max-w-xl ml-5'>
            </img><span className='min-h-48 basis-1/3 border-1 bg-right flex-row-reverse rounded-md'>Detail card</span></div>
        </div> */}

        <p className='text-6xl'>
          Kaam Chaalu
        </p>

        
    
    </>
  )

  }
}
