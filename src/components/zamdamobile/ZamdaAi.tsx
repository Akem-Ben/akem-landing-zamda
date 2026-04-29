import React, { useEffect, useState } from "react";
import aiImage from "../../assets/ai-image.png";
import tipIcon from "../../assets/tip.png";
import prescriptionIcon from "../../assets/prescription-2.png";
import educationIcon from "../../assets/education.png";

const ZamAISection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section style={styles.section}>
      <div style={styles.container}>

        <span style={styles.badge}>Powered by Zam AI</span>

        <h2 style={styles.title}>Zam AI Powered Features</h2>

        <p style={styles.subtitle}>
          Smarter decisions, safer dispensing, and better business outcomes with ZamAI.
        </p>

        {/* TOP FEATURE */}
        <div
          style={{
            ...styles.topCard,
            ...(isMobile && {
              flexDirection: "column",
              gap: "20px",
              alignItems: "flex-start",
              textAlign: "left",
            }),
          }}
        >
          <div
            style={{
              ...styles.topText,
              ...(isMobile && {
                maxWidth: "100%",
                textAlign: "left",
              }),
            }}
          >
            <span style={styles.topBadge}>Top AI Feature</span>

            <h3 style={styles.cardTitle}>Symptom Checker</h3>

            <p style={styles.cardText}>
              Describe how you feel and get instant, reliable AI guidance on your symptoms — 
              before you even visit a doctor. Zam AI analyzes your inputs, suggests possible 
              conditions, and recommends next steps.
            </p>
          </div>

          <img
            src={aiImage}
            style={{
              ...styles.aiImage,
              ...(isMobile && {
                width: "100%",
                maxWidth: "260px",
                alignSelf: "center",
                marginTop: "10px",
              }),
            }}
          />
        </div>

        {/* SMALL GRID */}
        <div
          style={{
            ...styles.grid,
            ...(isMobile && {
              display: "block",
            }),
          }}
        >
          {[
            {
              icon: tipIcon,
              title: "Personalized Health Tips",
              text: "Receive tailored wellness, nutrition, and preventive care advice based on your profile.",
            },
            {
              icon: prescriptionIcon,
              title: "Prescription Assistant",
              text: "Upload prescriptions and instantly find available, generic, or more affordable alternatives.",
            },
            {
              icon: educationIcon,
              title: "Medication Education",
              text: "Understand your medications clearly — uses, side effects, and drug interactions made simple.",
            },
          ].map((item, index) => (
            <SmallCard key={index} {...item} isMobile={isMobile} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ZamAISection;

/* ================= SMALL CARD ================= */

const SmallCard = ({ icon, title, text, index, isMobile }: any) => {
  return (
    <div
      style={{
        ...styles.smallCard,
        ...(index === 2 && !isMobile ? styles.centerCard : {}),
        ...(isMobile && {
          marginBottom: "20px",
        }),
      }}
    >
      <img src={icon} style={styles.icon} />
      <h4 style={styles.smallTitle}>{title}</h4>
      <p style={styles.smallText}>{text}</p>
    </div>
  );
};

/* ================= STYLES ================= */

const styles: any = {
  section: {
    padding: "50px 20px",
    display: "flex",
    justifyContent: "center",
    background: "#F9F9FA",
  },

  container: {
    maxWidth: "700px",
    width: "100%",
    textAlign: "center",
  },

  badge: {
    fontSize: "12px",
    fontWeight: 600,
    color: "#201E82",
    background: "#ECFFFE",
    padding: "6px 14px",
    borderRadius: "20px",
    display: "inline-block",
    marginBottom: "12px",
  },

  title: {
    fontSize: "28px",
    fontWeight: 400,
    color: "#141414",
    marginBottom: "8px",
  },

  subtitle: {
    fontSize: "15.5px",
    color: "#616161",
    marginBottom: "40px",
  },

  /* TOP CARD */
  topCard: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "28px",
    borderRadius: "8px",
    background: "linear-gradient(135deg, #F7FFFE 10%, #D8FEFB 100%)",
    marginBottom: "40px",
    gap: "60px",
  },

  topText: {
    maxWidth: "420px",
    textAlign: "left",
  },

  topBadge: {
    fontSize: "11px",
    fontWeight: 600,
    background: "#43FFF3",
    color: "#012621",
    padding: "4px 10px",
    borderRadius: "999px",
    display: "inline-flex",
    alignItems: "center",
    lineHeight: "1",
    marginBottom: "20px",
  },

  cardTitle: {
    fontSize: "18px",
    fontWeight: 600,
    color: "#012621",
    marginBottom: "15px",
  },

  cardText: {
    fontSize: "14px",
    color: "#616161",
    lineHeight: "1.6",
  },

  aiImage: {
    width: "230px",
    objectFit: "contain",
    marginTop: "20px",
  },

  /* GRID */
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "24px",
  },

  /* SMALL CARDS */
  smallCard: {
    background: "#fff",
    padding: "20px 26px 80px",
    borderRadius: "18px",
    textAlign: "left",
    boxShadow: "0 10px 25px rgba(0,0,0,0.03)",
  },

  centerCard: {
    gridColumn: "1 / span 2",
    justifySelf: "center",
    maxWidth: "380px",
  },

  icon: {
    width: "50px",
    marginBottom: "14px",
  },

  smallTitle: {
    fontSize: "15px",
    fontWeight: 600,
    marginBottom: "6px",
    color: "#141414",
  },

  smallText: {
    fontSize: "13px",
    color: "#616161",
    lineHeight: "1.5",
  },
};