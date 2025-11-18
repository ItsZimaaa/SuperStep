import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export const Context = createContext();


export const ContextProvider = ({ children }) => {
    // Menu Opening
    const [Open, setOpen] = useState(false);
    const ToggleMenu = () => setOpen(!Open);

    // NavBarData
    const navLinks = () => {
        const NavData = [
            { id: 0, nav: "Дома" },
            { id: 1, nav: "Мужчинам" },
            { id: 2, nav: "Женщинам" },
            { id: 3, nav: "Детям" },
            { id: 4, nav: "Бренды" },
            { id: 5, nav: "Новинки" },
            { id: 6, nav: "Скидки" },
        ];

        return NavData.map((item) => (
            <li key={item.id}>
                <NavLink onClick={ToggleMenu} to={`/${item.nav}`}>{item.nav}</NavLink>
            </li>
        ));
    };


    return (
        <Context.Provider value={{ ToggleMenu, navLinks, Open, setOpen }}>
            {children}
        </Context.Provider>
    );
};
