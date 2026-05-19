import React from "react";

const brands = [
  "BENBOL PHARM.",
  "NASCARE PHARM.",
  "JOLUFED PHARM.",
  "SYLNEY PHARM.",
  "ROCKAID PHARM.",
  "PAUPRIX PHARM.",
  "EPHRE-KINGS PHARM.",
];

const Hero: React.FC = () => {
  return (
    <section style={styles.trustedFull}>
      <div style={styles.container}>
        <p style={styles.trustedText}>Trusted by these Pharmacies</p>
        {/* Added a keyframe animation for the scrolling text */}
        <style>{`@keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(calc(-300px * ${brands.length})); } }`}</style>

        <div style={styles.brandTrack}>
          {[...brands, ...brands].map((logo, i) => (
            <span key={i} style={styles.logo}>
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

const styles: { [key: string]: React.CSSProperties } = {
  trustedFull: {
    width: "100%",
    marginLeft: "calc(-50vw + 50%)",
    background:
      "linear-gradient(90deg, #0f1a5a 0%, #1f2a8a 50%, #0f1a5a 100%)",
    boxShadow: "inset 0 0 30px rgba(0,0,0,0.2)",
    padding: "20px 0",
  },

  trustedText: {
    color: "#fff",
    marginBottom: "25px",
    fontSize: "20px",
    textAlign: "center",
  },

  brandTrack: {
    display: "flex",
    gap: "50px",
    width: `calc(300px * ${brands.length * 2})`, // Adjust width based on item + gap
    animation: "scroll 15s linear infinite",
  },

  logo: {
    height: "auto",
    opacity: 0.6,
    filter: "blur(0.5px)",
    color: "#fff",
    fontSize: "20px",
    fontWeight: 600,
    flexShrink: 0,
    width: "250px",
    textAlign: "center",
  },

  container: {
    width: "100%",
    maxWidth: "1190px",
    margin: "0 auto",
    padding: "0 20px",
    overflow: "hidden",
    WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
    maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
  },
};