import { Map } from '@/components/map';
import React from 'react';
import ReactDOM from 'react-dom';

const init = (rootId: string) => {
  console.log("rootId", rootId)

  const root = document.querySelector(rootId);

  console.log("Root", root)

  root && ReactDOM.render(<Map />, root);
};

export { init };
