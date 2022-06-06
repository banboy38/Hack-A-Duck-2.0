import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar/navbar'
import {BsChevronDoubleDown} from 'react-icons/bs'

import { useEffect, useState } from 'react'

import anime from 'animejs'

import ContactCard from '../components/contactcard'

export default function About() {


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
      
    }, 5);

  return (
    <>

            <Head>
                <title>
                Hack-A-Duck 2.0
                </title>
            </Head>    
            <Navbar/>

            <div className='mt-[-5rem] -mb-20 md:mt-[3.7rem] come p-[2rem] md:p-[3rem] w-screen z-0 h-screen flex flex-col justify-center place-items-center'>
      

              <div className='md:mb-[4rem] hover:tracking-widest ease-in-out duration-500 font-extrabold mt-[4rem] text-5xl md:text-8xl break-words'>Contact Us 📲</div>
              <a href="#contact"><BsChevronDoubleDown className='fadedown hidden sm:block' color='#F2F2F2' fontSize="10rem"/></a>      

            </div>
     
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

        {/* <p className='text-6xl'>
          Kaam Chaalu
        </p> */}

        <div className='min-h-screen min-w-full flex justify-center place-content-center md:p-[8rem] p-20'>

          <div id='contact' className='pt-20 grid gap-20 grid-cols-1 '>
            <ContactCard logo='/iet2.png' club="IET, BIT Mesra" mail="mailto:iet@bitmesra.ac.in" insta="https://www.instagram.com/ietbitmesra" linkd="https://www.linkedin.com/company/iet-on-campus-bit-mesra"/>
            <ContactCard logo='/SDS2.png' club="Society for Data Science, BIT Mesra" mail="mailto:sds@bitmesra.ac.in" insta="https://www.instagram.com/sds.bitm/" linkd="https://www.linkedin.com/company/society-for-data-science-bit-mesra"/>
            <ContactCard logo='/theDuck.png' club="Psyberduck" mail="mailto:teampsyberduck@gmail.com" insta="https://www.instagram.com/psyber_duck/" linkd="https://www.linkedin.com/company/psyberduck/"/>
          </div>
        
        </div>

        
    
    </>
  )

  }
}
