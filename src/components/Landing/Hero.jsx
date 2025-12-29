import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div>
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse" />
              <span className="text-sm text-indigo-600 font-medium">Launching smarter searches</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Find the perfect neighborhood in <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-sky-400">Kigali</span>
            </h1>

            <p className="mt-4 text-gray-600 max-w-xl">
              Not listings. Not agents. <strong className="text-gray-900">Data-driven neighborhood recommendations</strong> tailored to your budget, commute, and lifestyle.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
              <button
                onClick={() => navigate('/search')}
                className="inline-flex items-center justify-center px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md shadow-md text-sm font-semibold"
              >
                Start Free Search
              </button>

              <button
                onClick={() => navigate('/search')}
                className="inline-flex items-center justify-center px-5 py-3 bg-white border border-gray-200 text-gray-700 rounded-md text-sm"
              >
                How it works
              </button>
            </div>

            <p className="mt-4 text-xs text-gray-500">No signup required • Trusted by local renters and buyers</p>
          </div>

          {/* Right: Illustration / decorative */}
          <div className="relative">
            <div className="w-full h-64 sm:h-80 lg:h-96 rounded-2xl bg-gradient-to-tr from-indigo-100 to-sky-50 shadow-lg overflow-hidden relative">
              {/* Richer illustrative background (city + map pins) */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 520" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="bgGrad" x1="0" x2="1">
                    <stop offset="0%" stopColor="#EEF2FF" />
                    <stop offset="100%" stopColor="#E0F7FA" />
                  </linearGradient>
                </defs>
                <rect width="800" height="520" fill="url(#bgGrad)" />

                {/* stylized hills */}
                <path d="M0 380 C150 320, 250 420, 420 360 C580 300, 700 380, 800 340 L800 520 L0 520 Z" fill="#F8FAFF" />

                {/* simple skyline */}
                <g transform="translate(60,140)">
                  <rect x="0" y="120" width="36" height="100" rx="4" fill="#CBD5E1" />
                  <rect x="56" y="80" width="48" height="140" rx="6" fill="#94A3B8" />
                  <rect x="120" y="40" width="72" height="180" rx="8" fill="#64748B" />
                  <rect x="212" y="100" width="48" height="120" rx="6" fill="#94A3B8" />
                  <rect x="280" y="60" width="60" height="160" rx="6" fill="#475569" />
                </g>

                {/* map pin markers */}
                <g fill="#fff" stroke="#06B6D4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M560 220c0-16 12-28 28-28s28 12 28 28c0 22-28 52-28 52s-28-30-28-52z" fill="#06B6D4" />
                  <circle cx="588" cy="220" r="6" fill="#fff" />

                  <path d="M420 260c0-12 9-20 20-20s20 8 20 20c0 16-20 36-20 36s-20-20-20-36z" fill="#7C3AED" />
                  <circle cx="440" cy="260" r="5" fill="#fff" />
                </g>
              </svg>

              {/* overlay UI cards on top of illustration */}
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md border border-gray-100 rounded-lg p-3 shadow-md w-32 sm:w-40">
                  <div className="text-xs text-gray-500">Neighborhood</div>
                  <div className="text-sm font-semibold text-gray-800">Kibagabaga</div>
                  <div className="mt-1 text-xs text-green-600">Score: 8.6</div>
                </div>

                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md border border-gray-100 rounded-lg p-3 shadow-md w-28 sm:w-36">
                  <div className="text-xs text-gray-500">Estimated rent</div>
                  <div className="text-sm font-semibold text-gray-800">RWF 350k/mo</div>
                </div>

                <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white/90">
                  <div className="inline-flex items-center gap-2 bg-indigo-600/80 px-3 py-1 rounded-full shadow-lg text-xs font-medium">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 11h14" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    Explore neighborhoods
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-indigo-50 rounded-full blur-xl opacity-60" />
            <div className="absolute -top-8 -left-8 w-28 h-28 bg-sky-100 rounded-full blur-2xl opacity-70" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
