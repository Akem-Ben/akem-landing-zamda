
import Navbar from "../../components/shared/NavBar";
import ZamHero from "../../components/zampos/Hero";
import FeaturesSection from "../../components/zampos/Features";
import Powered from "../../components/zampos/Powered";
import PricingSection from "../../components/shared/Pricing";
import BookDemoSection from "../../components/shared/BookDemo";
import Footer from "../../components/shared/Footer";
import whatsapp from "../../assets/whatsapp.png";
import ai from "../../assets/ai.png";


function ZamPos() {
  return (
    <div>
      {/* Fixed floating icons */}
      <img src={whatsapp} style={styles.whatsapp} alt="whatsapp" />
      <img src={ai} style={styles.ai} alt="ai" />
      
      <Navbar />
       <ZamHero />
      <FeaturesSection />
      <Powered />
      <PricingSection />
      <BookDemoSection />
      <Footer />
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  whatsapp: {
    position: "fixed",
    width: "55px",
    right: "16px",
    bottom: "80px",
    zIndex: 1000,
    cursor: "pointer",
  },
  ai: {
    position: "fixed",
    width: "55px",
    right: "16px",
    bottom: "16px",
    zIndex: 1000,
    cursor: "pointer",
  },
};

export default ZamPos;

