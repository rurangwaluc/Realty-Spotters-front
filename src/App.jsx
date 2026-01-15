import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AdminDashboard from "./pages/AdminDashboard";
import AdminInquiries from "./pages/AdminInquiries";
import AdminLayout from "./components/Layout/AdminLayout"; // This should be just layout, not Router
import AdminLogin from "./pages/AdminLogin";
import AdminRoute from "./routes/AdminRoute";
import Help from './pages/Help'; // adjust path if needed
import HowItWorks from "./pages/HowItWorks";
import Info from "./pages/Info";
import Landing from "./pages/Landing";
import Navbar from "./components/Layout/Navbar"; // Same here, just a navigation component, not a Router
import Search from "./pages/Search";
import { useState } from "react";

function App() {
  const [adminAuthed, setAdminAuthed] = useState(
    Boolean(localStorage.getItem("adminToken"))
  );

  return (
    <div>
      {/* Only one Router should wrap the entire app */}

      <Navbar /> {/* Ensure Navbar is just a layout component, not a Router */}
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/search" element={<Search />} />
        <Route path="/inquiry" element={<Help />} />

        {/* Admin login */}
        <Route
          path="/admin/login"
          element={<AdminLogin onSuccess={() => setAdminAuthed(true)} />}
        />

        {/* Protected admin routes */}
        <Route
          path="/admin"
          element={adminAuthed ? <AdminLayout /> : <Navigate to="/admin/login" />}
        >
          <Route path="dashboard" element={
           
              <AdminDashboard />
            
            } />
          <Route path="inquiries" element={<AdminInquiries />} />
        </Route>
          <Route path="/how-it-works" element={<HowItWorks />} />
      </Routes>
    </div>
  );
}

export default App;
