import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import {Setting} from './const.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App cartCount = {Setting.CartCount}/>
  </React.StrictMode>
);
