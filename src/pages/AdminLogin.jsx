import { useNavigate } from "react-router-dom";
import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

const AdminLogin = ({ onSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/admin-auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      localStorage.setItem("adminToken", data.token);
      onSuccess && onSuccess();
      navigate("/admin/dashboard");
    } catch (err) {
      setError(err.message || "Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Admin Access</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 disabled:opacity-60 text-white font-medium py-2 rounded-md"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="mt-4 text-center text-xs text-gray-500">Only authorized administrators may sign in.</p>
      </div>
    </div>
  );
};

export default AdminLogin;
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// const AdminLogin = ({ onSuccess }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const navigate = useNavigate();


//   const handleLogin = async () => {
//     setError("");

//     const res = await fetch("http://localhost:5000/api/admin-auth/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
     
//       body: JSON.stringify({
//         email,
//         password,
//       })


//     });

//     const data = await res.json();

//     if (!res.ok) {
//       setError(data.message || "Login failed");
//       return;
//     }

//     localStorage.setItem("adminToken", data.token);
//     onSuccess();
//     navigate("/admin/dashboard");
//   };

//   return (
//     <div style={{ padding: 40, maxWidth: 400 }}>
//       <h2>Admin Access</h2>

//       <input
//         type="email"
//         placeholder="Admin Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <br /><br />
//       <input
//         type="password"
//         placeholder="Admin password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       <br /><br />

//       <button onClick={handleLogin}>Login</button>

//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// };

// export default AdminLogin;
