import React, { useState, useEffect } from "react";

import amazon from "../../assets/amazon.png";
import axon from "../../assets/axon.png";
import hormel from "../../assets/hormel.png";
import mercedes from "../../assets/mercedes.png";

import whatsapp from "../../assets/whatsapp.png";
import ai from "../../assets/ai.png";

import heroImage from "../../assets/hero-section.png";
import heroImageMobile from "../../assets/hero-section-mobile.png";

const brands = [amazon, axon, hormel, amazon, axon, mercedes, amazon, mercedes];

const HeroCarousel: React.FC = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = screenWidth <= 768;
  const isTablet = screenWidth > 768 && screenWidth <= 1024;

  const heroImg = isMobile ? heroImageMobile : heroImage;

  return (
    <section style={styles.hero}>
      {/* TEXT */}
      <div style={styles.content}>
        <h1
          style={{
            ...styles.heading,
            fontSize: isMobile ? "26px" : "42px",
            fontWeight: 800,
            lineHeight: 1.2,
          }}
        >
          <span style={{ color: "#141414" }}>Powering </span>
          <span style={{ color: isMobile ? "#141414" : "#201E82" }}>
            Pharmacies
          </span>
          <br />
          <span style={{ color: "#141414" }}>Simplifying </span>
          <span style={{ color: isMobile ? "#141414" : "#201E82" }}>
            Medication Access
          </span>
        </h1>

        <p
          style={{
            ...styles.subtext,
            fontSize: isMobile ? "14px" : "16px",
            color: "#4b4b4b",
            lineHeight: 1.7,
            fontWeight: 500,
          }}
        >
          Zamda Health combines a pharmacy-built POS with a Patient’s mobile app,
          helping you sell faster, reduce losses, and reach more patients online.
        </p>

        <button style={styles.button}>Learn More</button>

        {!isMobile && (
          <div style={styles.stats}>
            <div>
              <h3
                style={{
                  ...styles.statNumber,
                  color: isTablet ? "#000" : "#141414",
                }}
              >
                100k+
              </h3>
              <p
                style={{
                  ...styles.statText,
                  color: isTablet ? "#000" : "#444",
                }}
              >
                Successful transactions
              </p>
            </div>

            <div>
              <h3
                style={{
                  ...styles.statNumber,
                  color: isTablet ? "#000" : "#141414",
                }}
              >
                1000+
              </h3>
              <p
                style={{
                  ...styles.statText,
                  color: isTablet ? "#000" : "#444",
                }}
              >
                Verified Pharmacies
              </p>
            </div>

            <div>
              <h3
                style={{
                  ...styles.statNumber,
                  color: isTablet ? "#000" : "#141414",
                }}
              >
                100%
              </h3>
              <p
                style={{
                  ...styles.statText,
                  color: isTablet ? "#000" : "#444",
                }}
              >
                Secure transaction
              </p>
            </div>
          </div>
        )}
      </div>

      {/* IMAGE */}
      <div style={styles.imageWrapper}>
        <div
          style={{
            ...styles.imageBox,
            height: isMobile ? "320px" : "auto",
            borderRadius: isMobile ? "30px" : "0px",
            overflow: "visible",
          }}
        >
          <img
            src={heroImg}
            style={{
              ...styles.heroImage,
              height: isMobile ? "100%" : "auto",
              objectPosition: isMobile ? "center top" : "center",

              // ONLY CHANGE (mobile bottom radius)
              borderBottomLeftRadius: isMobile ? "30px" : "0px",
              borderBottomRightRadius: isMobile ? "30px" : "0px",
            }}
          />

          {/* ICONS */}
          <div
            style={{
              ...styles.floatingIcons,
              right: isMobile ? "-10px" : "-25px",
              top: "20%",
              transform: "translateY(-50%)",
            }}
          >
            <img src={whatsapp} style={styles.icon} />
            <img src={ai} style={styles.icon} />
          </div>
        </div>
      </div>

      {/* TRUSTED BRANDS */}
      {!isMobile && (
        <div style={styles.trustedFull}>
          <p style={styles.trustedText}>Trusted by these Pharmacies</p>

          <div style={styles.brandTrack}>
            {[...brands, ...brands].map((logo, i) => (
              <img key={i} src={logo} style={styles.logo} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroCarousel;

const styles = {
  hero: {
    background: "#F2F1FD",
    padding: "70px 20px 0px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    overflowX: "hidden",
  } as React.CSSProperties,

  content: {
    maxWidth: "750px",
    margin: "0 auto",
  } as React.CSSProperties,

  heading: {},

  subtext: {
    margin: "18px auto 0",
    maxWidth: "620px",
  } as React.CSSProperties,

  

  button: {
    marginTop: "18px",
    padding: "14px 30px",
    background: "#201E82",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  } as React.CSSProperties,

  stats: {
    display: "flex",
    justifyContent: "center",
    gap: "35px",
    marginTop: "35px",
  } as React.CSSProperties,

  statNumber: {
    margin: 0,
    fontSize: "22px",
    fontWeight: 800,
  } as React.CSSProperties,

  statText: {
    fontSize: "11px",
  } as React.CSSProperties,

  imageWrapper: {
    marginTop: "60px",
    display: "flex",
    justifyContent: "center",
  } as React.CSSProperties,

  imageBox: {
    position: "relative",
    width: "100%",
    maxWidth: "1200px",
  } as React.CSSProperties,

  heroImage: {
    width: "100%",
    objectFit: "cover",
    display: "block",
  } as React.CSSProperties,

  floatingIcons: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    gap: "25px",
    zIndex: 10,
  } as React.CSSProperties,

  icon: {
    width: "46px",
    height: "46px",
    borderRadius: "50%",
    boxShadow: "0 8px 18px rgba(0,0,0,0.20)",
    background: "#fff",
  } as React.CSSProperties,

  trustedFull: {
    width: "100vw",
    marginLeft: "calc(-50vw + 50%)",
    background:
      "linear-gradient(90deg, #0f1a5a 0%, #1f2a8a 50%, #0f1a5a 100%)",
    boxShadow: "inset 0 0 30px rgba(0,0,0,0.2)",
    padding: "20px 0",
    overflow: "hidden",
  } as React.CSSProperties,

  trustedText: {
    color: "#fff",
    marginBottom: "25px",
    fontSize: "20px",
    textAlign: "center",
  } as React.CSSProperties,

  brandTrack: {
    display: "flex",
    gap: "50px",
    width: "max-content",
    animation: "scroll 15s linear infinite",
  } as React.CSSProperties,

  logo: {
    height: "25px",
    opacity: 0.9,
  } as React.CSSProperties,
};