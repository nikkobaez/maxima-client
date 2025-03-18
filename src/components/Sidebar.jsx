import { RxDashboard } from "react-icons/rx";
import Logo from "../assets/logo.png"

const Sidebar = () => {
    return (
        <aside className='flex flex-col items-center lg:items-start gap-8 bg-white p-5 w-fit lg:w-full max-w-[300px] h-full'>
            {/* LOGO */}
            <div className="flex items-center gap-3">
                <img src={Logo} alt="maxima-logo" className="w-9 h-9" />
                <h1 className="hidden lg:flex font-bold text-xl"> Maxima </h1>
            </div>

            {/* LINKS */}
            <nav className="flex flex-col gap-5 w-full list-none">
                <li className="flex items-center gap-3 bg-[#62a1f8] p-2 lg:p-3 rounded-md text-[#72767C] hover:cursor-pointer">
                    <RxDashboard color="#FFFFFF" size={24}/>
                    <p className="hidden lg:flex font-medium text-white"> Dashboard </p>
                </li>
            </nav>
        </aside>
    )
}

export default Sidebar