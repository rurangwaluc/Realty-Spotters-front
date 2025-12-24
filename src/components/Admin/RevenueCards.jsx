export default function RevenueCards({ payments }) {
  return (
    <div style={{ display: "flex", gap: 20, marginBottom: 30 }}>
      <Card title="Total Searches" value={payments.total} />
      <Card title="Successful Payments" value={payments.successful} />
      <Card title="Revenue (RWF)" value={payments.revenue} />
      <Card title="Conversion Rate" value={payments.conversionRate} />
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: 15,
        borderRadius: 6,
        minWidth: 150,
      }}
    >
      <p style={{ fontSize: 12, color: "#666" }}>{title}</p>
      <h3>{value}</h3>
    </div>
  );
}
