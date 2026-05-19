import React, { useEffect, useState } from "react";

import phone from "../../assets/phone-hero.png";
import mobilePhone from "../../assets/phone-mobile.png";

import appstore from "../../assets/appstore.png";
import playstore from "../../assets/playstore.png";

import badge1 from "../../assets/badge1.png";
import badge2 from "../../assets/badge2.png";
import badge3 from "../../assets/badge3.png";
import badge4 from "../../assets/badge4.png";

const ZamdaHero: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section 
      style={{ 
        ...styles.container, 
        height: "100%", 
        display: "flex", 
        flexDirection: "column" 
      }}>
      {/* TEXT */}
      <div style={styles.content}>
        <h1
          style={{
            ...styles.heading,
            ...(isMobile && {
              fontSize: "28px",
              lineHeight: "1.2",
              letterSpacing: "-0.8px",
            }),
          }}
        >
          {isMobile ? (
            <>
              Your{" "}
              <span style={{ color: "#201E82", fontWeight: "600" }}>
                Healthcare
              </span>{" "}
              and <br />
              <span style={{ color: "#201E82", fontWeight: "600" }}>
                Pharmacy
              </span>
              , Now on <br />
              Your <span style={{ color: "#201E82" }}>Phone</span>
            </>
          ) : (
            <>
              Your Healthcare and Pharmacy,
              <br />
              Now on Your Phone
            </>
          )}
        </h1>

        <p
          style={{
            ...styles.sub,
            ...(isMobile && {
              fontSize: "14px",
              lineHeight: "1.5",
              padding: "0 10px",
            }),
          }}
        >
          The Zamda Mobile App lets customers order medicines, upload
          prescriptions, and get delivery or pickup from nearby pharmacies — all
          without leaving home.
        </p>

        <div
          style={{
            ...styles.stores,
            ...(isMobile && {
              flexWrap: "nowrap",
              gap: "10px",
              justifyContent: "center",
              padding: "0 10px",
            }),
          }}
        >
          <div className="hover-lift"
            style={{ 
              ...styles.storeBtn,
              ...(isMobile && {
                padding: "10px 12px",
                minWidth: "140px",
              }),
            }}
          >
            <img src={appstore} style={styles.storeIcon} />
            <div>
              <span style={styles.small}>Download on the</span>
              <span style={styles.big}>App Store</span>
            </div>
          </div>

          <div className="hover-lift"
            style={{
              ...styles.storeBtn,
              ...(isMobile && {
                padding: "10px 12px",
                minWidth: "140px",
              }),
            }}
          >
            <img src={playstore} style={styles.storeIcon} />
            <div>
              <span style={styles.small}>Download on the</span>
              <span style={styles.big}>Google Play</span>
            </div>
          </div>
        </div>
      </div>

      {/* VISUAL */}
      <div
        style={{
          ...styles.visual,
          ...(isMobile && {
            height: "420px",
            marginTop: "20px",
          }),
        }}
      >
        {/* PHONE */}
        <img
          src={isMobile ? mobilePhone : phone}
          style={{
            ...styles.phone,
            ...(isMobile && {
              width: "340px",
              height: "auto",
            }),
          }}
        />

        {/* BADGES (desktop only) */}
        {!isMobile && (
          <>
            <img src={badge1} style={styles.badge1} />
            <img src={badge2} style={styles.badge2} />
            <img src={badge3} style={styles.badge3} />
            <img src={badge4} style={styles.badge4} />
          </>
        )}
      </div>
    </section>
  );
};

export default ZamdaHero;

/* ================= STYLES ================= */

const styles: any = {
  container: {
    background:
      "linear-gradient(180deg, #F2F1FD 0%, #F2F1FD 32%, #D2D3FE 100%)",
    borderRadius: "0 0 72px 72px",
    padding: "60px 20px 0",
    overflow: "hidden",
    width: "100%",
  },

  content: {
    maxWidth: "760px",
    margin: "0 auto 20px",
    textAlign: "center",
  },

  heading: {
    fontSize: "35px",
    lineHeight: "1.1",
    fontWeight: 400,
    color: "#141414",
    margin: 0,
    letterSpacing: "-1.4px",
  },

  sub: {
    fontSize: "16px",
    lineHeight: "1.4",
    color: "#616161",
    fontWeight: 500,
    maxWidth: "650px",
    margin: "18px auto 28px",
  },

  stores: {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    flexWrap: "wrap",
  },

  storeBtn: {
    background: "#000",
    color: "#fff",
    borderRadius: "16px",
    padding: "12px 18px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    minWidth: "180px",
    boxShadow: "0 16px 30px rgba(0,0,0,0.12)",
    cursor: "pointer",
  },

  storeIcon: {
    width: "26px",
    height: "26px",
  },

  small: {
    display: "block",
    fontSize: "10px",
    opacity: 0.75,
    color: "#FFFFFF",
  },

  big: {
    display: "block",
    fontSize: "16px",
    color: "#FFFFFF",
    fontWeight: 400,
  },

  visual: {
    position: "relative",
    width: "100%",
    maxWidth: "900px",
    height: "auto",
    margin: "auto auto 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },

  phone: {
    width: "100%",
    maxWidth: "650px",
    height: "auto",
    zIndex: 3,
    position: "relative",
  },

  badge1: {
    position: "absolute",
    width: "300px",
    top: "33%",
    left: "18%",
    transform: "translate(-50%, -50%)",
    zIndex: 4,
  },

  badge2: {
    position: "absolute",
    width: "300px",
    top: "31%",
    left: "80%",
    transform: "translate(-50%, -50%)",
    zIndex: 4,
  },

  badge3: {
    position: "absolute",
    width: "300px",
    top: "80%",
    left: "23%",
    transform: "translate(-50%, -50%)",
    zIndex: 4,
  },

  badge4: {
    position: "absolute",
    width: "300px",
    top: "66%",
    left: "77%",
    transform: "translate(-50%, -50%)",
    zIndex: 4,
  },


};
