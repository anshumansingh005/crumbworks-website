import Banner from "./components/Banner";
import FAQ from "./components/FAQ";
import FeatureBanner from "./components/FeatureBanner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductDisplay from "./components/ProductPage";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <FeatureBanner />
      <ProductDisplay />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
