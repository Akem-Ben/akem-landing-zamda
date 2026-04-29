import React, { useState, useEffect } from "react";
import logo from "../../assets/Logo.png";
import dropdownIcon from "../../assets/down_line.png";
import hamburger from "../../assets/hamburger.png";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const getProductLabel = () => {
    if (location.pathname === "/zampos") return "ZamPOS";
    if (location.pathname === "/zammobile") return "Zamda Mobile App";
    return "Products";
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = screenWidth <= 768;
  const isTablet = screenWidth > 768 && screenWidth <= 1024;

  return (
    <>
      <nav
        style={{
          ...styles.nav,
          padding: isTablet ? "15px 20px" : "15px 40px", 
        }}
      >
        {/* Logo */}
        <div>
          <Link to="/">
            <img
              src={logo}
              alt="Zamda Logo"
              style={{
                ...styles.logoImage,
                height: isTablet ? "32px" : "40px",
              }}
            />
          </Link>
        </div>

        {/* Menu */}
        <ul
          style={{
            ...styles.menu,
            display: isMobile ? "none" : "flex",
            gap: isTablet ? "15px" : "25px",
            fontSize: isTablet ? "14px" : "16px",
          }}
        >
          <li style={location.pathname === "/" ? styles.active : {}}>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Home
            </Link>
          </li>

          <li
            style={{
              ...styles.menuItem,
              ...(location.pathname === "/zampos" || location.pathname === "/zammobile" ? styles.active : {})
            }}
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <span>{getProductLabel()}</span>
            <img src={dropdownIcon} style={styles.dropdownIcon} />

            {showDropdown && (
              <div style={styles.dropdown}>
                <Link to="/zampos" style={{ textDecoration: "none", color: "inherit" }}>
                  <div style={styles.dropdownItem}>ZamPOS</div>
                </Link>
                <Link to="/zammobile" style={{ textDecoration: "none", color: "inherit" }}>
                  <div style={styles.dropdownItem}>Zamda Mobile App</div>
                </Link>
              </div>
            )}
          </li>

          <li style={location.pathname === "/contact" ? styles.active : {}}>
  <Link to="/contact" style={{ textDecoration: "none", color: "inherit" }}>
    Contact
  </Link>
</li>
        </ul>

        {/* Buttons */}
        <div
          style={{
            ...styles.buttons,
            display: isMobile ? "none" : "flex",
            transform: isTablet ? "scale(0.9)" : "scale(1)",
          }}
        >
          <button style={styles.download}>Download App</button>
          <button style={styles.demo}>Request Demo</button>
        </div>

        {/* Hamburger */}
        <img
          src={hamburger}
          style={{
            ...styles.hamburger,
            display: isMobile ? "block" : "none", 
          }}
          onClick={() => setOpenSidebar(true)}
        />
      </nav>

      {/* Sidebar (UNCHANGED) */}
      <div
        style={{
          ...styles.sidebar,
          left: openSidebar ? "0" : "-100%",
        }}
      >
        <div style={styles.close} onClick={() => setOpenSidebar(false)}>
          ✕
        </div>

        <ul style={styles.sidebarMenu}>
          <li style={location.pathname === "/" ? styles.active : {}} onClick={() => setOpenSidebar(false)}>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Home
            </Link>
          </li>

          <li style={location.pathname === "/zampos" || location.pathname === "/zammobile" ? styles.active : {}} onClick={() => setShowDropdown(!showDropdown)}>
            {getProductLabel()}
          </li>

          {showDropdown && (
            <div style={styles.sidebarDropdown}>
              <Link to="/zampos" style={{ textDecoration: "none", color: "inherit" }} onClick={() => setOpenSidebar(false)}>
                <div>ZamPOS</div>
              </Link>
              <Link to="/zammobile" style={{ textDecoration: "none", color: "inherit" }} onClick={() => setOpenSidebar(false)}>
                <div>Zamda Mobile App</div>
              </Link>
            </div>
          )}

          <li style={location.pathname === "/contact" ? styles.active : {}} onClick={() => setOpenSidebar(false)}>
            <Link to="/contact" style={{ textDecoration: "none", color: "inherit" }}>
              Contact
            </Link>
          </li>
        </ul>

        <div style={styles.sidebarButtons}>
          <button style={styles.download}>Download App</button>
          <button style={styles.demo}>Request Demo</button>
        </div>
      </div>

      {/* Overlay */}
      {openSidebar && (
        <div style={styles.overlay} onClick={() => setOpenSidebar(false)} />
      )}
    </>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #eeeeee",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    height: "90px",
    background: "#F2F1FD",
  },

  logoImage: {
    cursor: "pointer",
  },

  menu: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
    alignItems: "center",
    color: "#000",
    cursor: "pointer",
  },

  active: {
    borderBottom: "2px solid #201E82",
    paddingBottom: "5px",
  },

  menuItem: {
    position: "relative" as const,
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },

  dropdownIcon: {
    width: "15px",
    height: "15px",
    marginLeft: "6px",
  },

  dropdown: {
    position: "absolute" as const,
    top: "30px",
    left: 0,
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    padding: "10px 0",
    minWidth: "180px",
    zIndex: 1000,
  },

  dropdownItem: {
    padding: "10px 16px",
    fontSize: "14px",
    cursor: "pointer",
  },

  buttons: {
    display: "flex",
    gap: "10px",
  },

  download: {
    backgroundColor: "#201E82",
    color: "white",
    padding: "14px 16px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
  },

  demo: {
    padding: "14px 16px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    backgroundColor: "#f9f9f9",
    cursor: "pointer",
  },

  hamburger: {
    width: "28px",
    cursor: "pointer",
  },

  sidebar: {
    position: "fixed" as const,
    top: 0,
    left: "-100%",
    width: "260px",
    height: "100vh",
    background: "#fff",
    padding: "30px 20px",
    transition: "0.3s",
    zIndex: 1000,
  },

  close: {
    fontSize: "20px",
    cursor: "pointer",
    color: "#000",
  },

  sidebarMenu: {
    listStyle: "none",
    marginTop: "40px",
    display: "flex",
    flexDirection: "column" as const,
    gap: "20px",
    color: "#000",
  },

  sidebarDropdown: {
    paddingLeft: "15px",
    display: "flex",
    flexDirection: "column" as const,
    gap: "10px",
  },

  sidebarButtons: {
    marginTop: "30px",
    display: "flex",
    flexDirection: "column" as const,
    gap: "10px",
  },

  overlay: {
    position: "fixed" as const,
    width: "100%",
    height: "100vh",
    background: "rgba(0,0,0,0.3)",
    top: 0,
    left: 0,
    zIndex: 900,
  },
};

export default Navbar;