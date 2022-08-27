import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import { TProvider } from './context/news';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <TProvider>
    <App />
    </TProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
