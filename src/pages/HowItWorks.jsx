import { Helmet } from "react-helmet-async";
import React from "react";

export default function HowItWorks() {
  return (
    <>
      <Helmet>
        <title>How It Works | Realty Spotters</title>
        <meta
          name="description"
          content="Learn how Realty Spotters finds the best neighborhoods in Kigali. Share your budget and lifestyle, and get ranked, data-driven recommendations in minutes."
        />
      </Helmet>

      <main className="relative overflow-hidden bg-slate-50 py-14 sm:py-20">
        {/* subtle background accent */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-r from-slate-50/40 to-amber-50/40 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-slate-100 px-4 py-1 text-xs font-semibold text-slate-800">
              How it works
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              How Realty Spotters Finds <br className="hidden sm:block" />
              Your Next Neighborhood
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-600">
              Fast, human-centered, and data-driven — we surface Kigali
              neighborhoods that truly fit your lifestyle.
            </p>
          </div>

          {/* Content */}
          <div className="mt-14 grid gap-8 lg:grid-cols-12">
            {/* Steps */}
            <div className="lg:col-span-7">
              <div className="space-y-5">
                {[
                  {
                    step: "1",
                    title: "Tell us what matters",
                    text: "Share your budget, bedroom count, commute tolerance, and lifestyle priorities — it takes less than a minute.",
                    gradient: "from-slate-800 to-amber-400",
                  },
                  {
                    step: "2",
                    title: "We analyze Kigali",
                    text: "We blend rent ranges, amenities, commute times, and availability to score neighborhoods tailored to you.",
                    gradient: "from-amber-400 to-amber-600",
                  },
                  {
                    step: "3",
                    title: "Get ranked recommendations",
                    text: "Receive a ranked list with scores, estimated rents, and short reasoning so you can decide confidently.",
                    gradient: "from-amber-500 to-slate-800",
                  },
                ].map((item) => (
                  <article
                    key={item.step}
                    className="group flex gap-4 items-start rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr ${item.gradient} text-white font-bold`}
                    >
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Aside */}
            <aside className="lg:col-span-5">
              <div className="sticky top-24 rounded-2xl bg-slate-50 p-6 sm:p-7 shadow-inner border border-slate-200">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-800 text-white text-lg">
                    ⚡
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">
                      Unlock faster decisions
                    </h4>
                    <p className="mt-1 text-sm text-slate-600">
                      Preview for free, then unlock full ranked neighborhoods for{" "}
                      <span className="font-semibold text-slate-800">
                        RWF 2,000
                      </span>{" "}
                      (one-time) via MTN MoMo.
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="rounded-xl bg-white p-4 shadow-sm border border-slate-200">
                    <div className="text-xs font-medium text-slate-500">
                      Free
                    </div>
                    <div className="mt-1 text-sm font-semibold text-slate-900">
                      Top neighborhood match
                    </div>
                  </div>

                  <div className="rounded-xl bg-white p-4 shadow-sm border border-slate-200">
                    <div className="text-xs font-medium text-slate-500">
                      Unlocked
                    </div>
                    <div className="mt-1 text-sm font-semibold text-slate-900">
                      Full rankings + insights
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => (window.location.href = "/search")}
                    className="flex-1 rounded-xl bg-slate-800 px-5 py-3 text-sm md:text-base font-semibold text-white shadow-sm hover:bg-slate-900 hover:shadow-md transition min-h-[44px]"
                  >
                    Try a free search
                  </button>
                  <a
                    href="/pricing"
                    className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-center text-sm md:text-base font-medium text-slate-700 transition hover:bg-gray-50 min-h-[44px]"
                  >
                    Unlock full results
                  </a>
                </div>
              </div>
            </aside>
          </div>

          {/* Footer note */}
          <div className="mt-10 text-center">
            <p className="text-xs text-gray-500">
              No subscriptions • One-time unlock • Privacy-first
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
