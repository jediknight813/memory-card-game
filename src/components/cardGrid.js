import { useState } from 'react';
import './styles.css';

import imageOne from './images/imageOne.jpg'
import imageTwo from 'src/components/images/ImageTwo.JPG'
import imageThree from 'src/components/images/imageThree.jpg'
import imageFour from 'src/components/images/ImageFour.jpg'
import imageFive from 'src/components/images/ImageFive.jpg'
import imageSix from 'src/components/images/imageSix.PNG'
import imageSeven from 'src/components/images/imageSeven.jpg'
import imageEight from 'src/components/images/imageEight.png'


const card_list = [{id: 0, selected: false, name: "bob", image: imageOne }, {id: 1, selected: false, name: "dave", image: "src"}, {id: 2, selected: false, name: "dave", image: "src"}, {id: 3, selected: false, name: "dave", image: "src"}, {id: 4, selected: false, name: "dave", image: "src"}, {id: 5, selected: false, name: "dave", image: "src"}, {id: 6, selected: false, name: "dave", image: "src"}, {id: 7, selected: false ,name: "dave", image: "src"}]
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

