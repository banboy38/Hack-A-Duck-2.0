import anime from 'animejs';
import { useEffect, useState } from 'react'
import Navbar from '../components/navbar/navbar';
import { BsChevronDoubleDown } from 'react-icons/bs';
import {IoCaretForward} from 'react-icons/io5'
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
        

                    <div className='md:mb-[4rem] hover:tracking-widest ease-in-out duration-500 font-extrabold sm:mt-[20rem] text-5xl md:text-8xl break-words'>Showcase 📽️</div>
                    <a href="#showcase"><BsChevronDoubleDown className='fadedown hidden sm:block' color='#F2F2F2' fontSize="10rem"/></a>      

                </div>


                
                

                <div id="showcase" className=' flex justify-center -mt-10 sm:mt-[10rem] py-[5rem] '>
                    <div className='flex flex-col max-w-[20rem] sm:max-w-sm ms:max-w-md lg:max-w-lg xl:max-w-xl gap-y-40 sm:gap-y-52'>
                        
                        <PhotoComp pic='/Cosmicproj.png' heading="Cosmic" textcolor="text-pink-400" url="http://tidbits.rf.gd"/>
                        <PhotoComp pic='/dudwitproj.png' heading="Dudwit" textcolor="text-cyan-400" url="http://blogbower.herokuapp.com/"/>
                        <PhotoComp pic='/yehbhitheekhaiproj.png' heading="Yeh Bhi Theek Hai" textcolor="text-yellow-400" url={"https://ratatouille-foodorder.herokuapp.com/"}/>
                        <PhotoComp pic='/codemonkproj.png' heading="Code Monk" textcolor="text-pink-600" />
                        <PhotoComp pic='/lemonerdproj.png' heading="Lemonerd" textcolor="text-pink-200" url={"https://hack-a-duck.github.io/Lemonerd2.0/"} />                  
                        <PhotoComp pic='/troubleshootersproj.png' heading="Trouble Shooters" textcolor="text-green-400" url={"https://groc4-all.herokuapp.com/"}/>                      
                        <PhotoComp pic='/skywaveproj.png' heading="Sky Wave" textcolor="text-red-400" url={"https://pacific-fortress-40879.herokuapp.com/"}/>
                        
                    </div>
                </div>

                <p className='mt-[5rem] pb-20 ml-5 md:mr-[3rem] sm:ml-0 sm:pr-20 hover:tracking-widest ease-in-out duration-500 text-4xl md:text-6xl font-bold flex md:justify-end'><IoCaretForward className='md:mt-[5px]' /><a href="./organizers">Our Team</a></p>
            </div>
        </>
    )
  }

}