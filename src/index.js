import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Application from './Application';
import Amplify from 'aws-amplify';
import Configuration from './aws-exports'

Amplify.configure(Configuration);

ReactDOM.render(<Application />, document.getElementById('root'));
