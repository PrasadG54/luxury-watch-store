import secondVideo from "../assets/videos/video1.mp4";

function SecondHero() {
    return (
        <section className="relative h-screen overflow-hidden">

            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
            >
                <source src={secondVideo} type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}

            <div className="relative z-10 flex h-full items-center justify-end">
                <div className="max-w-3xl px-8 md:px-16 lg:px-24 text-right text-white">

                    <h2 className="text-4xl md:text-4xl lg:text-5xl font-light tracking-[0.2em] leading-tight mb-6">
                        CRAFTED <br />
                        TO PERFECTION
                    </h2>

                    <p className="text-base md:text-lg text-gray-200 max-w-lg ml-auto leading-relaxed mb-10">
                        Every detail reflects precision, heritage, and timeless design.
                        Experience watches created to stand the test of time.
                    </p>

                    <button
                        className="bg-[#F5F5F0] text-black px-8 py-3 uppercase tracking-[0.2em] text-sm font-medium rounded-full
                 cursor-pointer transition-colors duration-300
                 hover:bg-[#E8E8E2]"
                    >
                        Discover More
                    </button>

                </div>
            </div>

        </section>
    );
}

export default SecondHero;