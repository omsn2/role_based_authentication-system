// src/layouts/MainLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import logo from '../assets/digital-blanket-logo.png'; 

const MainLayout = () => {
  return (
    <div style={styles.wrapper}>
      <header style={styles.header}>
        <img src={logo} alt="Logo" style={styles.logo} />
      </header>
      <main style={styles.mainContent}>
        <Outlet />
      </main>
    </div>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  header: {
    background: "#f1f5f9",
    padding: "15px 30px",
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #e2e8f0",
  },
  logo: {
    height: "60px",
  },
  mainContent: {
    flex: 1,
    padding: "20px",
  },
};

export default MainLayout;
