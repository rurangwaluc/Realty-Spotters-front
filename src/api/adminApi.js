const API_URL = import.meta.env.VITE_API_URL;

const adminFetch = async (url) => {
  const token = localStorage.getItem("adminToken");

  const res = await fetch(`${API_URL}/api/admin${url}`, {
    headers: {
      "x-admin-token": token,
    },
  });

  if (!res.ok) {
    throw new Error("Unauthorized admin request");
  }

  return res.json();
};

export const fetchAdminAnalytics = () =>
  adminFetch("/analytics");

export const fetchAdminAnalyticsByDate = (days) =>
  adminFetch(`/analytics-by-date?days=${days}`);
