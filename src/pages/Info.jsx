import React from "react";

export default function Info() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="mb-6 text-2xl font-bold text-gray-900">
        Help & Information
      </h1>

      <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
        <section>
          <h2 className="font-semibold text-gray-900 mb-1">
            What am I paying for?
          </h2>
          <p>
            You are paying for personalized neighborhood recommendations based
            on your budget, bedrooms, and lifestyle.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 mb-1">
            Is this a subscription?
          </h2>
          <p>
            No. This is a one-time payment per search. No automatic charges.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 mb-1">
            How does MTN MoMo payment work?
          </h2>
          <p>
            Enter your MTN number, confirm the request on your phone, and your
            results unlock automatically.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 mb-1">
            Can I get a refund?
          </h2>
          <p>
            Results are delivered instantly after payment. Refunds are reviewed
            only in case of technical issues.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-gray-900 mb-1">
            Need help?
          </h2>
          <p>
            Email us at <strong>support@yourdomain.com</strong>
          </p>
        </section>
      </div>
    </div>
  );
}
