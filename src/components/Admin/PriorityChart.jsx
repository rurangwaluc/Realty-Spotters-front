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
    <div className="bg-white p-4 sm:p-5 rounded-lg shadow-sm h-64 sm:h-72 lg:h-80">
      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">Search Demand by Priority</h3>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} margin={{ top: 6, right: 12, left: 0, bottom: 6 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e6e6e6" />
          <XAxis dataKey="priority" tick={{ fontSize: 12 }} />
          <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
          <Tooltip formatter={(value) => [value, 'Searches']} />
          <Bar dataKey="searches" fill="#4F46E5" radius={[4,4,0,0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

};

export default PriorityChart;
