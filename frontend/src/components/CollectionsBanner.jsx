import collectionsBanner from "../assets/images/collection-banner.avif";

function CollectionsBanner() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background Image */}

      <img
        src={collectionsBanner}
        alt="Luxury Collection"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/35"></div>

      {/* Content */}

      <div className="relative z-10 h-full flex items-center justify-center">

        <div className="text-center text-white px-6">

          <p className="uppercase tracking-[6px] text-sm mb-6 text-[#D9BE8A]">
            Discover Excellence
          </p>

          <h2 className="text-3xl lg:text-5xl font-light tracking-wide leading-tight">
            OUR
            <br />
            COLLECTIONS
          </h2>

          <p className="mt-8 max-w-xl mx-auto text-l text-gray-200 leading-8">
            Explore a curated collection of exceptional timepieces,
            where timeless elegance meets modern craftsmanship.
          </p>

          <button
            className="
              mt-12
              px-10
              py-4
              border
              border-white
              uppercase
              tracking-[4px]
              text-sm
              hover:bg-white
              hover:text-black
              transition-all
              duration-300
            "
          >
            Discover Collection
          </button>

        </div>

      </div>

    </section>
  );
}

export default CollectionsBanner;