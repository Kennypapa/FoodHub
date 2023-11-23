import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import './assets/css/hub.css';
import './assets/js/hub';
import './assets/js/typewrite';
import App from './App.js';
import Cuisine from './pages/Cuisine';
import Home from './pages/Home';
import Searched from './components/Sidebar';
import Recipe from './pages/recipe' 
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <Routes>
       <Route path="" element={<App/>} >
          <Route path="/home" element={<Home/>} ></Route>
          <Route path="/cuisine/:type" element={<Cuisine/>} ></Route>
          <Route path="/searched/:search" element={<Searched/>} ></Route>
          <Route path="/recipe/:name" element={<Recipe/>} ></Route>
       </Route>
     </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
