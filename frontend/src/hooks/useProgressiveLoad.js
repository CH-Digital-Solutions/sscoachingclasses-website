import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Progressive loading hook — renders items in batches as user scrolls.
 * @param {Array} allItems - Full array of items to load progressively.
 * @param {number} initialCount - Number of items to show initially.
 * @param {number} batchSize - Number of items to add per scroll trigger.
 * @returns {{ visibleItems: Array, sentinelRef: React.Ref, hasMore: boolean }}
 */
export default function useProgressiveLoad(allItems, initialCount = 20, batchSize = 16) {
  const [count, setCount] = useState(initialCount);
  const sentinelRef = useRef(null);

  const loadMore = useCallback(() => {
    setCount(prev => Math.min(prev + batchSize, allItems.length));
  }, [allItems.length, batchSize]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadMore();
        }
      },
      { rootMargin: '400px 0px' } // Start loading 400px before it's visible
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [loadMore]);

  // Reset count when items array changes (e.g. filter change)
  useEffect(() => {
    setCount(initialCount);
  }, [allItems, initialCount]);

  const visibleItems = allItems.slice(0, count);
  const hasMore = count < allItems.length;

  return { visibleItems, sentinelRef, hasMore };
}
