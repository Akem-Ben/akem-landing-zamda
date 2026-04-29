
import Navbar from "../../components/shared/NavBar";
// import ZamHero from "../../components/zampos/Hero";
// import FeaturesSection from "../../components/zampos/Features";
// import Powered from "../../components/zampos/Powered";
import PricingSection from "../../components/shared/Pricing";
import BookDemoSection from "../../components/shared/BookDemo";
import Footer from "../../components/shared/Footer";


function ZamPos() {
  return (
    <div>
      <Navbar />
      {/* <ZamHero />
      <FeaturesSection />
      <Powered /> */}
      <PricingSection />
      <BookDemoSection />
      <Footer />
    </div>
  );
}

export default ZamPos;

