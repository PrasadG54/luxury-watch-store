import { Link } from "react-router-dom";
import servicerelationship from "../assets/images/service-relationship.avif";

function RelationshipSection() {
  return (
    <section className="bg-[#F7F5F2] py-24">

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 items-center gap-20">

          {/* Left Image */}

          <div>

            <img
              src={servicerelationship}
              alt="Watch Service"
              className="w-full h-[650px] object-cover"
            />

          </div>

          {/* Right Content */}

          <div>

            <p className="uppercase tracking-[4px] text-[#B08A58] text-sm mb-4">

              Servicing Your Watch

            </p>

            <h2 className="text-5xl font-light text-[#2A2A2A] leading-tight mb-8">

              A Close
              <br />
              Relationship

            </h2>

            <p className="text-[#5E5E5E] leading-9 text-lg mb-10">

              Purchasing a luxury timepiece is only the beginning of a
              lifelong relationship. Our dedicated specialists ensure
              every watch continues to perform with exceptional
              precision through regular inspections, maintenance and
              expert servicing using genuine parts and traditional
              craftsmanship.

            </p>

            <div className="flex flex-wrap gap-5">

              <Link
                to="/points-of-sale"
                className="border border-[#B08A58] text-[#B08A58] uppercase tracking-[3px] px-8 py-4 hover:bg-[#B08A58] hover:text-white transition"
              >
                Points of Sale
              </Link>

              <Link
                to="/points-of-sale"
                className="bg-[#B08A58] text-white uppercase tracking-[3px] px-8 py-4 hover:bg-[#9C774B] transition"
              >
                Service Centers
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default RelationshipSection;