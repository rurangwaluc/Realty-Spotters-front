import { useEffect, useRef, useState } from "react";

import PaywallNotice from "../components/UI/PaywallNotice";
import RecommendationForm from "../components/Form/RecommendationForm";
import RecommendationResults from "../components/Results/RecommendationResults";
import { useRecommendations } from "../hooks/useRecommendations";

export default function Search() {
  const {
    submit,
    freeResults,
    lockedResults,
    loading,
    searchLogId,
    budget,
    bedrooms,
    priority,
    setFreeResults,
  } = useRecommendations();

  const resultsRef = useRef(null);
  const [unlocked, setUnlocked] = useState(false);
  const [showFilters, setShowFilters] = useState(false); // mobile filter toggle

  // Auto-scroll after unlock
  useEffect(() => {
    if (unlocked && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [unlocked]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-indigo-50 to-white">
      {/* Polished hero */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="rounded-2xl bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-400 text-white p-6 sm:p-8 shadow-2xl overflow-hidden relative">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            <div className="flex-1 max-w-2xl">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight">
                Find your perfect neighborhood in{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-white to-yellow-300">
                  Kigali
                </span>{" "}
                — smarter, faster, local.
              </h1>

              <p className="mt-3 text-indigo-100/95 text-sm sm:text-base">
                No endless listing browsing — get ranked, data-backed neighborhood
                recommendations tailored to your budget, bedrooms and lifestyle
                priority.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs">
                  Data-driven
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs">
                  Local insights
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs">
                  Fast results
                </span>
              </div>

              <div className="mt-5 flex gap-3">
                <button
                  onClick={() => {
                    // focus the form on desktop or open mobile filters
                    const el = document.querySelector("#recommendation-form");
                    if (el)
                      el.scrollIntoView({ behavior: "smooth", block: "center" });
                    setShowFilters(true);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white text-indigo-700 font-semibold rounded-lg shadow-sm hover:shadow-md"
                >
                  Try quick search
                </button>

                <a
                  href="/pricing"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-lg font-medium hover:bg-white/30"
                >
                  Unlock full recommendations
                </a>
              </div>
            </div>

            {/* Decorative featured card */}
            <div className="hidden lg:block lg:w-80">
              <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="text-xs text-white/90 font-medium">Featured</div>
                <div className="mt-2">
                  <div className="text-white font-semibold text-lg">
                    Kibagabaga
                  </div>
                  <div className="mt-1 text-white/90 text-sm">
                    Great for families — parks, schools, short commutes.
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2 text-white text-xs">
                  <span className="px-2 py-1 rounded bg-white/20">Score 8.6</span>
                  <span className="px-2 py-1 rounded bg-white/20">
                    Avg rent RWF 350k
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* subtle abstract shape */}
          <svg
            className="absolute -right-8 -bottom-8 w-64 opacity-20 transform rotate-12"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              fill="#ffffff"
              d="M44.8,-61.8C57.6,-55.9,68.9,-46.2,72.6,-34.8C76.3,-23.4,72.5,-10.2,71.9,3.3C71.3,16.8,73.9,30.9,68.5,42.7C63,54.4,49.4,63.8,35.3,69.6C21.1,75.4,6.5,77.7,-6.2,82C-19,86.3,-31.3,92.6,-44.6,89.8C-57.9,86.9,-72.3,74.9,-77.2,60.3C-82.2,45.6,-77.7,28.3,-74.3,11.2C-70.9,-5.9,-68.7,-21.9,-61.8,-33.8C-54.9,-45.7,-43.4,-53.5,-31.3,-59.6C-19.2,-65.7,-6.4,-70.1,7.1,-74.1C20.7,-78,41.5,-80.6,44.8,-61.8Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </header>

      {/* Main layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Aside / Filters */}
          <aside className="lg:col-span-1">
            {/* Mobile: toggle button */}
            <div className="md:hidden mb-3">
              <button
                onClick={() => setShowFilters((s) => !s)}
                className="w-full inline-flex items-center justify-between px-4 py-2 bg-white rounded-lg shadow-sm text-sm font-medium"
                aria-expanded={showFilters}
              >
                <span>{showFilters ? "Hide filters" : "Show quick search"}</span>
                <svg
                  className={`h-5 w-5 transform ${
                    showFilters ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {/* Filters panel: sticky on desktop, collapsible on mobile */}
            <div
              className={`${
                showFilters ? "block" : "hidden md:block"
              } sticky md:top-6 bg-white rounded-lg shadow-sm p-5`}
              id="recommendation-form"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                Quick Search
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Pick a budget, bedrooms and your top priority. Try different combos
                for fresh ideas.
              </p>

              <div className="mt-4">
                <RecommendationForm onSubmit={submit} loading={loading} />
              </div>

              <div className="mt-4 text-xs text-gray-500">
                Tip: Slightly increasing budget often surfaces quieter,
                family-friendly neighborhoods.
              </div>
            </div>
          </aside>

          {/* Results */}
          <section className="lg:col-span-2">
            <div className="space-y-4">
              {freeResults.length > 0 && (
                <p className="text-sm italic text-gray-500">
                  Recommendations ranked by budget fit • lifestyle match • bedroom
                  availability
                </p>
              )}

              {/* Results container */}
              <div ref={resultsRef} className="mt-2 space-y-4">
                {lockedResults.length === 0 && unlocked && (
                  <div className="rounded-md border border-emerald-200 bg-emerald-50 p-3 font-semibold text-emerald-700">
                    ✅ All recommendations unlocked
                  </div>
                )}

                <div className="space-y-4">
                  <RecommendationResults results={freeResults} />
                </div>

                {/* Paywall area */}
                {!unlocked && (
                  <div className="mt-4">
                    <PaywallNotice
                      lockedResults={lockedResults}
                      searchLogId={searchLogId}
                      budget={budget}
                      bedrooms={bedrooms}
                      priority={priority}
                      onUnlock={(results) => {
                        setFreeResults(results);
                        setUnlocked(true);
                      }}
                    />
                  </div>
                )}
              </div>

              {/* small footer CTA */}
              <div className="mt-6 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm text-sm text-gray-700">
                  <svg
                    className="w-4 h-4 text-indigo-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M12 2l3 6 6 .5-4.5 3.5L19 20l-7-4-7 4 1.5-7L2 8.5 8 8 11 2z"
                      fill="currentColor"
                    />
                  </svg>
                  Need tailored recommendations? Use the form to get a ranked list
                  for your exact needs.
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
