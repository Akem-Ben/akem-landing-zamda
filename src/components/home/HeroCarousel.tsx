import React, { useState, useEffect } from "react";
import ZamHero from "../../components/zampos/Hero";
import ZamdaHero from "../../components/zamdamobile/ZamdaHero";

import heroImage from "../../assets/hero-section.png";
import heroImageMobile from "../../assets/hero-section-mobile.png";

const HeroCarousel: React.FC = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === 2 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const isMobile = screenWidth <= 768;
  const isTablet = screenWidth > 768 && screenWidth <= 1024;
  const heroImg = isMobile ? heroImageMobile : heroImage;

  const slides = ["home", "zampos", "zammobile"];

  const renderHomeSlide = () => (
    <div style={styles.heroSlide}>
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
          Zamda Health combines a pharmacy-built POS with a Patient’s mobile
          app, helping you sell faster, reduce losses, and reach more patients
          online.
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
              borderBottomLeftRadius: isMobile ? "30px" : "0px",
              borderBottomRightRadius: isMobile ? "30px" : "0px",
            }}
          />
        </div>
      </div>
    </div>
  );

  const renderSlide = (slide: string) => {
    if (slide === "zampos") return <ZamHero />;
    if (slide === "zammobile") return <ZamdaHero />;
    return renderHomeSlide();
  };

  return (
    <section style={styles.carouselContainer}>
      <div style={styles.sliderWrapper}>
        <div
          style={{
            ...styles.slides,
            transform: `translateX(-${activeSlide * 100}vw)`,
            width: `${slides.length * 100}vw`,
          }}
        >
          {slides.map((slide) => (
            <div key={slide} style={styles.slide}>
              {renderSlide(slide)}
            </div>
          ))}
        </div>
      </div>

      <div style={styles.controls}>
        <div style={styles.dots}>
          {slides.map((_, index) => (
            <button
              key={index}
              style={{
                ...styles.dot,
                background: activeSlide === index ? "#201E82" : "#D8D8F2",
              }}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;

const styles = {
  carouselContainer: {
    position: "relative",
    overflow: "hidden",
    background: "#F2F1FD",
    minHeight: "700px",
  } as React.CSSProperties,

  sliderWrapper: {
    width: "100%",
  } as React.CSSProperties,

  slides: {
    display: "flex",
    transition: "transform 0.5s ease",
  } as React.CSSProperties,

  slide: {
    width: "100vw",
    flexShrink: 0,
    minHeight: "700px",
  } as React.CSSProperties,

  heroSlide: {
    background: "#F2F1FD",
    padding: "70px 20px 0px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    overflowX: "hidden",
    minHeight: "700px",
    display: "flex",
    flexDirection: "column",
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

  controls: {
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
  } as React.CSSProperties,

  controlButton: {
    display: "none",
  } as React.CSSProperties,

  dots: {
    display: "flex",
    gap: "10px",
  } as React.CSSProperties,

  dot: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
  } as React.CSSProperties,
};
