import { useState } from "react";
import { recommendNeighborhoods } from "../api/recommendApi";

export function useRecommendations() {
  const [freeResults, setFreeResults] = useState([]);
  const [lockedResults, setLockedResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const submit = async ({ budget, bedrooms, priority }) => {
    setLoading(true);
    setFreeResults([]);
    setLockedResults([]);

    const data = await recommendNeighborhoods({
      budget,
      bedrooms,
      priority,
    });

    setFreeResults(data.free || []);
    setLockedResults(data.locked || []);
    setLoading(false);
  };

  return {
    freeResults,
    lockedResults,
    loading,
    submit,
  };
}
