export async function recommendNeighborhoods(payload) {
  const res = await fetch(
    "http://localhost:5000/api/recommend-neighborhoods",
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
