import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext.jsx';
import { ColorProvider } from './context/ColorContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <ColorProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ColorProvider>
    </LanguageProvider>
  </React.StrictMode>,
);
