const API_URL = import.meta.env.VITE_API_URL;

export async function recommendNeighborhoods(payload) {
  const res = await fetch(
    `${API_URL}/api/recommend-neighborhoods`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch recommendations");
  }

  return res.json();
}
