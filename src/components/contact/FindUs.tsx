import React, { useEffect, useState } from "react";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram-2.png";
import twitter from "../../assets/twitter-2.png";
import tiktok from "../../assets/tiktok-2.png";
import linkedin from "../../assets/linkedin.png";
import youtube from "../../assets/youtube.png";

const FindUs: React.FC = () => {
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

  const isTablet = screenWidth > 768 && screenWidth <= 1024;

  return (
    <section style={{...styles.container, padding: isTablet ? "15px 20px" : "15px 80px",}}>
      <span style={styles.top}>Follow and Connect</span>
      <h2 style={isMobile ? styles.headingMobile : styles.heading}>Find Us on Social Media</h2>
      <p style={isMobile ? styles.subMobile : styles.sub}>
        Stay up to date with news, product updates, health tips and more across all our channels.
      </p>

      <div style={{
        ...styles.grid,
        ...(isMobile && styles.gridMobile)
      }}>
        {socials.map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            style={isMobile ? styles.cardMobile : styles.card}
          >
            <img src={item.icon} style={isMobile ? styles.iconMobile : styles.icon} alt={item.name} />
            {!isMobile && (
              <>
                <p style={styles.name}>{item.name}</p>
                <span style={styles.handle}>{item.handle}</span>
              </>
            )}
          </a>
        ))}
      </div>
    </section>
  );
};

export default FindUs;

const socials = [
  { name: "Facebook", handle: "@Zamdahealth", icon: facebook, bg: "#EFF6FF", link: "https://facebook.com/Zamdahealth" },
  { name: "Instagram", handle: "@zamdahealth", icon: instagram, bg: "#FFF0F6", link: "https://instagram.com/zamdahealth" },
  { name: "Twitter/X", handle: "@zamdahealth1", icon: twitter, bg: "#EEEEEE", link: "https://twitter.com/zamdahealth1" },
  { name: "TikTok", handle: "@Zamdahealth5", icon: tiktok, bg: "#EEEEEE", link: "https://tiktok.com/@Zamdahealth5" },
  { name: "LinkedIn", handle: "Zamdahealth", icon: linkedin, bg: "#EFF6FF", link: "https://linkedin.com/company/zamdahealth" },
  { name: "YouTube", handle: "Zamdahealth", icon: youtube, bg: "#FFF5F5", link: "https://youtube.com/@zamdahealth" },
];

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: "60px 20px",
    textAlign: "center",
    background: "#F9F9FA",
  },
  top: {
    display: "inline-block",
    padding: "6px 14px",
    background: "#ECFFFE",
    color: "#201E82",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: 500,
    marginBottom: "15px",
  },
  heading: {
    fontSize: "32px",
    fontWeight: 600,
    color: "#141414",
    margin: "10px 0",
  },
  headingMobile: {
    fontSize: "24px",
    fontWeight: 600,
    color: "#141414",
    margin: "10px 0",
  },
  sub: {
    color: "#666",
    maxWidth: "600px",
    margin: "0 auto 40px",
    fontSize: "15px",
  },
  subMobile: {
    color: "#666",
    maxWidth: "600px",
    margin: "0 auto 30px",
    fontSize: "13px",
    padding: "0 16px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    gap: "18px",
  },
  gridMobile: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "12px",
  },
  card: {
    borderRadius: "12px",
    textAlign: "center",
    textDecoration: "none",
    padding: "20px 12px",
    background: "#fff",
  },
  cardMobile: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "44px",
    height: "44px",
    borderRadius: "12px",
    background: "#fff",
    textDecoration: "none",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },
  icon: {
    width: "34px",
    marginBottom: "8px",
  },
  iconMobile: {
    width: "22px",
    height: "22px",
  },
  name: {
    fontWeight: 600,
    marginBottom: "4px",
    color: "#141414",
    fontSize: "13px",
  },
  handle: {
    fontSize: "11px",
    color: "#616161",
  },
};