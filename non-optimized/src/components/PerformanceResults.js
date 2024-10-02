import React from 'react';

function PerformanceResults({ lcp, fcp, tti }) {
  return (
    <div>
      <h3>Performance Metrics:</h3>
      <p>Largest Contentful Paint (LCP): {lcp} ms</p>
      <p>First Contentful Paint (FCP): {fcp} ms</p>
      <p>Time to Interactive (TTI): {tti} ms</p>
    </div>
  );
}

export default PerformanceResults;
