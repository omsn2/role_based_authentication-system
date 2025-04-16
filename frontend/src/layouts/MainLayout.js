import React from "react";
import { Outlet } from "react-router-dom";
import logo from "../assets/digital-blanket-logo.png";

const MainLayout = () => {
  return (
    <div style={styles.wrapper}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logoContainer}>
          <img src={logo} alt="Digital Blanket Logo" style={styles.logo} />
        </div>
        {/* You can add a user profile or logout button here in the future */}
        {/* <div style={styles.userInfo}>Welcome, User</div> */}
      </header>

      {/* Main Content */}
      <main style={styles.mainContent}>
        
        <Outlet />
      </main>

      {/* Optional Footer */}
      {/* <footer style={styles.footer}>© 2025 Digital Blanket</footer> */}
    </div>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f8fafc",
  },
  header: {
    backgroundColor: "#ffffff",
    padding: "15px 30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid #e2e8f0",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    height: "50px",
  },
  mainContent: {
    flex: 1,
    padding: "30px 40px",
  },
  footer: {
    padding: "10px 20px",
    backgroundColor: "#f1f5f9",
    textAlign: "center",
    fontSize: "14px",
    color: "#64748b",
    borderTop: "1px solid #e2e8f0",
  },
};

export default MainLayout;
