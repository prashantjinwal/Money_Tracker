import { Link } from "react-router-dom";
import Svgs from "../assets/SvgMap";
import logo from "/pictures/app_icon_64.png"
// import { Menu } from "lucide-react";
import { Plus } from "lucide-react";


export default function SideBar({ onselect, selectedBarBtn, onbtnClick }){

    return (
        <aside className=" lg:w-1/5 h-[100vh] bg-[#323031] w-9/12 lg:static absolute z-50" >
            <div className="py-4 border-stone-500 border-b-2 flex gap-4 items-center px-5 justify-between">
                <div className="flex gap-4 items-center">
                    <img className="w-[2.2em]" src={logo} alt="logo" />
                    <h2 className="text-white font-semibold text-lg">Expensio</h2>
                </div>

                <div className="block lg:hidden" >
                    <button onClick={onbtnClick}  className="text-white font-bold border-2 border-emerald-50 rounded-full rotate-45 "><Plus  /></button>
                </div>
                
            </div>
            
            
            <ul className="mt-2">

                {Svgs.map((btn)=>{
                    let btnStyle = "py-3 px-4 text-left w-full  hover:bg-black";

                    if (btn.text === selectedBarBtn){
                        btnStyle += " text-[#0077b6] font-semibold"
                    }else{
                        btnStyle += " text-white  "
                    }

                    return (
                    <li className="mt-1" key={btn.id}>
                        <Link key={btn.name} to={btn.href} ><button onClick={() => onselect(btn.text)} className={btnStyle}>{btn.text}</button></Link>
                    </li>
                    );

                })}

                
            </ul>

            
        </aside>
    );
} 