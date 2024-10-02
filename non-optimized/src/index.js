import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { getLCP, getFID, getCLS } from 'web-vitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// Mengukur performa dan log hasilnya
getLCP(console.log);
getFID(console.log);
getCLS(console.log);
