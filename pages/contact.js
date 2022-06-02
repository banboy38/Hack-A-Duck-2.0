import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Namecard from '../components/namecard'
import Navbar from '../components/navbar/navbar'

export default function About() {

  return (
    <>
    <Navbar/>
    <> 
        <div className="w-full h-screen bg-[url('../public/contact.png')] bg-cover rounded-md my-10 max-w-[70%] sm:max-w-[80%] border-solid ml-5">
            <div className="flex flex-col drop-shadow-lg"><img src='./psyberduck.png' className='basis-3/4 border-1 rounded-md mt-7 mb-- bg-contain bg-center max-w-xl ml-5'>
            </img><span className='min-h-48 basis-1/4 border-1 bg-right flex-row-reverse rounded-md'>Detail card</span></div>
        </div>

        <div className="w-full h-screen bg-[url('../public/contact.png')] bg-cover rounded-md my-10 max-w-[70%] sm:max-w-[80%] ml-5">
            <div className="flex flex-col drop-shadow-lg"><img src='./SDS.png' className='basis-2/3 border-1 rounded-md mt-7 mb-- bg-contain bg-center max-w-xl ml-5'>
            </img><span className='min-h-48 basis-1/3 border-1 bg-right flex-row-reverse rounded-md'>Detail card</span></div></div>
        
        <div className="w-full h-screen bg-[url('../public/contact.png')] bg-cover rounded-md my-10 max-w-[70%] sm:max-w-[80%] ml-5">
            <div className="flex flex-col drop-shadow-lg"><img src='./bit.png' className='basis-3/4 border-1 rounded-md mt-7 mb-- bg-contain bg-center max-w-xl ml-5'>
            </img><span className='min-h-48 basis-1/3 border-1 bg-right flex-row-reverse rounded-md'>Detail card</span></div>
        </div>

        
    </>
    </>
  )
}
