import MoMoPayModal from "./MoMoPayModal";
import { useState } from "react";

export default function PaywallNotice({
  lockedResults,
  searchLogId,
  budget,
  bedrooms,
  priority,
  onUnlock,
}) {
  const [showPayment, setShowPayment] = useState(null);  

  if (!lockedResults || lockedResults.length === 0) return null;

  return (
    <div className="mt-8 rounded-xl border border-red-200 bg-red-50 p-5">
      <h3 className="text-lg font-semibold mb-2">
        🔒 Unlock full neighborhood recommendations
      </h3>

      <p className="text-sm text-gray-700 mb-4">
        You’re currently seeing only a portion of your best matches. Unlock all
        recommendations for a one-time fee of <strong>RWF 2,000</strong>.
      </p>

      {/* 🔒 Blurred locked preview */}
      <div className="space-y-3 mb-5">
        {lockedResults.slice(0, 2).map((_, index) => (
          <div key={index} className="h-16 rounded-lg bg-gray-300 blur-sm" />
        ))}
      </div>

      {/* Pay button */}
      {!showPayment && (
        <div className="space-y-3">
          {/* MTN MoMo */}
          <button
            onClick={() => setShowPayment("momo")}
            className="w-full rounded-lg bg-yellow-400 py-3 font-semibold text-black hover:bg-yellow-500 transition"
          >
            Pay with MTN MoMo (Quick)
          </button>

          {/* ESICIA */}
          <button
            onClick={() =>
              alert(
                "Card & Airtel payments are coming soon. For now, please use MTN MoMo.",
              )
            }
            className="w-full rounded-lg border border-gray-300 bg-white py-3 font-semibold text-gray-800 hover:bg-gray-50 transition"
          >
            Pay via Card / Airtel (Coming soon)
          </button>
 
          <p className="text-xs text-center text-gray-600">
            Secure one-time payment · No agents · No subscription
          </p>
        </div>
      )}

      {/* Trust signals */}
      {!showPayment && (
        <p className="mt-3 text-xs text-gray-600 text-center">
          Secure mobile money payment · No subscription · One-time access
        </p>
      )}

      {/* Payment modal */}
      {showPayment === "momo" && (
        <MoMoPayModal
          searchLogId={searchLogId}
          budget={budget}
          bedrooms={bedrooms}
          priority={priority}
          onSuccess={(results) => {
            onUnlock(results);
            setShowPayment(null);
          }}
          onClose={() => setShowPayment(null)}
        />
      )}

      {showPayment === "esicia" && (
        <div className="mt-4 rounded-lg border border-gray-200 bg-white p-4 text-center">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">
            Secure Payment via ESICIA
          </h4>

          <p className="text-sm text-gray-600 mb-4">
            Pay using MTN MoMo, Airtel Money, or Bank Card.
          </p>

          <button
            onClick={async () => {
              const res = await fetch(
                "http://localhost:5000/api/payments/initiate",
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    searchLogId,
                    phoneNumber: "250700000000", // placeholder
                    provider: "esicia",
                  }),
                },
              );

              const data = await res.json();
              if (data.checkoutUrl) {
                window.location.href = data.checkoutUrl;
              }
            }}
            className="w-full rounded-md bg-black py-3 font-bold text-white hover:bg-gray-900"
          >
            Continue to Secure Payment
          </button>

          <button
            onClick={() => setShowPayment(null)}
            className="mt-3 text-sm text-gray-500 underline"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
