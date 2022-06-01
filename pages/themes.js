import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Navbar from '../components/navbar/navbar'
import ThemeCard from '../components/themecard'
import { useEffect, useState } from "react"

import {BsChevronDoubleDown} from 'react-icons/bs'

import anime from 'animejs'

export default function Themes() {

  const [browser, setbrowser] = useState(false)

    useEffect(() => {
      setbrowser(true)
    }, [])

  const webdev = () => {
    return(
      <>
        <p>Web development is the building & maintanence of websites, it's the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience.</p>

        <p className='mt-5'>Web development is future proof!</p>
        <p>As we head towards an even more tech-driven future, the development skills are progressively in demand. Web development is constantly evolving with advancements in technology. 
        Seeing the fast paced nature of industry and of course the competition, it's important to stay updated with the latest technology and tools to always stay at your best.</p>
      </>
    )
  }
  
  {
    setTimeout(() => {

      anime({
        targets: '.come',
        scaleX: [
          { value: 2, duration: 200, easing: 'easeOutExpo' },
          { value: 1, duration: 900 },
        ],
        easing: 'easeOutElastic(1, .8)',
      });

      anime({
        
      })
      
    }, 0);

  return (
    <>
      <Head>
        <title>
          Hack-A-Duck 2.0
        </title>
      </Head>
      
      
      <Navbar/>

      
      <div className='mt-[-5rem]  mb-[5rem] md:mt-[3.7rem] come p-[2rem] md:p-[3rem] w-screen z-0 h-screen flex flex-col justify-center place-items-center'>
      

        <div className='md:mb-[4rem] hover:tracking-widest ease-in-out duration-500 font-extrabold mt-[4rem] text-7xl md:text-8xl break-words'>Themes 🎨</div>
        <a href="#themes"><BsChevronDoubleDown className='fadedown hidden sm:block' color='#F2F2F2' fontSize="10rem"/></a>      

      </div> 
      
      <div id="themes" className="flex flex-col p-[2rem] md:p-[2rem] w-screen min-h-screen"> {/*bg-fixed bg-center bg-cover bg-[url('../public/psyberduck.png')]*/}

        <ThemeCard heading="Web Developement" content={webdev()}/>

      </div>

      
      
    </>
  )
  }
}
