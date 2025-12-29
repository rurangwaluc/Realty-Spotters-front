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
    if (s.includes("resolv") || s === "done" || s === "closed") return "bg-green-100 text-green-800";
    if (s.includes("pend") || s === "open") return "bg-yellow-100 text-yellow-800";
    return "bg-gray-100 text-gray-800";
  };

  return (
    <div className="p-4 sm:p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Inquiries</h2>
          <div className="text-sm text-gray-600">{inquiries.length} total</div>
        </div>

        {loading ? (
          <div className="space-y-3">
            {[1, 2, 3].map((n) => (
              <div key={n} className="animate-pulse bg-white rounded-lg shadow p-4">
                <div className="h-4 bg-gray-200 rounded w-1/3 mb-3" />
                <div className="h-3 bg-gray-200 rounded w-full mb-2" />
                <div className="h-3 bg-gray-200 rounded w-5/6" />
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-sm text-red-600">{error}</div>
        ) : inquiries.length === 0 ? (
          <div className="text-sm text-gray-600">No inquiries yet.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {inquiries.map((i) => (
              <div key={i._id} className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Name: {i.name ?? i.email}</p>
                    <p className="font-medium text-gray-900">Email: {i.email}</p>
                  </div>
                  <div className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded capitalize ${badgeClass(i.status)}`}>
                    {i.status ?? "new"}
                  </div>
                </div>
                {i.phone && <p className="text-sm text-gray-500 mt-2">Phone: {i.phone}</p>}
                <p className="mt-3 text-sm text-gray-700 whitespace-pre-line">{i.message}</p>
                <div className="mt-3 text-xs text-gray-500">Time: {i.createdAt ? new Date(i.createdAt).toLocaleString() : null}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminInquiries;
