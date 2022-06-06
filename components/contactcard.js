import { useEffect, useState } from "react"

import {ImLocation, ImMail3, ImInstagram, ImLinkedin} from 'react-icons/im'

export default function ContactCard({club, logo='iet.png', mail, insta, linkd}){

    const [browser, setbrowser] = useState(false)

    useEffect(() => {
      setbrowser(true)
    }, [])
    

    if(browser){
        return(
            <>
                <div className="max-w-screen md:h-[20rem] break-words flex flex-col md:flex-row rounded overflow-hidden font-extrabold bg-[#212121] sm:bg-[url('/theme2.png')] shadow-lg hover:scale-[1.03] duration-500 ease-in-out">
                    <div className="p-6 bg-[f2f2f2] h-[15rem] custom:h-full w-full md:w-[20rem] flex flex-col place-content-center justify-center  ">
                        <img className="w-auto h-auto" src={logo} alt="logo"/>
                    </div>
                    <div>
                        <div className="px-6 py-4">
                            <div className=" text-2xl md:text-4xl mb-2">{club}</div>
                            <p className=" flex flex-row gap-3 mt-5 font-bold text-sm md:text-2xl">
                                <a href={mail} target="_blank"><ImMail3/></a>
                                <a href={insta} target="_blank"><ImInstagram/></a>
                                <a href={linkd} target="_blank"><ImLinkedin/></a>
                            </p>
                        </div>
                        {/* <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                        </div> */}
                    </div>
                </div>
                
            </>
        )
    }
}