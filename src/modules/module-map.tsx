import { Map } from '@/components/map';
import React from 'react';
import ReactDOM from 'react-dom';

const init = (rootId: string = ".rootMap") => {
  console.log("rootId", rootId)
  const root = document.querySelector(rootId);
  console.log("Root hello -//", root)

  if (root) {
    ReactDOM.render(<Map />, root);
  }
};

export { init };
