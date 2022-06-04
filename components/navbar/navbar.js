import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';

export default function Navbar(){

    const router = useRouter()
    const [browser, setbrowser] = useState(false)

    useEffect(() => {
      setbrowser(true)
    }, [])
    
    
        if(browser){
            
            if(router.route != "/")
            {
                    setTimeout(() => {
                    
                    // console.log(router.route.slice(1,)+"button")
                    document.getElementById(router.route.slice(1,)+"button").classList.add("line-through")
                    
                    }, 0);
            }
            else{
                    setTimeout(() => {

                    document.getElementById("homebutton").classList.add("line-through")
                    
                    }, 0);
            }
            return(
                <>
                    <div className="fixed z-20 top-0 right-0 h-[100vh] w-[3rem] flex place-content-center">
                        <div className='text-primaryAccent flex flex-col place-content-center justify-around text-md '>
                            <a id="homebutton" href="./" className="rotate-90 decoration-2">Home</a>
                            {/* <a id="aboutbutton" href="./about" className="rotate-90 decoration-2">About</a> */}
                            <a id="themesbutton" href="./themes" className="rotate-90 decoration-2">Themes</a>
                            <a id="showcasebutton" href="./showcase" className="rotate-90 decoration-2">Showcase</a>
                            <a id="organizersbutton" href="./organizers" className="rotate-90 decoration-2">Organizers</a>
                            <a id="contactbutton" href="./contact" className="rotate-90 decoration-2">Contact</a>
                        </div>
                    </div>
                </>
            )

    }
}