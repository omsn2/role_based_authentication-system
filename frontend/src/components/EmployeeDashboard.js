import React from 'react';
import { useNavigate } from 'react-router-dom';

const EmployeeDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const styles = {
    dashboardContainer: {
      fontFamily: 'Arial, sans-serif',
      minHeight: '100vh',
      backgroundColor: '#f9f9f9',
      color: '#333',
    },
    navbar: {
      backgroundColor: '#4a90e2',
      color: '#fff',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    navLinks: {
      listStyle: 'none',
      display: 'flex',
      gap: '1rem',
      margin: 0,
    },
    navLink: {
      color: '#fff',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
    logoutBtn: {
      backgroundColor: '#e74c3c',
      color: '#fff',
      border: 'none',
      padding: '0.5rem 1rem',
      borderRadius: '5px',
      cursor: 'pointer',
      fontWeight: 'bold',
    },
    dashboardContent: {
      padding: '2rem',
    },
    taskSection: {
      backgroundColor: '#fff',
      padding: '1.5rem',
      marginTop: '1.5rem',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    },
  };

  return (
    <div style={styles.dashboardContainer}>
      <nav style={styles.navbar}>
        <div style={styles.logo}>Employee Dashboard</div>
        <ul style={styles.navLinks}>
          <li><a href="#home" style={styles.navLink}>Home</a></li>
          <li><a href="#tasks" style={styles.navLink}>Tasks</a></li>
          <li><button style={styles.logoutBtn} onClick={handleLogout}>Logout</button></li>
        </ul>
      </nav>

      <main style={styles.dashboardContent}>
        <h2>Welcome, Employee!</h2>
        <p>This is your dashboard where you can manage your tasks, view notifications, and more.</p>

        <section id="tasks" style={styles.taskSection}>
          <h3>Your Tasks</h3>
          <ul>
            <li>✔️ Submit weekly report</li>
            <li>📅 Attend team meeting at 3 PM</li>
            <li>📝 Complete onboarding training</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default EmployeeDashboard;
