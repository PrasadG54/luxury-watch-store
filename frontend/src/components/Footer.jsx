import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-[#F7F5F2] border-t border-[#E5DED3]">

            {/* Main Footer */}

            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">

                    {/* Manufacture */}

                    <div>

                        <h3 className="uppercase tracking-[3px] text-sm text-[#B08A58] mb-6">
                            Manufacture
                        </h3>

                        <ul className="space-y-4 text-[#3B3B3B]">

                            <li><Link to="/">Our Heritage</Link></li>
                            <li><Link to="/">Craftsmanship</Link></li>
                            <li><Link to="/">Innovation</Link></li>
                            <li><Link to="/">Our Story</Link></li>
                            <li><Link to="/">Research</Link></li>
                            <li><Link to="/">Rare Handcrafts</Link></li>

                        </ul>

                    </div>

                    {/* Collections */}

                    <div>

                        <h3 className="uppercase tracking-[3px] text-sm text-[#B08A58] mb-6">
                            Collections
                        </h3>

                        <ul className="space-y-4 text-[#3B3B3B]">

                            <li><Link to="/collections">Find Your Timepiece</Link></li>
                            <li><Link to="/collections">Grand Complications</Link></li>
                            <li><Link to="/collections">Complications</Link></li>
                            <li><Link to="/collections">Calatrava</Link></li>
                            <li><Link to="/collections">Nautilus</Link></li>
                            <li><Link to="/collections">Aquanaut</Link></li>
                            <li><Link to="/collections">Golden Ellipse</Link></li>

                        </ul>

                    </div>

                    {/* Services */}

                    <div>

                        <h3 className="uppercase tracking-[3px] text-sm text-[#B08A58] mb-6">
                            Services
                        </h3>

                        <ul className="space-y-4 text-[#3B3B3B]">

                            <li><Link to="/appointment">Book Appointment</Link></li>
                            <li><Link to="/">Watch Care</Link></li>
                            <li><Link to="/">Instructions</Link></li>
                            <li><Link to="/">Warranty</Link></li>
                            <li><Link to="/">Service Centers</Link></li>
                            <li><Link to="/">FAQ</Link></li>

                        </ul>

                    </div>

                    {/* Boutiques */}

                    <div>

                        <h3 className="uppercase tracking-[3px] text-sm text-[#B08A58] mb-6">
                            Boutiques
                        </h3>

                        <ul className="space-y-4 text-[#3B3B3B]">

                            <li><Link to="/">Find a Store</Link></li>
                            <li><Link to="/">Boutiques</Link></li>
                            <li><Link to="/contact">Contact</Link></li>

                        </ul>

                    </div>

                </div>

                {/* Bottom */}

                <div className="border-t border-[#E5DED3] mt-20 pt-10">

                    <div className="flex flex-col md:flex-row justify-between items-center">

                        {/* Logo */}

                        <div className="flex flex-col items-start">

                            <h2 className="text-3xl font-light tracking-[8px] text-[#2A2A2A]">
                                LUXURY WATCH
                            </h2>

                            <span className="w-full text-center text-[12px] uppercase tracking-[6px] text-[#8B8B8B] mt-2">
                                TIMEPIECES
                            </span>

                        </div>

                        {/* Instagram */}

                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" mt-8 md:mt-0 w-12 h-12 rounded-full border border-[#B08A58] flex items-center justify-center text-[#B08A58] hover:bg-[#B08A58] hover:text-white transition-all duration-300 "
                        >
                            <FaInstagram size={18} />
                        </a>

                    </div>

                </div>

            </div>

            {/* Copyright */}

            <div className="border-t border-[#E5DED3]">

                <div className="py-6">

                    <p className="text-center text-sm text-[#8B8B8B]">
                        © 2026 LUXURY WATCH TIMEPIECES. All Rights Reserved.
                    </p>

                </div>

            </div>

        </footer>
    );
}

export default Footer;