import {
  FunnelChart,
  Funnel,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  Cell,
} from "recharts";

const RevenueFunnel = ({ searches, payments }) => {
  if (!searches || !payments) {
    return <p className="text-sm text-gray-500">No revenue data available</p>;
  }

  const funnelData = [
    { stage: "Searches", value: searches.total || 0 },
    { stage: "Payment Attempts", value: payments.total || 0 },
    { stage: "Successful Payments", value: payments.successful || 0 },
  ];

  const colors = ["#4F46E5", "#06B6D4", "#10B981"];

  const fmt = (v) => (v == null ? "—" : new Intl.NumberFormat().format(v));

  const renderLabel = (props) => {
    const { x, y, value, index, width, height } = props;
    const color = colors[index % colors.length] || "#111827";
    const hex = color.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    const fill = luminance > 0.6 ? '#111827' : '#ffffff';

    const stage = funnelData[index]?.stage ?? value;
    const num = fmt(funnelData[index]?.value);

    const cx = typeof width === 'number' ? x + width / 2 : x + 12;
    const cy = typeof height === 'number' ? y + height / 2 : y + 8;

    return (
      <text x={cx} y={cy} fill={fill} fontSize={12} fontWeight={700} textAnchor="middle" alignmentBaseline="middle">
        <tspan x={cx} dy="-6">{stage}</tspan>
        <tspan x={cx} dy="14" fontSize={11} fontWeight={600}>{num} users</tspan>
      </text>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-5">
      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Search → Payment Conversion Funnel</h3>

      <div className="w-full h-64 sm:h-72 lg:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <FunnelChart>
            <Tooltip formatter={(value) => [fmt(value), 'Users']} />
              <Funnel dataKey="value" data={funnelData} isAnimationActive>
                {funnelData.map((_, i) => (
                  <Cell key={`cell-${i}`} fill={colors[i % colors.length]} />
                ))}
                <LabelList position="inside" dataKey="stage" content={renderLabel} />
              </Funnel>
          </FunnelChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 text-sm text-gray-600">
        <div>Revenue generated: <strong className="text-gray-900">{fmt(payments.revenue)} RWF</strong></div>
        <div className="mt-1">Conversion rate: <strong className="text-gray-900">{payments.conversionRate ?? '—'}</strong></div>
      </div>
    </div>
  );
};

export default RevenueFunnel;
