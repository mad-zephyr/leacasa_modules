import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import "./assets/fonts/fonts.sass";
import "./assets/styles/global.sass";

const root = createRoot(document.getElementById('app'))

root.render(<App />);
