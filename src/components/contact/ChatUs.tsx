import React, { useEffect, useState } from "react";
import phone from "../../assets/phone.png";
import email from "../../assets/email.png";
import location from "../../assets/location.png";
import whatsappBanner from "../../assets/whatsapp-3.png";
import whatsappBtn from "../../assets/whatsapp-2.png";

const ChatUs: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
   const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const checkMobile = () => {
      setScreenWidth(window.innerWidth);
      setIsMobile(window.innerWidth < 768)
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

    // const mobile = screenWidth <= 768;
  const isTablet = screenWidth > 768 && screenWidth <= 1024;

  return (
    <section style={{...styles.wrapper, 
padding: isTablet ? "15px 20px" : "15px 80px",
    }}>
      <div style={{
        ...styles.cards,
        ...(isMobile && styles.cardsMobile)
      }}>
        {data.map((item, i) => (
          <div key={i} style={{ ...styles.card, background: item.bg }}>
            <div style={styles.iconWrapper}>
              <img src={item.icon} style={styles.icon} alt={item.title} />
            </div>
            <p style={styles.title}>{item.title}</p>
            <p style={isMobile ? styles.textMobile : styles.text}>{item.text}</p>
          </div>
        ))}
      </div>

      <div style={isMobile ? styles.bannerMobile : styles.banner}>
        <div style={isMobile ? styles.leftMobile : styles.left}>
          <div style={styles.iconBox}>
            <img src={whatsappBanner} style={styles.whatsappIcon} alt="whatsapp" />
          </div>
          <div style={styles.textWrap}>
            <h3 style={isMobile ? styles.bannerTitleMobile : styles.bannerTitle}>
              Chat with us on WhatsApp
            </h3>
            <p style={isMobile ? styles.bannerTextMobile : styles.bannerText}>
              Get instant replies — no waiting on hold. Our team responds fast!
            </p>
          </div>
        </div>

        <a
          href="https://wa.me/2348100521930"
          style={isMobile ? styles.buttonMobile : styles.button}
        >
          <img src={whatsappBtn} style={styles.buttonIcon} alt="whatsapp btn" />
          <span style={styles.buttonText}>Start WhatsApp chat</span>
        </a>
      </div>
    </section>
  );
};

export default ChatUs;

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    padding: "40px 20px",
    background: "#F9F9FA",
  },
  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    marginBottom: "30px",
  },
  cardsMobile: {
    gridTemplateColumns: "1fr",
    gap: "16px",
  },
  card: {
    borderRadius: "16px",
    textAlign: "center",
    padding: "20px",
  },
  iconWrapper: {
    width: "48px",
    height: "48px",
    borderRadius: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 14px",
    background: "#fff",
    boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
  },
  icon: {
    width: "28px",
    height: "28px",
  },
  title: {
    fontSize: "14px",
    marginBottom: "6px",
    color: "#666",
    fontWeight: 500,
  },
  text: {
    fontSize: "16px",
    color: "#141414",
    fontWeight: 600,
  },
  textMobile: {
    fontSize: "14px",
    color: "#141414",
    fontWeight: 600,
    wordBreak: "break-word",
  },
  banner: {
    background: "linear-gradient(135deg, #2E2A8F 0%, #201E82 100%)",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    padding: "24px 32px",
  },
  bannerMobile: {
    background: "linear-gradient(135deg, #2E2A8F 0%, #201E82 100%)",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "40px",
    padding: "20px",
  },
  left: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    flex: 1,
  },
  leftMobile: {
    display: "flex",
    alignItems: "flex-start",
    gap: "12px",
    width: "100%",
  },
  iconBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  whatsappIcon: {
    width: "48px",
    height: "48px",
  },
  textWrap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    textAlign: "left",
  },
  bannerTitle: {
    margin: 0,
    fontSize: "18px",
    fontWeight: 600,
    color: "#fff",
  },
  bannerTitleMobile: {
    margin: 0,
    fontSize: "16px",
    fontWeight: 600,
    color: "#fff",
  },
  bannerText: {
    fontSize: "14px",
    margin: "4px 0 0",
    color: "#B8FFF8",
  },
  bannerTextMobile: {
    fontSize: "12px",
    margin: "4px 0 0",
    color: "#B8FFF8",
  },
  button: {
    background: "#fff",
    padding: "12px 28px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    textDecoration: "none",
    whiteSpace: "nowrap",
  },
  buttonMobile: {
    background: "#fff",
    padding: "10px 20px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    textDecoration: "none",
    width: "100%",
  },
  buttonIcon: {
    width: "18px",
    height: "18px",
  },
  buttonText: {
    color: "#047A30",
    fontSize: "14px",
    fontWeight: 600,
  },
};

const data = [
  { title: "Call us", text: "+234 8100521930", icon: phone, bg: "#F0FDF4" },
  { title: "Email us", text: "admin@zamdahealth.com", icon: email, bg: "#F5F3FF" },
  { title: "Visit us", text: "i268 road 5, Ikota Shopping Complex, VGC, Lagos", icon: location, bg: "#FFFBEB" },
];