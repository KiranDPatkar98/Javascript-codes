import React from 'react';
import ReactDOM from 'react-dom';

// import Header from './lifecycle';
// import Count from './Count';
import Football from "./practice"
import reportWebVitals from './reportWebVitals';
var cars=["bmw","benz","innova","jaguar"]

ReactDOM.render(
// //  <React.StrictMode>
//     { /* <Count addValue="1" subValue="1"/>
//     <Count addValue="10" subValue="5"/>
//     <Count addValue="100" subValue="50"/> */}
//     {/* <Header favcol="black"/> */}
    <App/>,


  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
