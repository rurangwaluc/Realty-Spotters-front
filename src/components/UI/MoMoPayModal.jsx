import {
  confirmSandboxPayment,
  initiatePayment,
  unlockRecommendations,
} from "../../api/paymentApi";

import toast from "react-hot-toast";
import { useState } from "react";

export default function MoMoPayModal({
  searchLogId,
  budget,
  bedrooms,
  priority,
  onSuccess,
  onClose,
}) {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [completed, setCompleted] = useState(false);

  const handlePay = async () => {
    if (!phone) return;

    setError("");
    setLoading(true);
    setStatus("Sending payment request to MTN MoMo…");

    const loadingToast = toast.loading(
      "Waiting for MTN MoMo confirmation…"
    );

    try {
      const payment = await initiatePayment({
        searchLogId,
        phoneNumber: phone,
      });

      setStatus("Waiting for payment confirmation…");

      await confirmSandboxPayment(payment.reference);

      setStatus("Unlocking full recommendations…");

      const unlocked = await unlockRecommendations({
        reference: payment.reference,
        budget,
        bedrooms,
        priority,
      });

      toast.dismiss(loadingToast);
      toast.success("Payment successful! Results unlocked.");

      setCompleted(true);
      onSuccess(unlocked.results);

      // Auto-close modal
      setTimeout(() => {
        onClose();
      }, 1200);
    } catch (err) {
      toast.dismiss(loadingToast);
      toast.error(err.message || "Payment failed");

      setError(err.message || "Payment failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-4 rounded-lg border border-gray-200 bg-white p-4">
      <h4 className="text-lg font-semibold text-gray-800">
        MTN MoMo Payment
      </h4>

      {completed ? (
        <div className="mt-3 rounded-md border border-emerald-200 bg-emerald-50 p-3 font-semibold text-emerald-700">
          ✅ Payment successful. Unlocking results…
        </div>
      ) : (
        <>
          <input
            type="tel"
            placeholder="MTN MoMo number (2507XXXXXXXX)"
            value={phone}
            disabled={loading}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-3 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-yellow-400 focus:outline-none"
          />

          <button
            onClick={handlePay}
            disabled={loading || !phone}
            className="mt-3 w-full rounded-md bg-yellow-400 py-3 font-bold text-black transition hover:bg-yellow-500 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Processing…" : "Pay RWF 2,000"}
          </button>
        </>
      )}

      {status && (
        <p className="mt-3 text-sm text-gray-500">{status}</p>
      )}

      {error && (
        <p className="mt-3 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}
