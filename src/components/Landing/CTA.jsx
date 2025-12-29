import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-indigo-600 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Stop guessing where to live</h2>
            <p className="mt-2 text-indigo-100">Get your first neighborhood recommendation in seconds — no signup required.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button
              onClick={() => navigate('/search')}
              className="w-full sm:w-auto inline-flex justify-center items-center px-5 py-3 bg-white text-indigo-700 rounded-md shadow-md font-semibold hover:opacity-95"
            >
              Start Free Search
            </button>

            <button
              onClick={() => navigate('/pricing')}
              className="w-full sm:w-auto inline-flex justify-center items-center px-4 py-3 border border-white/30 text-white rounded-md text-sm hover:bg-white/10"
            >
              See pricing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
