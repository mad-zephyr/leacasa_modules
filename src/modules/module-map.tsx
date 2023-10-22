import { Map } from '@/components/map';
import React from 'react';
import ReactDOM from 'react-dom';

const init = (rootId: string = ".rootMap") => {
  const root = document.querySelector(rootId);

  if (!root) {
    console.log("Document element for reneder module not found");
  }

  if (root) {
    ReactDOM.render(<Map />, root);
  }
};

export { init };
