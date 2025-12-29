const SkeletonBox = ({ height = 20, className = "" }) => (
  <div
    className={`rounded-md bg-gray-200 dark:bg-gray-700 animate-pulse ${className}`}
    style={{ height }}
  />
);

export const AdminSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-3">
          <SkeletonBox height={28} className="w-3/5" />
          <SkeletonBox height={14} className="w-1/3" />
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white rounded-lg p-4 shadow-sm">
              <SkeletonBox height={16} className="w-1/2 mb-3" />
              <SkeletonBox height={56} />
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <SkeletonBox height={12} className="w-2/5 mb-3" />
            <SkeletonBox height={160} />
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm">
            <SkeletonBox height={12} className="w-1/2 mb-3" />
            <SkeletonBox height={160} />
          </div>
        </div>
      </div>
    </div>
  );
};
