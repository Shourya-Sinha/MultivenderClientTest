import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from "react-helmet-async";
import App from './App.jsx'
import reportWebVitals from './reportWebVitals.jsx';

import SettingsProvider from './contexts/SettingsContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <SettingsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SettingsProvider>
    </HelmetProvider>
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <HelmetProvider>
//       <SettingsProvider>
//         <BrowserRouter>
//           <App />
//         </BrowserRouter>
//       </SettingsProvider>
//     </HelmetProvider>
//   </React.StrictMode>
// )
reportWebVitals();
