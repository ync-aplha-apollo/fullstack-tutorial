import React from 'react';
import Pages from './pages';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root')
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Pages />
  </React.StrictMode>,
);

