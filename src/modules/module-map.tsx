import { Map } from '@/components/map';
import React from 'react';
import ReactDOM from 'react-dom';

const init = (root: Element) => {
  if (!root) {
    console.log("Please provide the root element for render");
  } else {
    ReactDOM.render(<Map />, root);
  }
};

export { init };
