import {h, render} from 'preact';
import {BrowserRouter} from 'react-router-dom';

import App from 'app';

render(
  <div id="mount">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>,
  document.body,
  document.getElementById('mount'),
);
