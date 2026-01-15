const API_URL = import.meta.env.VITE_API_URL;

export async function initiatePayment({
  searchLogId,
  phoneNumber,
  amount = 2000,
  currency = "RWF",
  provider = "momo",
}) {
  if (!searchLogId) {
    throw new Error("searchLogId is required");
  }

  const res = await fetch(`${API_URL}/api/payments/initiate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      searchLogId,
      phoneNumber,
      amount,
      currency,
      provider,
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    console.error("PAYMENT INITIATE ERROR:", data);
    throw new Error(data.message || "Payment initiation failed");
  }

  return data;
}

export async function confirmSandboxPayment(reference) {
  const res = await fetch(`${API_URL}/api/payments/confirm-sandbox`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ reference }),
  });

  const data = await res.json();

  if (!res.ok) {
    console.error("SANDBOX CONFIRM ERROR:", data);
    throw new Error(data.message || "Payment confirmation failed");
  }

  return data;
}

export async function unlockRecommendations(payload) {
  const res = await fetch(
    `${API_URL}/api/recommend-neighborhoods/unlock`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }
  );

  const data = await res.json();

  if (!res.ok) {
    console.error("UNLOCK ERROR:", data);
    throw new Error(data.message || "Unlock failed");
  }

  return data;
}
