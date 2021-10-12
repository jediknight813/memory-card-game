import { useState } from 'react';
import './styles.css';

import imageOne from './images/imageOne.png'
import imageTwo from './images/ImageTwo.JPG'
import imageThree from './images/imageThree.jpg'
import imageFour from './images/ImageFour.jpg'
import imageFive from './images/ImageFive.jpg'
import imageSix from './images/imageSix.jpg'
import imageSeven from './images/imageSeven.jpg'
import imageEight from './images/imageEight.png'


const card_list = [{id: 0, selected: false, name: "bob", image: imageOne }, {id: 1, selected: false, name: "dave", image: imageTwo}, {id: 2, selected: false, name: "dave", image: imageThree}, {id: 3, selected: false, name: "dave", image: imageFour}, {id: 4, selected: false, name: "dave", image: imageFive}, {id: 5, selected: false, name: "dave", image: imageSix}, {id: 6, selected: false, name: "dave", image: imageSeven}, {id: 7, selected: false ,name: "dave", image: imageEight}]
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
            }
            else {
                game_Data['score'] = 0
                resetCards(card_list)
            }
            
        }}    
        );

        if (game_Data['score'] > game_Data['hiScore']) {
            game_Data['hiScore'] = game_Data['score']
        }

        shuffleCards()

      }


      function resetCards(dict){
          dict.forEach(element => {
              element['selected'] = false
          })
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

