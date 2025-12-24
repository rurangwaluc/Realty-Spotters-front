const Pricing = () => {
  return (
    <section className="section">
      <h2>Free vs Unlocked</h2>

      <div className="pricing">
        <div className="card">
          <h3>Free</h3>
          <ul>
            <li>Top neighborhood match</li>
            <li>Confidence score</li>
            <li>Instant result</li>
          </ul>
        </div>

        <div className="card highlight-card">
          <h3>Unlocked</h3>
          <ul>
            <li>All ranked neighborhoods</li>
            <li>Detailed reasoning</li>
            <li>Smarter decision making</li>
          </ul>
          <p className="price">RWF 2,000</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
