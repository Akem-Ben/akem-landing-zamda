import React, { useState, useRef, useEffect } from "react";
import checkIcon from "../../assets/check-fill.png";
import uncheckIcon from "../../assets/uncheck.png";
import leftArrow from "../../assets/chevron_left.png";
import rightArrow from "../../assets/chevron_forward.png";

type Feature = {
  text: string;
  included: boolean;
};

type Plan = {
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  features: Feature[];
  highlighted?: boolean;
};

const plans: Plan[] = [
  {
    name: "Basic",
    monthlyPrice: 2500,
    annualPrice: 25000,
    description: "Perfect for small pharmacies getting started.",
    features: [
      { text: "Fast checkouts", included: true },
      { text: "Stock & expiry alerts", included: true },
      { text: "Offline invoicing", included: true },
      { text: "Multi-branch sync", included: false },
      { text: "Staff & shift controls", included: false },
      { text: "App orders & pickup", included: false },
      { text: "B2B & e-Rx integrations", included: false },
      { text: "AI restocking & insights", included: false },
      { text: "Audit & enterprise security", included: false },
      { text: "Multi branch management", included: false },
    ],
  },
  {
    name: "Pro",
    monthlyPrice: 3500,
    annualPrice: 35000,
    description: "Perfect for expanding pharmacies.",
    highlighted: true,
    features: [
      { text: "Everything in Basic Plan", included: true },
      { text: "Stock & expiry alerts", included: true },
      { text: "Offline invoicing", included: true },
      { text: "Multi-branch sync", included: true },
      { text: "Staff & shift controls", included: true },
      { text: "App orders & pickup", included: true },
      { text: "B2B & e-Rx integrations", included: true },
      { text: "AI restocking & insights", included: true },
      { text: "Audit & enterprise security", included: true },
      { text: "Multi branch management", included: false },
    ],
  },
  {
    name: "Enterprise",
    monthlyPrice: 4500,
    annualPrice: 45000,
    description: "Perfect for multi branch pharmacies.",
    features: [
      { text: "Fast checkouts", included: true },
      { text: "Stock & expiry alerts", included: true },
      { text: "Offline invoicing", included: true },
      { text: "Multi-branch sync", included: true },
      { text: "Staff & shift controls", included: true },
      { text: "App orders & pickup", included: true },
      { text: "B2B & e-Rx integrations", included: true },
      { text: "AI restocking & insights", included: true },
      { text: "Audit & enterprise security", included: true },
      { text: "Multi branch management", included: true },
    ],
  },
];

