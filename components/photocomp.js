import { useEffect, useState } from "react"
import Image from "next/image"

// import dudwit from '../public/dudwitproj.png'
 
export default function PhotoComp({pic, heading, textcolor}){

    const [browser, setbrowser] = useState(false)

    useEffect(() => {
      setbrowser(true)
    }, [])
    

    if(browser){
        return(
            <div className={"imgcomp " + textcolor}>
                <img height="500px" width="850px" src={pic}/>
                <p className="overtext">{heading}</p>
            </div>
        )
    }
    

}