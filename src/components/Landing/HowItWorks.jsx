const HowItWorks = () => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mx-auto max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">How Realty Spotters Works</h2>
          <p className="mt-3 text-gray-600">A fast, data-first way to find neighborhoods in Kigali that match your budget and lifestyle.</p>
        </div>

        <div className="mt-10 grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* Step 1 */}
          <div className="relative bg-gradient-to-b from-white to-gray-50 border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3v6h6v-6c0-1.657-1.343-3-3-3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v2" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Step 1</div>
                  <h3 className="text-lg font-semibold text-gray-900">Tell us your needs</h3>
                </div>
              </div>
              <div className="text-sm font-medium text-indigo-600">Quick</div>
            </div>

            <p className="mt-4 text-sm text-gray-600">Share budget, number of bedrooms, commute preferences and lifestyle priorities — it only takes a minute.</p>
          </div>

          {/* Step 2 */}
          <div className="relative bg-gradient-to-b from-white to-gray-50 border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-sky-50 text-sky-600 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 6h18M3 14h18M3 18h18" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Step 2</div>
                  <h3 className="text-lg font-semibold text-gray-900">We analyze Kigali</h3>
                </div>
              </div>
              <div className="text-sm font-medium text-sky-600">Data</div>
            </div>

            <p className="mt-4 text-sm text-gray-600">We crunch rent ranges, amenities, commute times and availability across neighborhoods to find the best matches.</p>
          </div>

          {/* Step 3 */}
          <div className="relative bg-gradient-to-b from-white to-gray-50 border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-emerald-50 text-emerald-600 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Step 3</div>
                  <h3 className="text-lg font-semibold text-gray-900">Get ranked neighborhoods</h3>
                </div>
              </div>
              <div className="text-sm font-medium text-emerald-600">Instant</div>
            </div>

            <p className="mt-4 text-sm text-gray-600">Receive instant, unbiased recommendations with scores and estimated rents so you can decide faster.</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button onClick={() => window.location.href = '/search'} className="block w-full sm:inline-flex sm:w-auto items-center justify-center gap-2 px-5 py-3 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700">Try a free search</button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
