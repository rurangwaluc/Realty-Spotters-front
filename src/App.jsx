import { Navigate, Route, Routes } from "react-router-dom";

import AdminDashboard from "./pages/AdminDashboard";
import AdminInquiries from "./pages/AdminInquiries";
import AdminLayout from "./components/Layout/AdminLayout";
import AdminLogin from "./pages/AdminLogin";
import Landing from "./pages/Landing";
import Search from "./pages/Search";
import { useState } from "react";

function App() {
  const [adminAuthed, setAdminAuthed] = useState(
    Boolean(localStorage.getItem("adminToken"))
  );

  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Landing />} />
      <Route path="/search" element={<Search />} />

      {/* Admin login */}
      <Route
        path="/admin/login"
        element={<AdminLogin onSuccess={() => setAdminAuthed(true)} />}
      />

      {/* Protected admin */}
      <Route
        path="/admin"
        element={
          adminAuthed ? <AdminLayout /> : <Navigate to="/admin/login" />
        }
      >
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="inquiries" element={<AdminInquiries />} />
      </Route>
    </Routes>
  );
}

export default App;
