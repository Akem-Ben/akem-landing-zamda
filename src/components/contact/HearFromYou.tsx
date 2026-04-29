// import React, { useEffect, useState } from "react";
// import mainImage from "../../assets/hear.png";
// import whatsapp from "../../assets/whatsapp.png";
// import ai from "../../assets/ai.png";

// const HearFromYou: React.FC = () => {
//   const [screenWidth, setScreenWidth] = useState(window.innerWidth);

//     useEffect(() => {
//       const handleResize = () => {
//         setScreenWidth(window.innerWidth);
//       };
  
//       window.addEventListener("resize", handleResize);
//       return () => window.removeEventListener("resize", handleResize);
//     }, []);

//       const isMobile = screenWidth <= 768;
//   // const isTablet = screenWidth > 768 && screenWidth <= 1024;

//    const dynamicStyles = {
//     sideImgLeft: {
//       ...styles.sideImg,
//       borderBottomLeftRadius: isMobile ? "300px" : "12px",
//     },
//     sideImgRight: {
//       ...styles.sideImg,
//       borderBottomRightRadius: isMobile ? "300px" : "12px",
//     },
//   };
    
//   return (
//     <>
//       {/* Fixed floating icons */}
//       <img src={whatsapp} style={styles.whatsapp} alt="whatsapp" />
//       <img src={ai} style={styles.ai} alt="ai" />

//       <section style={styles.container}>
//         <h2 style={styles.heading}>We'd Love to Hear From You</h2>
//         <p style={styles.subtext}>
//           Whether you have a question about our products, want to book a demo,
//           or just want to say hello — our team is here and ready to help.
//         </p>

//         <div style={styles.images}>
//           <img src={mainImage} style={dynamicStyles.sideImgLeft} alt="team" />
//           <img src={mainImage} style={styles.centerImg} alt="team center" />
//           <img src={mainImage} style={dynamicStyles.sideImgRight} alt="team" />
//         </div>
//       </section>
//     </>
//   );
// };

// export default HearFromYou;

// const styles: { [key: string]: React.CSSProperties } = {
//   container: {
//     position: "relative",
//     background: "#f5f6ff",
//     padding: "40px 0 60px",         // no horizontal padding — let images touch edges
//     borderRadius: "60px 60px 0 0",
//     textAlign: "center",
//     overflow: "hidden",
//   },
//   heading: {
//     fontSize: "clamp(26px, 6vw, 36px)",
//     fontWeight: 700,
//     color: "#141414",
//     padding: "0 20px",
//   },
//   subtext: {
//     maxWidth: "620px",
//     margin: "12px auto 40px",
//     color: "#616161",
//     lineHeight: "1.6",
//     padding: "0 24px",
//     fontSize: "clamp(14px, 3.5vw, 16px)",
//   },
//   images: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "flex-end",
//     gap: "8px",
//     paddingLeft: "0",
//     paddingRight: "0",
//     // Allow side images to bleed slightly off screen
//     marginLeft: "-30px",
//     marginRight: "-30px",
//   },
//   sideImg: {
//     width: "30%",                   // slim on mobile
//     maxWidth: "225px",
//     height: "280px",
//     objectFit: "cover",
//     objectPosition: "center top",
//     opacity: 0.85,
//     borderRadius: "12px",
//     flexShrink: 0,
//   },
//   centerImg: {
//     width: "42%",                   // wider and taller — the hero
//     maxWidth: "270px",
//     height: "360px",
//     objectFit: "cover",
//     objectPosition: "center top",
//     borderRadius: "12px",
//     boxShadow: "0 15px 40px rgba(0,0,0,0.18)",
//     flexShrink: 0,
//     zIndex: 2,
//   },
//   whatsapp: {
//     position: "fixed",
//     width: "55px",
//     right: "16px",
//     bottom: "80px",
//     zIndex: 1000,
//     cursor: "pointer",
//   },
//   ai: {
//     position: "fixed",
//     width: "55px",
//     right: "16px",
//     bottom: "16px",
//     zIndex: 1000,
//     cursor: "pointer",
//   },
// };


import React, { useEffect, useState } from "react";
import mainImage from "../../assets/hear.png";
import whatsapp from "../../assets/whatsapp.png";
import ai from "../../assets/ai.png";

const HearFromYou: React.FC = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = screenWidth <= 768;

  return (
    <>
      {/* Fixed floating icons */}
      <img src={whatsapp} style={styles.whatsapp} alt="whatsapp" />
      <img src={ai} style={styles.ai} alt="ai" />

      <section style={styles.container}>
        <h2 style={styles.heading}>We'd Love to Hear From You</h2>
        <p style={styles.subtext}>
          Whether you have a question about our products, want to book a demo,
          or just want to say hello — our team is here and ready to help.
        </p>

        <div style={styles.images}>
          {/* LEFT SLICE */}
          <div
            style={{
              ...styles.sliceWrapper,
              ...styles.sideSlice,
              borderRadius: "12px",
              borderBottomLeftRadius: isMobile ? "300px" : "12px",
            }}
          >
            <img
              src={mainImage}
              style={{
                ...styles.sliceImg,
                objectPosition: "0% center",
              }}
              alt="team left"
            />
          </div>

          {/* CENTER SLICE */}
          <div
            style={{
              ...styles.sliceWrapper,
              ...styles.centerSlice,
              borderRadius: "12px",
              boxShadow: "0 15px 40px rgba(0,0,0,0.18)",
              zIndex: 2,
            }}
          >
            <img
              src={mainImage}
              style={{
                ...styles.sliceImg,
                objectPosition: "50% top",
              }}
              alt="team center"
            />
          </div>

          {/* RIGHT SLICE */}
          <div
            style={{
              ...styles.sliceWrapper,
              ...styles.sideSlice,
              borderRadius: "12px",
              borderBottomRightRadius: isMobile ? "300px" : "12px",
            }}
          >
            <img
              src={mainImage}
              style={{
                ...styles.sliceImg,
                objectPosition: "100% center",
              }}
              alt="team right"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HearFromYou;

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    position: "relative",
    background: "#f5f6ff",
    padding: "40px 0 60px",
    borderRadius: "60px 60px 0 0",
    textAlign: "center",
    overflow: "hidden",
  },
  heading: {
    fontSize: "clamp(26px, 6vw, 36px)",
    fontWeight: 700,
    color: "#141414",
    padding: "0 20px",
  },
  subtext: {
    maxWidth: "620px",
    margin: "12px auto 40px",
    color: "#616161",
    lineHeight: "1.6",
    padding: "0 24px",
    fontSize: "clamp(14px, 3.5vw, 16px)",
  },
  images: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    gap: "8px",
    marginLeft: "-30px",
    marginRight: "-30px",
  },

  // Wrapper clips the image to its slice
  sliceWrapper: {
    overflow: "hidden",
    flexShrink: 0,
    position: "relative",
  },
  sideSlice: {
    width: "50%",
    maxWidth: "225px",
    height: "280px",
    opacity: 0.85,
  },
  centerSlice: {
    width: "48%",
    maxWidth: "170px",
    height: "360px",
  },

  // Image fills wrapper and the objectPosition shifts which part shows
  sliceImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center top",
    display: "block",
  },

  whatsapp: {
    position: "fixed",
    width: "55px",
    right: "16px",
    bottom: "80px",
    zIndex: 1000,
    cursor: "pointer",
  },
  ai: {
    position: "fixed",
    width: "55px",
    right: "16px",
    bottom: "16px",
    zIndex: 1000,
    cursor: "pointer",
  },
};