import React from "react";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-4">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M12 2l3 6 6 .5-4.5 3.5L19 20l-7-4-7 4 1.5-7L2 8.5 8 8 11 2z" />
            </svg>
            Trusted local recommendations
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
            Free vs Unlocked — choose how deep you want to go
          </h1>

          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Start with a free preview, or unlock full ranked neighborhoods with
            clear reasoning, scores, and estimated rents.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Free */}
          <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md">
            <header className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Free</h3>
                <p className="mt-1 text-sm text-slate-500">
                  Quick single-match preview
                </p>
              </div>
              <div className="text-sm font-medium text-slate-700">Free</div>
            </header>

            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 w-5 h-5 flex items-center justify-center rounded-full bg-slate-100 text-xs font-semibold">
                  ✓
                </span>
                Top neighborhood match
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-5 h-5 flex items-center justify-center rounded-full bg-slate-100 text-xs font-semibold">
                  ✓
                </span>
                Confidence score summary
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-5 h-5 flex items-center justify-center rounded-full bg-slate-100 text-xs font-semibold">
                  ✓
                </span>
                Instant result, no signup
              </li>
            </ul>

            <div className="mt-6">
              <a
                href="/search"
                className="block w-full text-center px-4 py-2 bg-white border border-slate-200 rounded-md shadow-sm hover:shadow-md min-h-[44px]"
              >
                Try free search
              </a>
            </div>
          </article>

          {/* Unlocked */}
          <article className="relative rounded-3xl p-8 overflow-hidden shadow-sm hover:shadow-md">
            <div className="absolute inset-0 bg-slate-800" />
            <div className="relative z-10 text-white">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold">Unlocked</h3>
                  <p className="mt-1 text-sm text-amber-100">
                    Full ranked neighborhoods & reasoning
                  </p>
                </div>
                <div className="text-sm font-bold">Best value</div>
              </div>

              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="mt-1">✔</span>
                  All ranked neighborhoods
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1">✔</span>
                  Detailed reasoning & scores
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1">✔</span>
                  Estimated rents & action-ready advice
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1">✔</span>
                  One-time payment, no subscriptions
                </li>
              </ul>

              <div className="mt-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div>
                  <div className="text-xs text-amber-100">One-time</div>
                  <div className="mt-1 text-2xl font-extrabold">
                    RWF 2,000
                  </div>
                </div>

                <a
                  href="/search?unlock=true"
                  className="block w-full sm:w-auto px-4 py-2 bg-white text-slate-800 rounded-md font-medium shadow-sm hover:shadow-md text-center min-h-[44px]"
                >
                  Unlock now
                </a>
              </div>
            </div>

            <div className="absolute top-4 right-4 bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full">
              Popular
            </div>
          </article>
        </div>

        {/* Trust row */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
              ⚡
            </div>
            <div>
              <div className="text-sm font-semibold">Fast results</div>
              <div className="text-xs text-slate-500">Minutes, not days</div>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center">
              🔍
            </div>
            <div>
              <div className="text-sm font-semibold">
                Transparent reasoning
              </div>
              <div className="text-xs text-slate-500">
                See why a neighborhood scored
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center">
              🛡️
            </div>
            <div>
              <div className="text-sm font-semibold">No surprises</div>
              <div className="text-xs text-slate-500">
                No hidden fees • One-time payment
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-slate-500">
          Still curious? Try the free flow first — unlock only if you want the
          full story.
        </div>
      </main>
    </div>
  );
}
