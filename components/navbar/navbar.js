export default function Navbar(){
    return(
        <>
            <div className="fixed top-0 right-0 h-[100vh] w-[6rem] flex place-content-center">
                <div className='gap-y-2 flex flex-col place-content-center justify-around text-xl '>
                    <a href="#" className="rotate-90 line-through">Home</a>
                    <a href="#" className="rotate-90">About</a>
                    <a href="#" className="rotate-90">Themes</a>
                    <a href="#" className="rotate-90">Organizers</a>
                    <a href="#" className="rotate-90">Contact</a>
                </div>
            </div>
        </>
    )
}