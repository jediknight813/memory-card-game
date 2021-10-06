import Card from './card';
import './styles.css';


const cards = [ {name: "bob", image: "fish"}, {name: "dave", image: "bird"} ]

function cardGrid() {
    return(
        <div className="card_grid"> 
            {cards.map(cards =>
                <div> {cards.name} {cards.image} </div>  
            )}
        </div>
    );
}

export default cardGrid