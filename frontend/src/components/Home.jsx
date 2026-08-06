import heroVideo from "../assets/videos/video2.mp4";

function Hero() {
    return (
        <section className="relative h-screen overflow-hidden">

            {/* Background Video */}

            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src={heroVideo} type="video/mp4" />
            </video>

            {/* Dark Overlay */}

            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}

            <div className="relative z-10 flex h-full items-center">
                <div className="max-w-5xl px-8 md:px-16 lg:px-24 text-white">

                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-light tracking-[0.2em] leading-tight mb-6">
                        TIMELESS LUXURY
                    </h1>

                    <p className="text-base md:text-lg text-gray-200 max-w-lg leading-relaxed mb-10">
                        Experience exceptional craftsmanship and timeless elegance.
                        Discover luxury watches designed to inspire generations.
                    </p>

                    <button
                        className=" bg-[#F5F5F0] text-black px-8 py-3 uppercase tracking-[0.2em] text-sm font-medium rounded-full transition-colors duration-300 hover:bg-[#E8E8E0] cursor-pointer"
                    >
                        Explore Collection
                    </button>

                </div>
            </div>

        </section>
    );

}



export default Hero;