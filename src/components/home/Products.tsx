import React, { useState, useEffect } from "react";
import dashboardImage from "../../assets/dashboard.png";
import mobileImage from "../../assets/zamda-mobile.png";

const ProductSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"pos" | "app">("pos");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = screenWidth <= 768;

  const displayedImage = activeTab === "pos" ? dashboardImage : mobileImage;

  const isAppTab = activeTab === "app";

  return (
    <section style={styles.section}>
      <div
        style={{
          ...styles.card,
          height: isMobile ? "auto" : "1019px",
        }}
      >
        {/* TOP GRADIENT SECTION */}
        <div
          style={{
            ...styles.topSection,
            padding: isMobile ? "35px 18px 25px" : "60px 40px 50px",
          }}
        >
          {/* BADGE */}
          <div style={styles.badge}>PRODUCTS</div>

          {/* TITLE */}
          <h2
            style={{
              ...styles.title,
              fontSize: isMobile ? "22px" : "32px",
            }}
          >
            What Zamda Health Offers
          </h2>

          {/* SUBTITLE */}
          <p
            style={{
              ...styles.subtitle,
              fontSize: isMobile ? "13px" : "14px",
              maxWidth: isMobile ? "300px" : "none",
              margin: "0 auto 20px",
            }}
          >
            Explore our product offerings to elevate your pharmacy’s efficiency
          </p>

          {/* TABS */}
          <div style={styles.tabs}>
            <button
              style={{
                ...styles.tab,
                ...(activeTab === "pos" ? styles.activeTab : {}),
              }}
              onClick={() => setActiveTab("pos")}
            >
              ZamPOS
            </button>

            <button
              style={{
                ...styles.tab,
                ...(activeTab === "app" ? styles.activeTab : {}),
              }}
              onClick={() => setActiveTab("app")}
            >
              Zamda Mobile App
            </button>
          </div>

          {/* DESCRIPTION (UNCHANGED TEXT) */}
          <p
            style={{
              ...styles.description,
              fontSize: isMobile ? "13px" : "14px",
              padding: isMobile ? "0 10px" : "0",
            }}
          >
            {activeTab === "pos" ? (
              <>
                ZamdaHealth’s advanced Point of Sale{" "}
                <span style={{ fontWeight: 800, color: "#000" }}>(ZamPOS)</span>{" "}
                system for pharmacies, a comprehensive and versatile solution
                designed to streamline sales and inventory management. This
                powerful tool offers efficient transaction processing, automatic
                stock updates, and comprehensive sales analytics.
              </>
            ) : (
              <>
                Zamda Health's{" "}
                <span style={{ fontWeight: 800, color: "#000" }}>
                  (Mobile App)
                </span>{" "}
                makes getting medicines easy and stress-free. Order from nearby
                pharmacies, upload prescriptions, track deliveries in real time,
                and manage refills, all from your phone. It’s a smarter, faster
                way to access pharmacy care when you need it most.
              </>
            )}
          </p>

          {/* CTA (UNCHANGED TEXT) */}
          <button style={styles.cta}>
            {activeTab === "pos" ? "See ZamPOS Features" : "Explore Mobile App"}
          </button>
        </div>

        {/* IMAGE SECTION */}
        <div
          style={{
            ...styles.imageWrapper,
            padding: isMobile ? "20px" : "40px",
          }}
        >
          <img
            src={displayedImage}
            style={{
              ...styles.image,

              ...(isAppTab && !isMobile
                ? {
                    maxWidth: "530px",
                    margin: "0 auto",
                    display: "block",
                    objectFit: "contain",
                  }
                : {}),

              borderRadius: isMobile ? "12px" : "16px",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

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
    maxWidth: "1190px",
    background: "#ffffff",
    borderRadius: "18px",
    textAlign: "center",
    boxShadow: "0 25px 70px rgba(0,0,0,0.06)",
    overflow: "hidden",
  },

  topSection: {
    background:
      "linear-gradient(180deg, #F0EFFE 0%, #eef1f8 60%, #ffffff 100%)",
  },

  badge: {
    display: "inline-block",
    padding: "6px 16px",
    background: "#ECFFFE",
    color: "#201E82",
    borderRadius: "999px",
    fontSize: "11px",
    fontWeight: 600,
    marginBottom: "18px",
  },

  title: {
    fontWeight: 600,
    color: "#141414",
    marginBottom: "10px",
  },

  subtitle: {
    color: "#616161",
    marginBottom: "25px",
  },

  tabs: {
    display: "inline-flex",
    background: "#DEE3E9",
    borderRadius: "10px",
    marginBottom: "25px",
  },

  tab: {
    padding: "10px 20px",
    border: "none",
    background: "transparent",
    cursor: "pointer",
    fontSize: "13px",
  },

  activeTab: {
    background: "#ffffff",
    fontWeight: 500,
    boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
  },

  description: {
    maxWidth: "640px",
    margin: "0 auto",
    color: "#616161",
    lineHeight: 1.8,
  },

  cta: {
    marginTop: "28px",
    background: "#201E82",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    padding: "14px 23px",
    cursor: "pointer",
  },

  imageWrapper: {
    display: "flex",
    justifyContent: "center",
    background: "#ffffff",
  },

  image: {
    width: "100%",
    maxWidth: "860px",
    display: "block",
  },
};
