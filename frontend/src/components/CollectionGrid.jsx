import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import watches from "../data/watches_list.json";

function CollectionGrid() {
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState("");

    // Only use first 50 watches
    const first50Watches = watches.slice(0, 50);

    // Search
    const filteredWatches = first50Watches.filter((watch) => {
        const search = searchTerm.toLowerCase().trim();

        if (!search) {
            return true;
        }

        return (
            watch.reference?.toLowerCase().includes(search) ||
            watch.collection?.toLowerCase().includes(search) ||
            watch.material?.toLowerCase().includes(search)
        );
    });

    return (
        <section className="bg-[#F7F5F2] min-h-screen pt-32 pb-24">

            {/* ================= HEADER ================= */}

            <div className="max-w-4xl mx-auto px-6 text-center">

                <p className="uppercase tracking-[5px] text-[#B08A58] text-sm mb-5">
                    Our Collection
                </p>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-wide text-[#2A2A2A]">
                    Discover Our Timepieces
                </h1>

                <p className="mt-7 max-w-2xl mx-auto text-[#777] text-base sm:text-lg leading-8">
                    Explore a selection of exceptional timepieces crafted with
                    precision, heritage and timeless elegance.
                </p>

                {/* ================= SEARCH ================= */}

                <div className="max-w-xl mx-auto mt-12">

                    <div
                        className="
              flex
              items-center
              border
              border-[#D5C7B6]
              bg-white
              focus-within:border-[#B08A58]
              transition
              duration-300
            "
                    >

                        <FaSearch
                            className="ml-5 text-[#B08A58] flex-shrink-0"
                            size={15}
                        />

                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search by model, collection or material"
                            className="
                w-full
                bg-transparent
                px-4
                py-4
                text-sm
                text-[#444]
                outline-none
                placeholder:text-[#A5A5A5]
              "
                        />

                        {searchTerm && (
                            <button
                                onClick={() => setSearchTerm("")}
                                className="
                  mr-4
                  text-[#999]
                  hover:text-[#B08A58]
                  transition
                "
                                aria-label="Clear search"
                            >
                                ×
                            </button>
                        )}

                    </div>

                </div>

            </div>

            {/* ================= WATCH GRID ================= */}

            <div className="max-w-7xl mx-auto px-6 sm:px-8 mt-20">

                {filteredWatches.length > 0 ? (

                    <div
                        className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-x-6
              gap-y-16
              lg:gap-x-8
              lg:gap-y-20
            "
                    >

                        {filteredWatches.map((watch) => (

                            <article
                                key={watch.reference}
                                onClick={() =>
                                    navigate(
                                        `/collections/${encodeURIComponent(watch.reference)}`
                                    )
                                }
                                className="group text-center cursor-pointer"
                            >

                                {/* Watch Image */}

                                <div
                                    className="relative overflow-hidden bg-[#F7F5F2] aspect-[4/5]"
                                >

                                    <img
                                        src={watch.image}
                                        alt={watch.reference}
                                        loading="lazy"
                                        className=" w-full h-full object-contain p-6 transition-transform duration-700 ease-out group-hover:scale-105 "
                                    />

                                </div>

                                {/* Watch Information */}

                                <div className="pt-6">

                                    <p
                                        className=" uppercase tracking-[3px] text-[#B08A58] text-xs mb-3 "
                                    >
                                        {watch.collection}
                                    </p>

                                    <h2
                                        className=" text-2xl sm:text-3xl font-light tracking-wide text-[#2A2A2A] group-hover:text-[#B08A58] transition-colors duration "
                                    >
                                        {watch.reference}
                                    </h2>

                                    <p className="mt-3 text-sm text-[#777]">
                                        {watch.material}
                                    </p>

                                </div>

                            </article>

                        ))}

                    </div>

                ) : (

                    /* ================= NO RESULTS ================= */

                    <div className="py-28 text-center">

                        <p className="uppercase tracking-[4px] text-[#B08A58] text-xs mb-4">
                            No Results
                        </p>

                        <h2 className="text-3xl sm:text-4xl font-light text-[#2A2A2A]">
                            No Timepieces Found
                        </h2>

                        <p className="mt-5 text-[#777]">
                            We couldn't find a timepiece matching "{searchTerm}".
                        </p>

                        <button
                            onClick={() => setSearchTerm("")}
                            className=" mt-8 border border-[#B08A58] px-8 py-3 text-sm uppercase tracking-[2px] text-[#B08A58] hover:bg-[#B08A58] hover:text-white transition "
                        >
                            View All Timepieces
                        </button>

                    </div>

                )}

                {/* ================= RESULT COUNT ================= */}

                {!searchTerm && (
                    <div className="text-center mt-24">

                        <p className="text-sm uppercase tracking-[4px] text-[#B08A58]">
                            Showing
                        </p>

                        <p className="mt-3 text-2xl font-light text-[#2A2A2A]">
                            50 Timepieces
                        </p>

                    </div>
                )}

            </div>

        </section>
    );
}

export default CollectionGrid;