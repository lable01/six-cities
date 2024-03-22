import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { HelmetProvider } from 'react-helmet-async';
import { Offers } from './mocks/offers';
import { Reviews } from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <HelmetProvider>
    <React.StrictMode>
      <App offers={Offers} reviews={Reviews} />
    </React.StrictMode>
  </HelmetProvider>,
);
