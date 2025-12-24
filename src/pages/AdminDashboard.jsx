import "../styles/admin.css";

import { fetchAdminAnalytics, fetchAdminAnalyticsByDate } from "../api/adminApi";
import { useEffect, useState } from "react";

import AdminInquiries from "./AdminInquiries";
import { AdminSkeleton } from "../components/Admin/AdminSkeleton";
import PriorityChart from "../components/Admin/PriorityChart";
import PriorityList from "../components/Admin/PriorityList";
import RevenueCards from "../components/Admin/RevenueCards";
import RevenueFunnel from "../components/Admin/RevenueFunnel";
import StatCard from "../components/Admin/StatCard";

const handleLogout = () => {
  localStorage.removeItem("adminToken");
  window.location.href = "/admin/login";
};



const AdminDashboard = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [days, setDays] = useState("all"); // "all" | 7 | 30
    const [view, setView] = useState("analytics");


   useEffect(() => {
  let isMounted = true;

  const loadData = async () => {
    setLoading(true);
    setError("");

    try {
      const result =
        days === "all"
          ? await fetchAdminAnalytics()
          : await fetchAdminAnalyticsByDate(days);

      if (isMounted) {
        setData(result);
      }
    } catch (err) {
      if (isMounted) {
        console.error("Error loading analytics:", err);  // Log the error to the console
        setError("Failed to load analytics");
      }
    } finally {
      if (isMounted) {
        setLoading(false);
      }
    }
  };

  loadData();

  return () => {
    isMounted = false;
  };
}, [days]);





  if (loading) return <AdminSkeleton />;


  if (error) {
  return (
    <div className="admin-container">
      <p style={{ color: "#c0392b" }}>
        Failed to load analytics. Please refresh.
      </p>
    </div>
  );
}


  const { searches, payments } = data;

 return (
  <div className="admin-container">
    {/* HEADER */}
    <div className="admin-header">
      <h1>📊 Realty Spotters — Admin Dashboard</h1>
      <p>Live demand and revenue intelligence</p>
    </div>

    {/* NAV */}
    <div className="admin-nav">
      <button
        className={view === "analytics" ? "active" : ""}
        onClick={() => setView("analytics")}
      >
        Analytics
      </button>

      <button
        className={view === "inquiries" ? "active" : ""}
        onClick={() => setView("inquiries")}
      >
        Inquiries
      </button>

      <button className="logout" onClick={handleLogout}>
        Logout
      </button>
    </div>

    {/* ANALYTICS VIEW */}
    {view === "analytics" && (
      <>
        {/* FILTER */}
        <div className="fade-in">
          <div className="admin-section">
            <label>Date Range</label>
            <select
              value={days}
              onChange={(e) =>
                setDays(e.target.value === "all" ? "all" : Number(e.target.value))
              }
              style={{ marginLeft: 10 }}
            >
              <option value="all">All time</option>
              <option value={7}>Last 7 days</option>
              <option value={30}>Last 30 days</option>
            </select>
          </div>
        </div>

        {/* KPI */}
        <div className="kpi-grid">
          <StatCard title="Total Searches" value={searches.total} />

          <StatCard
            title="Avg Budget (RWF)"
            value={Math.round(searches.budgetStats.avgBudget)}
            subtitle={`Min: ${searches.budgetStats.minBudget} | Max: ${searches.budgetStats.maxBudget}`}
          />

          <StatCard
            title="Payments"
            value={payments.successful}
            subtitle={`Out of ${payments.total}`}
          />

          <StatCard
            title="Revenue (RWF)"
            value={payments.revenue}
            subtitle={`Conversion: ${payments.conversionRate}`}
          />
        </div>

        {/* REVENUE */}
        <div className="admin-section">
          <RevenueCards payments={payments} />
        </div>

        {/* CHARTS */}
        <div className="admin-section chart-grid">
          <PriorityChart data={searches.byPriority} />
          <RevenueFunnel searches={searches} payments={payments} />
        </div>

        {/* LIST */}
        <div className="admin-section">
          <PriorityList data={searches.byPriority} />
        </div>
      </>
    )}

    {view === "inquiries" && 
      <div className="fade-in">
        <AdminInquiries />
      </div>
    }
  </div>
);
};

export default AdminDashboard;
