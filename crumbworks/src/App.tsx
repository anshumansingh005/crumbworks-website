import React from "react";
import Banner from "./components/Banner";
import FAQ from "./components/FAQ";
import FeatureBanner from "./components/FeatureBanner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import OurStory from "./components/OurStory";
import ProductDisplay from "./components/ProductPage";
import Reviews from "./components/Reviews";
import TopMarquee from "./components/TopMarquee";
import VideoReview from "./components/VideoReview";
import WhatsAppButton from "./components/WhatsAppButton";

function App(): React.ReactElement {
  return (
    <>
      <TopMarquee />
      <Navbar />
      <Banner />
      <FeatureBanner />
      <ProductDisplay />
      <VideoReview />
      <Reviews />
      <OurStory />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
