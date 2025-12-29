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
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <div className="max-w-2xl w-full bg-white rounded-lg shadow p-6 text-center">
          <p className="text-red-600 font-medium">Failed to load analytics. Please refresh.</p>
        </div>
      </div>
    );
  }

  const { searches, payments } = data;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <header className="mb-6">
          <h1 className="text-2xl font-extrabold text-gray-900">📊 Realty Spotters — Admin Dashboard</h1>
          <p className="text-sm text-gray-600">Live demand and revenue intelligence</p>
        </header>

        {/* NAV */}
        <nav className="flex items-center gap-3 mb-6 overflow-x-auto">
          <button
            className={`px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap ${view === "analytics" ? 'bg-white shadow' : 'text-gray-600 hover:bg-white/50'}`}
            onClick={() => setView("analytics")}
          >
            Analytics
          </button>

          <button
            className={`px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap ${view === "inquiries" ? 'bg-white shadow' : 'text-gray-600 hover:bg-white/50'}`}
            onClick={() => setView("inquiries")}
          >
            Inquiries
          </button>

          <div className="ml-auto">
            <button onClick={handleLogout} className="px-3 py-2 text-sm text-red-600 hover:underline">Logout</button>
          </div>
        </nav>

        {/* ANALYTICS VIEW */}
        {view === "analytics" && (
          <>
            {/* FILTER */}
            <div className="mb-6">
              <label className="text-sm text-gray-700 mr-3">Date Range</label>
              <select
                value={days}
                onChange={(e) =>
                  setDays(e.target.value === "all" ? "all" : Number(e.target.value))
                }
                className="px-3 py-2 border rounded-md text-sm"
              >
                <option value="all">All time</option>
                <option value={7}>Last 7 days</option>
                <option value={30}>Last 30 days</option>
              </select>
            </div>

            {/* KPI */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
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
            <section className="mb-6 bg-white rounded-lg p-4 shadow-sm">
              <RevenueCards payments={payments} />
            </section>

            {/* CHARTS */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <PriorityChart data={searches.byPriority} />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <RevenueFunnel searches={searches} payments={payments} />
              </div>
            </section>

            {/* LIST */}
            <section className="bg-white rounded-lg p-4 shadow-sm">
              <PriorityList data={searches.byPriority} />
            </section>
          </>
        )}

        {view === "inquiries" && (
          <div className="mt-4">
            <AdminInquiries />
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
