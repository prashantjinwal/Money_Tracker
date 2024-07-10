export default function Navbar(){
    return (
        <nav className="mt-0 w-full bg-[#323031] px-6 ">

            <header className="py-[1.40em] flex justify-between">

                <section>
                    <p className="text-white font-semibold text-lg">lorem</p>
                </section>

                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                    </svg>
                </button>

            </header>
        
        </nav>
    );
}