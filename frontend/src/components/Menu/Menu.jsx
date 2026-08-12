import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import menuData from "./menuData";

function Menu({ isOpen, onClose }) {
  const [showCollection, setShowCollection] = useState(false);

  return (
    <div
      className={`fixed inset-0 z-[999] transition-all duration-500 ${isOpen
        ? "bg-black/10 backdrop-blur-sm"
        : "pointer-events-none bg-transparent"
        }`}
    >
      {/* Drawer */}

      <div
        className={`h-screen flex transition-all duration-500 ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* LEFT PANEL */}

        <div className="w-[420px] bg-[#F7F5F2] shadow-2xl flex flex-col">

          {/* Header */}

          <div className="flex items-center justify-between px-8 py-8">

            <button
              onClick={onClose}
              className="text-[#777] hover:text-[#B08A58] transition"
            >
              <IoClose size={28} />
            </button>

            <div className="text-center">

              <h1 className="text-[20px] tracking-[5px] font-light text-[#2B2B2B]">
                LUXURY WATCH
              </h1>

              <p className="uppercase tracking-[3px] text-[8px] text-[#8C8C8C] mt-1">
                TIMEPIECES
              </p>

            </div>

            <button className="text-sm tracking-[2px] text-[#777] hover:text-[#B08A58] transition">
              EN
            </button>

          </div>

          {/* Navigation */}

          <div className="flex-1 px-12 pt-12">

            <nav className="flex flex-col gap-5">

              <Link
                to="/"
                onClick={onClose}
                onMouseEnter={() => setShowCollection(false)}
                className="text-[20px] font-light tracking-wide text-[#A67C52] hover:text-[#C49A6C] transition"
              >
                Home
              </Link>

              <button
                onMouseEnter={() => setShowCollection(true)}
                className="flex items-center justify-between text-[20px] font-light tracking-wide text-[#A67C52] hover:text-[#C49A6C] transition"
              >
                <span>Collection</span>

                <span className="text-2xl">›</span>
              </button>

              <Link
                to="/services"
                onClick={onClose}
                onMouseEnter={() => setShowCollection(false)}
                className="text-[20px] font-light tracking-wide text-[#A67C52] hover:text-[#C49A6C] transition"
              >
                Services
              </Link>

              <Link
                to="/points-of-sale"
                onClick={onClose}
                onMouseEnter={() => setShowCollection(false)}
                className="text-[20px] font-light tracking-wide text-[#A67C52] hover:text-[#C49A6C] transition"
              >
                Points of Sale
              </Link>

            </nav>

          </div>

        </div>
        {/* ================= COLLECTION PANEL ================= */}

        <div
          className={`overflow-hidden transition-all duration-500 ${showCollection
            ? "w-[340px] opacity-100"
            : "w-0 opacity-0"
            }`}
        >
          <div className="h-full bg-[#FCFBF9] border-l border-[#ECE7DF] px-12 pt-35">

            <h2 className="text-[24px] font-light tracking-[4px] text-[#A67C52] mb-8">
              COLLECTION
            </h2>

            <div className="flex flex-col gap-5">

              {menuData.Collection.map((item) => (
                <Link
                  key={item}
                  to="/collections"
                  onClick={onClose}
                  className="group relative w-fit text-[18px] font-light tracking-wide text-[#7A7A7A] hover:text-[#B08A58] transition"
                >
                  {item}

                  <span
                    className="
                      absolute
                      left-0
                      -bottom-2
                      h-[1px]
                      w-0
                      bg-[#B08A58]
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  ></span>

                </Link>
              ))}

            </div>

          </div>
        </div>


      </div>
    </div>
  );
}

export default Menu;