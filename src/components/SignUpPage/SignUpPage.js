// SignUpPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.scss"; // Import the SCSS file

const SignUpPage = () => {
  const navigate = useNavigate(); // Corrected the variable name
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    if (email.trim() !== "" && password.trim() !== "") {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      alert("Registration successful. Please log in.");
      navigate("/login"); // Corrected the function name
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="singnupform-container">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleSignup}>Sign Up</button>
      </div>
    </div>
  );
};

export default SignUpPage;
