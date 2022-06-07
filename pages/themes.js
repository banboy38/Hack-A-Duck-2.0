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

  const hiringportal = () => {
    return(
      <>
        <p>The portal must have multiple dashboards based upon the user credentials. For one dashboard, it must allow the user to upload CV, apply for the various opportunities and others. For the other dashboard, it must allow the user to post the opportunities with various filters and shall be able to provide some administrative rights to some users so that the opportunity can be edited. There shall be one feature that must allow the user to fill in required details asked and then send the same for the approvals. </p>
      </>
    )
  }

  const score = () => {
    return(
      <>
        <p>The candidate shall be provided with the data sources and further he must be able to create the dataset from the same by web scraping.
        Based upon the dataset, the candidate must use various algorithms to predict the future score based upon the historical dataset.
        For prediction, there shall be various data input fields, with restrictions by providing privileges to specific sets of people who can enter data in which field.
        </p>
      </>
    )
  }

  const block = () => {
    return(
      <>
        
        <p>
        The candidates are expected to build an online platform where multiple quizzes and coding tests can be hosted and also it can be evaluated as well on the same platform.
        The platform must be compatible and must allow the user to use any specific language for participating in the contest hosted on the platform

        </p>
      </>
    )
  }

  const bcom = () => {
    return(
      <>
        The platform must have an interface that allows the user to do audio, video chats and must also support the group chat features.
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
      

        <div className='md:mb-[4rem] hover:tracking-widest ease-in-out duration-500 font-extrabold mt-[4rem] text-5xl md:text-8xl break-words'>Themes 🎨</div>
        <a href="#themes"><BsChevronDoubleDown className='fadedown hidden sm:block' color='#F2F2F2' fontSize="10rem"/></a>      

      </div> 
      
      <div id="themes" className="flex flex-col place-items-center md:place-items-start p-[2rem] md:p-[2rem]  w-screen min-h-screen"> {/*bg-fixed bg-center bg-cover bg-[url('../public/psyberduck.png')]*/}

        <ThemeCard heading="Hiring Portal" content={hiringportal()}/>
        <ThemeCard heading="Score Predictor" content={score()}/>
        <ThemeCard heading="CP Platform" content={block()}/>
        <ThemeCard heading="Business Communication Platform" content={bcom()}/>

      </div>

      {/* <div className='p-[2.5rem] text-[0.5rem] text-center sm:text-left sm:text-xl'>
        <p>
          <span className='font-extrabold'>NOTE</span> : The registered teams will fill in their preference for the problem statement and the shortlisted teams for the various problem statements would be further informed about the more details and mentorship.
        </p>
          Make sure you have filled the below form for the preference of your Prob Statement. 
          <p><span className='font-extrabold'>Form Link</span> : <a href='https://bit.ly/ps_hackaduck' target="_blank">bit.ly/ps_hackaduck</a></p>
      </div> */}

      <p className='mt-[rem] pb-14 p-10 sm:pr-20 hover:tracking-widest ease-in-out duration-500 text-3xl md:text-5xl font-bold flex md:justify-end'><IoCaretForward className='md:mt-[5px]' /><a href="./showcase">Previous Winners' Projects</a></p>

      

      
      
    </>
  )
  }
}
