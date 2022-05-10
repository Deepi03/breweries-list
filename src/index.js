import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Routes,
  Route
} from "react-router-dom";
import {
  BrowserRouter 
} from "react-router-dom";
import BreweryDetails from './components/breweryDetails';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
     <Routes>
       <Route path="/" element={<App />} />
        <Route exact path="/details/:id" element={<BreweryDetails />}  />                  
          <Route
          path="*"
          element={
          <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
          </main>
           }
          />                 
     </Routes> 
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
