const StatCard = ({ title, value, subtitle }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-5 transition-all duration-150 cursor-default">
      <p className="text-xs text-gray-500 mb-1">
        {title}
      </p>
      <h2 className="text-lg sm:text-2xl font-semibold text-gray-900 m-0">
        {value}
      </h2>
      {subtitle && (
        <p className="text-xs text-gray-400 mt-1">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default StatCard;
