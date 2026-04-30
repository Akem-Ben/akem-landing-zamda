import React, { useState, useEffect } from "react";
import plusIcon from "../../assets/arrow-down.png";
import minusIcon from "../../assets/arrow-up.png";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "What is Zamda Health?",
    answer:
      "Zamda Health is a platform designed to help pharmacies manage operations, improve efficiency, and provide better services to customers.",
  },
  {
    question: "What is the Zamda Mobile App used for?",
    answer:
      "The Zamda Mobile App is for customers. It allows patients to order medicines, upload prescriptions, set refill reminders, and choose delivery or pickup directly from your pharmacy. Orders from the app flow straight into ZamPOS for easy processing.",
  },
  {
    question: "Can ZamPOS work without internet?",
    answer:
      "Yes, ZamPOS can still function offline and sync data automatically once internet connection is restored.",
  },
  {
    question: "Is ZamPOS difficult to set up or train my staff on?",
    answer:
      "Not at all. ZamPOS is designed to be user-friendly, and onboarding support is provided to ensure your team gets started quickly.",
  },
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section style={styles.section}>
      <div
        style={{
          ...styles.container,
          flexDirection: isMobile ? "column" : "row",
          padding: isMobile ? "30px 20px" : "50px",
        }}
      >
        {/* LEFT */}
        <div style={styles.left}>
          <div>

            <span style={{ ...styles.badge, marginLeft: isMobile ? "135px" : "0" }}>
              FAQ
            </span>

            <h2
              style={{
                ...styles.title,
                textAlign: isMobile ? "center" : "left",
              }}
              >
              Lets Answers some of your<br /> Questions
            </h2>
          </div>

          <div style={styles.buttonGroup}>
            <button
              style={{
                ...styles.primaryBtn,
                width: isMobile ? "100%" : "230px",
              }}
            >
              Download Zamda Mobile App
            </button>

            <span style={{ ...styles.or, marginLeft: isMobile ? "150px" : "110px" }}>
              Or
            </span>

            <button
              style={{
                ...styles.secondaryBtn,
                width: isMobile ? "100%" : "230px",
              }}
            >
              Request ZamPOS Demo
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div style={styles.right}>
          {faqs.map((faq, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                style={{
                  ...styles.card,
                  ...(isActive && styles.activeCard),
                }}
              >
                <div style={styles.questionRow} onClick={() => toggle(index)}>
                  <span style={styles.question}>{faq.question}</span>

                  <img
                    src={isActive ? minusIcon : plusIcon}
                    style={{
                      ...styles.icon,
                      transform: isActive ? "scale(0.8)" : "scale(0.7)",
                    }}
                  />
                </div>

                <div
                  style={{
                    ...styles.answerWrapper,
                    maxHeight: isActive ? "200px" : "0px",
                    opacity: isActive ? 1 : 0,
                  }}
                >
                  <p style={styles.answer}>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

/* ================= STYLES ================= */

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    padding: "70px 20px",
    display: "flex",
    justifyContent: "center",
    background: "#F9F9FA",
  },

  container: {
    width: "100%",
    maxWidth: "1190px",
    display: "flex",
    gap: "48px",
    background: "#fff",
    borderRadius: "18px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.05)",
    alignItems: "stretch",
  },

  left: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  buttonGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  right: {
    flex: 2,
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },

  badge: {
    fontSize: "12px",
    marginBottom: "12px",
    display: "inline-block",
    background: "#ECFFFE",
    color: "#201E82",
    padding: "6px 12px",
    borderRadius: "20px",
    fontWeight: 600,
  },

  title: {
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "1.3",
    marginBottom: "24px",
    color: "#141414",
  },

  primaryBtn: {
    background: "#201E82",
    color: "#fff",
    padding: "12px 20px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "12px",
    fontWeight: 500,
  },

  secondaryBtn: {
    background: "#fff",
    border: "1.5px solid #DEE3E9",
    padding: "12px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "12px",
    fontWeight: 500,
  },

  or: {
    color: "#141414",
    fontSize: "14px",
    fontWeight: 500,
  },

  card: {
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    padding: "18px 20px",
    cursor: "pointer",
    background: "#fff",
  },

  activeCard: {
    background: "#f9fafb",
  },

  questionRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  question: {
    fontSize: "15px",
    fontWeight: 500,
    color: "#141414",
  },

  icon: {
    width: "16px",
    height: "16px",
    objectFit: "contain",
    transition: "transform 0.7s ease",
  },

  answerWrapper: {
    overflow: "hidden",
    transition: "all 0.7s ease",
  },

  answer: {
    marginTop: "12px",
    fontSize: "14px",
    color: "#616161",
    lineHeight: "1.6",
  },
};