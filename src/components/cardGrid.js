import { useState } from 'react';
import './styles.css';


const card_list = [{id: 0, selected: false, name: "bob", image: "src/images/image.jpg" }, {id: 1, selected: false, name: "dave", image: "src"}, {id: 2, selected: false, name: "dave", image: "src"}, {id: 3, selected: false, name: "dave", image: "src"}, {id: 4, selected: false, name: "dave", image: "src"}, {id: 5, selected: false, name: "dave", image: "src"}, {id: 6, selected: false, name: "dave", image: "src"}, {id: 7, selected: false ,name: "dave", image: "src"}]
const game_Data = {score: 0, hiScore: 0}


const CardGrid = ({ CurrentScore, CurrentHiScore }) => {
    const [cards, setCards] = useState()
    useState(() => {
        setCards(
            <div className="card_grid">{
                card_list.map(cards =>
                <div className="card" key={Math.random()}>
                    <img onClick={() => uodateScore(cards.id, cards.selected)} className="cardClass" alt={cards.name} src={cards.image} /> 
                </div>)}
            </div>  
    )}, []);


    function uodateScore(id, selected) {
        card_list.forEach(element => 
        {if (element['id'] === id) {
            if (element['selected'] === false){
                game_Data['score'] += 1
                element['selected'] = true
                if (game_Data['score'] > game_Data['hiScore']) {
                    game_Data['hiScore'] = game_Data['score']
                }
            }
        }}    
        );
        shuffleCards()

      }
      


    function shuffleCards() {
        let new_card_list = card_list.sort(() => Math.random() - Math.random())
        CurrentScore(game_Data['score'])
        CurrentHiScore(game_Data['hiScore'])
        setCards(
            <div className="card_grid">{
                new_card_list.map(cards =>
                <div className="card" key={Math.random()}>
                    <img onClick={() => uodateScore(cards.id, cards.selected)} className="cardClass" alt={cards.name} src={cards.image} /> 
                </div>)}
            </div>  )}

    
    return(
        cards
    );


}


export default CardGrid

