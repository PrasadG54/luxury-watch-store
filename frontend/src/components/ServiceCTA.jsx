import { Link } from "react-router-dom";

function ServiceCTA() {
  return (
    <section className="bg-[#F7F5F2] py-28">

      <div className="max-w-6xl mx-auto px-8 text-center">

        <p className="uppercase tracking-[5px] text-[#B08A58] text-sm mb-5">
          Luxury Watch Care
        </p>

        <h2 className="text-5xl font-light text-[#2A2A2A] leading-tight mb-8">

          Entrust Your
          <br />
          Timepiece
          <br />
          to Our Specialists

        </h2>

        <p className="max-w-3xl mx-auto text-[#5E5E5E] text-lg leading-9 mb-14">

          Whether your watch requires routine maintenance,
          expert servicing or professional advice,
          our certified specialists are here to preserve
          its beauty and precision for generations.

        </p>

        <div className="flex flex-wrap justify-center gap-6">

          <Link
            to="/points-of-sale"
            className="border border-[#B08A58] text-[#B08A58]
            px-10 py-4 uppercase tracking-[3px]
            hover:bg-[#B08A58]
            hover:text-white
            transition duration-300"
          >
            Points of Sale
          </Link>

          <Link
            to="/points-of-sale"
            className="bg-[#B08A58] text-white
            px-10 py-4 uppercase tracking-[3px]
            hover:bg-[#9C774B]
            transition duration-300"
          >
            Service Centers
          </Link>

        </div>

      </div>

    </section>
  );
}

export default ServiceCTA;