import 'es6-shim'; // yeah, polyfill all the things !!!
import 'whatwg-fetch'; // yeah, polyfill all the things !!!
import Symbol from 'es-symbol';
import React from 'react';
import ReactDOM from 'react-dom';
import { WineApp } from './components';
import './index.css';
import {BrowserRouter as Router} from "react-router-dom";


if (!window.Symbol) {
  window.Symbol = Symbol; // yeah, polyfill all the things !!!
}
const root = 
  window.location.hostname=== 'react-bootcamp.github.io' ? '/react-wines-102-bis/' : '/';

ReactDOM.render(
  <Router basename={root}>
    <WineApp />
  </Router>,
  document.getElementById('root'));
