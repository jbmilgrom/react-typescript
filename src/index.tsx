import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Hello } from './components/Hello';

let four = 4;

ReactDOM.render(
  <Hello compiler="TypescriptTho" framework="ReactTho" />,
    document.getElementById('exampleTho')
);