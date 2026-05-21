import React, { useEffect, useState } from "react";
import heroImage from "../../assets/hero-image.png";

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
          padding: isMobile ? "90px 20px 40px" : "90px 20px 0",
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderRadius: isMobile ? "0 0 55px 55px" : "0 0 72px 72px",
        }}
      >
        {/* TEXT */}
        <h1
          style={{
            ...styles.title,
            fontSize: isMobile ? "28px" : "40px",
          }}
        >
          Complete <span style={{ color: isMobile ? "#201E82" : "#141414", fontWeight: 400 }}>Pharmacy</span> <br />
          <span style={{ color: isMobile ? "#201E82" : "#141414", fontWeight: 400 }}>Management</span> System
        </h1>

        <p
          style={{
            ...styles.subtitle,
            padding: isMobile ? "0 20px" : "0",
            maxWidth: isMobile ? "95%" : "600px",
            margin: isMobile ? "18px auto 24px" : "16px auto 24px",
            lineHeight: isMobile ? "1.7" : "1.6",
          }}
        >
          Powerful point-of-sale system designed for modern pharmacies. Manage
          sales, inventory, suppliers, and analytics all in one place. Streamline
          your pharmacy operations with intelligent automation and real-time
          insights.
        </p>

        <button style={styles.button}>Request Demo</button>

        {/* IMAGE */}
        <div style={styles.imageWrapper}>
          <img 
            src={heroImage} 
            style={{
              ...styles.image,
              marginBottom: isMobile ? "0" : "-5px",
              borderRadius: isMobile ? "20px" : "20px 20px 0 0",
            }} 
          />
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
    width: "100%",
    height: "100%",
  },

  container: {
    maxWidth: "100%",
    width: "100%",
    textAlign: "center",
    background: "linear-gradient(180deg, #F3F2FE 0%, #D0D1FE 100%)",
    overflow: "hidden",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  title: {
    fontWeight: 400,
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
    padding: "14px 60px",
    background: "#201E82",
    color: "#fff",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: 600,
    transition: "all 0.3s ease",
  },

  imageWrapper: {
    marginTop: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },

  image: {
    width: "100%",
    maxWidth: "750px",
    borderRadius: "20px 20px 0 0",
    display: "block",
  },


};