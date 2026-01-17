import { useEffect, useRef, useState } from 'react'

import { Helmet } from 'react-helmet-async'
import PaywallNotice from '../components/UI/PaywallNotice'
import RecommendationForm from '../components/Form/RecommendationForm'
import RecommendationResults from '../components/Results/RecommendationResults'
import { useRecommendations } from '../hooks/useRecommendations'

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
  } = useRecommendations()

  const resultsRef = useRef(null)
  const [unlocked, setUnlocked] = useState(false)
  const [showFilters, setShowFilters] = useState(false)

  // Auto-scroll after unlock (mobile-safe)
  useEffect(() => {
    if (unlocked && resultsRef.current) {
      resultsRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      })
    }
  }, [unlocked])

  return (
    <>
      <Helmet>
        <title>Neighborhood Search in Kigali | Realty Spotters</title>
        <meta
          name="description"
          content="Search and compare Kigali neighborhoods using budget, bedrooms, and lifestyle priorities. Get ranked, data-backed recommendations in seconds."
        />
      </Helmet>

      <div className="min-h-screen bg-slate-50">
        {/* Hero */}
        <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="relative overflow-hidden rounded-2xl bg-white border border-slate-200 p-5 sm:p-8 shadow-sm hover:shadow-md">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
              <div className="flex-1 max-w-2xl">
                <h1 className="text-xl sm:text-3xl lg:text-4xl font-extrabold leading-snug text-slate-900">
                  Find your perfect neighborhood in{' '}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-amber-400">
                    Kigali
                  </span>{' '}
                  — smarter, faster, local.
                </h1>

                <p className="mt-3 text-slate-600 text-sm sm:text-base">
                  No endless listing browsing — get ranked, data-backed
                  neighborhood recommendations tailored to your budget, bedrooms
                  and lifestyle priority.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-xs text-slate-800">
                    Data-driven
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-xs text-slate-800">
                    Local insights
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-xs text-slate-800">
                    Fast results
                  </span>
                </div>

                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      const el = document.querySelector('#recommendation-form')
                      if (el) {
                        el.scrollIntoView({
                          behavior: 'smooth',
                          block: 'center',
                        })
                      }
                      setShowFilters(true)
                    }}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 min-h-[48px] bg-slate-800 text-white font-semibold rounded-lg shadow-sm hover:shadow-md"
                  >
                    Try quick search
                  </button>

                  <a
                    href="/pricing"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 min-h-[48px] bg-white border border-slate-200 text-slate-800 rounded-lg font-medium hover:brightness-95"
                  >
                    Unlock full recommendations
                  </a>
                </div>
              </div>

              {/* Featured card (desktop only) */}
              <div className="hidden xl:block xl:w-80">
                <div className="bg-white p-4 rounded-2xl border border-slate-200">
                  <div className="text-xs text-slate-700 font-medium">
                    Featured
                  </div>
                  <div className="mt-2">
                    <div className="text-slate-900 font-semibold text-lg">
                      Kibagabaga
                    </div>
                    <div className="mt-1 text-slate-600 text-sm">
                      Great for families — parks, schools, short commutes.
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-xs">
                    <span className="px-2 py-1 rounded bg-amber-50 text-amber-600">
                      Score 8.6
                    </span>
                    <span className="px-2 py-1 rounded bg-slate-50 text-slate-800">
                      Avg rent RWF 350k
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Filters */}
            <aside className="lg:col-span-1">
              <div
                id="recommendation-form"
                className="md:sticky md:top-6 bg-white rounded-xl shadow-sm p-5 sm:p-6 border border-slate-200"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  Quick Search
                </h3>

                <div className="mt-4">
                  <RecommendationForm onSubmit={submit} loading={loading} />
                </div>
              </div>
            </aside>

            {/* Results */}
            <section className="lg:col-span-2">
              <div ref={resultsRef} className="space-y-6 sm:space-y-5">
                {freeResults.length > 0 && (
                  <div className="pt-2 sm:pt-0">
                    <RecommendationResults results={freeResults} />
                  </div>
                )}

                {!unlocked && (
                  <PaywallNotice
                    lockedResults={lockedResults}
                    searchLogId={searchLogId}
                    budget={budget}
                    bedrooms={bedrooms}
                    priority={priority}
                    onUnlock={(results) => {
                      setFreeResults(results)
                      setUnlocked(true)
                    }}
                  />
                )}
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  )
}
