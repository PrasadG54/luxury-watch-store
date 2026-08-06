import manufactureImage from "../assets/images/manufacture.jpg";

function ManufactureSection() {
  return (
    <section className="bg-[#F7F5F2] py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Image */}

          <div className="overflow-hidden rounded-sm">
            <img
              src={manufactureImage}
              alt="Luxury Manufacture"
              className="w-[500px] h-[500px] object-cover transition duration-700 hover:scale-105"
            />
          </div>

          {/* Content */}

          <div>

            <span className="uppercase tracking-[6px] text-[#B08A58] text-xs">
              Our Heritage
            </span>

            <h2 className="mt-5 text-5xl leading-tight font-light text-[#262626]">
              CRAFTED FOR
              <br />
              GENERATIONS
            </h2>

            <p className="mt-8 text-gray-600 leading-8 text-lg">
              Every watch begins with a vision and is brought to life by
              master artisans who combine traditional craftsmanship with
              modern precision. Every detail is carefully refined to create
              a timeless masterpiece that can be treasured for generations.
            </p>

            <button
              className="
                mt-10
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
              Discover More
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ManufactureSection;