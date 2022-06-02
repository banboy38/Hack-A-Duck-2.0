import Namecard from '../components/namecard'
import Navbar from '../components/navbar/navbar'
import {BsChevronDoubleDown} from 'react-icons/bs'
import anime from 'animejs';

export default function Organizers(){

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
            <Navbar/>

            <div className='mt-[-5rem]  mb-[5rem] md:mt-[3.7rem] come p-[2rem] md:p-[3rem] w-screen z-0 h-screen flex flex-col justify-center place-items-center'>
      

                <div className='md:mb-[4rem] hover:tracking-widest ease-in-out duration-500 font-extrabold mt-[4rem] text-6xl md:text-8xl break-words'>Organizers 📑</div>
                <a href="#organizers"><BsChevronDoubleDown className='fadedown hidden sm:block' color='#F2F2F2' fontSize="10rem"/></a>      

            </div>

            <div className='py-20 bg-fixed bg-center bg-cover bg-[url("../public/org.png")]'>
                <div id="organizers" className=' grid lg:grid-cols-2 xl:grid-cols-3 w-[80%] sm:w-[97%]'>
                    <Namecard name="Anirban Aditya Halder" github="banboy38" linkedin="anirban-aditya-halder" insta="banboy38" position="Executive Member" club="SDS" dp='banboy.png'/>
                    <Namecard name="Rahul Raj Soren" github="Roninraj" linkedin="rahul-raj-soren-082a98194" insta="_rahul.soren_" position="Frontend Developer" club="BIT" dp='ronin.png'/>
                    <Namecard name="Abhishek Purty" github="AbhishekPurty" linkedin="abhishek-purty-07" insta="purty_abhishek" position="Backend Developer" club="BIT" dp='purty.png'/>

                    <Namecard name="Anirban Aditya Halder" github="banboy38" linkedin="anirban-aditya-halder" insta="banboy38" position="Executive Member" club="SDS" dp='banboy.png'/>
                    <Namecard name="Rahul Raj Soren" github="Roninraj" linkedin="rahul-raj-soren-082a98194" insta="_rahul.soren_" position="Frontend Developer" club="BIT" dp='ronin.png'/>
                    <Namecard name="Abhishek Purty" github="AbhishekPurty" linkedin="abhishek-purty-07" insta="purty_abhishek" position="Backend Developer" club="BIT" dp='purty.png'/>

                    <Namecard name="Anirban Aditya Halder" github="banboy38" linkedin="anirban-aditya-halder" insta="banboy38" position="Executive Member" club="SDS" dp='banboy.png'/>
                    <Namecard name="Rahul Raj Soren" github="Roninraj" linkedin="rahul-raj-soren-082a98194" insta="_rahul.soren_" position="Frontend Developer" club="BIT" dp='ronin.png'/>
                    <Namecard name="Abhishek Purty" github="AbhishekPurty" linkedin="abhishek-purty-07" insta="purty_abhishek" position="Backend Developer" club="BIT" dp='purty.png'/>

                    <Namecard name="Anirban Aditya Halder" github="banboy38" linkedin="anirban-aditya-halder" insta="banboy38" position="Executive Member" club="SDS" dp='banboy.png'/>
                    <Namecard name="Rahul Raj Soren" github="Roninraj" linkedin="rahul-raj-soren-082a98194" insta="_rahul.soren_" position="Frontend Developer" club="BIT" dp='ronin.png'/>
                    <Namecard name="Abhishek Purty" github="AbhishekPurty" linkedin="abhishek-purty-07" insta="purty_abhishek" position="Backend Developer" club="BIT" dp='purty.png'/>
                    
                </div>

                <div className='mt-20 text-5xl underline sm:text-7xl font-extrabold text-center w-[80%] sm:w-[97%]'>Developers</div>

                <div className=' grid lg:grid-cols-2 xl:grid-cols-3 w-[80%] sm:w-[97%]'>
                    <Namecard name="Anirban Aditya Halder" github="banboy38" linkedin="anirban-aditya-halder" insta="banboy38" position="Executive Member" club="SDS" dp='banboy.png'/>
                    <Namecard name="Rahul Raj Soren" github="Roninraj" linkedin="rahul-raj-soren-082a98194" insta="_rahul.soren_" position="Frontend Developer" club="BIT" dp='ronin.png'/>
                    <Namecard name="Abhishek Purty" github="AbhishekPurty" linkedin="abhishek-purty-07" insta="purty_abhishek" position="Backend Developer" club="BIT" dp='purty.png'/>
                </div>
            </div>
        </>
    )

}