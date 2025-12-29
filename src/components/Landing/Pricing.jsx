import React, { useState } from "react";

const Pricing = () => {
  const [plan, setPlan] = useState("one-time"); // reserved for future toggle (monthly/yearly)

  return (
    <section aria-labelledby="pricing-heading" className="bg-gradient-to-b from-white via-indigo-50 to-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-4">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M12 2l3 6 6 .5-4.5 3.5L19 20l-7-4-7 4 1.5-7L2 8.5 8 8 11 2z" fill="currentColor"/></svg>
            Trusted local recommendations
          </div>

          <h2 id="pricing-heading" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
            Free vs Unlocked — choose how deep you want to go
          </h2>
          <p className="mt-3 text-gray-600 text-sm sm:text-base">
            Try a fast free search to get a single top match — or unlock full ranked neighborhoods with clear reasoning, scores and estimated rents.
          </p>
        </div>

        <div className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-2 items-start">
          {/* Free Card */}
          <article className="rounded-2xl border border-gray-100 p-6 bg-white shadow-sm">
            <header className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Free</h3>
                <p className="mt-1 text-sm text-gray-500">Fast single-match preview to get you started</p>
              </div>

              <div className="text-sm font-medium text-gray-700">Free</div>
            </header>

            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-700">
                <span className="mt-1 inline-flex items-center justify-center w-5 h-5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold">✓</span>
                <span>Top neighborhood match</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-700">
                <span className="mt-1 inline-flex items-center justify-center w-5 h-5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold">✓</span>
                <span>Confidence score (summary)</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-700">
                <span className="mt-1 inline-flex items-center justify-center w-5 h-5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold">✓</span>
                <span>Instant result — no sign up</span>
              </li>
            </ul>

            <div className="mt-6">
              <a
                href="/search"
                className="block w-full sm:inline-flex sm:w-auto text-center px-4 py-2 bg-white border border-gray-200 text-sm rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                aria-label="Try free search"
              >
                Try free search
              </a>
            </div>
          </article>

          {/* Unlocked Card */}
          <article className="relative rounded-3xl p-8 overflow-hidden shadow-2xl" aria-hidden={false}>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-400 opacity-100" />
            <div className="relative z-10 text-white">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold">Unlocked</h3>
                  <p className="mt-1 text-sm text-indigo-100/90">Full ranked neighborhoods with detailed reasoning</p>
                </div>
                <div className="text-sm font-bold">Best value</div>
              </div>

              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-white mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414-1.414L8 11.172 4.707 7.879a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8z" clipRule="evenodd" /></svg>
                  <span>All ranked neighborhoods</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-white mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414-1.414L8 11.172 4.707 7.879a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8z" clipRule="evenodd" /></svg>
                  <span>Detailed reasoning & neighborhood scores</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-white mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414-1.414L8 11.172 4.707 7.879a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8z" clipRule="evenodd" /></svg>
                  <span>Estimated rents & action-ready advice</span>
                </li>
              </ul>

              <div className="mt-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div>
                  <div className="text-xs text-indigo-100">One-time</div>
                  <div className="mt-1 text-2xl font-extrabold">RWF 2,000</div>
                </div>

                <a
                  href="/search?unlock=true"
                  className="block w-full sm:inline-flex sm:w-auto items-center justify-center gap-2 px-4 py-2 bg-white text-indigo-700 rounded-md font-medium shadow hover:opacity-95 text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  aria-label="Unlock full recommendations"
                >
                  Unlock now
                </a>
              </div>
            </div>

            {/* decorative accent */}
            <div className="absolute top-4 right-4 bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full">Popular</div>
          </article>
        </div>

        {/* subtle benefits row */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">⚡</div>
            <div>
              <div className="text-sm font-semibold text-gray-900">Fast results</div>
              <div className="text-xs text-gray-500">Minutes, not days</div>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">🔍</div>
            <div>
              <div className="text-sm font-semibold text-gray-900">Transparent reasoning</div>
              <div className="text-xs text-gray-500">See why a neighborhood scored</div>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">🛡️</div>
            <div>
              <div className="text-sm font-semibold text-gray-900">No surprises</div>
              <div className="text-xs text-gray-500">No hidden fees • Cancel anytime</div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">Still curious? Try the free flow first — unlock only if you want the full story.</div>
      </div>
    </section>
  );
};

export default Pricing;
