import React, { useEffect, useState } from "react";
import checkIcon from "../../assets/check-fill.png";
import dropdownIcon from "../../assets/dropdown.png";

const MessageUs: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [countryCode, setCountryCode] = useState("+234");

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section style={isMobile ? styles.sectionMobile : styles.section}>
      <div style={isMobile ? styles.containerMobile : styles.container}>
        {!isMobile && (
          <div style={styles.left}>
            <span style={styles.badge}>Send us a Message</span>
            <h2 style={styles.title}>Tell Us What's On Your Mind</h2>
            <p style={styles.text}>
              Fill out the form and our team will get back to you within 24 hours.
              For urgent matters, reach us directly via WhatsApp or phone.
            </p>
            <div style={styles.points}>
              {["Quick Response guaranteed", "Dedicated support specialists", "Your information is protected"].map((item, i) => (
                <div key={i} style={styles.point}>
                  <img src={checkIcon} style={styles.checkIcon} alt="check" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={isMobile ? styles.rightMobile : styles.right}>
          {isMobile && (
            <div style={styles.mobileHeader}>
              <span style={styles.badgeMobile}>Send us a Message</span>
              <h2 style={styles.titleMobile}>Tell Us What's On Your Mind</h2>
              <p style={styles.textMobile}>
                Fill out the form and our team will get back to you within 24 hours.
              </p>
            </div>
          )}

          <div style={isMobile ? styles.formCardMobile : styles.formCard}>
            <form style={isMobile ? styles.formMobile : styles.form}>
              {/* Full Name */}
              <div style={styles.inputGroup}>
                <label style={styles.label}>Full Name*</label>
                <input 
                  placeholder="Enter your full name" 
                  style={isMobile ? styles.inputMobile : styles.input} 
                />
              </div>

              {/* Company Name - separate row on mobile */}
              <div style={styles.inputGroup}>
                <label style={styles.label}>Company Name</label>
                <input 
                  placeholder="Enter company name" 
                  style={isMobile ? styles.inputMobile : styles.input} 
                />
              </div>

              {/* Phone Number - separate row on mobile */}
              <div style={styles.inputGroup}>
                <label style={styles.label}>Phone Number*</label>
                <div style={isMobile ? styles.phoneWrapperMobile : styles.phoneWrapper}>
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
                    <img src={dropdownIcon} style={styles.dropdownIcon} alt="dropdown" />
                  </div>
                  <input 
                    placeholder="Phone Number" 
                    style={styles.phoneInput} 
                  />
                </div>
              </div>

              {/* Email */}
              <div style={styles.inputGroup}>
                <label style={styles.label}>Email*</label>
                <input 
                  placeholder="example@gmail.com" 
                  style={isMobile ? styles.inputMobile : styles.input} 
                />
              </div>

              {/* Message */}
              <div style={styles.inputGroup}>
                <label style={styles.label}>Message*</label>
                <textarea 
                  placeholder="Tell us how we can help you..." 
                  style={isMobile ? styles.textareaMobile : styles.textarea} 
                  rows={isMobile ? 4 : 4}
                />
              </div>

              {/* Send Button */}
              <button style={isMobile ? styles.buttonMobile : styles.button}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageUs;

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    width: "100%",
    padding: "60px 20px 100px",
    background: "#F2F1FD",
  },
  sectionMobile: {
    width: "100%",
    padding: "30px 16px 60px",
    background: "#F2F1FD",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    gap: "40px",
    alignItems: "stretch",
  },
  containerMobile: {
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
  },
  left: {
    flex: 0.8,
    padding: "20px 0",
  },
  badge: {
    background: "#ECFFFE",
    color: "#201E82",
    padding: "6px 14px",
    borderRadius: "20px",
    fontSize: "12px",
    display: "inline-block",
    marginBottom: "16px",
    fontWeight: 600,
  },
  badgeMobile: {
    background: "#ECFFFE",
    color: "#201E82",
    padding: "4px 12px",
    borderRadius: "20px",
    fontSize: "10px",
    display: "inline-block",
    marginBottom: "12px",
    fontWeight: 600,
  },
  title: {
    fontSize: "32px",
    fontWeight: 600,
    marginBottom: "16px",
    color: "#141414",
  },
  titleMobile: {
    fontSize: "20px",
    fontWeight: 600,
    marginBottom: "10px",
    color: "#141414",
  },
  text: {
    fontSize: "14px",
    color: "#616161",
    marginBottom: "30px",
    lineHeight: 1.5,
  },
  textMobile: {
    fontSize: "12px",
    color: "#616161",
    marginBottom: "20px",
    lineHeight: 1.5,
    padding: "0 8px",
  },
  points: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  point: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "14px",
    color: "#141414",
  },
  checkIcon: {
    width: "18px",
  },
  right: {
    flex: 1,
    background: "#fff",
    borderRadius: "20px",
    padding: "32px",
  },
  rightMobile: {
    width: "100%",
    background: "transparent",
  },
  mobileHeader: {
    textAlign: "center",
    marginBottom: "20px",
  },
  formCard: {
    width: "100%",
  },
  formCardMobile: {
    width: "100%",
    background: "#fff",
    borderRadius: "16px",
    padding: "20px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },
  formMobile: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  label: {
    fontSize: "12px",
    fontWeight: 600,
    color: "#141414",
    textAlign: "left",
  },
  input: {
    padding: "12px 14px",
    borderRadius: "8px",
    border: "1px solid #e5e7eb",
    fontSize: "14px",
    outline: "none",
    background: "#fff",
    width: "100%",
  },
  inputMobile: {
    padding: "12px 14px",
    borderRadius: "8px",
    border: "1px solid #e5e7eb",
    fontSize: "14px",
    outline: "none",
    background: "#fff",
    width: "100%",
  },
  textarea: {
    padding: "12px 14px",
    borderRadius: "8px",
    border: "1px solid #e5e7eb",
    resize: "vertical",
    background: "#fff",
    fontSize: "14px",
    width: "100%",
    fontFamily: "inherit",
  },
  textareaMobile: {
    padding: "12px 14px",
    borderRadius: "8px",
    border: "1px solid #e5e7eb",
    resize: "vertical",
    background: "#fff",
    fontSize: "14px",
    width: "100%",
    fontFamily: "inherit",
    minHeight: "100px",
  },
  phoneWrapper: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    overflow: "hidden",
    background: "#fff",
  },
  phoneWrapperMobile: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    overflow: "hidden",
    background: "#fff",
    width: "100%",
  },
  countryBox: {
    display: "flex",
    alignItems: "center",
    background: "#DEE3E9",
    padding: "10px 12px",
    gap: "6px",
    position: "relative",
  },
  select: {
    border: "none",
    background: "transparent",
    outline: "none",
    fontSize: "14px",
    fontWeight: 600,
    appearance: "none",
    paddingRight: "16px",
    cursor: "pointer",
  },
  dropdownIcon: {
    width: "10px",
    position: "absolute",
    right: "8px",
    pointerEvents: "none",
  },
  phoneInput: {
    flex: 1,
    border: "none",
    outline: "none",
    padding: "12px 14px",
    fontSize: "14px",
    background: "#fff",
  },
  button: {
    marginTop: "8px",
    padding: "14px",
    background: "#201E82",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: "14px",
  },
  buttonMobile: {
    marginTop: "8px",
    padding: "14px",
    background: "#201E82",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: "14px",
    width: "100%",
  },
};