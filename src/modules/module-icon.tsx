import { Icon } from '@/components/icon';
import React from 'react';
import ReactDOM from 'react-dom';

const init = () => {
  const root = document.getElementById('root2');
  if (root) {
    ReactDOM.render(<Icon name='location' />, root);
  }
};

export { init };
