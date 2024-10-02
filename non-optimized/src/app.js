import React, { useState, useEffect } from 'react';
import PerformanceResults from './components/PerformanceResults';

function app() {
  const [lcp, setLcp] = useState(0);
  const [fcp, setFcp] = useState(0);
  const [tti, setTti] = useState(0);

  useEffect(() => {
    // Mock hasil pengukuran performa yang didapat dari web-vitals (ini akan otomatis di-log di console)
    // Angka ini hanya contoh, di eksperimen nyata bisa diambil langsung dari web-vitals
    setLcp(2500);  // Contoh LCP
    setFcp(1500);  // Contoh FCP
    setTti(3000);  // Contoh TTI
  }, []);

  return (
    <div>
      <h1>Web Performance Experiment</h1>
      <h2>Without Prioritize Resource Loading</h2>
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
    