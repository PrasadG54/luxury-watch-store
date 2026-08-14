import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

function Menu({ isOpen, onClose }) {
  return (
    <div
      className={`fixed inset-0 z-[999] transition-all duration-500 ${
        isOpen
          ? "bg-black/10 backdrop-blur-sm"
          : "pointer-events-none bg-transparent"
      }`}
    >
      {/* Drawer */}

      <div
        className={`h-screen flex transition-all duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
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

              {/* HOME */}

              <Link
                to="/"
                onClick={onClose}
                className="text-[20px] font-light tracking-wide text-[#A67C52] hover:text-[#C49A6C] transition"
              >
                Home
              </Link>

              {/* OUR COLLECTION */}

              <Link
                to="/collections"
                onClick={onClose}
                className="text-[20px] font-light tracking-wide text-[#A67C52] hover:text-[#C49A6C] transition"
              >
                Our Collection
              </Link>

              {/* SERVICES */}

              <Link
                to="/services"
                onClick={onClose}
                className="text-[20px] font-light tracking-wide text-[#A67C52] hover:text-[#C49A6C] transition"
              >
                Services
              </Link>

              {/* POINTS OF SALE */}

              <Link
                to="/point-of-sale"
                onClick={onClose}
                className="text-[20px] font-light tracking-wide text-[#A67C52] hover:text-[#C49A6C] transition"
              >
                Points of Sale
              </Link>

            </nav>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Menu;