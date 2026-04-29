import React from "react";

import alert from "../../assets/alert.png";
import chat from "../../assets/chat.png";
import condition from "../../assets/condition.png";
import market from "../../assets/market.png";
import profit from "../../assets/profit.png";

const Powered: React.FC = () => {
  return (
    <section style={styles.container}>
      <p style={styles.top}>Powered by Zam AI</p>

      <h2 style={styles.heading}>Zam AI Powered Features</h2>

      <p style={styles.sub}>
        Smarter decisions, safer dispensing, and better business outcomes with ZamAI.
      </p>

      <div style={styles.grid}>
        {features.map((item, i) => {
          let position: React.CSSProperties = {};

          // ✅ TOP ROW (3 CARDS)
          if (i === 0) position.gridColumn = "1 / span 2";
          if (i === 1) position.gridColumn = "3 / span 2";
          if (i === 2) position.gridColumn = "5 / span 2";

          // ✅ CENTERED SECOND ROW (2 CARDS)
          if (i === 3) position.gridColumn = "2 / span 2";
          if (i === 4) position.gridColumn = "4 / span 2";

          return (
            <div
              key={i}
              style={{
                ...styles.card,
                background: item.bg,
                ...position,
              }}
            >
              <div>
                <h3 style={styles.title}>{item.title}</h3>
                <p style={styles.text}>{item.text}</p>
              </div>

              <img src={item.image} style={styles.image} />
            </div>
          );
        })}
      </div>

      <style>{responsive}</style>
    </section>
  );
};

export default Powered;

// ---------------- DATA ----------------

const features = [
  {
    title: "Drug Interaction Alerts",
    text: "AI checks prescriptions in real-time to detect drug conflicts, dosage issues, and safety risks before dispensing.",
    image: alert,
    bg: "#FCF8FA",
  },
  {
    title: "Zam AI Chat Assistant",
    text: "Ask questions and get instant answers on drug alternatives, usage guidelines, and personalized recommendations.",
    image: chat,
    bg: "#FAF9FF",
  },
  {
    title: "Condition-Based Suggestions",
    text: "Recommends the right over-the-counter products based on patient symptoms and underlying conditions.",
    image: condition,
    bg: "#F6F8FF",
  },
  {
    title: "Market Trend Analysis",
    text: "Stay ahead with alerts on trending medicines driven by seasonal patterns and public health developments.",
    image: market,
    bg: "#FDFBF6",
  },
  {
    title: "Profit & Staff Insights",
    text: "Track performance, identify top-selling products, and uncover hidden revenue opportunities with AI analytics.",
    image: profit,
    bg: "#FDF6FB",
  },
];

// ---------------- STYLES ----------------

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: "100px 20px",
    textAlign: "center",
    background: "#FAFAFC",
  },

  top: {
    fontSize: "12px",
    fontWeight: 400,
    color: "#201E82",
    background: "#ECFFFE",
    padding: "6px 14px",
    borderRadius: "20px",
    display: "inline-block",
    marginBottom: "12px",
  },

  heading: {
    fontSize: "32px",
    fontWeight: 600,
    color: "#141414",
    marginBottom: "10px",
  },

  sub: {
    maxWidth: "620px",
    margin: "0 auto 60px",
    color: "#666",
    fontSize: "14px",
  },

  // ✅ 6-COLUMN GRID FOR PERFECT ALIGNMENT
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    gap: "28px",
    maxWidth: "1000px",
    margin: "0 auto",
  },

  // ✅ PERFECT SQUARE CARDS
  card: {
    padding: "24px",
    borderRadius: "18px",
    textAlign: "left",
    boxShadow: "0 12px 30px rgba(0,0,0,0.05)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    aspectRatio: "1 / 1",
  },

  title: {
    fontSize: "16px",
    fontWeight: 600,
    marginBottom: "8px",
    color: "#141414",
  },

  text: {
    fontSize: "13px",
    color: "#666",
    lineHeight: "1.5",
  },

  image: {
    width: "150px",
    height: "130px",
    marginTop: "5px",
    alignSelf: "center",
  },
};

// ---------------- RESPONSIVE ----------------

const responsive = `
@media (max-width: 1024px) {
  div[style*="grid-template-columns"] {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

@media (max-width: 600px) {
  div[style*="grid-template-columns"] {
    grid-template-columns: 1fr !important;
  }

  section {
    padding: 80px 15px;
  }
}
`;