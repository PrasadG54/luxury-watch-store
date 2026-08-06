import { useEffect, useState } from "react";
import { FaBars, FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";
import Menu from "./Menu/Menu";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY && currentScroll > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-500 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="flex items-center justify-between px-10 py-6 text-white">

          {/* Left */}

          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center gap-3 uppercase tracking-wider text-sm cursor-pointer"
          >
            <FaBars size={20} />
            <span>Menu</span>
          </button>

          {/* Center */}

          <div className="text-center">
            <h1 className="text-2xl font-light tracking-[8px]">
              LUXURY WATCH
            </h1>

            <p className="text-xs tracking-[6px] text-gray-300">
              TIMEPIECES
            </p>
          </div>

          {/* Right */}

          <div className="flex items-center gap-6">
            <FaUser className="cursor-pointer" />
            <FaShoppingBag className="cursor-pointer" />
            <FaSearch className="cursor-pointer" />
          </div>

        </nav>
      </header>

      <Menu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}

export default Navbar;