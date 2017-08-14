//import React
import React from 'react';
import ReactDOM from 'react-dom';
//Import Styles
import './styles/index.css';
//Import BrowserRouter
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import Registered Service Worker
import registerServiceWorker from './registerServiceWorker';

//IMPORT COMPONENTS
import Home from './components/Home.js';
import Base from './components/Base.jsx';

ReactDOM.render(
  <BrowserRouter>
    <Base>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Base>
  </BrowserRouter>,
 document.getElementById('root'));


registerServiceWorker();
