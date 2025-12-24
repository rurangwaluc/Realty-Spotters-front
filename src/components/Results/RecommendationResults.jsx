export default function RecommendationResults({ results }) {
  return (
    <>
      {results.map((r, i) => (
        <div
          key={i}
          style={{
            border: "1px solid #ddd",
            padding: 15,
            marginBottom: 15,
            borderRadius: 6,
          }}
        >
          <h3>
            {r.neighborhood.name} — {r.confidence} Match
          </h3>

          <p>
            <strong>Overall Score:</strong> {r.score}/100
          </p>

          <p><strong>Why this works for you:</strong></p>
          <ul>
            {r.reasons.map((reason, idx) => (
              <li key={idx}>{reason}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
