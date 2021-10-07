import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
//import Card from './components/card';
import Footer from './components/footer';
import Header from './components/header';
import CardGrid from './components/cardGrid';
import ScoreCounter from './components/scorecounter';
import HiScoreCounter from './components/hiScoreCounter';


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <ScoreCounter />
    <HiScoreCounter />
    <CardGrid />
    <Footer /> 
  </React.StrictMode>,
  document.getElementById('root')
);
