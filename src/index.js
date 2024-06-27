import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import reportWebVitals from './reportWebVitals';
import ApplystylesusingCondition from './ApplystylesusingCondition';
import BootstrapComponent from './BootstrapComponent';
import MuiList from './MuiList';
import Axios from './Axios';
import UsersList from './Axios';
import UseRef from './UseRef';
import Addvalue from './Addvalue';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <UseRef />
  <Addvalue />
    {/* <Axios /> */}
{/*     <UsersList /> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
