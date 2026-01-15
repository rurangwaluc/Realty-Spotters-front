import { useEffect, useState } from "react";

const AdminInquiries = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("http://localhost:5000/api/admin/inquiries", {
          headers: { "x-admin-token": localStorage.getItem("adminToken") },
        });
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setInquiries(data);
      } catch (err) {
        setError("Could not load inquiries.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const badgeClass = (status) => {
    const s = (status || "").toLowerCase();
    if (s.includes("resolv") || s === "done" || s === "closed") return "bg-amber-100 text-amber-800";
    if (s.includes("pend") || s === "open") return "bg-yellow-100 text-yellow-800";
    return "bg-gray-100 text-gray-800";
  };

  return (
    <div className="p-4 sm:p-6 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
          <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-white text-lg">📨</span>
            Admin Inquiries
          </h2>
          <div className="text-sm text-slate-600">{inquiries.length} total</div>
        </div>

        {loading ? (
          <div className="space-y-3">
            {[1, 2, 3].map((n) => (
              <div key={n} className="animate-pulse bg-white rounded-2xl shadow p-4">
                <div className="h-4 bg-slate-200 rounded w-1/3 mb-3" />
                <div className="h-3 bg-slate-200 rounded w-full mb-2" />
                <div className="h-3 bg-slate-200 rounded w-5/6" />
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-sm text-red-600">{error}</div>
        ) : inquiries.length === 0 ? (
          <div className="text-sm text-slate-600">No inquiries yet.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {inquiries.map((i) => (
              <div key={i._id} className="bg-white rounded-2xl shadow-md p-5 flex flex-col gap-2 transition hover:-translate-y-0.5 hover:shadow-lg">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-amber-100 text-amber-700 text-lg font-bold">{i.name ? i.name[0]?.toUpperCase() : i.email[0]?.toUpperCase()}</span>
                    <div>
                      <p className="text-sm text-slate-600 font-medium">{i.name ?? i.email}</p>
                      <p className="text-xs text-slate-500">{i.email}</p>
                    </div>
                  </div>
                  <div className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-xl capitalize ${badgeClass(i.status)} min-h-[32px]`}> 
                    {i.status ?? "new"}
                  </div>
                </div>
                {i.phone && <p className="text-sm text-slate-500 mt-1"><span className="font-semibold text-slate-700">Phone:</span> {i.phone}</p>}
                <p className="mt-2 text-sm text-slate-700 whitespace-pre-line">{i.message}</p>
                <div className="mt-2 text-xs text-slate-400 flex items-center gap-1">
                  <span className="inline-block w-4 h-4 text-amber-400">🕒</span>
                  {i.createdAt ? new Date(i.createdAt).toLocaleString() : null}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminInquiries;
