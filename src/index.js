import React from 'react';
//import ReactDOM from 'react-dom';
//import App from './App';
//import Card from './components/card';
import Footer from './components/footer';
import Header from './components/header';
import CardGrid from './components/cardGrid';
import ScoreCounter from './components/scorecounter';
import HiScoreCounter from './components/hiScoreCounter';
import { render } from '@testing-library/react';
import { useState } from 'react/cjs/react.development';


export function App() {
  const [currentScore, updateCurrentScore] = useState(0)
  const [currentHiScore, updateCurrentHiScore] = useState(0)


  const CurrentScore = (score) => {
    updateCurrentScore(score);
  }

  const CurrentHiScore = (score) => {
    updateCurrentHiScore(score);
  }



    return (
      <div>
        <Header />
        <ScoreCounter data={currentScore} />
        <HiScoreCounter data={currentHiScore} />
        <CardGrid CurrentScore={CurrentScore} CurrentHiScore={CurrentHiScore} />
        <Footer /> 
      </div>
    )
  }


render(<App/>, window.document.getElementById("root") )

