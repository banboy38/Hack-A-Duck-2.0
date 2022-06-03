import { useEffect, useState } from "react"
import Image from "next/image"

// import dudwit from '../public/dudwitproj.png'
 
export default function PhotoComp({pic, heading, textcolor, url}){

    const [browser, setbrowser] = useState(false)

    useEffect(() => {
      setbrowser(true)
    }, [])
    

    if(browser){
        return(
            <a href={url} target="_blank" className={"imgcomp " + textcolor}>
                <img height="500px" width="850px" src={pic}/>
                <p className="overtext">{heading}</p>
            </a>
        )
    }
    

}