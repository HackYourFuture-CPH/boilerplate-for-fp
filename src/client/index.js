import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import AppContainer from './AppContainer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AppContainer />, document.getElementById('root'));

serviceWorker.unregister();
