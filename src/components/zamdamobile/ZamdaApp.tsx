import React, { useEffect, useState } from "react";

import phoneImage from "../../assets/zamda-phone.png";
import phoneImageMobile from "../../assets/zamda-phone-2.png"; // ✅ NEW MOBILE IMAGE

import appStore from "../../assets/apple.png";
import playStore from "../../assets/playstore.png";
import bgPattern from "../../assets/zamda-app-bg.png";

const ZamdaApp: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section style={{ ...styles.section, ...(isMobile && { padding: "60px 0" }) }}>
      <div
        style={{
          ...styles.container,
          ...(isMobile && {
            flexDirection: "column",
            width: "100%",
            maxWidth: "100%",
            margin: "0",
            borderRadius: "15px",
            padding: "30px 16px 0px",
            gap: "20px",
            overflow: "hidden",
            boxSizing: "border-box",
          }),
        }}
      >
        {/* BACKGROUND */}
        <img src={bgPattern} style={styles.bgImage} />

        {/* LEFT */}
        <div
          style={{
            ...styles.left,
            ...(isMobile && {
              order: 1,
              textAlign: "center",
              alignItems: "center",
              maxWidth: "100%",
            }),
          }}
        >
          <h2
            style={{
              ...styles.title,
              ...(isMobile && { fontSize: "24px" }),
            }}
          >
            Be First to Experience the <br /> Zamda Mobile App
          </h2>

          <p style={styles.text}>
            Download the Mobile App and be a part of
            <br />
            the future of health care.
          </p>

          <div
            style={{
              ...styles.storeRow,
              ...(isMobile && {
                justifyContent: "center",
                flexWrap: "nowrap",
                gap: "10px",
              }),
            }}
          >
            <StoreButton
              icon={appStore}
              small="Download on the"
              big="App Store"
              isMobile={isMobile}
            />
            <StoreButton
              icon={playStore}
              small="Download on the"
              big="Google Play"
              isMobile={isMobile}
            />
          </div>
        </div>

        {/* RIGHT / PHONE */}
        <div
          style={{
            ...(isMobile && {
              order: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              height: "auto",
              marginTop: "10px",
            }),
          }}
        >
          <img
            src={isMobile ? phoneImageMobile : phoneImage} // ✅ MOBILE SWAP
            style={{
              ...styles.phone,
              ...(isMobile && {
                width: "380px",
                display: "block",
                marginBottom: "-2px",
              }),
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ZamdaApp;

/* ================= STORE BUTTON ================= */

const StoreButton = ({
  icon,
  small,
  big,
  isMobile,
}: {
  icon: string;
  small: string;
  big: string;
  isMobile?: boolean;
}) => {
  return (
    <div
      style={{
        ...styles.storeBtn,
        ...(isMobile && {
          padding: "10px 12px",
          minWidth: "135px",
          gap: "10px",
        }),
      }}
    >
      <img src={icon} style={styles.storeIcon} />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          textAlign: "left",
          lineHeight: 1,
        }}
      >
        <span
          style={{
            ...styles.small,
            ...(isMobile && { fontSize: "9px", marginBottom: "2px" }),
          }}
        >
          {small}
        </span>

        <span
          style={{
            ...styles.big,
            ...(isMobile && { fontSize: "13px", fontWeight: 600 }),
          }}
        >
          {big}
        </span>
      </div>
    </div>
  );
};

/* ================= STYLES ================= */

const styles: any = {
  section: {
    padding: "60px 20px",
    display: "flex",
    justifyContent: "center",
    background: "#F9F9FA",
  },

  container: {
    position: "relative",
    overflow: "hidden",
    maxWidth: "1000px",
    width: "100%",
    borderRadius: "24px",
    padding: "10px 60px 0px",
    background: "linear-gradient(135deg, #3e3eff 0%, #000000 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "60px",
  },

  bgImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: 0.5,
    pointerEvents: "none",
    zIndex: 0,
  },

  left: {
    maxWidth: "480px",
    color: "#fff",
    position: "relative",
    zIndex: 2,
  },

  title: {
    fontSize: "30px",
    fontWeight: 400,
    lineHeight: "1.25",
    marginBottom: "18px",
  },

  text: {
    fontSize: "14px",
    opacity: 0.9,
    marginBottom: "28px",
    lineHeight: "1.7",
    maxWidth: "420px",
    color: "#FFFFFF",
  },

  storeRow: {
    display: "flex",
    gap: "16px",
  },

  storeBtn: {
    background: "#FFFFFF",
    color: "#0B0B0F",
    borderRadius: "8px",
    padding: "12px 16px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    minWidth: "100px",
    boxShadow: "0 14px 28px rgba(0,0,0,0.18)",
    cursor: "pointer",
    zIndex: 2,
  },

  storeIcon: {
    width: "26px",
    height: "26px",
  },

  small: {
    display: "block",
    fontSize: "10px",
    fontWeight: 600,
    color: "#141414",
  },

  big: {
    display: "block",
    fontSize: "16px",
    fontWeight: 600,
    color: "#141414",
  },

  phone: {
    width: "480px",
    height: "auto",
    position: "relative",
    zIndex: 2,
    display: "block",
  },
};