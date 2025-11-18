import hero from "../assets/Home/hero.jpg"
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import APiCatalog from "../Components/APiCatalog";

export default function Home() {


  return (
    <div>
      <div style={{ backgroundImage: `url(${hero})` }}
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
      </div>

      <div className="container mx-auto side md:py-8 py-5">
        <motion.h1
          animate={{ x: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="text-lg md:text-2xl leading-relaxed mainFont font-semibold"
        >
          SuperStep это первый сникер-проект без шаблонов. Уникальный концепт,
          сформированный вокруг кроссовок, а не субкультур. Мы здесь, чтобы ты нашёл
          для себя пару, которая подойдёт именно тебе.
        </motion.h1>
      </div>

      <APiCatalog />
    </div>
  )
}