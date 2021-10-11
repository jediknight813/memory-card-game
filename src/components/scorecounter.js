import './styles.css';


function scoreCounter(data) {
    console.log(data)
    return(
        <div className="scoreCounter">
            <h1> Score: {data['data']} </h1>
        </div>
    );
}


export default scoreCounter
