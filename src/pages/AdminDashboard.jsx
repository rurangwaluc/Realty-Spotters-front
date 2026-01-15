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

  // UI toggles for mobile-friendly collapsible sections
  const [revenueOpen, setRevenueOpen] = useState(true);
  const [chartsOpen, setChartsOpen] = useState(true);
  const [listOpen, setListOpen] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      setLoading(true);
      setError("");

      try {
        const result =
          days === "all" ? await fetchAdminAnalytics() : await fetchAdminAnalyticsByDate(days);

        if (isMounted) {
          setData(result);
        }
      } catch (err) {
        if (isMounted) {
          console.error("Error loading analytics:", err);
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
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-3">
                  <span className="inline-block px-2 py-1 rounded bg-slate-800 text-white text-sm">Admin</span>
                Realty Spotters — Analytics
              </h1>
                <p className="mt-1 text-sm text-slate-600">Live demand, revenue and priority insights — mobile-first admin view.</p>
            </div>

            <div className="flex items-center gap-3">
                <label className="text-sm text-slate-700 hidden sm:inline">Date Range</label>
              <select
                value={days}
                onChange={(e) => setDays(e.target.value === "all" ? "all" : Number(e.target.value))}
                className="px-3 py-2 border rounded-md text-sm bg-white"
                aria-label="Select date range"
              >
                <option value="all">All time</option>
                <option value={7}>Last 7 days</option>
                <option value={30}>Last 30 days</option>
              </select>

              <div className="hidden sm:flex items-center gap-2">
                  <button onClick={() => setView("analytics")} className={`px-3 py-2 rounded-md text-sm font-medium ${view === "analytics" ? "bg-white shadow" : "text-slate-600 hover:bg-white/50"}`}>Analytics</button>
                  <button onClick={() => setView("inquiries")} className={`px-3 py-2 rounded-md text-sm font-medium ${view === "inquiries" ? "bg-white shadow" : "text-slate-600 hover:bg-white/50"}`}>Inquiries</button>
              </div>

              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"> Logout</button>

            </div>
          </div>

          {/* Mobile view: simpler nav */}
          <div className="mt-4 sm:hidden flex gap-2">
              <button onClick={() => setView("analytics")} className={`flex-1 px-3 py-2 rounded-md text-sm ${view === "analytics" ? "bg-white shadow" : "bg-white/60"}`}>Analytics</button>
              <button onClick={() => setView("inquiries")} className={`flex-1 px-3 py-2 rounded-md text-sm ${view === "inquiries" ? "bg-white shadow" : "bg-white/60"}`}>Inquiries</button>
          </div>
        </header>

        {/* Main content */}
        {view === "analytics" && (
          <>
            {/* KPI Cards */}
            <section className="mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard
                title="Total Searches"
                value={searches.total}
                subtitle="All-time / selected range"
              />

              <StatCard
                title="Avg Budget (RWF)"
                value={Math.round(searches.budgetStats.avgBudget)}
                subtitle={`Min: ${searches.budgetStats.minBudget} • Max: ${searches.budgetStats.maxBudget}`}
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
            </section>

            {/* Revenue — collapsible on mobile */}
            <section className="mb-6">
              <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-slate-900">Revenue</h2>
                <div className="flex items-center gap-2">
                    <button className="hidden md:inline-flex text-sm text-slate-500">Summary</button>
                    <button
                      className="md:hidden text-sm text-slate-800"
                    onClick={() => setRevenueOpen((s) => !s)}
                    aria-expanded={revenueOpen}
                  >
                    {revenueOpen ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <div className={`${revenueOpen ? "mt-4" : "hidden mt-4"} bg-white rounded-lg p-4 shadow-sm`}>
                <RevenueCards payments={payments} />
              </div>
            </section>

            {/* Charts */}
            <section className="mb-6">
              <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-slate-900">Charts</h2>
                  <button className="md:hidden text-sm text-slate-800" onClick={() => setChartsOpen((s) => !s)} aria-expanded={chartsOpen}>
                  {chartsOpen ? "Hide" : "Show"}
                </button>
              </div>

              <div className={`${chartsOpen ? "mt-4" : "hidden mt-4"} grid grid-cols-1 lg:grid-cols-2 gap-6`}>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <PriorityChart data={searches.byPriority} />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <RevenueFunnel searches={searches} payments={payments} />
                </div>
              </div>
            </section>

            {/* Priority list */}
            <section className="mb-6">
              <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-slate-900">Search Priority Breakdown</h2>
                  <button className="md:hidden text-sm text-slate-800" onClick={() => setListOpen((s) => !s)} aria-expanded={listOpen}>
                  {listOpen ? "Hide" : "Show"}
                </button>
              </div>

              <div className={`${listOpen ? "mt-4" : "hidden mt-4"} bg-white rounded-lg p-4 shadow-sm`}>
                <PriorityList data={searches.byPriority} />
              </div>
            </section>
          </>
        )}

        {view === "inquiries" && (
          <section className="bg-white rounded-lg p-4 shadow-sm">
            <AdminInquiries />
          </section>
        )}

        {/* Small footer */}
          <footer className="mt-8 text-center text-xs text-slate-500">
          Realty Spotters Admin • Data refreshes every few minutes • Built for mobile and desktop
        </footer>
      </div>
    </div>
  );
};

export default AdminDashboard;
