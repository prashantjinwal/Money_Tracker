import logo from "../../public/pictures/app_icon_64.png"

export default function SideBar(){
    return (
        <aside className="w-1/5 h-[100vh] bg-[#242423]">
            <div className="py-4 border-stone-500 border-b-2 flex gap-4 items-center px-5 ">
                <img className="w-[2.5em]" src={logo} alt="logo" />
                <h2 className="text-white font-semibold text-lg">Expensio</h2>
            </div>
        </aside>
    );
} 