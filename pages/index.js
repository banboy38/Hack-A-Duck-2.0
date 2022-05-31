import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Navbar from '../components/navbar/navbar'

import sds from '../public/SDS.png'
import psyduck from '../public/theDuck.png'
import bit from '../public/bit.png'
import iet from '../public/iet.png'
import { useEffect, useState } from 'react'

import anime from 'animejs'

import {BsChevronDoubleDown} from 'react-icons/bs'
import {IoCaretForward} from 'react-icons/io5'

import Link from 'next/link'

export default function Home() {
  const router = useRouter()

  const [browser, setbrowser] = useState(false)
  useEffect(() => {
    setbrowser(true)
  }, [])
  

  if(browser){
    
    

    setTimeout(() => {

      anime({
        targets: '.come',
        scaleX: [
          { value: 2, duration: 100, easing: 'easeOutExpo' },
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

      

      <div className='mt-[-5rem]  mb-[5rem] md:mt-[0rem] come p-[2rem] md:p-[3rem] w-screen z-0 h-screen flex flex-col justify-center place-items-center'>

        <div className=' flex flex-row w-[70%] ml-[-6rem] md:ml-0 md:justify-center items-center'><div className='md:ml-[4.8rem] mt-[1.5rem] mr-[5px] md:mr-[5rem]'><Image placeholder='blur' height="100" width="150" quality="100" src={iet}/></div><div><Image placeholder='blur' height="120" width="120" quality="100" src={bit}/></div><div className='md:ml-[3.5rem]'><Image placeholder='blur' quality="100" height="100" width="250" src={sds}/></div></div>

        <div className='md:mb-[4rem] hover:tracking-widest ease-in-out duration-500 font-extrabold mt-[4rem] text-7xl md:text-8xl break-words'>Hack-A-Duck 2.0 <Image placeholder='blur' height="120" width="100" src={psyduck}/></div>
        <a href="#about"><BsChevronDoubleDown className='fadedown hidden sm:block' color='#F2F2F2' fontSize="10rem"/></a>      

      </div>      
      
      <div id="about" className="flex flex-col p-[2rem] md:p-[2rem] w-screen min-h-screen bg-primary"> {/*bg-fixed bg-center bg-cover bg-[url('../public/psyberduck.png')]*/}
        <div class="text-7xl md:text-8xl font-extrabold break-words">
          "Bhaiya, yeh kya hai?"
        </div>

        <div className="text-2xl md:text-4xl ml-[4px] mr-[5rem] md:ml-[10px] mt-5 md:mt-10 font-extrabold break-normal">
          <p>Hack-A-Duck 2.0 is the second edition of the premier hackathon organized by Psyberduck. This time, we're collaborating with IET and Society for Data Science, BIT Mesra.</p>
          <p className='mt-5'>So calling all the tech enthusiasts out there, this is the chance to enrich your technical ingenuity through a gripping project with highly qualified mentors and awesome cash prizes. There's a theme for every discipline, so no need to worry about being left out!</p>          
          <p className='mt-[5rem] md:mt-[7rem] hover:tracking-widest ease-in-out duration-500 text-4xl md:text-6xl flex md:justify-end'><IoCaretForward className='md:mt-[5px]' color='#F2F2F2'/><Link href="./themes">Checkout the Themes!</Link></p>
        </div>

        
      </div>
      
      
    </>
  )}
}