const PricingSection: React.FC = () => {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const getCardWidth = () => {
    if (!containerRef.current) return 300;
    return containerRef.current.offsetWidth * 0.85;
  };

  const scrollTo = (index: number) => {
    const container = containerRef.current;
    if (!container) return;

    const cardWidth = getCardWidth();

    container.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  const next = () => {
    if (activeIndex < plans.length - 1) {
      scrollTo(activeIndex + 1);
    }
  };

  const prev = () => {
    if (activeIndex > 0) {
      scrollTo(activeIndex - 1);
    }
  };

  const price = (plan: Plan) =>
    billing === "monthly" ? plan.monthlyPrice : plan.annualPrice;

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <span style={styles.badge}>ZAMPOS PRICING</span>
          <h2 style={styles.title}>Plans For Every Pharmacy</h2>
          <p style={styles.subtitle}>
            Select the perfect plan that suits your need for smooth pharmacy operations
          </p>

          <div style={styles.toggle}>
            <button
              style={{
                ...styles.toggleBtn,
                ...(billing === "monthly" ? styles.activeToggle : {}),
              }}
              onClick={() => setBilling("monthly")}
            >
              Monthly
            </button>
            <button
              style={{
                ...styles.toggleBtn,
                ...(billing === "annual" ? styles.activeToggle : {}),
              }}
              onClick={() => setBilling("annual")}
            >
              Annual
            </button>
          </div>
        </div>

        {isMobile && (
          <>
            <div style={styles.arrowLeft} onClick={prev}>
              <img src={leftArrow} width={24} />
            </div>

            <div style={styles.arrowRight} onClick={next}>
              <img src={rightArrow} width={24} />
            </div>
          </>
        )}

        <div
          ref={containerRef}
          style={{
            ...styles.cardContainer,
            flexWrap: isMobile ? "nowrap" : "wrap",
            overflowX: "hidden",
            justifyContent: isMobile ? "flex-start" : "center",
          }}
        >
          {plans.map((plan) => {
            const isPro = plan.highlighted;

            return (
              <div
                key={plan.name}
                style={{
                  ...styles.card,
                  width: isMobile ? "85%" : "250px",
                  ...(isPro ? styles.highlightedCard : {}),
                }}
              >
                <div style={styles.topBlock}>
                  <h3
                    style={{
                      ...styles.planName,
                      color: isPro ? "#fff" : "#000",
                    }}
                  >
                    {plan.name}
                  </h3>

                  <p style={styles.priceWrapper}>
                    <span style={{ color: isPro ? "#DEE3E9" : "#9CA3AF" }}>
                      ₦
                    </span>
                    <span style={{ color: isPro ? "#fff" : "#000" }}>
                      {price(plan).toLocaleString()}
                    </span>
                    <span style={{ color: isPro ? "#DEE3E9" : "#9CA3AF" }}>
                      / {billing === "monthly" ? "Month" : "Year"}
                    </span>
                  </p>

                  <p
                    style={{
                      ...styles.description,
                      color: isPro ? "#DEE3E9" : "#6B7280",
                    }}
                  >
                    {plan.description}
                  </p>
                </div>

                <button
                  style={{
                    ...styles.button,
                    ...(isPro ? styles.highlightedButton : {}),
                  }}
                >
                  Get started
                </button>

                <ul style={styles.featureList}>
                  {plan.features.map((f, i) => (
                    <li key={i} style={styles.featureItem}>
                      <img
                        src={f.included ? checkIcon : uncheckIcon}
                        style={styles.icon}
                      />
                      <span style={styles.featureText(isPro, f.included)}>
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

/* ================= FIXED STYLES ================= */

const styles: any = {
  section: {
    padding: "40px 20px 80px",
    background: "#F9F9FA",
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },

    container: {
    width: "100%",
    maxWidth: "1190px",
    margin: "0 auto",
    background: "linear-gradient(180deg, #dfdeee 0%, #F3F3FE 30%, #ffffff 100%)",
    borderRadius: "16px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.05)",
    padding: "60px 0px",
    textAlign: "center",
  },

  header: { marginBottom: "40px" },

  badge: {
    background: "#ECFFFE",
    color: "#201E82",
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "12px",
  },

  title: { fontSize: "25px", margin: "12px 0", color: "#141414", fontWeight: 400, },

  subtitle: { fontSize: "14px", color: "#616161" },

  toggle: {
  display: "inline-flex",
  background: "#e5e7eb",
  borderRadius: "5px",
  padding: "0px",
  gap: "4px",
  marginTop: "20px"
},

toggleBtn: {
  padding: "8px 20px",
  border: "none",
  background: "transparent",
  cursor: "pointer",
  borderRadius: "10px",
  transition: "0.2s ease",
},

activeToggle: {
  background: "#fff",
  borderRadius: "5px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
},

 

  cardContainer: {
    display: "flex",
    gap: "15px",
    overflowX: "hidden",
  },

  card: {
    minHeight: "520px",
    background: "#fff",
    borderRadius: "14px",
    padding: "20px",
    flexShrink: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  highlightedCard: {
      background: "linear-gradient(180deg, #092cf0 0%, #1f2a8a 50%, #0f1a5a 70%)",
   },

  topBlock: {
    textAlign: "left",
  },

  planName: { fontSize: "20px", fontWeight: 400, marginBottom: "20px" },

  priceWrapper: {
    display: "flex",
    gap: "6px",
    fontSize: "22px",
    fontWeight: 600,
  },

  description: {
    fontSize: "13px",
    marginTop: "6px",
    marginBotton: "0px",
  },

  button: {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    background: "#fff",
  },

  highlightedButton: { background: "#fff" },

  featureList: {
    listStyle: "none",
    padding: 0,
    marginTop: "5px",
  },

  featureItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "8px",
    marginBottom: "6px",
  },

  icon: {
    width: "16px",
  },

  featureText: (isPro: boolean, included: boolean) => ({
    color: isPro
      ? included
        ? "#fff"
        : "#bbb"
      : included
      ? "#000"
      : "#9CA3AF",
    lineHeight: "1.4",
    textAlign: "left",
    flex: 1,
    wordBreak: "break-word",
    display: "inline-block",
    fontSize: "15px",
  }),

  arrowLeft: {
    position: "absolute",
    left: "10px",
    top: "55%",
    cursor: "pointer",
    zIndex: 10,
  },

  arrowRight: {
    position: "absolute",
    right: "10px",
    top: "55%",
    cursor: "pointer",
    zIndex: 10,
  },
};