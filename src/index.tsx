import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AIContextProvider } from './context/AIContext';
import { OrbitContextProvider } from './context/OrbitContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AIContextProvider>
        <OrbitContextProvider>
          <App />
        </OrbitContextProvider>
      </AIContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();