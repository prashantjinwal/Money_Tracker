import profile from "../../public/pictures/Designer.png"
import { HomeIcon } from "@heroicons/react/16/solid";

export default function SideBar(){
    return (
        <div className="w-1/5 h-[100vh] bg-[#242423] py-8 px-4">
            <div className="flex flex-col items-center  ">
                <img className="w-[6em] rounded-full flex "  src={profile} alt="Logo"/>
                <p className="text-white text-lg py-1 flex ">Noah Johnson</p>
            </div>
           
           
           

            <ul className=" mt-8 my-8">
                <button className="py-3 px-3 text-left w-full text-lg font-semibold text-stone-300  hover:bg-[#333533] rounded-xl hover:text-[#40916c] flex"><HomeIcon className="flex w-[1.4em] mx-2"/>  Home</button>
            </ul>

        </div>
    );
} 