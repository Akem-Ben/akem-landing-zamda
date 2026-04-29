
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/NavBar";
import ZamAISection from "../../components/zamdamobile/ZamdaAi";
import ZamdaApp from "../../components/zamdamobile/ZamdaApp";
import ZamdaFeatures from "../../components/zamdamobile/ZamdaFeatures";
import ZamdaHero from "../../components/zamdamobile/ZamdaHero";
import ZamdaWorks from "../../components/zamdamobile/ZamdaWorks";

function ZamMobile() {
  return (
    <div>
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

export default ZamMobile;
