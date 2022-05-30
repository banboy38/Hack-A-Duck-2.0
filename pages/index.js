import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Navbar from '../components/navbar/navbar'

import sds from '../public/SDS.png'
import psyduck from '../public/theDuck.png'
import bit from '../public/bit.png'
import { useEffect, useState } from 'react'

import anime from 'animejs'

import {BsChevronDoubleDown} from 'react-icons/bs'

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


      

      <div className='come p-[2rem] md:p-[3rem] w-screen z-0 h-screen flex flex-col justify-center place-items-center'>

        <div className='md:mb-[4rem] font-extrabold mt-[4rem] text-7xl md:text-9xl break-words'>Hack-A-Duck 2.0 <Image placeholder='blur' height="120" width="100" src={psyduck}/></div>
        <a href="#about"><BsChevronDoubleDown className='fadedown' color='#F2F2F2' fontSize="10rem"/></a>      

      </div>      
      
      <div id="about" class="flex flex-col p-[2rem] md:p-[3rem] w-screen h-[110vh] bg-primary"> {/*bg-fixed bg-center bg-cover bg-[url('../public/psyberduck.png')]*/}
        <div class="text-7xl md:text-9xl font-extrabold break-words">
          Bhaiya, yeh kya hai?
        </div>

        <div class="text-3xl md:text-5xl mt-5 font-extrabold break-words">
          Hack 
        </div> 
      </div>
      
      
    </>
  )}
}
