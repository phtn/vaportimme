import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import VerifyAge from './Verify'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<VerifyAge />, document.getElementById('root'));
registerServiceWorker();
