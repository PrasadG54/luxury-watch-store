import commitmentImage from "../assets/images/commitment.avif";

function CommitmentSection() {
  return (
    <section className="bg-[#F7F5F2] py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Image */}

          <div className="overflow-hidden rounded-sm">
            <img
              src={commitmentImage}
              alt="Commitment"
              className="w-[500px] h-[500px] object-cover transition duration-700 hover:scale-105"
            />
          </div>

          {/* Right Content */}

          <div>

            <p className="uppercase tracking-[6px] text-[#B08A58] text-xs mb-5">
              Commitment to Excellence
            </p>

            <h2 className="text-5xl font-light leading-tight text-[#2A2A2A] mb-8">
              TIMELESS
              <br />
              QUALITY &
              <br />
              PRECISION
            </h2>

            <p className="text-gray-600 leading-8 text-lg mb-10">
              Every luxury timepiece undergoes meticulous inspection before
              leaving our manufacture. From precision engineering to the final
              hand polish, each detail is crafted to meet the highest standards
              of excellence and reliability.
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
                hover:bg-[#B08A58]
                hover:text-white
                transition
                duration-300
              "
            >
              Learn More
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default CommitmentSection;