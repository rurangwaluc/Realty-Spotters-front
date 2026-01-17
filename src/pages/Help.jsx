import { Helmet } from "react-helmet-async";
import InquiryForm from "../components/Inquiry/InquiryForm";

export default function Help() {
  return (
    <>
      <Helmet>
        <title>Get Personalized Housing Help in Kigali | Realty Spotters</title>
        <meta
          name="description"
          content="Need help finding a home in Kigali? Get personalized housing advice from local experts. Tell us your budget and lifestyle and get fast, tailored recommendations."
        />
      </Helmet>

      <main className="bg-gradient-to-br from-slate-50 via-white to-amber-50 min-h-screen py-12 px-4 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left: Hero / Pitch */}
            <section className="order-2 md:order-1">
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-4">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M12 2l3 6 6 .5-4.5 3.5L19 20l-7-4-7 4 1.5-7L2 8.5 8 8 11 2z"
                      fill="currentColor"
                    />
                  </svg>
                  Ask our local experts
                </span>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
                  Need help finding home?{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-amber-400">
                    Realty Spotters
                  </span>{" "}
                  has your back.
                </h1>

                <p className="mt-4 text-gray-600 text-base sm:text-lg">
                  Tell us your budget, must-haves and lifestyle — we'll recommend
                  neighborhoods and properties that actually fit your life.
                </p>

                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-700">
                      Personalized advice from local agents
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-700">
                      Fast responses — usually within 24 hours
                    </span>
                  </li>
                </ul>

                <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
                  <a
                    href="/search"
                    className="inline-flex items-center justify-center px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-lg text-sm font-medium shadow-sm"
                  >
                    Start a quick search
                  </a>
                  <a
                    href="/pricing"
                    className="inline-flex items-center justify-center px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm"
                  >
                    Unlock full recommendations
                  </a>
                </div>

                <div className="mt-6 text-xs text-gray-500">
                  No spam • We never sell your info
                </div>
              </div>

              <div className="mt-8 md:mt-12 hidden sm:block">
                <div className="rounded-xl bg-white/60 backdrop-blur-sm p-4 shadow-md inline-flex items-center gap-4">
                  <svg
                    className="w-8 h-8 text-slate-800"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M12 2L2 7l10 5 10-5-10-5z"
                      fill="currentColor"
                    />
                  </svg>
                  <div>
                    <div className="text-xs text-gray-500">Local trust</div>
                    <div className="text-sm font-semibold text-gray-900">
                      Trusted by Kigali renters
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Right: Inquiry form */}
            <aside className="order-1 md:order-2">
              <div className="mx-auto w-full max-w-xl bg-white rounded-2xl shadow-xl p-6 sm:p-8">
                <div className="mb-4">
                  <div className="text-xs text-indigo-600 font-semibold">
                    Personalized help
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Request property assistance
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    Quick form — we typically respond within 24 hours.
                  </p>
                </div>

                <InquiryForm />

                <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-500">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-amber-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden
                      >
                        <path
                          d="M5 13l4 4L19 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>Free guidance</span>
                    </div>
                    <div>Secure ✅</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center text-xs text-gray-400">
                © {new Date().getFullYear()} Realty Spotters — Connecting you to
                the right neighborhood.
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
