import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Navbar from '../components/navbar/navbar'

export default function Home() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>
          Hack-A-Duck 2.0
        </title>
      </Head>
      
      <Navbar/>
      
    </>
  )
}
