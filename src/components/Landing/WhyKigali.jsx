import React from "react";

const WhyKigali = () => {
  return (
    <section className="bg-slate-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
            Why Kigali? Why it matters for your day-to-day
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Small differences between neighborhoods shape real life — commute,
            markets, schools and peace of mind. We make those differences visible
            so you can choose where life fits best.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <article className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-slate-800 to-amber-400 text-white flex items-center justify-center">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M3 11.5V21h6v-6h6v6h6V11.5L12 3 3 11.5z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>

              <div className="min-w-0">
                <h3 className="text-lg font-semibold text-gray-900">
                  Block-level pricing
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Rents vary street-to-street. We surface localized estimates so
                  you know what to expect before you visit.
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs">
              <span className="text-slate-800 font-medium">Precision</span>
              <span className="text-gray-400">Micro-data</span>
            </div>
          </article>

          <article className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-amber-400 to-amber-600 text-white flex items-center justify-center">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M12 2a7 7 0 017 7c0 5-7 13-7 13s-7-8-7-13a7 7 0 017-7z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>

              <div className="min-w-0">
                <h3 className="text-lg font-semibold text-gray-900">
                  Unbiased recommendations
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  No listing bias. No agent incentives. Rankings are data-aligned
                  to your priorities.
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs">
              <span className="text-amber-500 font-medium">Objective</span>
              <span className="text-gray-400">Transparent</span>
            </div>
          </article>

          <article className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-amber-500 to-slate-800 text-white flex items-center justify-center">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M3 7h18v13H3zM7 3h10v4H7z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>

              <div className="min-w-0">
                <h3 className="text-lg font-semibold text-gray-900">
                  Life-first insights
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Schools, markets, commutes and safety — we weigh what matters
                  so your choice fits daily routines.
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs">
              <span className="text-amber-600 font-medium">Practical</span>
              <span className="text-gray-400">Everyday</span>
            </div>
          </article>

          {/* Bonus content row for intrigue on larger screens */}
          <div className="sm:col-span-2 lg:col-span-3 mt-2">
            <div className="mt-6 bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-inner flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-slate-900">
                  Ready for smarter, local choices?
                </h4>
                <p className="mt-1 text-sm text-slate-600">
                  Try a quick search to see ranked neighborhoods with scores,
                  estimated rents and short reasoning — tailored to you.
                </p>
              </div>

              <div className="flex-shrink-0 mt-3 sm:mt-0">
                <a
                  href="/search"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-lg text-sm md:text-base font-medium shadow-sm hover:shadow-md"
                >
                  Start a free search
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            No tracking, no spam — just local, data-backed guidance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyKigali;
