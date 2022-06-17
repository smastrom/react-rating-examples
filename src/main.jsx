import React from 'react';
import ReactDOM from 'react-dom/client';

import { setup } from 'goober';
import { shouldForwardProp } from 'goober/should-forward-prop';

import 'react-advanced-rating/dist/index.min.css';
import './sharedStyles/fonts.css';

import App from './App';

setup(
  React.createElement,
  undefined,
  undefined,
  shouldForwardProp((prop) => prop !== 'isIntersecting')
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
