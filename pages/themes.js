import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Navbar from '../components/navbar/navbar'
import ThemeCard from '../components/themecard'

import {BsChevronDoubleDown} from 'react-icons/bs'

export default function Themes() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>
          Hack-A-Duck 2.0
        </title>
      </Head>
      
      
      <Navbar/>

      
      <div className='mt-[-5rem]  mb-[5rem] md:mt-[0rem] come p-[2rem] md:p-[3rem] w-screen z-0 h-screen flex flex-col justify-center place-items-center'>
      

        <div className='md:mb-[4rem] hover:tracking-widest ease-in-out duration-500 font-extrabold mt-[4rem] text-7xl md:text-8xl break-words'>Themes 🎨</div>
        <a href="#about"><BsChevronDoubleDown className='fadedown hidden sm:block' color='#F2F2F2' fontSize="10rem"/></a>      

      </div> 
      

      
      
    </>
  )
}
