import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { HelmetProvider } from 'react-helmet-async';
import { store } from 'store';
import { Provider } from 'react-redux';
import { ServicePageType } from 'const/const.ts';
import { ErrorBoundary } from 'react-error-boundary';
import ServicePage from 'pages/service-page';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <HelmetProvider>
    <React.StrictMode>
      <Provider store={store}>
        <ErrorBoundary
          fallback={<ServicePage type={ServicePageType.ErrorApp} />}
        >
          <App />
        </ErrorBoundary>
      </Provider>
    </React.StrictMode>
  </HelmetProvider>,
);
