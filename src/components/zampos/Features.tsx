import React from "react";

// ICONS
import salesIcon from "../../assets/sales.png";
import inventoryIcon from "../../assets/inventory.png";
import supplierIcon from "../../assets/supplier.png";
import reportsIcon from "../../assets/reports.png";
import customerIcon from "../../assets/customer.png";
import prescriptionIcon from "../../assets/prescription.png";
import branchIcon from "../../assets/branch.png";
import offlineIcon from "../../assets/offline.png";
import staffIcon from "../../assets/staff.png";

const FeaturesSection: React.FC = () => {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <span style={styles.badge}>Features</span>

        <h2 style={styles.title}>
          Everything you need to <br /> know about the ZamPOS
        </h2>

        {/* 3 INDEPENDENT COLUMNS */}
        <div style={styles.grid}>
          
          {/* COLUMN 1 */}
          <div style={styles.col}>
            <Card icon={salesIcon} title="Sales & Checkout" text="Streamlined POS interface for quick and accurate transaction processing." bg="#E8EBFF" />
            <Card icon={reportsIcon} title="Reports & Analytics" text="Gain insights into sales trends, inventory performance, and business growth." bg="#FFFFFF" />
            <Card icon={branchIcon} title="Multi Branch Management" text="Maintain detailed patient records and consultation logs for personalized care." bg="#E0E5FE" />
          </div>

          {/* COLUMN 2 (ONLY TALL TOP CARD) */}
          <div style={styles.col}>
            <Card
              icon={inventoryIcon}
              title="Inventory & Expiry Alerts"
              text="Real-time stock management, automated reorder points, and expiry notifications."
              tall
              bg="#FFFFFF"
            />
            <Card icon={customerIcon} title="Customer & Consultation History" text="Maintain detailed patient records and consultation logs for personalized care." bg="#E2E7FE" />
            <Card icon={offlineIcon} title="Offline-First System" text="Keep selling even when the internet goes off. ZamPOS works offline and syncs automatically once you're back online." bg="#FFFFFF" />
          </div>

          {/* COLUMN 3 */}
          <div style={styles.col}>
            <Card icon={supplierIcon} title="Supplier Management" text="Efficiently manage supplier orders, deliveries, and payment schedules." bg="#D2DDF8" />
            <Card icon={prescriptionIcon} title="Prescription Management" text="Digital prescription processing and secure patient prescription records." bg="#FFFFFF" />
            <Card icon={staffIcon} title="Staff Management & Controls" text="Monitor staff activity and protect your sales. Assign roles, track logins, and see who did what — and when." bg="#D6E0F9" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

/* ================= CARD ================= */

const Card = ({
  icon,
  title,
  text,
  tall,
  bg,
}: {
  icon: string;
  title: string;
  text: string;
  tall?: boolean;
  bg: string;
}) => {
  return (
    <div
      style={{
        ...styles.card,
        background: bg,
        height: tall ? "300px" : "260px",
      }}
    >
      <div style={styles.textBlock}>
        <h4 style={styles.cardTitle}>{title}</h4>
        <p style={styles.cardText}>{text}</p>
      </div>

      <div style={styles.iconWrap}>
        <img src={icon} style={styles.icon} />
      </div>
    </div>
  );
};

/* ================= STYLES ================= */

const styles: any = {
  section: {
    padding: "80px 20px",
    background: "#F9F9FA",
    display: "flex",
    justifyContent: "center",
  },

  container: {
    maxWidth: "1000px",
    width: "100%",
    textAlign: "center",
  },

  badge: {
    fontSize: "12px",
    fontWeight: 600,
    color: "#201E82",
    background: "#ECFFFE",
    padding: "6px 14px",
    borderRadius: "20px",
    display: "inline-block",
    marginBottom: "12px",
  },

  title: {
    fontSize: "28px",
    fontWeight: 500,
    color: "#141414",
    marginBottom: "50px",
    lineHeight: "1.3",
  },

  /* TRUE COLUMN SYSTEM */
  grid: {
    display: "flex",
    gap: "22px",
    alignItems: "flex-start",
  },

  col: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "22px",
  },

  card: {
    borderRadius: "18px",
    padding: "22px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    textAlign: "left",
    transition: "0.3s ease",
  },

  textBlock: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },

  cardTitle: {
    fontSize: "15px",
    fontWeight: 600,
    color: "#141414",
  },

  cardText: {
    fontSize: "13px",
    color: "#616161",
    lineHeight: "1.5",
  },

  iconWrap: {
    display: "flex",
    justifyContent: "center",
    marginTop: "18px",
  },

  icon: {
    width: "150px",
    height: "130px",
  },
};