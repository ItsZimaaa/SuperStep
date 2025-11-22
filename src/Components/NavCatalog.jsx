import { useState } from "react";
import DataBase from "../Data/Data.js";

export default function NavCatalog() {
    const [category, setCategory] = useState("Lacoste");
    const Hero = (name) => new URL(`../assets/DataBase/Hero/${name}.webp`, import.meta.url).href;
    const brands = [
        "The North Face",
        "Lacoste",
        "New Balance",
        "PUMA",
        "Adidas",
        "Nike",
        "Anta",
        "Premiata",
    ];

    return (
        <section className="bg-(--black) text-white py-10">
            <div className="container mx-auto side">

                <div className="py-2 flex flex-col gap-2">
                    <h1 className="text-4xl font-black mainFont">Хиты сезона</h1>

                    <ul className="md:flex grid grid-rows-2 grid-cols-4 text-[14px] cursor-pointer 
                    text-gray-500 items-center md:gap-10">

                        {brands.map((brand) => (
                            <li
                                key={brand}
                                onClick={() => setCategory(brand)}
                                className={`transition ${category === brand ? "text-(--green) font-bold underline" : ""
                                    }`}
                            >
                                {brand}
                            </li>
                        ))}
                    </ul>
                </div>


                <div className="text-white grid md:grid-cols-4 grid-cols-2 gap-4 grid-rows-2 p-4">
                    <div
                        className="row-span-2 bg-cover bg-center rounded-xl flex justify-end items-end 
                        flex-col p-4 gap-2"
                        style={{
                            backgroundImage: `url(${Hero(
                                category,
                                `${category}`
                            )})`,
                        }}
                    >
                        <h1 className="md:text-5xl text-3xl font-bold">{category}</h1>
                        <button className="text-sm bg-(--green) text-(--black) px-4 py-2 rounded-xl flex">
                            Перейти<span className="hidden md:flex"> в каталог</span>
                        </button>
                    </div>

                    {/* PRODUCT ITEMS */}
                    {DataBase.filter((item) => item.category === category)
                        .slice(0, 6)
                        .map((item) => (
                            <div key={item.id} className="row-span-1">
                                <img src={item.img} className="rounded-3xl" />
                                <p className="font-bold px-4 py-2">{item.name}</p>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
}
