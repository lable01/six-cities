import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { HelmetProvider } from 'react-helmet-async';
import { OffersDetail } from 'mocks/offers-detail';
import { Offers } from 'mocks/offers';
import { Reviews } from 'mocks/reviews';
import { store } from 'store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <HelmetProvider>
    <React.StrictMode>
      <Provider store={store}>
        <App offers={Offers} offersDetail={OffersDetail} reviews={Reviews} />
      </Provider>
    </React.StrictMode>
  </HelmetProvider>,
);
