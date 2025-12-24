import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AdminLogin = ({ onSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();


  const handleLogin = async () => {
    setError("");

    const res = await fetch("http://localhost:5000/api/admin-auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
     
      body: JSON.stringify({
        email,
        password,
      })


    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.message || "Login failed");
      return;
    }

    localStorage.setItem("adminToken", data.token);
    onSuccess();
    navigate("/admin/dashboard");
  };

  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <h2>Admin Access</h2>

      <input
        type="email"
        placeholder="Admin Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />
      <input
        type="password"
        placeholder="Admin password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin}>Login</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default AdminLogin;
