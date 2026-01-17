import React, { useState } from "react";

import { Helmet } from "react-helmet-async";

export default function Pricing() {
  const [plan, setPlan] = useState("one-time"); // placeholder for future toggle

  return (
    <>
      <Helmet>
        <title>Pricing | Unlock Full Kigali Neighborhood Insights</title>
        <meta
          name="description"
          content="View pricing for Realty Spotters. Unlock full ranked neighborhood recommendations in Kigali with detailed reasoning, scores, and local insights."
        />
      </Helmet>

      <div className="min-h-screen bg-slate-50">
        {/* Hero Section */}
        <header className="py-16 px-6 sm:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900">
                Unlock Full Neighborhood Recommendations
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-slate-600">
                Gain access to all ranked neighborhoods, detailed reasoning,
                scores, and actionable local insights tailored to your lifestyle.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-xs font-medium text-slate-800">
                  Data-driven
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-xs font-medium text-slate-800">
                  Local insights
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-xs font-medium text-slate-800">
                  Fast results
                </span>
              </div>
            </div>

            {/* Right Column: Decorative Featured Card */}
            <div className="hidden lg:block">
              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-lg text-slate-900 relative">
                <div className="text-xs font-medium opacity-80">Featured</div>
                <div className="mt-2">
                  <div className="text-lg font-semibold">Kigali Central</div>
                  <div className="mt-1 text-sm opacity-90 text-slate-700">
                    Perfect for families — parks, schools, and short commutes.
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs">
                  <span className="px-2 py-1 rounded bg-amber-50 text-amber-700 font-semibold">
                    Score 9.1
                  </span>
                  <span className="px-2 py-1 rounded bg-slate-100 text-slate-900">
                    Avg rent RWF 400k
                  </span>
                </div>

                {/* Decorative shape */}
                <svg
                  className="absolute -right-8 -bottom-8 w-40 opacity-20 transform rotate-12"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path
                    fill="#cbd5e1"
                    d="M44.8,-61.8C57.6,-55.9,68.9,-46.2,72.6,-34.8C76.3,-23.4,72.5,-10.2,71.9,3.3C71.3,16.8,73.9,30.9,68.5,42.7C63,54.4,49.4,63.8,35.3,69.6C21.1,75.4,6.5,77.7,-6.2,82C-19,86.3,-31.3,92.6,-44.6,89.8C-57.9,86.9,-72.3,74.9,-77.2,60.3C-82.2,45.6,-77.7,28.3,-74.3,11.2C-70.9,-5.9,-68.7,-21.9,-61.8,-33.8C-54.9,-45.7,-43.4,-53.5,-31.3,-59.6C-19.2,-65.7,-6.4,-70.1,7.1,-74.1C20.7,-78,41.5,-80.6,44.8,-61.8Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </div>
            </div>
          </div>
        </header>

        {/* Plans Section */}
        <main className="max-w-7xl mx-auto px-6 sm:px-12 py-12">
          <div className="grid gap-8 md:grid-cols-2 items-start">
            {/* Free Plan */}
            <article className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
              <header className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Free</h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Try a quick single-match search with basic insights
                  </p>
                </div>
                <div className="text-sm font-medium text-slate-700">Free</div>
              </header>

              <ul className="mt-6 space-y-3 text-slate-700 text-sm">
                <li className="flex items-start gap-3">✓ Top neighborhood match</li>
                <li className="flex items-start gap-3">✓ Confidence score summary</li>
                <li className="flex items-start gap-3">✓ Instant result, no signup</li>
              </ul>

              <div className="mt-6">
                <a
                  href="/search"
                  className="block w-full text-center px-4 py-3 bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md text-slate-800 font-medium min-h-[44px]"
                >
                  Try Free Search
                </a>
              </div>
            </article>

            {/* Unlocked Plan */}
            <article className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-amber-700 to-amber-400 opacity-95" />
              <div className="relative z-10 text-white p-8 flex flex-col justify-between h-full">
                <header className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">Unlocked</h3>
                    <p className="mt-1 text-amber-100 text-sm">
                      Full ranked neighborhoods with detailed reasoning
                    </p>
                  </div>
                  <div className="text-sm font-bold">Best Value</div>
                </header>

                <ul className="mt-6 space-y-3 text-sm">
                  <li>✓ All ranked neighborhoods</li>
                  <li>✓ Detailed reasoning & neighborhood scores</li>
                  <li>✓ Estimated rents & actionable advice</li>
                </ul>

                <div className="mt-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                  <div>
                    <div className="text-xs text-amber-200">One-time</div>
                    <div className="mt-1 text-2xl font-extrabold">RWF 2,000</div>
                  </div>
                  <a
                    href="/search?unlock=true"
                    className="block w-full sm:w-auto text-center px-4 py-3 bg-white text-slate-900 rounded-lg font-semibold shadow hover:shadow-md min-h-[44px]"
                  >
                    Unlock Now
                  </a>
                </div>
              </div>
            </article>
          </div>
        </main>
      </div>
    </>
  );
}
