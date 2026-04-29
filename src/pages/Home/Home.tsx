
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

function Home() {
  // const { theme, toggleTheme } = useTheme();
  // const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Navbar />
      <HeroCarousel />
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


export default Home;
