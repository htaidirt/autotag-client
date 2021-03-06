import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import amplifyConfig from './config/amplify';
import App from './setup/app';
import * as serviceWorker from './serviceWorker';

import 'semantic-ui-css/semantic.min.css';
import './style.css';

Amplify.configure(amplifyConfig);
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
