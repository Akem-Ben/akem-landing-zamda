import React, { useEffect, useState } from "react";
import phoneImage from "../../assets/zamda-works-phone.png";

const ZamdaWorks: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        
        {/* ✅ BADGE (MOVE UP ON MOBILE) */}
        <span
          style={{
            ...styles.badge,
            ...(isMobile && {
              marginTop: "0px",
              marginBottom: "10px",
              position: "relative",
              top: "-10px", // 👈 THIS moves it up
            }),
          }}
        >
          How it works
        </span>

        <h2 style={styles.title}>
          Learn How the Zamda <br /> Mobile App Works
        </h2>

        <div
          style={{
            ...styles.content,
            ...(isMobile && {
              flexDirection: "column",
              alignItems: "stretch",
              gap: "28px",
            }),
          }}
        >
          
          {/* LEFT */}
          <div style={styles.column}>
            <Step
              num="1"
              title="Find Your Medicine Easily"
              text="Users open the Zamda app and search for medicines by name, category, symptoms, or health condition."
              isMobile={isMobile}
            />

            <Step
              num="2"
              title="Upload a Prescription"
              text="If a medicine requires a prescription, users simply snap or upload it in the app. Zamda securely sends it to a nearby partner pharmacy for verification and fulfilment."
              isMobile={isMobile}
            />

            <Step
              num="3"
              title="Get Matched to the Nearest Pharmacy"
              text="Using location services, Zamda connects users to the closest verified pharmacy with the medicine in stock."
              isMobile={isMobile}
            />
          </div>

          {/* CENTER (HIDDEN ON MOBILE) */}
          {!isMobile && <img src={phoneImage} style={styles.phone} />}

          {/* RIGHT */}
          <div style={styles.column}>
            <Step
              num="4"
              title="Choose Delivery or Pickup"
              text={
                <>
                  Users select what works best for them:
                  <ul style={styles.list}>
                    <li>Home delivery</li>
                    <li>In-store pickup</li>
                  </ul>
                </>
              }
              isMobile={isMobile}
            />

            <Step
              num="5"
              title="Pay Securely in the App"
              text="Users pay with card, bank transfer, mobile money, or wallet balance. Receipts and invoices are automatically saved for future reference."
              isMobile={isMobile}
            />

            <Step
              num="6"
              title="Track Orders in Real Time"
              text="From order confirmation to dispatch and delivery, users get live updates inside the app."
              isMobile={isMobile}
            />
          </div>
        </div>

        {/* BUTTON */}
        {!isMobile && (
          <button style={styles.button}>Download Now</button>
        )}
      </div>
    </section>
  );
};

export default ZamdaWorks;

/* ================= STEP ================= */

const Step = ({ num, title, text, isMobile }: any) => (
  <div
    style={{
      ...styles.step,
      ...(isMobile && {
        alignItems: "flex-start",
        textAlign: "left",
      }),
    }}
  >
    <div style={styles.circle}>{num}</div>

    <div style={styles.stepContent}>
      <h4 style={styles.stepTitle}>{title}</h4>
      <div style={styles.stepText as any}>{text}</div>
    </div>
  </div>
);

/* ================= STYLES ================= */

const styles: any = {
  section: {
    padding: "70px 20px",
    display: "flex",
    justifyContent: "center",
    background: "#F9F9FA",
  },

  container: {
    maxWidth: "1000px",
    width: "100%",
    background:
      "linear-gradient(180deg, #dfdeee 15%, #F3F3FE 30%, #ffffff 100%)",
    borderRadius: "20px",
    padding: "64px 48px",
    textAlign: "center",
  },

  badge: {
    fontSize: "12px",
    padding: "6px 14px",
    borderRadius: "15px",
    background: "#ECFFFE",
    color: "#201E82",
    fontWeight: 600,
    display: "inline-block",
  },

  title: {
    fontSize: "20px",
    fontWeight: 400,
    margin: "20px 0 48px",
    lineHeight: "1.3",
    color: "#141414",
  },

  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "40px",
  },

  column: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "34px",
    textAlign: "left",
  },

  step: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  circle: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    background: "#201E82",
    color: "#fff",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  stepContent: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },

  stepTitle: {
    fontSize: "16px",
    fontWeight: 600,
    color: "#012621",
  },

  stepText: {
    fontSize: "14px",
    color: "#616161",
    lineHeight: "1.6",
    marginTop: "10px",
  },

  list: {
    marginTop: "6px",
    paddingLeft: "18px",
    color: "#616161",
  },

  phone: {
    width: "340px",
  },

  button: {
    marginTop: "56px",
    padding: "12px 42px",
    background: "#201E82",
    color: "#fff",
    borderRadius: "8px",
    border: "none",
    fontSize: "12px",
  },
};