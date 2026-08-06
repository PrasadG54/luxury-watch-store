import boutiqueImage from "../assets/images/boutique.avif";

function BoutiqueSection() {
  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Content */}

          <div>

            <p className="uppercase tracking-[6px] text-[#B08A58] text-xs mb-5">
              Exclusive Experience
            </p>

            <h2 className="text-5xl font-light leading-tight text-[#2A2A2A] mb-8">
              VISIT OUR
              <br />
              BOUTIQUE
            </h2>

            <p className="text-gray-600 text-lg leading-8 mb-10">
              Experience the elegance of our timepieces in person. Visit our
              boutique to discover exceptional craftsmanship, receive
              personalized guidance from our specialists, and explore our
              exclusive collections in a refined luxury setting.
            </p>

            <button
              className="
                border
                border-[#B08A58]
                px-8
                py-3
                uppercase
                tracking-[3px]
                text-sm
                text-[#B08A58]
                transition-all
                duration-300
                hover:bg-[#B08A58]
                hover:text-white
              "
            >
              Book Appointment
            </button>

          </div>

          {/* Right Image */}

          <div className="overflow-hidden rounded-sm">

            <img
              src={boutiqueImage}
              alt="Luxury Boutique"
              className="w-[500px] h-[500px] object-cover transition duration-700 hover:scale-105"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default BoutiqueSection;