import Namecard from '../components/namecard'
import Navbar from '../components/navbar/navbar'
import {BsChevronDoubleDown} from 'react-icons/bs'
import anime from 'animejs';
import { useEffect, useState } from 'react'

import Head from 'next/head';

export default function Organizers(){


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

            <div className='mt-[-5rem]  mb-[5rem] md:mt-[3.7rem] come p-[2rem] md:p-[3rem] w-screen z-0 h-screen flex flex-col justify-center place-items-center'>
      

                <div className='md:mb-[4rem] hover:tracking-widest ease-in-out duration-500 font-extrabold mt-[4rem] text-5xl md:text-8xl break-words'>Organizers 📑</div>
                <a href="#organizers"><BsChevronDoubleDown className='fadedown hidden sm:block' color='#F2F2F2' fontSize="10rem"/></a>      

            </div>

            <div className='py-20 px-16 sm:px-20 bg-fixed bg-center bg-cover bg-[url("../public/org.png")]'>
                <div id="organizers" className=' gap-x-6 grid place-content-center lg:grid-cols-2 xl:grid-cols-3'>
                    
                    <Namecard name="Vibhu Bhatia" github="vibhubhatia007" linkedin="vibhu-bhatia" insta="vibhu.669" position="Founder" club="Psyberduck" dp='vibhu.jpg'/>
                    <Namecard name="Tanay Goel" github="" linkedin="tanay-goel-311678194" insta="goel.tanay" position="Founder" club="Psyberduck" dp='tanaypsy.jpg'/>
                    <Namecard name="Arpit Falcon" github="" linkedin="" insta="arpitfalcon" position="Founder" club="Psyberduck" dp='falcon.jpg'/>
                    
                    <Namecard name="Tanmay Sinha" github="tanmay-sinha" linkedin="tanmay-sinha-bit" insta="tanmay.sinha0509" position="President" club="IET" dp='tanmay.jpg'/>
                    <Namecard name="Akshat Dubey" github="dubeyakshat07" linkedin="akshat-dubey-5983b2185" insta="" position="President" club="SDS" dp='akshat.jpg'/>
                    <Namecard name="Rohit Rathore" github="rohit0307" linkedin="rohit-singh-rathaur" insta="" position="Joint President" club="SDS" dp='rohit.jpg'/>

                    <Namecard name="Vaibhav Raj Singh" github="vaibhavrajsingh2001" linkedin="vaibhavrajsingh2001" insta="vaibhavrajsingh2001" position="Vice President" club="IET" dp='vaibhav.jpg'/>
                    <Namecard name="Swapnil Ghosh" github="GOSHROW" linkedin="goshrow" insta="doing.goshrow.tech" position="Vice President" club="IET" dp='swapnil.jpg'/>
                    <Namecard name="Aryan Khandelwal" github="aryan29" linkedin="aryan-khandelwal29" insta="" position="Vice President" club="IET" dp='aryan.jpg'/>
                    

                    <div className=' hidden xl:block'></div>
                    <Namecard name="Krishna Pratap Singh" github="" linkedin="krishna-pratap-singh-3a6423167" insta="" position="Director" club="IET" dp='krishna.jpg'/>
                    

                    
                    {/* <Namecard name="Abhishek Purty" github="AbhishekPurty" linkedin="abhishek-purty-07" insta="purty_abhishek" position="Backend Developer" club="BIT" dp='purty.png'/> */}                    
                    {/* <Namecard name="Abhishek Purty" github="AbhishekPurty" linkedin="abhishek-purty-07" insta="purty_abhishek" position="Backend Developer" club="BIT" dp='purty.png'/> */}
                    
                </div>

                <div className='mt-20 text-5xl underline sm:text-7xl font-extrabold text-center'>Developers</div>

                <div className=' gap-x-6 grid lg:grid-cols-2 xl:grid-cols-3'>
                    <Namecard name="Anirban Aditya Halder" github="banboy38" linkedin="anirban-aditya-halder" insta="banboy38" position="Executive Member" club="SDS" dp='banboy.png'/>
                    <Namecard name="Rahul Raj Soren" github="Roninraj" linkedin="rahul-raj-soren-082a98194" insta="_rahul.soren_" position="Frontend Developer" club="BIT" dp='ronin.png'/>
                    <Namecard name="Gunjan Kumari" github="" linkedin="gunjan-kumari-851a53230" insta="gunjan_k18" position="Content Writer" club="SDS" dp='gunjan.jpg'/>
                </div>
            </div>
        </>
    )
  }

}