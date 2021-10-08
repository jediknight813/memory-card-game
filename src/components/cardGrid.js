//import Card from './card';
import { useState } from 'react';
import './styles.css';


const cards = [ {name: "bob", image: "src/images/image.jpg" }, {name: "dave", image: "src"}, {name: "dave", image: "src"}, {name: "dave", image: "src"}, {name: "dave", image: "src"}, {name: "dave", image: "src"}, {name: "dave", image: "src"}, {name: "dave", image: "src"} ]

function CardGrid() {

    const [cards, setCards] = useState()

    setCards(
        <div>{
            cards.map(cards =>
            <div className="card" key={Math.random()}>
                <img onClick={pictureClicked} className="cardClass" alt={cards.name} src={cards.image} /> 
            </div>)}
        </div>  
    )
    
    return(
        <div id="card_grid" className="card_grid"> 
            cards
        </div>
    );

}


function pictureClicked(){  
    console.log('here')
}

export default CardGrid
