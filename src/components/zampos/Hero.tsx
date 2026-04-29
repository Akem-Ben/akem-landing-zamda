import React, { useEffect, useState } from "react";
import heroImage from "../../assets/hero-image.png";
import whatsappIcon from "../../assets/whatsapp.png";
import aiIcon from "../../assets/ai.png";

const ZamHero: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section style={styles.section}>
      <div
        style={{
          ...styles.container,
          padding: isMobile ? "40px 20px 0" : "70px 20px 0",

          // ✅ FIX: only bottom corners rounded
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderBottomLeftRadius: isMobile ? "30px" : "50px",
          borderBottomRightRadius: isMobile ? "30px" : "50px",
        }}
      >
        {/* TEXT */}
        <h1
          style={{
            ...styles.title,
            fontSize: isMobile ? "28px" : "40px",
          }}
        >
          Complete Pharmacy <br /> Management System
        </h1>

        <p
          style={{
            ...styles.subtitle,
            padding: isMobile ? "0 10px" : "0",
          }}
        >
          Powerful point-of-sale system designed for modern pharmacies. Manage
          sales,<br /> inventory, suppliers, and analytics all in one place. Streamline
          your pharmacy<br /> operations with intelligent automation and real-time
          insights.
        </p>

        <button style={styles.button}>Request Demo</button>

        {/* IMAGE */}
        <div style={styles.imageWrapper}>
          <img src={heroImage} style={styles.image} />
        </div>

        {/* FLOATING BUTTONS */}
        <div style={styles.floatingContainer}>
          <div style={styles.whatsapp}>
            <img src={whatsappIcon} style={styles.floatIcon} />
          </div>

          <div style={styles.ai}>
            <img src={aiIcon} style={styles.floatIcon} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZamHero;

/* ================= STYLES ================= */

const styles: any = {
  section: {
    background: "linear-gradient(180deg, #E9E9F7 0%, #ffffff 100%)",
    display: "flex",
    justifyContent: "center",
  },

  container: {
    maxWidth: "100%",
    width: "100%",
    textAlign: "center",
    background: "linear-gradient(360deg, #D0D1FE 0%, #F3F2FE 100%)",
    overflow: "hidden",
    position: "relative",
  },

  title: {
    fontWeight: 600,
    lineHeight: "1.2",
    color: "#141414",
  },

  subtitle: {
    fontSize: "14px",
    color: "#616161",
    maxWidth: "600px",
    margin: "16px auto 24px",
    lineHeight: "1.6",
  },

  button: {
    padding: "14px 35px",
    background: "#201E82",
    color: "#fff",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "12px",
    fontWeight: 400,
  },

  imageWrapper: {
    marginTop: "50px",
    display: "flex",
    justifyContent: "center",
  },

  image: {
    width: "90%",
    maxWidth: "750px",
    borderRadius: "20px",
  },

  floatingContainer: {
    position: "absolute",
    right: "20px",
    top: "70%",
    transform: "translateY(-50%)",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  whatsapp: {
    width: "50px",
    height: "50px",
    background: "#25D366",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
  },

  ai: {
    width: "50px",
    height: "50px",
    background: "#1f2a8a",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
  },

  floatIcon: {
    width: "45px",
  },
};