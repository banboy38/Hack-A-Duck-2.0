import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Navbar from '../components/navbar/navbar'
import ThemeCard from '../components/themecard'
import { useEffect, useState } from "react"

import {BsChevronDoubleDown} from 'react-icons/bs'
import {IoCaretForward} from 'react-icons/io5'

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

  const ai = () => {
    return(
      <>
       <p className='italic'>"AI is going to change the world more than anything in the history of mankind. More than electricity." - Dr. Kai- Fu Lee</p>
        <p className='mt-5'>The term "AI" means a programme which mimics human cognition. It is the ability of a computer program to think and learn. 
        At present we use the term AI for successfully understanding human speech, competing at a high level in strategic game system. 
        AI has many applications in almost every field, which seems positive. We use Alexa , Google home even which are quite intuitive to the instructions and provide almost accurate result , also playing a very important role in pharmaceuticals.</p>

        <p className='mt-5'>Predicting the future isn't magic, it's Artificial intelligence.</p>
      </>
    )
  }

  const block = () => {
    return(
      <>
        <p className='italic'>“The Internet is programmable information. The blockchain is programmable scarcity.” – Balaji Srinivasan</p>
        <p className='mt-5'>
          A blockchain is a distributed database that is shared among the nodes of a computer network. As a database, a blockchain stores information electronically in digital format. Blockchains are best known for their crucial role in cryptocurrency systems.
          The applications of Blockchain in the world are only increasing with the result of faster transactions, more transparency, and security as well as reduced costs. The future of blockchain holds limitless potential for various use-cases that can provide superior values to our businesses and our lives.
        </p>
        
        <p className='mt-5'>
          Who knows, Blockchain may change the world in the future!
        </p>
      </>
    )
  }
  
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

        <ThemeCard heading="Web-Dev" content={webdev()}/>
        <ThemeCard heading="Machine Learning" content={ai()}/>
        <ThemeCard heading="Blockchain" content={block()}/>


        <p className='mt-[5rem] pb-14 sm:pr-20 hover:tracking-widest ease-in-out duration-500 text-4xl md:text-6xl font-extrabold flex md:justify-end'><IoCaretForward className='md:mt-[5px]' /><a href="./showcase">Previous Winners' Projects</a></p>

      </div>

      

      
      
    </>
  )
  }
}
