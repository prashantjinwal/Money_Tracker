// import { XMarkIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";
import Svgs from "../assets/SvgMap";
import logo from "/pictures/app_icon_64.png"

export default function SideBar(){

    
    return (
        <aside className="w-1/5 h-[100vh] bg-[#323031]">
            <div className="py-4 border-stone-500 border-b-2 flex gap-4 items-center px-5 ">
                <img className="w-[2.5em]" src={logo} alt="logo" />
                <h2 className="text-white font-semibold text-lg">Expensio</h2>
            </div>
            
            
            <ul className="mt-2">

                {Svgs.map((btn)=>{
                    let btnStyle = "py-3 px-4 text-left w-full  text-white hover:bg-black";

                    return (
                    <li className="mt-1" key={btn.id}>
                        <Link key={btn.name} to={btn.href} ><button className={btnStyle}>{btn.text}</button></Link>
                    </li>
                    );

                })}

                
            </ul>

            <div>
                
            </div>
        </aside>
    );
} 