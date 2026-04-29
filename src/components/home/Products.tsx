import React, { useState, useEffect } from "react";
import dashboardImage from "../../assets/dashboard.png";

const ProductSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"pos" | "app">("pos");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = screenWidth <= 768;

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
              margin: isMobile ? "0 auto 20px" : undefined,
            }}
          >
            Explore our product offerings to elevate your pharmacy’s efficiency
          </p>

          {/* TABS */}
          <div
            style={{
              ...styles.tabs,
              transform: isMobile ? "scale(0.95)" : "none",
            }}
          >
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

          {/* DESCRIPTION */}
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
                <span style={{ fontWeight: 800, color: "#000" }}>
                  (ZamPOS)
                </span>{" "}
                system for pharmacies, a comprehensive and versatile solution
                designed to streamline sales and inventory management. This
                powerful tool offers efficient transaction processing, automatic
                stock updates, and comprehensive sales analytics.
              </>
            ) : (
              "The Zamda Mobile App empowers pharmacy owners and staff to manage operations on the go. From tracking inventory in real-time to monitoring sales performance and accessing key insights, the app ensures flexibility and control anytime, anywhere."
            )}
          </p>

          {/* CTA */}
          <button
            style={{
              ...styles.cta,
              padding: isMobile ? "14px 18px" : "16px 23px",
              fontSize: isMobile ? "13px" : "14px",
            }}
          >
            {activeTab === "pos"
              ? "See ZamPOS Features"
              : "Explore Mobile App"}
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
            src={dashboardImage}
            style={{
              ...styles.image,
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
    maxWidth: "950px",
    background: "#ffffff",
    borderRadius: "18px",
    textAlign: "center",
    boxShadow: "0 25px 70px rgba(0,0,0,0.06)",
    overflow: "hidden",
  },

  topSection: {
    background:
      "linear-gradient(180deg, #f6f7fb 0%, #eef1f8 60%, #ffffff 100%)",
  },

  badge: {
    display: "inline-block",
    padding: "6px 16px",
    background: "#ECFFFE",
    color: "#201E82",
    borderRadius: "999px",
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.6px",
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
    borderRadius: "8px",
    border: "none",
    background: "transparent",
    cursor: "pointer",
    fontSize: "13px",
    color: "#000",
  },

  activeTab: {
    background: "#ffffff",
    color: "#141414",
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
    background: "var(--btncolor1)",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: 500,
    boxShadow: "0 10px 25px rgba(45,47,143,0.25)",
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