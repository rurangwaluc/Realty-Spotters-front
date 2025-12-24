import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <h1>Find the right neighborhood in Kigali</h1>

      <p className="hero-sub">
        Not listings. Not agents.  
        <strong> Data-driven neighborhood recommendations</strong>  
        based on your budget and lifestyle.
      </p>

      <button
        className="primary-btn"
        onClick={() => navigate("/search")}
      >
        Start Free Search
      </button>

      <p className="hero-note">No signup required</p>
    </section>
  );
};

export default Hero;
