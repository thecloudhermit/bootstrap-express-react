import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';

require.context("../styles/", true, /\.(css)$/);
require.context("../static/", true, /\.(png|ico|html|txt)$/);

ReactDOM.render(<AppContainer />, document.getElementById('app'));
