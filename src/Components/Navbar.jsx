import { Handbag, Heart, Menu, Navigation, Search, UserRound } from "lucide-react"
import logo from "../assets/logo.svg"
import { NavLink } from "react-router-dom"
import { useContext } from "react";
import { Context } from "../Context/Context.jsx";

export default function Navbar() {
    const { ToggleMenu, navLinks } = useContext(Context);
    return (
        <nav className="z-10 sticky top-0">
            <div className="bg-(--green) flex justify-center items-center text-(--black) secondaryFont text-[12px]">
                <h1>New Season!</h1>
            </div>
            <section className="bg-(--black) py-4 side mainFont sticky top-0 left-0 right-0">
                <div className="container mx-auto text-white flex justify-between items-center">
                    <div>
                        <NavLink to="/"><img src={logo} className="w-35 md:w-45" /></NavLink>
                    </div>

                    {/* NewThing */}
                    <ul className="hidden md:flex gap-6 px-4 py-2">
                        {navLinks()}
                    </ul>

                    <div className="md:flex hidden gap-4">
                        <Search />
                        <NavLink to={"input"}>
                            <UserRound />
                        </NavLink>
                        <Heart />
                        <Handbag />
                    </div>

                    <div className="md:hidden flex items-center gap-1 text-[12px]">
                        <Navigation size={15} />
                        Namangan
                    </div>
                </div>
            </section>
        </nav>
    )
}
