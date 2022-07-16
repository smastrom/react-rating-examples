import { createElement } from 'react';
import { createRoot } from 'react-dom/client';

import { setup } from 'goober';
import { shouldForwardProp } from 'goober/should-forward-prop';

import { App } from './App';

import '@smastrom/react-rating/style';

import './sharedStyles/fonts.css';

setup(
  createElement,
  undefined,
  undefined,
  shouldForwardProp((prop) => prop !== 'isIntersecting')
);

createRoot(document.getElementById('root')).render(<App />);
