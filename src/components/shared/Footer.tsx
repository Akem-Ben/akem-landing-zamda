import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo-2.png";

import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import tiktok from "../../assets/tiktok.png";
import linkedin from "../../assets/linkedin.png";
import youtube from "../../assets/youtube.png";
import facebook from "../../assets/facebook.png";

const Footer: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* TOP SECTION */}
        <div
          style={{
            ...styles.top,
            flexDirection: isMobile ? "column" : "row",
            alignItems: "flex-start",
            // Adjust justifyContent and gap for desktop to ensure equal spacing between the four columns
            justifyContent: isMobile ? "flex-start" : "space-between",
            gap: isMobile ? "25px" : "0px", // Use 0px for desktop as space-between handles distribution
          }}
        >
          {/* LEFT */}
          <div style={styles.left}>
            <img src={logo} style={styles.logo} />

            <p style={styles.description}>
              Simplifying healthcare for pharmacies and patients with
              innovative technology.
            </p>

            <div style={styles.socials}>
              <a href="https://twitter.com/zamdahealth1" target="_blank" rel="noopener noreferrer">
                <img src={twitter} style={styles.socialIcon} alt="twitter" />
              </a>
              <a href="https://instagram.com/zamdahealth" target="_blank" rel="noopener noreferrer">
                <img src={instagram} style={styles.socialIcon} alt="instagram" />
              </a>
              <a href="https://tiktok.com/@Zamdahealth5" target="_blank" rel="noopener noreferrer">
                <img src={tiktok} style={styles.socialIcon} alt="tiktok" />
              </a>
              <a href="https://linkedin.com/company/zamdahealth" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} style={styles.socialIcon} alt="linkedin" />
              </a>
              <a href="https://youtube.com/@zamdahealth" target="_blank" rel="noopener noreferrer">
                <img src={youtube} style={styles.socialIcon} alt="youtube" />
              </a>
              <a href="https://facebook.com/Zamdahealth" target="_blank" rel="noopener noreferrer">
                <img src={facebook} style={styles.socialIcon} alt="facebook" />
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div style={styles.column}>
            <h4 style={styles.heading}>Product</h4>
            <Link to="/zampos" style={styles.link}>
              ZamPOS
            </Link>
            <Link to="/zammobile" style={styles.link}>
              Zamda Mobile App
            </Link>
            <Link to="/" style={styles.link}>
              Features
            </Link>
          </div>

          {/* Company Column */}
          <div style={styles.column}>
            <h4 style={styles.heading}>Company</h4>
            <Link to="/" style={styles.link}>
              About us
            </Link>
            <Link to="/contact" style={styles.link}>
              Contact us
            </Link>
          </div>

          {/* Contact Info Column */}
          <div style={styles.column}>
            <h4 style={styles.heading}>Contact Info</h4>
            <p style={styles.link}>+234 8100521930</p>
            <p style={styles.link}>admin@zamdahealth.com</p>
            <p style={styles.link}>
              i268 Road 5, Ikota Shopping <br /> Complex, VGC, Lagos
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div style={styles.divider} />

        {/* BOTTOM */}
        <div
          style={{
            ...styles.bottom,
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "flex-start" : "center",
            textAlign: "left",
          }}
        >
          {/* LINKS FIRST ON MOBILE */}
          <div
            style={{
              ...styles.bottomLinks,
              justifyContent: isMobile ? "flex-start" : "flex-end",
              order: isMobile ? 1 : 2,
            }}
          >
            <Link to="/privacy" style={styles.link}>
              Privacy Policy
            </Link>
            <Link to="/terms" style={styles.link}>
              Terms of service
            </Link>
          </div>

          {/* COPY LAST ON MOBILE */}
          <p
            style={{
              ...styles.copy,
              order: isMobile ? 2 : 1,
            }}
          >
            ©2025 Zamda Health. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/* ================= STYLES ================= */

const styles: { [key: string]: React.CSSProperties } = {
  footer: {
    background:
      "linear-gradient(180deg, #020DAC 0%, #1f2a8a 15%, #07062E 60%)",
    color: "#fff",
    padding: "60px 20px 30px",
  },

  container: {
    maxWidth: "1190px",
    margin: "0 auto",
  },

  top: {
    display: "flex",
    flexWrap: "wrap",
    // justifyContent and gap are now handled dynamically in the component
  },

  left: {
    maxWidth: "260px",
  },

  logo: {
    width: "120px",
    marginBottom: "16px",
  },

  description: {
    fontSize: "15px",
    lineHeight: "1.6",
    color: "#ffffffc8",
    marginBottom: "16px",
    maxWidth: "220px",
  },

  socials: {
    display: "flex",
    gap: "10px",
  },

  socialIcon: {
    width: "28px",
    height: "28px",
    cursor: "pointer",
  },

  column: {
    minWidth: "140px",
  },

  heading: {
    fontSize: "16px",
    fontWeight: 700,
    marginBottom: "12px",
    textAlign: "left",
  },

  link: {
    display: "block",
    fontSize: "13px",
    color: "#ffffffc8",
    marginBottom: "20px",
    cursor: "pointer",
    marginTop: "12px",
    textAlign: "left",
    textDecoration: "none",
  },

  divider: {
    height: "1px",
    background: "rgba(255, 255, 255, 0.28)",
    margin: "40px 0 20px",
  },

  bottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "10px",
  },

  copy: {
    fontSize: "13px",
    color: "#FFFFFF",
  },

  bottomLinks: {
    display: "flex",
    gap: "35px",
    fontSize: "13px",
    color: "#FFFFFF",
    cursor: "pointer",
  },
};