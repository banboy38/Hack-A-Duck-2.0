import { useEffect, useState } from "react"

export default function ThemeCard({heading, content}){

    const [browser, setbrowser] = useState(false)

    useEffect(() => {
      setbrowser(true)
    }, [])
    

    if(browser){
        return(
            <>
                <div className="fuckthisshit bg-[#212121] xs:bg-[url('/theme2.png')] hover:scale-[1.03] my-14 ease-in-out duration-500 rounded-md p-3 py-5 w-[80%] shadow-lg min-h-[20rem]">
                    <p className="font-extrabold text-3xl md:text-6xl underline">{heading}</p>
                    <p className="hover:translate-x-2 duration-500 ease-in-out text-md md:text-4xl ml-[4px]  md:ml-[10px] mt-2 md:mt-5 font-semibold sm:font-bold break-normal">
                        {content}
                    </p>
                    {/* <p><img className="absolute -right-[5rem] md:-right-[7rem] md:-bottom-[10rem]" src="./iet.png" height="300px" width="300px"/></p> */}
                </div>
                
            </>
        )
    }
    

}