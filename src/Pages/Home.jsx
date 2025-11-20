import hero from "../assets/Home/hero.jpg"
import home2 from "../assets/Home/HomeInput.webp"
import { motion } from "framer-motion";
import { ArrowRight, Handbag, Heart } from "lucide-react";
import SneakersData from "../Data/SneakersData.js";
import { Context } from "../Context/Context.jsx";
import { useContext } from "react";



export default function Home() {
  const { icons } = useContext(Context);
  const Brands = (name) => new URL(`../assets/Home/Brands/${name}.svg`, import.meta.url).href;
  const brands = [
    "Adidas",
    "AirJordan",
    "Fila",
    "NewBalance",
    "Nike",
    "Puma",
    "Reebok",
  ];

  return (
    <main className="mainFont">
      <section style={{ backgroundImage: `url(${hero})` }}
        className='text-white md:h-[500px] h-[400px] bg-cover bg-center'>
        <div className="flex md:flex-col md:justify-end md:items-start md:gap-10 justify-between items-end h-full pb-5 container mx-auto side">
          <h1 className="mainFont text-4xl md:text-8xl font-black">Новинки</h1>
          <motion.button
            aria-label="See more"
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            className="inline-flex items-center gap-3 md:px-6 px-4 md:py-3 py-2 rounded-2xl bg-(--green) text-(--black) font-medium shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.03 },
              tap: { scale: 0.98 },
            }}
          >
            <span className="relative overflow-hidden">
              <motion.span
                className="block"
                variants={{
                  rest: { x: 0 },
                  hover: { x: 4 },
                  tap: { x: 0 },
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                See more
              </motion.span>
            </span>
            <motion.span
              className="flex items-center"
              initial={{ x: 0 }}
              animate={{ x: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
            >
              <ArrowRight size={18} />
            </motion.span>
          </motion.button>
        </div>
      </section>

      <section className="container mx-auto side md:py-8 py-5">
        <motion.h1
          // animate={{ x: [0, 20, 0] }}
          // transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="text-lg md:text-2xl leading-relaxed mainFont"
        >
          <strong>SuperStep</strong> это первый сникер-проект без шаблонов. Уникальный концепт,
          сформированный вокруг кроссовок, а не субкультур. <span className="text-(--black)/20">Мы здесь, чтобы ты нашёл
            для себя пару кроссовок</span>, которая подойдёт именно тебе.
        </motion.h1>
      </section>

      <section className="container mx-auto side">

        <h1 className="font-black text-4xl">New Balance</h1>
        <div className="grid md:grid-cols-4 grid-cols-2">
          {SneakersData.NewBalance.slice(0, 4).map((item) => (
            <motion.div
              key={`${item.category}-${item.id}`}
              className="relative flex flex-col transition-all duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full sm:h-64 md:h-72 object-cover rounded-t-3xl"
                />

                <button
                  className="absolute top-3 right-3 bg-white p-2 rounded-full hover:scale-105 transition-transform"
                >
                  <Heart size={20} />
                </button>
              </div>

              <div className="p-3 sm:p-4 flex flex-col sm:gap-2 flex-1">
                <h2 className="text-lg sm:text-xl font-black text-(--black) truncate">
                  {item.title}
                </h2>
                <p className="text-gray-500 text-sm sm:text-base truncate">{item.article}</p>
                <p className="text-base sm:text-lg font-semibold text-(--black)">{item.price} $</p>

                <div className="flex justify-between items-center mt-3">
                  <motion.button
                    aria-label="Посмотреть"
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                    className="flex items-center md:gap-2 md:px-3 px-2 sm:px-4 py-2 sm:py-2.5 rounded-2xl bg-(--green) text-(--black) font-medium shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                    variants={{
                      rest: { scale: 1 },
                      hover: { scale: 1.03 },
                      tap: { scale: 0.97 },
                    }}
                  >
                    <span className="text-sm sm:text-base">Смотреть</span>
                    <motion.span
                      className="flex items-center"
                      initial={{ x: 0 }}
                      animate={{ x: [0, 4, 0] }}
                      transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                    >
                      <ArrowRight size={15} />
                    </motion.span>
                  </motion.button>

                  <button className="flex items-center gap-1 md:px-3 px-2 sm:px-4 py-2 sm:py-2.5 rounded-2xl bg-black text-white font-medium shadow-sm hover:bg-gray-800 transition-colors text-sm sm:text-base">
                    <Handbag size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto side">

        <h1 className="font-black text-4xl">New Balance</h1>
        <div className="grid md:grid-cols-4 grid-cols-2">
          {SneakersData.Puma.hi.slice(0, 4).map((item) => (
            <motion.div
              key={`${item.category}-${item.id}`}
              className="relative flex flex-col transition-all duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full sm:h-64 md:h-72 object-cover rounded-t-3xl"
                />

                <button
                  className="absolute top-3 right-3 bg-white p-2 rounded-full hover:scale-105 transition-transform"
                >
                  <Heart size={20} />
                </button>
              </div>

              <div className="p-3 sm:p-4 flex flex-col sm:gap-2 flex-1">
                <h2 className="text-lg sm:text-xl font-black text-(--black) truncate">
                  {item.title}
                </h2>
                <p className="text-gray-500 text-sm sm:text-base truncate">{item.article}</p>
                <p className="text-base sm:text-lg font-semibold text-(--black)">{item.price} $</p>

                <div className="flex justify-between items-center mt-3">
                  <motion.button
                    aria-label="Посмотреть"
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                    className="flex items-center md:gap-2 md:px-3 px-2 sm:px-4 py-2 sm:py-2.5 rounded-2xl bg-(--green) text-(--black) font-medium shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                    variants={{
                      rest: { scale: 1 },
                      hover: { scale: 1.03 },
                      tap: { scale: 0.97 },
                    }}
                  >
                    <span className="text-sm sm:text-base">Смотреть</span>
                    <motion.span
                      className="flex items-center"
                      initial={{ x: 0 }}
                      animate={{ x: [0, 4, 0] }}
                      transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                    >
                      <ArrowRight size={15} />
                    </motion.span>
                  </motion.button>

                  <button className="flex items-center gap-1 md:px-3 px-2 sm:px-4 py-2 sm:py-2.5 rounded-2xl bg-black text-white font-medium shadow-sm hover:bg-gray-800 transition-colors text-sm sm:text-base">
                    <Handbag size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="md:mt-25">
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

      <section className="overflow-hidden w-full py-6 md:my-20">
        <motion.div
          className="flex gap-16"
          animate={{ x: ["0%", "-100%"], }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 18,
            ease: "linear",
          }}
        >
          {[...brands, ...brands].map((item, i) => (
            <img
              key={i}
              src={Brands(item)}
              alt={item}
              className="w-40 grayscale-100 hover:grayscale-0 transition"
            />
          ))}
        </motion.div>
      </section>

    </main>
  )
}