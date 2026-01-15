import React from "react";

const HowItWorks = () => {
  return (
    <section aria-labelledby="howitworks-heading" className="py-12 sm:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mx-auto max-w-2xl">
          <h2 id="howitworks-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            How Realty Spotters Finds Your Next Neighborhood
          </h2>
          <p className="mt-3 text-slate-600">
            A fast, human‑centric + data‑driven flow that surfaces neighborhoods that actually match your life.
          </p>
        </div>

        <div className="mt-10 relative">
          {/* subtle horizontal connector for large screens */}
          <svg className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 -top-6 w-[60%] h-6 pointer-events-none" viewBox="0 0 600 24" fill="none" aria-hidden>
            <path d="M10 12 C150 0, 450 24, 590 12" stroke="#C7D2FE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {/* Step 1 */}
            <article className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-slate-800 to-amber-400 text-white flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold text-slate-900">Tell us what matters</h3>
                  <p className="mt-2 text-sm text-slate-600 md:text-base">
                    Quickly share budget, bedrooms, commute and lifestyle priorities — we combine your answers with local data.
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="text-xs text-slate-800 font-medium">Quick</div>
                <div className="text-xs text-gray-400">~1 min</div>
              </div>
            </article>

            {/* Step 2 */}
            <article className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-amber-400 to-amber-600 text-white flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold text-slate-900">We analyze Kigali</h3>
                  <p className="mt-2 text-sm text-slate-600 md:text-base">
                    Our model blends rent ranges, amenities, commute times and availability to score neighborhoods for you.
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="text-xs text-amber-500 font-medium">Data</div>
                <div className="text-xs text-gray-400">Local & fresh</div>
              </div>
            </article>

            {/* Step 3 */}
            <article className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-amber-500 to-slate-800 text-white flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold text-slate-900">Get ranked recommendations</h3>
                  <p className="mt-2 text-sm text-slate-600 md:text-base">
                    Receive a ranked list with scores, estimated rents and short reasoning so you can act with confidence.
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="text-xs text-amber-600 font-medium">Instant</div>
                <div className="text-xs text-gray-400">Decision-ready</div>
              </div>
            </article>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-3">
          <button
            onClick={() => (window.location.href = "/search")}
            className="w-full sm:w-auto min-h-[44px] inline-flex items-center gap-2 px-5 py-3 bg-slate-800 hover:bg-slate-900 text-white rounded-lg shadow-sm hover:shadow-md text-sm md:text-base font-semibold"
          >
            Try a free search
          </button>

          <a
            href="/pricing"
            className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center px-5 py-3 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm md:text-base shadow-sm"
          >
            Unlock full recommendations
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
