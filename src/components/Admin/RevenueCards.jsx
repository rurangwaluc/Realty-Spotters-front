export default function RevenueCards({ payments = {} }) {
  const formatNumber = (v) => {
    if (v == null) return "—";
    if (typeof v === "number") return new Intl.NumberFormat().format(v);
    return v;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <Card title="Total Searches" value={formatNumber(payments.total)} />
      <Card title="Successful Payments" value={formatNumber(payments.successful)} />
      <Card title="Revenue (RWF)" value={formatNumber(payments.revenue)} />
      <Card title="Conversion Rate" value={payments.conversionRate ?? "—"} />
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm flex flex-col">
      <p className="text-xs text-gray-500">{title}</p>
      <h3 className="mt-2 text-2xl font-bold text-gray-900">{value}</h3>
    </div>
  );
}
