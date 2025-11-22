import { Handbag, Heart, Menu, Search, UserRound, X } from 'lucide-react';
import React, { useContext } from 'react';
import { Context } from "../Context/Context.jsx";
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../assets/logo.svg";

export default function MobileNav() {
    const { ToggleMenu, navLinks, Open } = useContext(Context);

    return (
        <nav className='md:hidden w-screen fixed bottom-0 left-0 right-0 bg-black z-50'>
            <div className='flex justify-around items-center text-white py-3'>
                <Menu onClick={ToggleMenu} className="w-6 h-6 cursor-pointer" />
                <Search className="w-6 h-6 cursor-pointer" />
                <UserRound className="w-6 h-6 cursor-pointer" />
                <Heart className="w-6 h-6 cursor-pointer" />
                <Handbag className="w-6 h-6 cursor-pointer" />
            </div>

            <AnimatePresence>
                {Open && (
                    <>
                        <motion.div
                            key="overlay"
                            onClick={ToggleMenu}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        />

                        <motion.div
                            key="menu"
                            className="fixed top-0 left-0 w-4/5 max-w-xs h-full bg-black z-50 shadow-lg"
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        >
                            <div className="flex justify-between items-center px-4 py-4 border-b border-gray-700">
                                <NavLink to="/">
                                    <img src={logo} onClick={ToggleMenu} className="w-28" />
                                </NavLink>
                                <button onClick={ToggleMenu} className="flex items-center justify-center p-2">
                                    <X size={28} />
                                </button>
                            </div>

                            <ul className="flex flex-col gap-6 px-6 py-6 text-white text-lg">
                                {navLinks()}
                            </ul>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
}
