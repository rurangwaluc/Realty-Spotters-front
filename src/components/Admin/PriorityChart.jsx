import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const PriorityChart = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No priority data available</p>;
  }

  // Normalize API response for Recharts
  const chartData = data.map((item) => ({
    priority: item._id,
    searches: item.count,
  }));

      return (
        <div
          style={{
            background: "#fff",
            padding: 20,
            borderRadius: 12,
            boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
            height: 350,
          }}
        >
          <h3 style={{ marginBottom: 12 }}>
            Search Demand by Priority
          </h3>

          <ResponsiveContainer>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="priority" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="searches" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      );

};

export default PriorityChart;
