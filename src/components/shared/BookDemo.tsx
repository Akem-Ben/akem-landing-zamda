import React, { useState, useEffect } from "react";
import demoImage from "../../assets/demo-image.png";
import dropdownIcon from "../../assets/dropdown.png";

const BookDemoSection: React.FC = () => {
  const [countryCode, setCountryCode] = useState("+234");
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const check = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width <= 820);
    };

    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section style={styles.section}>
      <div
        style={{
          ...styles.wrapper,
          flexDirection: isMobile ? "column" : "row",
          padding: isMobile ? "20px" : "40px",
        }}
      >
        {/* LEFT CARD */}
        <div
          style={{
            ...styles.leftCard,
            width: "100%",
          }}
        >
          <div style={styles.leftContent}>
            <h3 style={styles.leftTitle}>Book a Demo For Free</h3>
            <p style={styles.leftSub}>
              Our team will guide you through setup
            </p>
          </div>

          <img
            src={demoImage}
            style={{
              ...styles.image,
              width: isMobile ? "100%" : "80%",
              alignSelf: isMobile ? "center" : "flex-start",
            }}
          />
        </div>

        {/* RIGHT CARD */}
        <div
          style={{
            ...styles.rightCard,
            width: "100%",
            padding: isMobile ? "20px" : "25px",
          }}
        >
          <form style={styles.form}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                style={styles.input}
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Email</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                style={styles.input}
              />
            </div>

            {/* FIXED ROW */}
            <div
              style={{
                ...styles.row,
                flexDirection: isMobile || isTablet ? "column" : "row",
              }}
            >
              <div style={{ ...styles.inputGroup, flex: 1 }}>
                <label style={styles.label}>Company Name</label>
                <input
                  type="text"
                  placeholder="Enter company name"
                  style={styles.input}
                />
              </div>

              <div style={{ ...styles.inputGroup, flex: 1 }}>
                <label style={styles.label}>Phone Number</label>

                <div style={styles.phoneWrapper}>
                  <div style={styles.countryBox}>
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      style={styles.select}
                    >
                      <option value="+234">+234</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                    </select>

                    <img
                      src={dropdownIcon}
                      style={styles.dropdownIcon}
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Phone Number"
                    style={styles.phoneInput}
                  />
                </div>
              </div>
            </div>

            <button
              style={{
                ...styles.button,
                width: "100%",
              }}
            >
              Book Demo
            </button>

            <p style={styles.helper}>
              Our team will guide you through setup
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookDemoSection;

/* ================= STYLES ================= */

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    padding: "50px 20px",
    display: "flex",
    justifyContent: "center",
    background: "#F9F9FA",
  },

  wrapper: {
    width: "100%",
    maxWidth: "1190px",
    background: "#F0EFFD",
    borderRadius: "18px",
    display: "flex",
    gap: "30px",
    alignItems: "stretch",
  },

  leftCard: {
    flex: 1,
    background: "#F9F9FA",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  },

  leftContent: {
    padding: "20px",
  },

  leftTitle: {
    fontSize: "18px",
    fontWeight: 600,
    color: "#201E82",
    marginBottom: "6px",
  },

  leftSub: {
    fontSize: "12px",
    color: "#64748b",
  },

  image: {
    height: "auto",
    display: "block",
    objectFit: "cover",
  },

  rightCard: {
    flex: 1,
    background: "#F9F9FA",
    borderRadius: "14px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },

  label: {
    fontSize: "12px",
    color: "#141414",
    fontWeight: 700,
  },

  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #e5e7eb",
    fontSize: "13px",
    height: "42px",
    outline: "none",
    color: "#141414",
  },

  row: {
    display: "flex",
    gap: "12px",
  },

  phoneWrapper: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    overflow: "hidden",
    height: "42px",
  },

  countryBox: {
    display: "flex",
    alignItems: "center",
    background: "#DEE3E9",
    padding: "0 8px",
    gap: "6px",
    borderRight: "1px solid #e5e7eb",
    height: "70%",
    position: "relative",
    marginLeft: "5px",
    borderRadius: "5px",
  },

  select: {
    border: "none",
    outline: "none",
    background: "transparent",
    fontSize: "13px",
    appearance: "none",
    cursor: "pointer",
    paddingRight: "15px",
    color: "#201E82",
    fontWeight: 700,
  },

  dropdownIcon: {
    width: "8px",
    height: "8px",
    position: "absolute",
    right: "8px",
    pointerEvents: "none",
  },

  phoneInput: {
    flex: 1,
    width: "100%",
    padding: "0 12px",
    border: "none",
    outline: "none",
    fontSize: "13px",
  },

  button: {
    marginTop: "10px",
    padding: "12px",
    background: "#201E82",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: 500,
  },

  helper: {
    marginTop: "8px",
    textAlign: "center",
    fontSize: "12px",
    color: "#616161",
  },
};