import Navbar from "../../components/shared/NavBar";
import HearFromYou from "../../components/contact/HearFromYou";
import ChatUs from "../../components/contact/ChatUs";
import FindUs from "../../components/contact/FindUs";
import MessageUs from "../../components/contact/MessageUs";
import Footer from "../../components/shared/Footer";

function Contact() {
  return (
    <div>
      <Navbar />
      <HearFromYou />
      <ChatUs />
      <FindUs />
      <MessageUs />
      <Footer />
    </div>
  );
}

export default Contact;
