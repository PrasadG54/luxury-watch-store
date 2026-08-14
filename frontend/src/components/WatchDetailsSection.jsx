import { Link } from "react-router-dom";

function WatchDetailsSection({ watch }) {
  if (!watch) {
    return (
      <main className="min-h-screen bg-[#F7F5F2] flex items-center justify-center px-6">
        <div className="text-center">

          <p className="text-[#B08A58] uppercase tracking-[4px] text-sm mb-4">
            Timepiece Not Found
          </p>

          <h1 className="text-4xl font-light text-[#2A2A2A] mb-6">
            Watch Not Found
          </h1>

          <p className="text-gray-600 mb-8">
            The requested timepiece could not be found in our collection.
          </p>

          <Link
            to="/collections"
            className="
              inline-block
              border
              border-[#B08A58]
              px-8
              py-3
              text-sm
              tracking-[2px]
              uppercase
              text-[#8F7658]
              hover:bg-[#B08A58]
              hover:text-white
              transition
            "
          >
            Back to Collection
          </Link>

        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#F7F5F2] text-[#292929]">

      {/* =====================================================
          WATCH INTRODUCTION
      ===================================================== */}

      <section className="pt-32 md:pt-40 pb-20">

        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* WATCH IMAGE */}

            <div className=" bg-[#F7F5F2] flex items-center justify-center p-8 md:p-12 ">

              <img
                src={watch.image}
                alt={watch.reference}
                className=" w-full max-w-[650px] max-h-[650px] h-auto object-contain mix-blend-multiply transition-transform duration-700 hover:scale-105 "
              />

            </div>


            {/* WATCH INFORMATION */}

            <div className="text-center lg:text-left">

              <p className="
                text-[#A88D6A]
                text-sm
                tracking-[4px]
                uppercase
                mb-5
              ">
                {watch.collection}
              </p>

              <h1 className="
                text-4xl
                md:text-5xl
                lg:text-6xl
                font-light
                tracking-[2px]
                mb-4
              ">
                {watch.name}
              </h1>

              <p className="
                text-xl
                md:text-2xl
                text-[#A88D6A]
                font-light
                mb-8
              ">
                {watch.reference}
              </p>

              <div className="
                w-16
                h-[1px]
                bg-[#B7A48D]
                mb-8
                mx-auto
                lg:mx-0
              " />

              {watch.description && (
                <p className="
                  text-gray-700
                  leading-8
                  text-base
                  md:text-lg
                  max-w-xl
                ">
                  {watch.description}
                </p>
              )}

              {/* Material + Movement */}

              <div className="
                mt-8
                flex
                flex-wrap
                gap-3
                justify-center
                lg:justify-start
              ">

                {watch.material && (
                  <span className="
                    px-5
                    py-2
                    border
                    border-[#D5C9BB]
                    text-sm
                    text-[#777]
                  ">
                    {watch.material}
                  </span>
                )}

                {watch.movement && (
                  <span className="
                    px-5
                    py-2
                    border
                    border-[#D5C9BB]
                    text-sm
                    text-[#777]
                  ">
                    {watch.movement}
                  </span>
                )}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MARKETING / CRAFT SECTION
      ===================================================== */}

      <section className="bg-white py-20 md:py-28 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <p className="
            text-[#A88D6A]
            text-sm
            tracking-[4px]
            uppercase
            mb-5
          ">
            Our Craft
          </p>

          <h2 className="
            text-3xl
            md:text-4xl
            font-light
            tracking-[2px]
          ">
            Crafted for Excellence
          </h2>

          {watch.marketingTitle && (
            <p className="
              mt-7
              text-[#555]
              text-lg
              md:text-xl
              leading-8
              font-light
            ">
              {watch.marketingTitle}
            </p>
          )}

          {watch.description && (
            <p className="
              mt-6
              text-gray-600
              leading-8
              max-w-3xl
              mx-auto
            ">
              {watch.description}
            </p>
          )}

        </div>

      </section>


      {/* =====================================================
          TECHNICAL SPECIFICATIONS
      ===================================================== */}

      <section className="
        max-w-[1400px]
        mx-auto
        px-6
        md:px-10
        py-20
        md:py-28
      ">

        <div className="text-center mb-14">

          <p className="
            text-[#A88D6A]
            text-sm
            md:text-base
            tracking-[4px]
            uppercase
            mb-4
          ">
            Technical Specifications
          </p>

          <h2 className="
            text-3xl
            md:text-4xl
            font-light
          ">
            The Details
          </h2>

        </div>


        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-x-16
        ">

          {/* Movement */}

          <Specification
            label="Movement"
            value={watch.movement}
          />


          {/* Power Reserve */}

          <Specification
            label="Power Reserve"
            value={watch.powerReserve}
          />


          {/* Frequency */}

          <Specification
            label="Frequency"
            value={watch.frequency}
          />


          {/* Balance */}

          <Specification
            label="Balance"
            value={watch.balanceWheel}
          />


          {/* Case Diameter */}

          <Specification
            label="Case Diameter"
            value={watch.caseDiameter}
          />


          {/* Case Thickness */}

          <Specification
            label="Case Thickness"
            value={watch.caseThickness}
          />


          {/* Water Resistance */}

          <Specification
            label="Water Resistance"
            value={watch.waterResistance}
          />


          {/* Material */}

          <Specification
            label="Material"
            value={watch.material}
          />


          {/* Strap */}

          <div className="
            border-t
            border-b
            border-[#D8D1C8]
            text-xl
            py-6
            flex
            justify-between
            gap-6
            md:col-span-2
          ">

            <span className="text-gray-500">
              Strap
            </span>

            <span className="text-right max-w-lg">
              {watch.strap || "—"}
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
          WATCHMAKING SECTION
      ===================================================== */}

      <section className="
        bg-[#2D2A27]
        text-white
        py-20
        md:py-28
        px-6
      ">

        <div className="
          max-w-5xl
          mx-auto
          text-center
        ">

          <p className="
            uppercase
            tracking-[5px]
            text-[#C2A47D]
            text-xs
            md:text-sm
          ">
            Watchmaking
          </p>

          <h2 className="
            mt-5
            text-3xl
            md:text-5xl
            font-light
          ">
            Precision Behind Every Second
          </h2>

          <p className="
            mt-8
            max-w-3xl
            mx-auto
            text-gray-300
            leading-8
            md:leading-9
            text-base
            md:text-lg
          ">
            Every component of a fine timepiece is designed with
            purpose. From the movement to the case and finishing,
            each detail contributes to the character and precision
            of the watch.
          </p>

        </div>

      </section>


      {/* =====================================================
          BOOK AN APPOINTMENT
      ===================================================== */}

      <section className="
        py-24
        md:py-32
        px-6
        text-center
        bg-[#F7F5F2]
      ">

        <div className="max-w-3xl mx-auto">

          <p className="
            text-[#A88D6A]
            text-sm
            tracking-[4px]
            uppercase
            mb-5
          ">
            Experience Our Collection
          </p>

          <h2 className="
            text-3xl
            md:text-4xl
            font-light
            mb-6
          ">
            Discover Your Timepiece
          </h2>

          <p className="
            max-w-2xl
            mx-auto
            text-gray-600
            leading-7
            mb-10
          ">
            Visit one of our points of sale and experience this
            exceptional timepiece in person with our specialists.
          </p>

          <Link
            to="/point-of-sale"
            className="
              inline-block
              bg-[#A08C76]
              text-white
              px-10
              py-4
              tracking-[2px]
              text-sm
              uppercase
              hover:bg-[#8D7963]
              transition
              duration-300
            "
          >
            Book an Appointment
          </Link>

        </div>

      </section>


      {/* =====================================================
          BACK TO COLLECTION
      ===================================================== */}

      <section className="
        pb-20
        text-center
        bg-[#F7F5F2]
      ">

        <Link
          to="/collections"
          className="
            text-[#8F7658]
            tracking-[2px]
            text-sm
            uppercase
            border-b
            border-[#A88D6A]
            pb-2
            hover:text-[#5F4D3A]
            transition
          "
        >
          ← Back to Our Collection
        </Link>

      </section>

    </main>
  );
}


/* =====================================================
   SPECIFICATION COMPONENT
===================================================== */

function Specification({ label, value }) {

  if (!value) {
    return null;
  }

  return (
    <div className="
      border-t
      border-[#D8D1C8]
      text-xl
      py-6
      flex
      justify-between
      gap-6
    ">

      <span className="text-gray-500">
        {label}
      </span>

      <span className="text-right">
        {value}
      </span>

    </div>
  );
}


export default WatchDetailsSection;