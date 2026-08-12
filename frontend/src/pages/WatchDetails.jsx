import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WatchDetailsSection from "../components/WatchDetailsSection";
import watches from "../data/watch_details_50.json";

function WatchDetails() {
  const { reference } = useParams();

  const watch = watches.find(
    (item) => item.reference === reference
  );

  return (
    <>
      <Navbar light={true} />

      <WatchDetailsSection watch={watch} />

      <Footer />
    </>
  );
}

export default WatchDetails;