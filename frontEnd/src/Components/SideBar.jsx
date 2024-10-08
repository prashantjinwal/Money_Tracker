import { Link } from "react-router-dom";
import Svgs from "../assets/SvgMap";
import logo from "/pictures/app_icon_64.png"
import { Plus } from "lucide-react";
// import { useEffect } from "react";


export default function SideBar({ onselect, selectedBarBtn, onbtnClick }){

    function selectAndFalseSideBar(){
        let width = window.innerWidth
        if(width < 1024){
            onbtnClick()
        }
    }

    return (
        // <aside className=" lg:w-1/5 h-screen bg-[#323031] w-9/12 lg:static fixed z-50 overflow-hidden" >
        
        <>
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
                    <li className="mt-1" key={btn.id}onClick={selectAndFalseSideBar} >
                        <Link key={btn.name} to={btn.href} ><button onClick={() => onselect(btn.text)} className={btnStyle}>{btn.text}</button></Link>
                    </li>
                    );

                })}

                
            </ul>

                 {/* </aside> */}
            </>
       
    );
} 