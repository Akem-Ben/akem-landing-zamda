import React from "react";

import amazon from "../../assets/amazon.png";
import axon from "../../assets/axon.png";
import hormel from "../../assets/hormel.png";
import mercedes from "../../assets/mercedes.png";

const brands = [amazon, axon, hormel, amazon, axon, mercedes, amazon, mercedes];

const Hero: React.FC = () => {
  return (
    <section style={styles.trustedFull}>
      <p style={styles.trustedText}>Trusted by these Pharmacies</p>

      <div style={styles.brandTrack}>
        {[...brands, ...brands].map((logo, i) => (
          <img key={i} src={logo} style={styles.logo} />
        ))}
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
    overflow: "hidden",
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
    width: "max-content",
    animation: "scroll 15s linear infinite",
  },

  logo: {
    height: "25px",
    opacity: 0.9,
  },
};