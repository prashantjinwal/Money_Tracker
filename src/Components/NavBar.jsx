import { EllipsisVertical, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar({Header, onbtnClick}){

        const [isOpen, setIsOpen] = useState(false);
    
        const toggleDropdown = () => {
            setIsOpen(!isOpen);
        };
    
        const handleOptionClick = (option) => {
            console.log('Selected:', option);
            setIsOpen(false);
        };
    
        const options = [{name:'Feedback & Support', index:1}, {name:'Sign Out', index:2}];

    return (
        <nav className="mt-0 w-full bg-[#323031] px-6 ">

            <header className="py-[1.1em] flex justify-between">

                <section className="flex gap-4 ">
                    <button onClick={onbtnClick} className="text-white font-bold border-2 border-emerald-50"><Menu /></button>
                    <p className="text-white font-semibold text-lg">{Header.selectedID}</p>
                </section>

            <div className="relative" >
                <button onClick={toggleDropdown} className="hover:bg-[#242324] rounded-full p-1 " >
                    <EllipsisVertical color="#ffffff"  />
                </button>
                {isOpen && 
                    
                    <div role="menu" aria-orientation="vertical" aria-labelledby="menu-button" className="absolute w-84 p shadow-xl shadow-slate-100 rounded-md  bg-[#323031] z-50 right-0 ring-1 ring-black ring-opacity-5 focus:outline-none ">

                        <div className="flex flex-col">
                            {options.map((option)=>{
                                return(
                                    <button key={option.index} role="menuitem" className="text-left py-3 px-3 rounded-md hover:bg-[#242324]"> <a href="#"  className=" text-white font-semibold text-base text-nowrap  " >{option.name}</a> </button>
                                )
                            })}
                        </div>

                   
                    </div>

                }
            </div>


            </header>
        
        </nav>
    );
}