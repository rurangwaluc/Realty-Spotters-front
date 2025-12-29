import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-400 py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-5 sm:p-8 lg:p-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <div className="flex-1 text-center sm:text-left">
            <div className="inline-flex items-center gap-3 mb-2">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-white text-sm font-semibold">RS</span>
              <span className="text-sm text-white/90 font-medium">Realty Spotters</span>
            </div>

            <h2 className="text-white text-2xl sm:text-3xl font-extrabold leading-tight">
              Stop guessing where to live — find a neighborhood that fits your life.
            </h2>

            <p className="mt-2 text-white/90 max-w-xl text-sm sm:text-base">
              Get a ranked, data-driven neighborhood recommendation in seconds — no signup. Local insights, clear scores, real confidence.
            </p>

            <div className="mt-4 hidden sm:flex items-center gap-3">
              <div className="inline-flex items-center gap-2 bg-white/10 text-white px-3 py-1 rounded-full text-xs">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M12 2l3 6 6 .5-4.5 3.5L19 20l-7-4-7 4 1.5-7L2 8.5 8 8 11 2z" fill="currentColor"/></svg>
                Trusted local insights
              </div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-white px-3 py-1 rounded-full text-xs">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Fast results — minutes
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 w-full sm:w-auto">
            <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-lg w-full">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <button
                  onClick={() => navigate("/search")}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
                >
                  Start Free Search
                  <svg className="w-4 h-4 opacity-90" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>

                <button
                  onClick={() => navigate("/pricing")}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-3 border border-gray-200 text-gray-700 rounded-lg text-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-200"
                >
                  See pricing
                </button>
              </div>

              <div className="mt-3 text-xs text-gray-500 text-center sm:text-left">
                No signup • Free preview • Local experts available
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 text-center sm:text-left text-xs text-white/80">
          <span className="inline-block bg-white/10 px-2 py-1 rounded-full">⭐ Highly rated by renters in Kigali</span>
        </div>
      </div>
    </section>
  );
};

export default CTA;
