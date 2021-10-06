import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Card from './components/card';
import Footer from './components/footer';
import Header from './components/header';


ReactDOM.render(
  <React.StrictMode>
    <Header />
 
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
