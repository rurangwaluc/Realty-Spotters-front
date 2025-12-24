const PriorityList = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div style={{ padding: 20, color: "#777" }}>
        No priority data available yet.
      </div>
    );
  }

  return (
    <div style={{ marginTop: 40 }}>
      <h4>Search Priority Breakdown</h4>
      <ul>
        {data.map((item) => (
          <li style={{ textTransform: 'capitalize' }} key={item._id}>
            {item._id}: <strong >{item.count}</strong> searches
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PriorityList;
