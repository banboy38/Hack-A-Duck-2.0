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


      <div className='come mb-[50vh] mt-[40vh] ml-[7vw] md:ml-[3vw]  font-extrabold text-7xl md:text-9xl break-words'>Hack-A-Duck 2.0 <p><Image height="150" width="100" src={psyduck}/></p></div>
      
      <div class="flex items-start p-[2rem] md:p-[3rem] w-screen h-[100vh] mb-12 bg-fixed bg-center bg-cover bg-primary"> {/*bg-[url('../public/psyberduck.png')]*/}
        <div class="p-5 text-2xl text-white  bg-purple-300 bg-opacity-50 rounded-xl">
          Welcome to my site!
        </div> 
      </div>
      
      
    </>
  )}
}
