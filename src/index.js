import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from './COMPONENTS/home';
import Registration from './COMPONENTS/register';
import Login from './COMPONENTS/login';
import Admin from './COMPONENTS/admin/admin';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
 
    <Route path="/" element={ <Home/>}/>
    <Route path="/register" element={ <Registration/>}/>
    <Route path="/login" element={ <Login/>}/>
    <Route path="/admin" element={ <Admin/>}/>

  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
