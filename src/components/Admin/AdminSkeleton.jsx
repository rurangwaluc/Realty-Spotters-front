const SkeletonBox = ({ height = 20 }) => (
  <div
    style={{
      height,
      background: "linear-gradient(90deg, #eee, #f5f5f5, #eee)",
      borderRadius: 6,
      animation: "pulse .4s infinite",
    }}
  />
);

export const AdminSkeleton = () => {
  return (
    <div className="admin-container">
      <SkeletonBox height={32} />
      <SkeletonBox height={16} />

      <div className="kpi-grid" style={{ marginTop: 30 }}>
        {[1, 2, 3, 4].map((i) => (
          <SkeletonBox key={i} height={90} />
        ))}
      </div>
    </div>
  );
};
