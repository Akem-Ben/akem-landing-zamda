
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/NavBar";
import ZamAISection from "../../components/zamdamobile/ZamdaAi";
import ZamdaApp from "../../components/zamdamobile/ZamdaApp";
import ZamdaFeatures from "../../components/zamdamobile/ZamdaFeatures";
import ZamdaHero from "../../components/zamdamobile/ZamdaHero";
import ZamdaWorks from "../../components/zamdamobile/ZamdaWorks";
import whatsapp from "../../assets/whatsapp.png";

function ZamMobile() {
  return (
    <div>
      {/* Fixed floating icons */}
      <img src={whatsapp} style={styles.whatsapp} alt="whatsapp" />
      
      <Navbar />
      <ZamdaHero />
       <ZamdaFeatures />
      <ZamAISection />
      <ZamdaWorks />
      <ZamdaApp />
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

export default ZamMobile;
