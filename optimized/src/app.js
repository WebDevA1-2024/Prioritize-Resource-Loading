import React, { useState, useEffect } from 'react';
import PerformanceResults from './components/PerformanceResults';

function app() {
  const [lcp, setLcp] = useState(0);
  const [fcp, setFcp] = useState(0);
  const [tti, setTti] = useState(0);

  useEffect(() => {
    // Mock hasil pengukuran performa yang didapat dari web-vitals (ini akan otomatis di-log di console)
    // Angka ini hanya contoh, di eksperimen nyata bisa diambil langsung dari web-vitals
    setLcp(1800);  // Contoh LCP yang lebih cepat setelah Prioritize Resource Loading
    setFcp(1200);  // Contoh FCP yang lebih cepat
    setTti(2500);  // Contoh TTI yang lebih cepat
  }, []);

  return (
    <div>
      <h1>Web Performance Experiment</h1>
      <h2>With Prioritize Resource Loading</h2>
      <img
        src="/images/Mocking-SpongeBob.jpg"
        alt="Hero"
        style={{ width: '100%', height: 'auto' }}
      />
      <PerformanceResults lcp={lcp} fcp={fcp} tti={tti} />
    </div>
  );
}

export default app;
