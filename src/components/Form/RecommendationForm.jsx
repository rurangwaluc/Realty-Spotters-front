import { useState } from "react";

export default function RecommendationForm({ onSubmit, loading }) {
  const [budget, setBudget] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [priority, setPriority] = useState("family");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      budget: Number(budget),
      bedrooms: Number(bedrooms),
      priority,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
      aria-labelledby="recommendation-form-title"
    >
      <div id="recommendation-form-title" className="sr-only">Recommendation form</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Budget */}
        <div className="md:col-span-1">
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
            Monthly Rent Budget (RWF)
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-sm text-gray-500">RWF</span>
            </div>
            <input
              id="budget"
              type="number"
              min="0"
              step="1000"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="e.g. 300000"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 pl-12 text-sm focus:border-black focus:outline-none"
              aria-describedby="budget-help"
            />
          </div>
          <p id="budget-help" className="mt-1 text-xs text-gray-400">Enter your monthly rent budget (approx).</p>
        </div>

        {/* Bedrooms */}
        <div className="md:col-span-1">
          <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700">
            Required Bedrooms
          </label>
          <input
            id="bedrooms"
            type="number"
            min="0"
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
            placeholder="e.g. 2"
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none"
          />
        </div>

          {/* Lifestyle Priority (cards) */}
          <div className="md:col-span-2">
            <p className="block text-sm font-medium text-gray-700 mb-2">
              Main Lifestyle Priority
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  value: "family",
                  title: "Family-friendly 🏡",
                  desc: "Safe, calm areas good for families and children",
                },
                {
                  value: "quiet",
                  title: "Quiet & Peaceful 🌿",
                  desc: "Very calm places with little noise",
                },
                {
                  value: "nightlife",
                  title: "Nightlife & Social 🎉",
                  desc: "Close to bars, cafés, and active evenings",
                },
                {
                  value: "commute",
                  title: "Easy Commute 🚗",
                  desc: "Close to main roads and work areas",
                },
              ].map((option) => (
                <label
                  key={option.value}
                  className={`flex cursor-pointer gap-3 rounded-md border p-3 transition
                    ${
                      priority === option.value
                        ? "border-black bg-gray-50"
                        : "border-gray-300 hover:bg-gray-50"
                    }`}
                >
                  <input
                    type="radio"
                    name="priority"
                    value={option.value}
                    checked={priority === option.value}
                    onChange={() => setPriority(option.value)}
                    className="mt-1"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {option.title}
                    </p>
                    <p className="text-xs text-gray-500">
                      {option.desc}
                    </p>
                  </div>
                </label>
              ))}
            </div>
          </div>


        {/* Submit */}
        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-black py-2 text-sm font-semibold text-white transition hover:bg-gray-900 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Finding neighborhoods…" : "Find Neighborhoods"}
          </button>
        </div>
      </div>
    </form>
  );
}
