import { ArrowRight, Heart, Search } from "lucide-react"
import HeroOne from "../assets/catergory.jpg"
import DataBase from "../Data/Data.js"
import Addvertise from "../components/Addvertise.jsx"
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { title } from "framer-motion/client";
import NavCatalog from "../Components/NavCatalog.jsx";



export default function Brands() {

    const [likedItems, setLikedItems] = useState({});

    const toggleLike = (id) => {
        setLikedItems(prev => ({ ...prev, [id]: !prev[id] }));
    }

    return (
        <main className='mainFont'>
            <div className="">
                <div style={{ backgroundImage: `url(${HeroOne})` }}
                    className="md:h-[600px] h-[200px] bg-cover bg-center flex justify-center items-end">

                    <h1 className="md:text-[300px] text-8xl font-bold text-white">Twelve</h1>
                </div>
            </div>
            <section className="container mx-auto side mb-30">
                <div className="bg-white">
                    <div className="flex py-4 items-center">

                        <h1 className="md:text-3xl text-2xl w-2/1 font-semibold tracking-tight">
                            Мужские товары
                        </h1>

                        <Search size={40} className="md:hidden" />
                        <div className="md:flex hidden items-center gap-3 w-full">
                            <div className="flex items-center gap-2 bg-neutral-100 border border-neutral-300 px-4 py-2 rounded-xl w-full focus-within:ring-2 focus-within:ring-black">
                                <Search className="opacity-50" size={20} />
                                <input
                                    type="text"
                                    placeholder="Популярные товары"
                                    className="bg-transparent outline-none text-sm w-full"
                                />
                            </div>

                            <button className="px-6 py-2 rounded-xl bg-(--green) text-(--black) font-bold hover:bg-neutral-900 transition">
                                Искать
                            </button>
                        </div>

                    </div>

                </div>

                <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
                    {
                        DataBase.filter(item => item.category=== "Lacoste").map((item) => (
                            <div key={item.id} className="">
                                <div className="relative">
                                    <img src={item.img} className="w-full sm:h-64 md:h-72 object-cover rounded-t-3xl" />
                                    <button className="absolute top-3 right-3 bg-white p-2 rounded-full hover:scale-110 transition-transform"
                                        onClick={() => toggleLike(item.id)}>
                                        {likedItems[item.id] ? <FaHeart size={20} className="text-red-500" /> : <FaRegHeart size={20} />}
                                    </button>
                                </div>

                                <div className="p-2">
                                    <h1 className="font-bold leading-4">{item.name}</h1>
                                    <span className="flex gap-4 items-center">
                                        <p className="text-gray-400 md:text-sm text-[12px]">{item.category}</p>
                                        <p className="text-gray-400 md:text-sm text-[12px]">{item.color}</p>
                                    </span>
                                    <span className="flex justify-between items-center">
                                        <h1 className="text-sm text-gray-400">{item.price}</h1>
                                        <span
                                            className="flex items-center bg-(--green) py-1 px-2 rounded-2xl">
                                            Add <ArrowRight size={20} />
                                        </span>
                                    </span>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </section>

            <Addvertise />
            <div className="pt-40">
                <NavCatalog/>
            </div>
        </main>
    )
}
