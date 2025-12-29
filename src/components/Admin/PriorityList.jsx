const PriorityList = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="bg-white rounded-lg p-4 shadow-sm text-center text-gray-500">No priority data available yet.</div>
    );
  }

  const total = data.reduce((s, it) => s + (it.count || 0), 0) || 1;

  return (
    <div className="mt-6">
      <h4 className="text-lg font-semibold text-gray-900 mb-3">Search Priority Breakdown</h4>

      <div className="space-y-3">
        {data.map((item) => {
          const pct = Math.round(((item.count || 0) / total) * 100);
          return (
            <div key={item._id} className="bg-white rounded-lg p-3 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="text-sm text-gray-700 capitalize">{item._id}</div>
                <div className="text-xs text-gray-500">{item.count} searches</div>
              </div>

              <div className="w-full sm:w-1/2 mt-3 sm:mt-0">
                <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                  <div className="h-2 bg-indigo-600" style={{ width: `${pct}%` }} />
                </div>
                <div className="mt-2 text-xs text-gray-500 text-right">{pct}%</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PriorityList;
