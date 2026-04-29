import React, { useEffect, useState } from "react";
import patternImage from "../../assets/testimonial.png";

type Testimonial = {
  rating: number;
  text: string;
  name: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    rating: 5,
    text: "Before ZamPOS, we struggled with manual records and stock errors. Now everything; sales, suppliers, and reports is in one place. It's simple and reliable.",
    name: "Pharm. Chukwumeka",
    role: "Pharmacy Owner",
  },
  {
    rating: 4,
    text: "Running our pharmacy used to be stressful with constant stock issues. Now everything; sales, inventory is organized in one system. It’s efficient and easy to use.",
    name: "Pharm. Adaeze",
    role: "Retail Pharmacist",
  },
  {
    rating: 5,
    text: "We had challenges keeping track of stock and daily transactions before. Now everything; purchases, sales is centralized in one place. It’s smooth, accurate, and very dependable.",
    name: "Pharm. Ibrahim",
    role: "Pharmacy Manager",
  },
];

const TestimonialSection: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const current = testimonials[index];

  return (
    <section style={styles.section}>
      <div
        style={{
          ...styles.container,
          width: isMobile ? "100vw" : "100%",
          borderRadius: isMobile ? "18px" : "14px",
          margin: isMobile ? "0" : "0 auto",
        }}
      >
        <div style={styles.pattern} />

        <div style={styles.content}>
          <span style={styles.badge}>TESTIMONIALS</span>

          <h2 style={styles.title}>
            {isMobile ? (
              <>
                What our Clients <br /> have to say
              </>
            ) : (
              "What our Clients have to say"
            )}
          </h2>

          {!isMobile && (
            <p style={styles.subtitle}>
              We're proud to support pharmacies with tools that simplify daily
              operations, reduce losses, and improve customer service, backed by
              real feedback from pharmacy teams.
            </p>
          )}

          <div style={styles.carousel}>
            <div style={styles.stars}>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  style={{
                    color: star <= current.rating ? "#facc15" : "#ffffff",
                    opacity: star <= current.rating ? 1 : 0.4,
                  }}
                >
                  ★
                </span>
              ))}
              <span style={styles.ratingText}> {current.rating}.0</span>
            </div>

            <p style={styles.text}>"{current.text}"</p>

            <div style={styles.author}>
              <strong>— {current.name}</strong>
              <span style={styles.role}>{current.role}</span>
            </div>

            <div style={styles.dots}>
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  onClick={() => setIndex(i)}
                  style={{
                    ...styles.dot,
                    opacity: i === index ? 1 : 0.4,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

/* ================= STYLES ================= */

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    padding: "50px 0px",
    display: "flex",
    justifyContent: "center",
    background: "#F9F9FA",
  },

  container: {
    maxWidth: "950px",
    borderRadius: "14px",
    position: "relative",
    overflow: "hidden",
    background:
      "linear-gradient(85deg, rgba(10,28,255,0.92), rgba(0,0,36,0.98))",
  },

  pattern: {
    position: "absolute",
    inset: 0,
    backgroundImage: `url(${patternImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.6,
    zIndex: 1,
  },

  content: {
    position: "relative",
    zIndex: 2,
    padding: "50px 30px",
    color: "#fff",
    textAlign: "center",
  },

  badge: {
    background: "#ECFFFE",
    color: "#201E82",
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "12px",
    display: "inline-block",
    fontWeight: 600,
  },

  title: {
    fontSize: "26px",
    margin: "12px 0",
    fontWeight: 500,
  },

  subtitle: {
    fontSize: "14px",
    color: "#CFDBE6",
    maxWidth: "600px",
    margin: "0 auto 30px",
  },

  carousel: {
    marginTop: "20px",
  },

  stars: {
    color: "#facc15",
    fontSize: "18px",
    marginBottom: "10px",
  },

  ratingText: {
    color: "#fff",
    fontSize: "14px",
    marginLeft: "6px",
  },

  text: {
    fontSize: "20px",
    lineHeight: "1.6",
    maxWidth: "600px",
    color: "#CFDAE3",
    margin: "0 auto 20px",
  },

  author: {
    fontSize: "14px",
    color: "#D1DDE7",
  },

  role: {
    display: "block",
    fontSize: "12px",
    color: "#CFDAE4",
  },

  dots: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    gap: "8px",
  },

  dot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "#fff",
    cursor: "pointer",
  },
};