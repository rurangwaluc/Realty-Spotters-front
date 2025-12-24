import {
  FunnelChart,
  Funnel,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const RevenueFunnel = ({ searches, payments }) => {
  if (!searches || !payments) {
    return <p>No revenue data available</p>;
  }

  const funnelData = [
    {
      stage: "Searches",
      value: searches.total,
    },
    {
      stage: "Payment Attempts",
      value: payments.total,
    },
    {
      stage: "Successful Payments",
      value: payments.successful,
    },
  ];

  return (
    <div style={{ width: "100%", height: 350 }}>
      <h3>Search → Payment Conversion Funnel</h3>

      <ResponsiveContainer>
        <FunnelChart>
          <Tooltip />
          <Funnel
            dataKey="value"
            data={funnelData}
            isAnimationActive
          >
            <LabelList
              position="right"
              dataKey="stage"
              fill="#555"
            />
          </Funnel>
        </FunnelChart>
      </ResponsiveContainer>

      <p style={{ marginTop: 10, color: "#666" }}>
        Revenue generated: <strong>{payments.revenue} RWF</strong>
        <br />
        Conversion rate: <strong>{payments.conversionRate}</strong>
      </p>
    </div>
  );
};

export default RevenueFunnel;
