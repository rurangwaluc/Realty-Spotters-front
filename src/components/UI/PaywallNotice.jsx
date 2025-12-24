import Button from "./Button";

export default function PaywallNotice({ lockedResults }) {
  if (lockedResults.length === 0) return null;

  return (
    <div
      style={{
        border: "2px dashed #0011ffff",
        padding: 20,
        borderRadius: 8,
        marginTop: 20,
         color: "#000",
        background: "#fafafa",
      }}
    >
      <h3>🔒 More Matches Available</h3>

      <p>
        We found <strong>{lockedResults.length}</strong> more neighborhoods
        that match your criteria.
      </p>

      <ul>
        <li>Full ranking & score breakdown</li>
        <li>Why one area beats another</li>
        <li>Risk & trade-off analysis</li>
      </ul>

      <Button onClick={() => alert("Payment coming next")}>
        Unlock Full Results — RWF 2,000
      </Button>
    </div>
  );
}
