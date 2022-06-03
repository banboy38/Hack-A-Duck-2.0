import anime from 'animejs';
import { useEffect, useState } from 'react'
import Navbar from '../components/navbar/navbar';
import { BsChevronDoubleDown } from 'react-icons/bs';
import Head from 'next/head';
import PhotoComp from '../components/photocomp';

import dudwit from '../public/dudwitproj.png'

export default function Showcase(){


    const [browser, setbrowser] = useState(false)
    useEffect(() => {
        setbrowser(true)
    }, [])
  

  if(browser){

    setTimeout(() => {

        anime({
          targets: '.come',
          scaleX: [
            { value: 2, duration: 200, easing: 'easeOutExpo' },
            { value: 1, duration: 900 },
          ],
          easing: 'easeOutElastic(1, .8)',
        });
        
      }, 0);

    return(
        <>
            <Head>
                <title>
                Hack-A-Duck 2.0
                </title>
            </Head>

            <Navbar/>
            <div className='yolo'>
                <div className= 'mt-[-5rem]  mb-[5rem]  come p-[2rem] md:p-[3rem] w-screen z-0 h-screen flex flex-col justify-center place-items-center '>
        

                    <div className='md:mb-[4rem] hover:tracking-widest ease-in-out duration-500 font-extrabold sm:mt-[20rem] text-7xl md:text-8xl break-words'>Showcase 📽️</div>
                    <a href="#showcase"><BsChevronDoubleDown className='fadedown hidden sm:block' color='#F2F2F2' fontSize="10rem"/></a>      

                </div>
                

                <div id="showcase" className=' flex justify-center mt-[10rem] py-[5rem] '>
                    <div className='flex flex-col gap-y-16 max-w-[20rem] sm:max-w-sm ms:max-w-md lg:max-w-lg xl:max-w-xl'>
                        <PhotoComp pic='/dudwitproj.png' heading="Dudwit" textcolor="text-cyan-400"/>
                        {/* <PhotoComp/> */}
                    </div>
                </div>
            </div>
        </>
    )
  }

}