const Pricing = () => {
  return (
    <section aria-labelledby="pricing-heading" className="bg-white py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 id="pricing-heading" className="text-2xl sm:text-3xl font-extrabold text-gray-900">Free vs Unlocked</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Try the quick free search or unlock full ranked neighborhoods and detailed reasoning.</p>
        </div>

        <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-2 items-start">
          {/* Free Card */}
          <article className="rounded-2xl border border-gray-100 p-6 bg-gray-50">
            <header className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Free</h3>
                <p className="mt-1 text-sm text-gray-500">Instant single-match result to get you started</p>
              </div>
              <div className="text-sm font-medium text-gray-700">Free</div>
            </header>

            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-700">
                <svg className="w-4 h-4 text-indigo-600 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414-1.414L8 11.172 4.707 7.879a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8z" clipRule="evenodd" /></svg>
                <span>Top neighborhood match</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-700">
                <svg className="w-4 h-4 text-indigo-600 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414-1.414L8 11.172 4.707 7.879a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8z" clipRule="evenodd" /></svg>
                <span>Confidence score</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-700">
                <svg className="w-4 h-4 text-indigo-600 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414-1.414L8 11.172 4.707 7.879a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8z" clipRule="evenodd" /></svg>
                <span>Instant result</span>
              </li>
            </ul>

            <div className="mt-6">
              <a href="/search" className="block w-full sm:inline-flex sm:w-auto text-center px-4 py-2 bg-white border border-gray-200 text-sm rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Try free search</a>
            </div>
          </article>

          {/* Unlocked Card */}
          <article className="relative rounded-3xl p-8 shadow-xl overflow-hidden" style={{background: 'linear-gradient(90deg,#4F46E5,#06B6D4)'}}>
            <div className="absolute top-4 right-4 bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full">Popular</div>
            <div className="relative z-10 text-white">
              <header className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold">Unlocked</h3>
                  <p className="mt-1 text-sm text-indigo-100/90">All ranked neighborhoods with full reasoning</p>
                </div>
                <div className="text-sm font-bold">Best value</div>
              </header>

              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-white mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414-1.414L8 11.172 4.707 7.879a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8z" clipRule="evenodd" /></svg>
                  <span>All ranked neighborhoods</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-white mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414-1.414L8 11.172 4.707 7.879a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8z" clipRule="evenodd" /></svg>
                  <span>Detailed reasoning and scores</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-white mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414-1.414L8 11.172 4.707 7.879a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8z" clipRule="evenodd" /></svg>
                  <span>Smarter decision making</span>
                </li>
              </ul>

              <div className="mt-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div>
                  <div className="text-xs text-indigo-100">One-time</div>
                  <div className="mt-1 text-2xl font-extrabold">RWF 2,000</div>
                </div>

                <a href="/search?unlock=true" className="block w-full sm:inline-flex sm:w-auto items-center justify-center gap-2 px-4 py-2 bg-white text-indigo-700 rounded-md font-medium shadow hover:opacity-95 text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Unlock now</a>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">No hidden fees • Cancel anytime</div>
      </div>
    </section>
  );
};

export default Pricing;
