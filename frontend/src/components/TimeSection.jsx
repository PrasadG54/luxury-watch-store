import serviceTime from "../assets/images/service-time.avif";

function TimeSection() {
  return (
    <section className="bg-[#F7F5F2] py-24">

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Image */}

          <div>

            <img
              src={serviceTime}
              alt="Luxury Watch Servicing"
              className="w-full h-[650px] object-cover"
            />

          </div>

          {/* Right Content */}

          <div>

            <p className="uppercase tracking-[4px] text-[#B08A58] text-sm mb-4">
              Precision Requires Patience
            </p>

            <h2 className="text-5xl font-light text-[#2A2A2A] leading-tight mb-8">

              The Time
              <br />
              It Takes

            </h2>

            <p className="text-[#5E5E5E] text-lg leading-9 mb-6">

              Every luxury timepiece deserves the time and care
              required to preserve its exceptional performance.
              Each movement is carefully dismantled, cleaned,
              inspected and reassembled by skilled specialists.

            </p>

            <p className="text-[#5E5E5E] text-lg leading-9">

              Final testing ensures every watch meets the highest
              standards of precision before it is returned to its owner.
              Excellence cannot be rushed.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default TimeSection;