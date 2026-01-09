import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {library} from '@fortawesome/fontawesome-svg-core'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faHouse, faMagnifyingGlass, faCompass, faCirclePlay, faPaperPlane, faHeart, faPlus, faBars, faCircleHalfStroke, } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { BrowserRouter } from 'react-router-dom';

library.add(faFacebook, faHouse, faMagnifyingGlass, faCompass, faCirclePlay, faPaperPlane, faHeart, faPlus, faBars, faCircleHalfStroke, faHeartRegular)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
