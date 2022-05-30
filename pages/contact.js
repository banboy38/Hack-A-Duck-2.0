import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Navbar from '../components/navbar/navbar'

export default function About() {
  const router = useRouter()

  return (
    <body>
    <Navbar/>
    <> 
        <div className="w-full h-screen bg-gradient-to-r from-yellow-500 to-blue-300 rounded-md my-3 max-w-7xl border-solid ml-5">
            <div className="flex flex-col"><img src='./psyberduck.png' className='basis-2/3 border-1 rounded-md mt-7 mb-- bg-contain bg-center max-w-xl ml-5'>
            </img><span className='min-h-48 basis-1/3 border-2 bg-right flex-row-reverse rounded-md'>Detail card</span></div>
        </div>
        <div className="w-full h-screen bg-gradient-to-r from-yellow-500 to-blue-300 rounded-md my-3 max-w-7xl ml-5">
            <div className="flex flex-col"><img src='./SDS.png' className='basis-2/3 border-2 rounded-md mt-7 mb-- bg-contain bg-center max-w-2xl ml-5'>
            </img><span className='min-h-48 basis-1/3 border-2 bg-right flex-row-reverse rounded-md'>Detail card</span></div></div>
        <div className="w-full h-screen bg-gradient-to-r from-yellow-500 to-blue-300 rounded-md my-3 max-w-7xl ml-5">IET</div>
    </>
    </body>
  )
}
