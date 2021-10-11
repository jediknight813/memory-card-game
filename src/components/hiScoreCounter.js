import './styles.css';


function hiScoreCounter(data) {
    return(
        <div className="hiScoreCounter">
            <h1> Hi-Score: {data['data']} </h1>
        </div>
    );
}


export default hiScoreCounter
