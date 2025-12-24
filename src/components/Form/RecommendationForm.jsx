import { useState } from "react";
import Button from "../UI/Button";

export default function RecommendationForm({ onSubmit, loading }) {
  const [budget, setBudget] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [priority, setPriority] = useState("family");

  const handleSubmit = () => {
    onSubmit({
      budget: Number(budget),
      bedrooms: Number(bedrooms),
      priority,
    });
  };

  return (
    <>
      <label>Monthly Rent Budget (RWF)</label><br />
      <input
        type="number"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
      />

      <br /><br />

      <label>Required Bedrooms</label><br />
      <input
        type="number"
        value={bedrooms}
        onChange={(e) => setBedrooms(e.target.value)}
      />

      <br /><br />

      <label>Main Lifestyle Priority</label><br />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="family">Family-friendly</option>
        <option value="quiet">Quiet</option>
        <option value="nightlife">Nightlife</option>
        <option value="commute">Easy commute</option>
      </select>

      <br /><br />

      <Button onClick={handleSubmit} disabled={loading}>
        {loading ? "Finding..." : "Find Neighborhoods"}
      </Button>
    </>
  );
}
