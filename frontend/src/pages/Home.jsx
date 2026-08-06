import Hero from "../components/Home";
import SecondHero from "../components/SecondHero";
import ManufactureSection from "../components/ManufactureSection";
import CraftsmanshipSection from "../components/CraftsmanshipSection";
import CollectionsBanner from "../components/CollectionsBanner";
import CommitmentSection from "../components/CommitmentSection";
import BoutiqueSection from "../components/BoutiqueSection";
import HomeContent from "../components/Home";
import Footer from "../components/Footer";

function HomePage() {
    return (
        <>
            <Hero />
            <SecondHero />
            <ManufactureSection />
            <CraftsmanshipSection />
            <CollectionsBanner />
            <CommitmentSection />
            <BoutiqueSection />
            <Footer />
        </>
    );
}

export default HomePage;