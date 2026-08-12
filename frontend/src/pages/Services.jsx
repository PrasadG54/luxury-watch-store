import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ServiceHero from "../components/ServiceHero";
import CommitmentSection from "../components/CommitmentSection";
import RelationshipSection from "../components/RelationshipSection";
import TrainingSection from "../components/TrainingSection";
import TimeSection from "../components/TimeSection";
import ServiceCTA from "../components/ServiceCTA";

function Services() {
  return (
    <>
      <Navbar />

      <ServiceHero />
      <CommitmentSection />
      <RelationshipSection />
      <TrainingSection />
      <TimeSection />
      <ServiceCTA />

      <Footer />
    </>
  );
}

export default Services;