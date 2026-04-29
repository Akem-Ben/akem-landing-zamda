import React, { useEffect, useState } from "react";

import img1 from "../../assets/why1.png";
import img2 from "../../assets/why2.png";
import img3 from "../../assets/why3.png";
import img4 from "../../assets/why4.png";

import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";

import arrowIcon from "../../assets/arrow-right.png";

const WhyChooseUs: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderItem = (
    icon: string,
    title: string,
    text: string,
    image: string,
    reverse?: boolean
  ) => {
    if (isMobile) {
      return (
        <div style={styles.mobileCard}>
          <img src={image} style={styles.mobileBg} />

          <div style={styles.mobileContent}>
            <div style={styles.iconCircle}>
              <img src={icon} style={styles.iconImage} />
            </div>

            <h3
              style={{
                ...styles.itemTitle,
                color: "#201E82",
              }}
            >
              {title}
            </h3>

            <p
              style={{
                ...styles.itemText,
                color: "#141414",
              }}
            >
              {text}
            </p>

            <button style={styles.btn}>
              Learn more
              <img src={arrowIcon} style={styles.arrowIcon} />
            </button>
          </div>
        </div>
      );
    }

    return (
      <div
        style={{
          ...styles.item,
          flexDirection: reverse ? "row-reverse" : "row",
        }}
      >
        <div style={styles.textBlock}>
          <div style={styles.iconCircle}>
            <img src={icon} style={styles.iconImage} />
          </div>

          <h3 style={{ ...styles.itemTitle, color: "#012621" }}>
            {title}
          </h3>

          <p style={{ ...styles.itemText, color: "#616161" }}>
            {text}
          </p>

          <button style={styles.btn}>
            Learn more
            <img src={arrowIcon} style={styles.arrowIcon} />
          </button>
        </div>

        <div style={styles.imageBlock}>
          <img src={image} style={styles.image} />
        </div>
      </div>
    );
  };

  return (
    <section style={styles.section}>
      <div
        style={{
          ...styles.container,
          padding: isMobile ? "40px 16px" : "60px 90px",
        }}
      >
        {/* HEADER */}
        <div style={styles.header}>
          <div style={{ textAlign: "center" }}>
            <div style={styles.badge}>Why choose us</div>
          </div>

          <h2 style={styles.title}>Why Zamda Health?</h2>

          <p style={styles.subtitle}>
            We’re revolutionizing healthcare delivery by bridging the gap between
            pharmacies and patients with cutting-edge technology and seamless user experience.
          </p>
        </div>

        {/* ITEMS */}
        <div style={styles.grid}>
          {renderItem(
            icon1,
            "Complete Healthcare Ecosystem",
            "Seamlessly connect pharmacies and patients in one unified platform. ZamPOS manages your pharmacy operations while Zamda Mobile App serves your customers directly.",
            img1
          )}

          {renderItem(
            icon2,
            "AI-Powered Intelligence",
            "Zam AI assistant provides instant health guidance, medication information, and personalized recommendations to patients 24/7.",
            img2,
            true
          )}

          {renderItem(
            icon3,
            "Cloud-Based & Always Accessible",
            "Access your pharmacy data from anywhere, anytime. Real-time synchronization ensures your inventory, sales, and customer data are always up to date.",
            img3
          )}

          {renderItem(
            icon4,
            "Fast & Easy Setup",
            "Get started in minutes, not weeks. Our intuitive interface requires minimal training and our team supports you every step of the way.",
            img4,
            true
          )}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

/* ================= STYLES ================= */

const styles = {
  section: {
    background: "#F9F9FA",
    padding: "100px 0px",
  } as React.CSSProperties,

  container: {
    width: "100%",
    maxWidth: "950px",
    margin: "0 auto",
    background: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.05)",
    textAlign: "center",
  } as React.CSSProperties,

  header: {
    marginBottom: "60px",
  } as React.CSSProperties,

  badge: {
    display: "inline-block",
    padding: "6px 14px",
    background: "#ECFFFE",
    color: "#201E82",
    borderRadius: "999px",
    fontSize: "12px",
    marginBottom: "15px",
  } as React.CSSProperties,

  title: {
    fontSize: "28px",
    fontWeight: 600,
    color: "#141414",
    marginBottom: "10px",
  } as React.CSSProperties,

  subtitle: {
    maxWidth: "600px",
    margin: "0 auto",
    fontSize: "14px",
    color: "#666",
    lineHeight: 1.7,
  } as React.CSSProperties,

  grid: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  } as React.CSSProperties,

  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "60px",
    textAlign: "left",
  } as React.CSSProperties,

  textBlock: {
    flex: 1,
    maxWidth: "420px",
  } as React.CSSProperties,

  imageBlock: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  } as React.CSSProperties,

  image: {
    width: "100%",
    maxWidth: "200px",
  } as React.CSSProperties,

  /* MOBILE CARD */
  mobileCard: {
    width: "100%",
    minHeight: "320px",
    borderRadius: "16px",
    overflow: "hidden",
    position: "relative",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  } as React.CSSProperties,

  mobileBg: {
    position: "absolute",
    top: "50%",
    left: "55%",
    width: "80%",
    height: "80%",
    objectFit: "cover",
    transform: "translate(-50%, -50%)", 
    opacity: 0.25,
  } as React.CSSProperties,

  mobileContent: {
    position: "relative",
    padding: "24px",
    textAlign: "left",
  } as React.CSSProperties,

  iconCircle: {
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    background: "#201E82",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "15px",
  } as React.CSSProperties,

  iconImage: {
    width: "30px",
  } as React.CSSProperties,

  itemTitle: {
    fontSize: "18px",
    fontWeight: 600,
    marginBottom: "10px",
  } as React.CSSProperties,

  itemText: {
    fontSize: "14px",
    lineHeight: 1.6,
    marginBottom: "18px",
  } as React.CSSProperties,

  btn: {
    padding: "13px 18px",
    borderRadius: "8px",
    border: "1px solid #201E82",
    background: "#fff",
    fontSize: "13px",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    color: "#201E82",
  } as React.CSSProperties,

  arrowIcon: {
    width: "18px",
  } as React.CSSProperties,
};