import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-12 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Copy */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse" />
              <span className="text-sm text-indigo-600 font-medium">Launching smarter searches</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Find the perfect neighborhood in{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-sky-400">
                Kigali
              </span>
            </h1>

            <p className="mt-4 text-gray-600 max-w-xl text-sm sm:text-base">
              Not listings. Not agents. <strong className="text-gray-900">Data-driven neighborhood recommendations</strong> tailored to your budget, commute and lifestyle — fast and local.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
              <button
                onClick={() => navigate("/search")}
                className="inline-flex items-center justify-center px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-lg text-sm font-semibold"
              >
                Start Free Search
              </button>

              <button
                onClick={() => navigate("/how-it-works")}
                className="inline-flex items-center justify-center px-5 py-3 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm shadow-sm"
              >
                How it works
              </button>
            </div>

            <p className="mt-4 text-xs text-gray-500">No signup required • Trusted by local renters and buyers</p>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 max-w-sm">
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 font-semibold">✓</div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Ranked matches</div>
                  <div className="text-xs text-gray-500">Prioritized for your needs</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-sky-50 text-sky-600 font-semibold">★</div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Local insight</div>
                  <div className="text-xs text-gray-500">Neighborhood context & scores</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Illustration + floating quick card */}
          <div className="relative order-1 lg:order-2">
            <div className="w-full h-64 sm:h-80 lg:h-96 rounded-2xl bg-gradient-to-tr from-indigo-100 to-sky-50 shadow-2xl overflow-hidden relative">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 520" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="bgGrad" x1="0" x2="1">
                    <stop offset="0%" stopColor="#EEF2FF" />
                    <stop offset="100%" stopColor="#E0F7FA" />
                  </linearGradient>
                </defs>
                <rect width="800" height="520" fill="url(#bgGrad)" />
                <path d="M0 380 C150 320, 250 420, 420 360 C580 300, 700 380, 800 340 L800 520 L0 520 Z" fill="#F8FAFF" />
                <g transform="translate(60,140)">
                  <rect x="0" y="120" width="36" height="100" rx="4" fill="#CBD5E1" />
                  <rect x="56" y="80" width="48" height="140" rx="6" fill="#94A3B8" />
                  <rect x="120" y="40" width="72" height="180" rx="8" fill="#64748B" />
                  <rect x="212" y="100" width="48" height="120" rx="6" fill="#94A3B8" />
                  <rect x="280" y="60" width="60" height="160" rx="6" fill="#475569" />
                </g>

                {/* map pins */}
                <g fill="#fff" stroke="#06B6D4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M560 220c0-16 12-28 28-28s28 12 28 28c0 22-28 52-28 52s-28-30-28-52z" fill="#06B6D4" />
                  <circle cx="588" cy="220" r="6" fill="#fff" />
                  <path d="M420 260c0-12 9-20 20-20s20 8 20 20c0 16-20 36-20 36s-20-20-20-36z" fill="#7C3AED" />
                  <circle cx="440" cy="260" r="5" fill="#fff" />
                </g>
              </svg>

              {/* floating quick preview card */}
              <div className="absolute left-4 top-4 bg-white/95 backdrop-blur-sm border border-gray-100 rounded-xl p-3 shadow-md w-36 sm:w-44">
                <div className="text-xs text-gray-500">Neighborhood</div>
                <div className="text-sm font-semibold text-gray-900">Kibagabaga</div>
                <div className="mt-1 text-xs text-green-600">Score: <span className="font-medium">8.6</span></div>
              </div>

              <div className="absolute right-4 bottom-4 bg-white/95 backdrop-blur-sm border border-gray-100 rounded-xl p-3 shadow-md w-36 sm:w-44">
                <div className="text-xs text-gray-500">Estimated rent</div>
                <div className="text-sm font-semibold text-gray-900">RWF 350k/mo</div>
              </div>

              {/* center CTA on small screens */}
              <div className="absolute inset-x-6 bottom-6 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 text-center">
                <button
                  onClick={() => navigate("/search")}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-full text-sm shadow-md hover:bg-indigo-700"
                >
                  Explore neighborhoods
                </button>
              </div>
            </div>

            {/* decorative blurs */}
            <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-indigo-50 rounded-full blur-xl opacity-60" />
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-sky-100 rounded-full blur-2xl opacity-70" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
