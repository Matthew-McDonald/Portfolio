//import React
import React from 'react';
import ReactDOM from 'react-dom';
//Import Styles
import './styles/index.css';
//Import BrowserRouter
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import Registered Service Worker


//IMPORT COMPONENTS
import Home from './components/Home.js';
import Base from './components/Base.jsx';


ReactDOM.render(<Home />, document.getElementById('root'));
