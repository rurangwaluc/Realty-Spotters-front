import { recommendNeighborhoods } from "../api/recommendApi";
import { useState } from "react";

export function useRecommendations() {
  const [freeResults, setFreeResults] = useState([]);
  const [lockedResults, setLockedResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ Persist search context (needed for payment unlock)
  const [searchContext, setSearchContext] = useState({
    searchLogId: null,
    budget: null,
    bedrooms: null,
    priority: null,
  });

  const submit = async ({ budget, bedrooms, priority }) => {
    setLoading(true);
    setFreeResults([]);
    setLockedResults([]);

    const data = await recommendNeighborhoods({
      budget,
      bedrooms,
      priority,
    });

    /**
     * EXPECTED BACKEND RESPONSE SHAPE:
     * {
     *   free: [...],
     *   locked: [...],
     *   meta: { searchLogId }
     * }
     */

    setFreeResults(data.free || []);
    setLockedResults(data.locked || []);

    setSearchContext({
      searchLogId: data.meta?.searchLogId || null,
      budget,
      bedrooms,
      priority,
    });

    setLoading(false);
  };

  return {
    submit,
    freeResults,
    lockedResults,
    loading,

    // ✅ exposed for Paywall / MoMo
    ...searchContext,
    setFreeResults,
  };
}
