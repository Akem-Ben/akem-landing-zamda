import React, { useEffect, useState } from "react";
import logo from "../../assets/Logo-2.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/tiktok.png";

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
              <img src={twitter} style={styles.socialIcon} />
              <img src={instagram} style={styles.socialIcon} />
              <img src={linkedin} style={styles.socialIcon} />
            </div>
          </div>

          {/* LINKS */}
          <div
            style={{
              ...styles.linksWrapper,
              flexDirection: isMobile ? "column" : "row",
              gap: isMobile ? "25px" : "60px",
              width: isMobile ? "100%" : "auto",
            }}
          >
            <div style={styles.column}>
              <h4 style={styles.heading}>Product</h4>
              <p style={styles.link}>ZamPOS</p>
              <p style={styles.link}>Zamda Mobile App</p>
              <p style={styles.link}>Features</p>
            </div>

            <div style={styles.column}>
              <h4 style={styles.heading}>Company</h4>
              <p style={styles.link}>About us</p>
              <p style={styles.link}>Contact us</p>
            </div>

            <div style={styles.column}>
              <h4 style={styles.heading}>Contact Info</h4>
              <p style={styles.link}>+234 8100521930</p>
              <p style={styles.link}>admin@zamdahealth.com</p>
              <p style={styles.link}>
                i268 Road 5, Ikota Shopping <br /> Complex, VGC, Lagos
              </p>
            </div>
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
            <span>Privacy Policy</span>
            <span>Terms of service</span>
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
    maxWidth: "1100px",
    margin: "0 auto",
  },

  top: {
    display: "flex",
    justifyContent: "space-between",
    gap: "40px",
    flexWrap: "wrap",
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

  linksWrapper: {
    display: "flex",
    gap: "60px",
    flexWrap: "wrap",
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
    fontSize: "13px",
    color: "#ffffffc8",
    marginBottom: "20px",
    cursor: "pointer",
    marginTop: "12px",
    textAlign: "left",
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