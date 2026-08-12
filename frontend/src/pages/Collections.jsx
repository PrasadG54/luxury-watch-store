import Navbar from "../components/Navbar";
import CollectionGrid from "../components/CollectionGrid";
import Footer from "../components/Footer";

function CollectionsPage() {
  return (
    <>
      <Navbar light />

      <main>
        <CollectionGrid />
      </main>

      <Footer />
    </>
  );
}

export default CollectionsPage;