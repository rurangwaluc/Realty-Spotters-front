import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();
  return (
    <section className="cta">
      <h2>Stop guessing where to live</h2>
      <p>Get your first neighborhood recommendation in seconds.</p>

      <button className="primary-btn" onClick={() => navigate("/search")}>
        Start Free Neighborhood Search
      </button>
    </section>
  );
};

export default CTA;
