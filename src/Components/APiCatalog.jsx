import { ArrowRight, Handbag, Heart } from "lucide-react";
import SneakersData from "../Data/SneakersData.js";
import { motion } from "framer-motion";
import { useState } from "react";

export default function APiCatalog() {
  const AllSneakers = [
    ...SneakersData.NewBalance,
    ...SneakersData.Anta,
    ...SneakersData.Puma.effect,
    ...SneakersData.Puma.hi,
    ...SneakersData.Reebok,
  ];

  const [liked, setLiked] = useState({});

  const toggleLike = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl sm:text-5xl font-bold my-6 text-(--black) text-center sm:text-left">
        Catalog
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {AllSneakers.map((item) => (
          <motion.div
            key={`${item.category}-${item.id}`}
            className="relative flex flex-col rounded-3xl shadow-lg bg-white hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.03 }}
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full sm:h-64 md:h-72 object-cover rounded-t-3xl"
              />

              <button
                onClick={() => toggleLike(`${item.category}-${item.id}`)}
                className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:scale-110 transition-transform"
              >
                <Heart
                  size={20}
                  className={
                    liked[`${item.category}-${item.id}`] ? "text-red-500" : "text-gray-400"
                  }
                />
              </button>
            </div>

            <div className="p-3 sm:p-4 flex flex-col gap-1 sm:gap-2 flex-1">
              <h2 className="text-lg sm:text-xl font-bold text-(--black) truncate">
                {item.title}
              </h2>
              <p className="text-gray-500 text-sm sm:text-base truncate">{item.article}</p>
              <p className="text-base sm:text-lg font-semibold text-(--black)">{item.price} $</p>

              <div className="flex justify-between items-center mt-3">
                <motion.button
                  aria-label="See more"
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
                  <span className="text-sm sm:text-base">See</span>
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
    </div>
  );
}
