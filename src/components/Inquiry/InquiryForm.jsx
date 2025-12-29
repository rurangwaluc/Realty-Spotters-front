import { useState } from "react";

const InquiryForm = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (!form.name.trim() || !form.email.trim()) {
      setError("Please provide your name and email.");
      return;
    }

    setLoading(true);
    try {
      await fetch("http://localhost:5000/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      setSuccess(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setError("Failed to send inquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      aria-live="polite"
      className="mx-auto w-full max-w-xl bg-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-4"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Request Property Assistance</h3>
          <p className="mt-1 text-sm text-gray-500">Tell us what you're looking for and we'll help you find the right options.</p>
        </div>
        <div className="hidden sm:flex items-center text-xs text-gray-400">No spam — we respect your privacy</div>
      </div>

      {error && (
        <div role="alert" className="rounded-md bg-red-50 border border-red-100 text-red-700 px-3 py-2 text-sm">
          {error}
        </div>
      )}

      {success && (
        <div role="status" className="rounded-md bg-green-50 border border-green-100 text-green-700 px-3 py-2 text-sm">
          Inquiry sent — we'll get back to you soon.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="text-xs font-medium text-gray-700 sr-only">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Full name"
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="text-xs font-medium text-gray-700 sr-only">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email address"
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="phone" className="text-xs font-medium text-gray-700 sr-only">Phone</label>
          <input
            id="phone"
            type="tel"
            placeholder="Phone (optional)"
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="message" className="text-xs font-medium text-gray-700 sr-only">Message</label>
          <textarea
            id="message"
            placeholder="What are you looking for? (area, budget, must-haves)"
            rows={5}
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="text-xs text-gray-500">We typically respond within 24 hours.</div>

        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-60"
        >
          {loading ? (
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
            </svg>
          ) : null}
          {loading ? "Sending..." : "Submit Inquiry"}
        </button>
      </div>
    </form>
  );
};

export default InquiryForm;
