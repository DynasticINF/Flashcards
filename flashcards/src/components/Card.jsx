import './Card.css';

const Card = (props) => {

    return (
        <div className="flashcardContainer">
            <h2>{props.question}</h2>
            <h2>{props.answer}</h2>
        </div>
    )
}


export default Card