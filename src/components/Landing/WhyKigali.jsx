const WhyKigali = () => {
  return (
    <section className="bg-gray-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Why this matters in Kigali</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Small differences between neighborhoods shape daily life — from commute times to market access. Here's why a neighborhood-first approach changes the search.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <div className="text-indigo-600 w-10 h-10 flex items-center justify-center rounded-md bg-indigo-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 6h18M3 14h18M3 18h18"/></svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Block-by-block pricing</h3>
            <p className="mt-2 text-sm text-gray-600">Rent varies street-to-street; aggregated listings hide these micro-differences. We show localized estimates.</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <div className="text-sky-600 w-10 h-10 flex items-center justify-center rounded-md bg-sky-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3v6h6v-6c0-1.657-1.343-3-3-3z"/></svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Unbiased recommendations</h3>
            <p className="mt-2 text-sm text-gray-600">Agents and listings have incentives. We rank neighborhoods purely on data aligned to your needs.</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <div className="text-emerald-600 w-10 h-10 flex items-center justify-center rounded-md bg-emerald-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6"/></svg>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Life, not listings</h3>
            <p className="mt-2 text-sm text-gray-600">We emphasize daily life — schools, markets, commuting — so recommendations match real routines.</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">Ready to see neighborhood recommendations tailored to you?</p>
          <div className="mt-4">
            <a href="/search" className="inline-flex items-center px-5 py-3 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700">Start a free search</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyKigali;
