import React from "react";
import Banner from "./components/Banner";
import FAQ from "./components/FAQ";
import FeatureBanner from "./components/FeatureBanner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import OurStory from "./components/OurStory";
import ProductDisplay from "./components/ProductPage";
import Reviews from "./components/Reviews";

function App(): React.ReactElement {
  return (
    <>
      <Navbar />
      <Banner />
      <FeatureBanner />
      <ProductDisplay />
      <Reviews />
      <OurStory />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
