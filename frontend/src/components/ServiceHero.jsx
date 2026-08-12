import serviceheroimage from "../assets/images/service-hero.avif";

function ServiceHero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background */}

      <img
        src={serviceheroimage}
        alt="Luxury Watch Service"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/35"></div>

      {/* Content */}

      <div className="relative z-10 flex h-full items-center justify-center text-center">

        <div>

          <p className="uppercase tracking-[5px] text-[#D8C29D] text-sm mb-5">
            Services
          </p>

          <h1 className="text-white text-6xl font-light leading-tight tracking-wide">

            Exceptional Care
            <br />
            for
            <br />
            Exceptional Timepieces

          </h1>

          <p className="text-gray-200 mt-8 text-lg leading-8 max-w-2xl mx-auto">

            Preserving craftsmanship,
            precision and beauty through
            expert maintenance for every
            generation.

          </p>


        </div>

      </div>

    </section>
  );
}

export default ServiceHero;