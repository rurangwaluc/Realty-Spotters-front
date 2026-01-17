import {
  confirmSandboxPayment,
  initiatePayment,
  unlockRecommendations,
} from "../../api/paymentApi";

import toast from "react-hot-toast";
import { useState } from "react";

// Validate MTN Rwanda phone numbers
const isValidRwandaMTN = (phone) => {
  const normalized = phone.startsWith("+") ? phone.replace("+", "") : phone;
  return /^2507\d{8}$/.test(normalized) || /^07\d{8}$/.test(phone);
};

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

  // Main payment handler
  const handlePay = async () => {
    // Validate phone
    if (!phone) {
      setError("Phone number is required");
      return;
    }

    if (!isValidRwandaMTN(phone)) {
      const message = "Enter a valid MTN number: 07XXXXXXXX or +2507XXXXXXXX";
      setError(message);

      toast((t) => (
        <div className="max-w-md w-full bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md shadow-sm flex items-start gap-3">
          <svg
            className="w-5 h-5 text-red-600 mt-0.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden
          >
            <path
              fillRule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.516 9.81c.75 1.333-.213 2.991-1.743 2.991H4.485c-1.53 0-2.493-1.658-1.743-2.99l5.515-9.81zM11 13a1 1 0 10-2 0 1 1 0 002 0zm-1-8a1 1 0 01.993.883L11 6v4a1 1 0 11-2 0V6a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>

          <div className="flex-1">
            <div className="font-semibold">Invalid MTN number</div>
            <div className="text-sm">{message}</div>
          </div>

          <button
            onClick={() => toast.dismiss(t.id)}
            className="ml-3 text-sm font-medium text-red-600"
          >
            Close
          </button>
        </div>
      ), { duration: 5000 });

      return;
    }

    setError("");
    setLoading(true);
    setStatus("Sending payment request to MTN MoMo…");

    const loadingToast = toast.loading("Waiting for MTN MoMo confirmation…");

    try {
      // Normalize phone number for backend
      const normalizedPhone =
        phone.startsWith("+")
          ? phone.replace("+", "")
          : phone.startsWith("07")
          ? "25" + phone
          : phone;

      // Step 1: Initiate payment
     const payment = await initiatePayment({
        searchLogId,
        phoneNumber: normalizedPhone,
        provider: "momo",
      });


      setStatus("Waiting for payment confirmation…");

      // Step 2: Confirm payment (sandbox/testing)
      await confirmSandboxPayment(payment.reference);

      setStatus("Unlocking full recommendations…");

      // Step 3: Unlock recommendations
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

      // Auto-close modal after a short delay
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

  const handleEsiciaPay = async () => {
  if (!phone) {
    toast.error("Phone number is required");
    return;
  }

  setLoading(true);

  try {
    const res = await initiatePayment({
      searchLogId,
      phoneNumber: phone,
      provider: "esicia",
    });

    if (res.checkoutUrl) {
      window.location.href = res.checkoutUrl;
    } else {
      toast.error("Unable to initiate ESICIA payment");
    }
  } catch (err) {
    toast.error(err.message || "ESICIA payment failed");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="mt-4 rounded-lg border border-gray-200 bg-white p-4">
      <h4 className="text-lg font-semibold text-gray-800">MTN MoMo Payment</h4>

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

          <button
            onClick={handleEsiciaPay}
            disabled={loading || !phone}
            className="mt-3 w-full rounded-md bg-black py-3 font-bold text-white transition hover:bg-gray-900 disabled:cursor-not-allowed disabled:opacity-60"
          >
            Pay via ESICIA (MoMo / Airtel)
          </button>

        </>
      )}

      {status && <p className="mt-3 text-sm text-gray-500">{status}</p>}
      {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
    </div>
  );
}
