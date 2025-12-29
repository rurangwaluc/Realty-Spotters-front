const RecommendationResults = ({ results }) => {
  if (!results || results.length === 0) return null;

  const rankLabels = [
    "Best Match",
    "Strong Option",
    "Good Alternative",
  ];

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Recommended Neighborhoods
      </h3>

      <div className="grid gap-4">
        {results.map((item, index) => (
          <div
            key={index}
            className={`relative bg-white border rounded-xl p-5 transition shadow-sm hover:shadow-md
              ${
                index === 0
                  ? "border-green-300 bg-green-50/40"
                  : "border-gray-200"
              }
            `}
          >
            {/* Rank badge */}
            <div className="absolute -top-3 -left-3 bg-gray-900 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
              #{index + 1} {rankLabels[index] || "Recommended"}
            </div>

            {/* Header */}
            <div className="flex items-start justify-between gap-3">
              <h4 className="text-lg font-semibold text-gray-900">
                {item.neighborhood.name}
              </h4>

              <span
                className={`text-xs font-medium px-2 py-1 rounded-full
                  ${
                    item.confidence === "High"
                      ? "bg-green-100 text-green-700"
                      : item.confidence === "Medium"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }
                `}
              >
                {item.confidence} confidence
              </span>
            </div>

            {/* Rent */}
            <p className="text-sm text-gray-600 mt-2">
              Rent range:{" "}
              <strong className="text-gray-800">
                {item.neighborhood.rentRange.min} –{" "}
                {item.neighborhood.rentRange.max} RWF
              </strong>
            </p>

            {/* Reasons */}
            <ul className="mt-3 space-y-1 list-disc list-inside text-sm text-gray-700">
              {item.reasons.map((reason, i) => (
                <li key={i}>{reason}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationResults;
