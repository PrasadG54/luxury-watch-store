import craftsmanImage from "../assets/images/craftsman.jpg";

function CraftsmanshipSection() {
  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* Left Content */}

          <div>

            <p className="uppercase tracking-[6px] text-[#B08A58] text-xs mb-5">
              Exceptional Craftsmanship
            </p>

            <h2 className="text-5xl font-light leading-tight text-[#2A2A2A] mb-8">
              WHERE
              <br />
              TRADITION
              <br />
              MEETS
              <br />
              INNOVATION
            </h2>

            <p className="text-gray-600 leading-8 text-lg mb-10">
              Every component is assembled and finished by hand with
              extraordinary attention to detail. From movement assembly to
              final polishing, every stage reflects our pursuit of perfection
              and enduring excellence.
            </p>

            <button className="border border-[#B08A58] px-8 py-3 uppercase tracking-[3px] text-sm text-[#B08A58] hover:bg-[#B08A58] hover:text-white transition duration-300">
              Explore Craftsmanship
            </button>

          </div>

          {/* Right Image */}

          <div className="overflow-hidden rounded-sm">

            <img
              src={craftsmanImage}
              alt="Craftsmanship"
              className="w-[500px] h-[500px] object-cover hover:scale-105 transition duration-700"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default CraftsmanshipSection;