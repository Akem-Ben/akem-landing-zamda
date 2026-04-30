
import Navbar from "../../components/shared/NavBar";
import AboutSection from "../../components/home/AboutUs";
import WhyChooseUs from "../../components/home/ChooseUs";
import HeroCarousel from "../../components/home/HeroCarousel";
import ProductSection from "../../components/home/Products";
import PricingSection from "../../components/shared/Pricing";
import TestimonialSection from "../../components/home/Testimoials";
import FAQSection from "../../components/home/Faq";
import BookDemoSection from "../../components/shared/BookDemo";
import Footer from "../../components/shared/Footer";
import whatsapp from "../../assets/whatsapp.png";
import ai from "../../assets/ai.png";
import HeroBrands from "../../components/home/HeroBrands";

function Home() {
  // const { theme, toggleTheme } = useTheme();
  // const [showModal, setShowModal] = useState(false);

  return (
    <div>
      {/* Fixed floating icons */}
      <img src={whatsapp} style={styles.whatsapp} alt="whatsapp" />
      <img src={ai} style={styles.ai} alt="ai" />
      
      <Navbar />
       <HeroCarousel />
      <HeroBrands />
      <ProductSection />
      <AboutSection />
      <WhyChooseUs />
      <PricingSection />
      <TestimonialSection />
      <FAQSection/>
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

export default Home;
