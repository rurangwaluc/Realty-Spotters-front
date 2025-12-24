import InquiryForm from "../components/Inquiry/InquiryForm";
import PaywallNotice from "../components/UI/PaywallNotice";
import RecommendationForm from "../components/Form/RecommendationForm";
import RecommendationResults from "../components/Results/RecommendationResults";
import { useRecommendations } from "../hooks/useRecommendations";

export default function Search() {
  const { submit, freeResults, lockedResults, loading } =
    useRecommendations();

  return (
    <div style={{ padding: 30, maxWidth: 600 }}>
      <h2>Find Your Best Neighborhood in Kigali</h2>

      <p style={{ color: "#555", lineHeight: "1.6" }}>
        Tell us your budget, bedroom needs, and lifestyle priority.
        We analyze real neighborhood data — not listings — to recommend
        areas that fit you best.
      </p>

      <RecommendationForm onSubmit={submit} loading={loading} />

      

      <hr />

      

        {freeResults.length > 0 && (
            <p style={{ fontStyle: "italic", color: "#666" }}>
                These recommendations are ranked based on budget fit, lifestyle match,
                bedroom availability, and overall desirability.
            </p>
            )}


      <RecommendationResults results={freeResults} />
      <PaywallNotice lockedResults={lockedResults} />
      <InquiryForm  />
      
    </div>
  );
}
