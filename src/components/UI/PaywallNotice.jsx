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
  const [showPayment, setShowPayment] = useState(false);

  if (!lockedResults || lockedResults.length === 0) return null;

  return (
    <div className="mt-8 rounded-xl border border-red-200 bg-red-50 p-5">
      <h3 className="text-lg font-semibold mb-2">
        🔒 Unlock full neighborhood recommendations
      </h3>

      <p className="text-sm text-gray-700 mb-4">
        You’re currently seeing only a portion of your best matches.
        Unlock all recommendations for a one-time fee of{" "}
        <strong>RWF 2,000</strong>.
      </p>

      {/* 🔒 Blurred locked preview */}
      <div className="space-y-3 mb-5">
        {lockedResults.slice(0, 2).map((_, index) => (
          <div
            key={index}
            className="h-16 rounded-lg bg-gray-300 blur-sm"
          />
        ))}
      </div>

      {/* Pay button */}
      {!showPayment && (
        <button
          onClick={() => setShowPayment(true)}
          className="w-full rounded-lg bg-yellow-400 py-3 font-semibold text-black hover:bg-yellow-500 transition"
        >
          Pay with MTN MoMo
        </button>
      )}

      {/* Trust signals */}
      {!showPayment && (
        <p className="mt-3 text-xs text-gray-600 text-center">
          Secure mobile money payment · No subscription · One-time access
        </p>
      )}

      {/* Payment modal */}
      {showPayment && (
        <MoMoPayModal
          searchLogId={searchLogId}
          budget={budget}
          bedrooms={bedrooms}
          priority={priority}
          onSuccess={(results) => {
            onUnlock(results);
            setShowPayment(false);
          }}
          onClose={() => setShowPayment(false)}
        />
      )}
    </div>
  );
}
