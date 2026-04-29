import React, { useEffect, useState } from "react";
import aboutImage from "../../assets/about-us.png";

const AboutSection: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width < 768; 

  return (
    <section style={styles.section}>
      <div
        style={{
          ...styles.card,
          padding: isMobile ? "30px 18px" : "60px 40px",
        }}
      >

        {/* BADGE */}
        <div style={{ textAlign: "center" }}>
          <div style={styles.badge}>About Us</div>
        </div>

        {/* TITLE */}
        <h2 style={styles.title}>Get to know us</h2>

        {/* CONTENT */}
        <div
          style={{
            ...styles.content,
            flexDirection: isMobile ? "column" : "row",
            textAlign: isMobile ? "center" : "left",
            gap: isMobile ? "25px" : "40px",
          }}
        >

          {/* IMAGE (LEFT ON TABLET + DESKTOP) */}
          <div style={styles.imageWrapper}>
            <img
              src={aboutImage}
              style={{
                ...styles.image,
                maxWidth: isMobile ? "100%" : "350px",
              }}
            />
          </div>

          {/* TEXT (RIGHT ON TABLET + DESKTOP) */}
          <div style={styles.textWrapper}>
            <p style={styles.text}>
              Zamda Health was built to solve real problems pharmacies face every day,
              from stock losses and manual records to delayed access to medication for patients.
            </p>

            <p style={styles.text}>
              We focus on helping pharmacies run smarter with ZamPOS, while making it easier
              for customers to order medicines, upload prescriptions, and get care through
              the Zamda Mobile App.
            </p>

            <p style={styles.text}>
              This isn’t a generic POS. Zamda Health is built specifically for pharmacies,
              with local realities, compliance, and reliability in mind so you can focus
              on patient care while your operations run smoothly.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;

/* ================= STYLES ================= */

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    background: "#F9F9FA",
    padding: "50px 20px",
    display: "flex",
    justifyContent: "center",
  },

  card: {
    width: "100%",
    maxWidth: "950px",
    background: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.05)",
  },

  badge: {
    display: "inline-block",
    padding: "6px 14px",
    background: "#ECFFFE",
    color: "#201E82",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: 500,
    marginBottom: "15px",
  },

  title: {
    textAlign: "center",
    fontSize: "28px",
    fontWeight: 600,
    marginBottom: "40px",
    color: "#141414",
  },

  content: {
    display: "flex",
    alignItems: "center",
  },

  imageWrapper: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },

  image: {
    width: "100%",
    borderRadius: "12px",
    objectFit: "cover",
  },

  textWrapper: {
    flex: 1,
  },

  text: {
    fontSize: "14px",
    color: "#616161",
    fontWeight: 500,
    lineHeight: 1.8,
    marginBottom: "22px",
    textAlign: "start"
  },
};