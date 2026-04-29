import React, { useEffect, useState } from "react";

import med1 from "../../assets/med1.png";
import records from "../../assets/records.png";
import doctor from "../../assets/doctor.png";
import appointment from "../../assets/appointment.png";
import med2 from "../../assets/med2.png";
import assistant from "../../assets/assistant.png";

const ZamdaFeatures: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 700);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section style={styles.container}>
      <p style={styles.top}>Features</p>

      {/* ✅ MOBILE HEADING CONTROL */}
      <h2 style={styles.heading}>
        {isMobile ? (
          <>
            Everything you need to <br />
            know about the Zamda <br />
            Mobile App
          </>
        ) : (
          <>
            Everything you need to know <br />
            about the Zamda Mobile App
          </>
        )}
      </h2>

      {/* ================= MOBILE LAYOUT ================= */}
      {isMobile ? (
        <div style={styles.mobileStack}>
          {features.map((item, i) => (
            <FeatureCard key={i} item={item} />
          ))}
        </div>
      ) : (
        /* ================= DESKTOP LAYOUT (UNCHANGED) ================= */
        <div style={styles.columns}>
          <div style={styles.column}>
            <FeatureCard item={features[0]} />
            <FeatureCard item={features[3]} />
          </div>

          <div style={styles.column}>
            <FeatureCard item={features[1]} tall />
            <FeatureCard item={features[4]} />
          </div>

          <div style={styles.column}>
            <FeatureCard item={features[2]} />
            <FeatureCard item={features[5]} />
          </div>
        </div>
      )}

      <button style={styles.button}>Explore Full Features</button>
    </section>
  );
};

export default ZamdaFeatures;

/* COMPONENT */
const FeatureCard = ({
  item,
  tall = false,
}: {
  item: any;
  tall?: boolean;
}) => (
  <div
    style={{
      ...styles.card,
      background: item.bg,
      ...(tall ? styles.tallCard : {}),
    }}
  >
    <div>
      <h3 style={styles.title}>{item.title}</h3>
      <p style={styles.text}>{item.text}</p>
    </div>

    <img src={item.image} style={styles.image} />
  </div>
);

/* DATA */

const features = [
  {
    title: "Medicine Ordering & Delivery",
    text: "Order medicines from trusted pharmacies and get them delivered to your doorstep.",
    image: med1,
    bg: "#E3EAFD",
  },
  {
    title: "Health Records Access",
    text: "Secure access to your personal health records and history.",
    image: records,
    bg: "#FFFFFF",
  },
  {
    title: "Doctor Consultation",
    text: "Connect with healthcare professionals for online consultations and advice.",
    image: doctor,
    bg: "#E3EAFD",
  },
  {
    title: "Appointment Booking",
    text: "Schedule appointments with doctors or health services with ease.",
    image: appointment,
    bg: "#FFFFFF",
  },
  {
    title: "Medicine Ordering & Delivery",
    text: "Order medicines from trusted pharmacies and get them delivered to your doorstep.",
    image: med2,
    bg: "#E3EAFD",
  },
  {
    title: "Zam AI Health Assistant",
    text: "Your personal AI assistant for health queries, symptom checks, and wellness tips.",
    image: assistant,
    bg: "#FFFFFF",
  },
];

/* STYLES */

const styles: any = {
  container: {
    padding: "50px 20px",
    textAlign: "center",
    background: "#f9faf9",
  },

  top: {
    fontSize: "12px",
    fontWeight: 600,
    color: "#201E82",
    background: "#ECFFFE",
    padding: "6px 14px",
    borderRadius: "20px",
    display: "inline-block",
    marginBottom: "12px",
  },

  heading: {
    fontSize: "28px",
    fontWeight: 400,
    color: "#141414",
    marginBottom: "50px",
    lineHeight: "1.3",
  },

  /* DESKTOP */
  columns: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "22px",
    maxWidth: "1000px",
    margin: "0 auto",
    alignItems: "start",
  },

  column: {
    display: "flex",
    flexDirection: "column",
    gap: "22px",
  },

  /* MOBILE STACK */
  mobileStack: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    maxWidth: "500px",
    margin: "0 auto",
  },

  card: {
    padding: "20px",
    borderRadius: "16px",
    textAlign: "left",
    minHeight: "260px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  tallCard: {
    minHeight: "380px",
  },

  title: {
    fontSize: "16px",
    fontWeight: 600,
    marginBottom: "10px",
    lineHeight: "1.4",
    color: "#141414",
  },

  text: {
    fontSize: "14px",
    color: "#666",
    lineHeight: "1.6",
  },

  image: {
    width: "130px",
    marginTop: "20px",
    alignSelf: "center",
  },

  button: {
    marginTop: "42px",
    background: "#201E82",
    color: "#fff",
    padding: "14px 24px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: 500,
  },
};