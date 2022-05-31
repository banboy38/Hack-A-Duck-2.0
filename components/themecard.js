import { useEffect, useState } from "react"

export default function ThemeCard(){

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