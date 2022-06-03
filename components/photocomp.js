import { useEffect, useState } from "react"

export default function PhotoComp({pic, heading}){

    const [browser, setbrowser] = useState(false)

    useEffect(() => {
      setbrowser(true)
    }, [])
    

    if(browser){
        return(
            <>
                                
            </>
        )
    }
    

}