import React from 'react'
import home2 from "../assets/Home/HomeInput.webp"


export default function Addvertise() {
    return (
        <section className="md:my-25 my-10">
            <div className="container md:mx-auto side">
                <div className="relative bg-(--black) rounded-3xl py-10 px-2 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex flex-col md:w-[45%] text-white md:mb-0 mb-10">
                        <h1 className="text-3xl md:text-6xl font-black leading-tight md:leading-15 mb-4 z-2">
                            Не упусти <br /> шанс!
                            <span className="inline-block ml-3 text-2xl md:text-4xl bg-red-500 text-white rounded-full px-4 py-1 transform -rotate-12">
                                -50%
                            </span>
                        </h1>
                        <p className="text-[12px] md:text-xl text-red-100 z-2">
                            Подпишись на нашу рассылку и получи 10% скидку на следующую покупку
                        </p>
                    </div>

                    <div className="absolute md:left-140 top-0 md:-top-30 right-0 z-1 md:-bottom-15 md:w-96">
                        <img
                            src={home2}
                            alt="Special Offer"
                            className="object-contain transform w-40 md:w-96 hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    <div className="md:w-[25%] flex flex-col gap-4 px-10">
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Введи свой email..."
                                className="w-full px-4 py-3 rounded-full border-2 border-white bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-500 text-gray-900 placeholder-gray-500"
                            />
                        </div>
                        <p className="text-xs text-white text-start">
                            Нажимая кнопку, ты соглашаешься с условиями<br />
                            оферты, программы лояльности и политикой конфиденциальности
                        </p>
                        <button className="w-full text-(--black) bg-(--green) font-bold py-3 px-6 rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                            Получить скидку
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
