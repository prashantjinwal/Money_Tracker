import { EllipsisVertical, Menu } from "lucide-react";

export default function Navbar({Header, onbtnClick}){
    return (
        <nav className="mt-0 w-full bg-[#323031] px-6 ">

            <header className="py-[1.40em] flex justify-between">

                <section className="flex gap-4 ">
                    <button onClick={onbtnClick} className="text-white font-bold border-2 border-emerald-50"><Menu /></button>
                    <p className="text-white font-semibold text-lg">{Header.selectedID}</p>
                </section>

                <button>
                <EllipsisVertical color="#ffffff" />
                </button>

            </header>
        
        </nav>
    );
}