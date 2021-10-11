//import Card from './card';
import { useState } from 'react';
import './styles.css';


const card_list = [ {name: "bob", image: "src/images/image.jpg" }, {name: "dave", image: "src"}, {name: "dave", image: "src"}, {name: "dave", image: "src"}, {name: "dave", image: "src"}, {name: "dave", image: "src"}, {name: "dave", image: "src"}, {name: "dave", image: "src"} ]

const game_Data = {score: 3, hiScore: 2}

const CardGrid = ({ CurrentScore, CurrentHiScore }) => {
    const [cards, setCards] = useState()

    useState(() => {
        setCards(
            <div className="card_grid">{
                card_list.map(cards =>
                <div className="card" key={Math.random()}>
                    <img onClick={shuffleCards} className="cardClass" alt={cards.name} src={cards.image} /> 
                </div>)}
            </div>  
    )}, []);


    function shuffleCards() {
        let new_card_list = card_list.sort(() => Math.random() - 0.5)
        console.log(game_Data['score'])
        CurrentScore(game_Data['score'])
        CurrentHiScore(game_Data['hiScore'])
        setCards(
            <div className="card_grid">{
                new_card_list.map(cards =>
                <div className="card" key={Math.random()}>
                    <img onClick={shuffleCards} className="cardClass" alt={cards.name} src={cards.image} /> 
                </div>)}
            </div>  
    )
        
    }

    
    return(
        cards
    );

}


export default CardGrid

