import { Map } from '@/components/map';
import React from 'react';
import ReactDOM from 'react-dom';

const init = (rootId: string) => {
  const root = document.getElementById(rootId);
  if (root) {
    ReactDOM.render(<Map />, root);
  }
};

export { init };
