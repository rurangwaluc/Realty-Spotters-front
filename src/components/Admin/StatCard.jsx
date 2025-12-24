const StatCard = ({ title, value, subtitle }) => {
  return (
    <div
    className="stat-card"
      style={{
        background: "#fff",
        borderRadius: 12,
        padding: 20,
        boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
        transition: "all 0.2s ease",
        cursor: "default",
      }}
    >
      <p style={{ fontSize: 12, color: "#777", marginBottom: 6 }}>
        {title}
      </p>
      <h2 style={{ margin: 0 }}>{value}</h2>
      {subtitle && (
        <p style={{ fontSize: 12, color: "#999", marginTop: 6 }}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default StatCard;
