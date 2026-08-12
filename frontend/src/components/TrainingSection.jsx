import trainingVideo from "../assets/videos/training-watchmaker.mp4";

function TrainingSection() {
  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}

          <div>

            <p className="uppercase tracking-[4px] text-[#B08A58] text-sm mb-4">
              Expert Craftsmanship
            </p>

            <h2 className="text-5xl font-light text-[#2A2A2A] leading-tight mb-8">

              Training
              <br />
              Watchmakers

            </h2>

            <p className="text-[#5E5E5E] text-lg leading-9 mb-6">

              Every luxury timepiece is entrusted to certified
              watchmakers who undergo years of specialized training.
              Their expertise ensures every movement is restored
              with exceptional precision.

            </p>

            <p className="text-[#5E5E5E] text-lg leading-9">

              Combining traditional craftsmanship with modern
              technology, they preserve the beauty and accuracy
              of every masterpiece.

            </p>

          </div>

          {/* Right */}

          <div>

            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[650px] object-cover"
            >

              <source
                src={trainingVideo}
                type="video/mp4"
              />

            </video>

          </div>

        </div>

      </div>

    </section>
  );
}

export default TrainingSection;