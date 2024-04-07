import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { HelmetProvider } from 'react-helmet-async';
import { OffersDetail } from './mocks/offers-detail.ts';
import { Offers } from './mocks/offers.ts';
import { Reviews } from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <HelmetProvider>
    <React.StrictMode>
      <App offers={Offers} offersDetail={OffersDetail} reviews={Reviews} />
    </React.StrictMode>
  </HelmetProvider>,
);
