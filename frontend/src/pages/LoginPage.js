import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/digital-blanket-logo.png';  // Adjust this path based on your folder structure

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/employees/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", formData.role);


        if (formData.role === "admin") {
          navigate("/admin");
        } else if (formData.role === "manager") {
          navigate("/manager");
        } else {
          navigate("/employee");
        }
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login.");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.logoContainer}>
          <img src={logo} alt="Company Logo" style={styles.logo} />
        </div>
        <h2 style={styles.title}>Login</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>Email ID</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <label style={styles.label}>Password</label>
          <div style={styles.passwordContainer}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={{ ...styles.input, paddingRight: "40px" }}
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              style={styles.toggleIcon}
              title={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "👁" : "🔒"}
            </span>
          </div>

          <label style={styles.label}>Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            style={styles.input}
            required
          >
            <option value="" disabled>-- Select Role --</option>
            <option value="employee">Employee</option>
            <option value="manager">Manager</option>
            <option value="admin">Admin</option>
          </select>

          <div style={styles.forgot}>
            <a href="/forgot-password" style={styles.link}>Forgot Password?</a>
          </div>

          <button type="submit" style={styles.button}>Submit</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  page: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #e2e8f0, #f8fafc)",
    padding: "20px",
  },
  card: {
    width: "100%",
    maxWidth: "550px",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
    padding: "40px 30px",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  logo: {
    height: "80px",
    objectFit: "contain",
  },
  title: {
    marginBottom: "30px",
    textAlign: "center",
    fontSize: "30px",
    fontWeight: "800",
    color: "#1f2937",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  label: {
    fontSize: "15px",
    color: "#4b5563",
    fontWeight: "600",
  },
  input: {
    padding: "10px 12px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #cbd5e1",
    outline: "none",
    width: "100%",
  },
  passwordContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  toggleIcon: {
    position: "absolute",
    right: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
    fontSize: "18px",
  },
  forgot: {
    textAlign: "right",
  },
  link: {
    fontSize: "14px",
    color: "#2563eb",
    textDecoration: "none",
  },
  button: {
    marginTop: "10px",
    backgroundColor: "#2563eb",
    color: "#fff",
    padding: "12px",
    border: "none",
    borderRadius: "6px",
    fontSize: "18px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background 0.3s ease",
  },
};

export default LoginPage;
