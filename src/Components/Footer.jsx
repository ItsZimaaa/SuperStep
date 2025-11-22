import { Facebook, Instagram, Twitter } from "lucide-react";
import FooterData from "../Data/FooterData.js";

export default function Footer() {
    const upper = FooterData.upperSide;
    const down = FooterData.downSide;

    return (
        <footer className="bg-(--black) text-white px-6 md:px-20 py-14 md:mt-20 rounded-t-3xl">
            <div className="container mx-auto side animate-fadeIn">

                {/* UpperPart */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-10">

                    <div>
                        <h3 className="text-lg font-semibold mb-4">{upper.order.title}</h3>
                        <ul className="space-y-2">
                            {upper.order.li.map((item) => (
                                <li
                                    key={item.id}
                                    className="text-gray-400 hover:text-(--green) transition cursor-pointer hover:translate-x-1 duration-200"
                                >
                                    <span className="inline-block hover:underline underline-offset-4">{item.data}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">{upper.service.title}</h3>
                        <ul className="space-y-2">
                            {upper.service.li.map((item) => (
                                <li
                                    key={item.id}
                                    className="text-gray-400 hover:text-(--green) transition cursor-pointer hover:translate-x-1 duration-200"
                                >
                                    <span className="inline-block hover:underline underline-offset-4">{item.data}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">{upper.LawPart.title}</h3>
                        <ul className="space-y-2">
                            {upper.LawPart.li.map((item) => (
                                <li
                                    key={item.id}
                                    className="text-gray-400 hover:text-(--green) transition cursor-pointer hover:translate-x-1 duration-200"
                                >
                                    <span className="inline-block hover:underline underline-offset-4">{item.data}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">{upper.brands.title}</h3>
                        <ul className="space-y-2">
                            {upper.brands.li.map((item) => (
                                <li
                                    key={item.id}
                                    className="text-gray-400 hover:text-(--green) transition cursor-pointer hover:translate-x-1 duration-200"
                                >
                                    <span className="inline-block hover:underline underline-offset-4">{item.data}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">{upper.about.title}</h3>
                        <ul className="space-y-2">
                            {upper.about.li.map((item) => (
                                <li
                                    key={item.id}
                                    className="text-gray-400 hover:text-(--green) transition cursor-pointer hover:translate-x-1 duration-200"
                                >
                                    <span className="inline-block hover:underline underline-offset-4">{item.data}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 my-10 shadow-[0_0_40px_rgba(0,0,0,0.4)]"></div>
                {/* DownSide */}
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between text-center md:text-left gap-6">
                    <div className="opacity-90 hover:opacity-100 transition">
                        <h4 className="text-lg font-medium">{down.SocialLinks}</h4>
                        <div className="flex flex-col md:flex-row items-center md:items-start justify-between text-center md:text-left gap-6">

                            {/* Social Links */}
                            <div className="opacity-90 hover:opacity-100 transition">
                                <h4 className="text-lg font-medium">{down.SocialLinks}</h4>

                                <div className="flex items-center gap-5 mt-3">
                                    <a className="text-gray-300 hover:text-(--green) transition">
                                        <Instagram size={22} />
                                    </a>
                                    <a className="text-gray-300 hover:text-(--green) transition">
                                        <Facebook size={22} />
                                    </a>
                                    <a className="text-gray-300 hover:text-(--green) transition">
                                        <Twitter size={22} />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="opacity-90 hover:opacity-100 transition">
                        <h4 className="text-lg font-medium">{down.call}</h4>
                        <p className="text-gray-300">{down.cellPhone}</p>
                        <p className="text-gray-400 text-sm">{down.time}</p>
                    </div>
                </div>

                <p className="text-center text-(--green) text-xs mt-10 opacity-70 hover:opacity-100 transition">
                    © {new Date().getFullYear()} SuperStep. Все права защищены.
                </p>
            </div>
        </footer>

    );
}
