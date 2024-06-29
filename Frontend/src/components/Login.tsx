import React, { useState } from "react";
import axios from "axios"; // Import Axios

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/login", {
        // Adjust endpoint as needed
        email: email,
        password: password,
      });
      console.log("Login successful", response.data);
      // Handle successful login logic (e.g., redirect to dashboard)
    } catch (error) {
      console.error("Login error", error);
      // Handle error logic (e.g., display error message to user)
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
