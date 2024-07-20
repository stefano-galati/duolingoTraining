import React from "react";
import "./Card.css"

const Card = (props) => {
    
    const {word, translation, plural} = props;
    
    return(
    <>
        <div className="card">
            {word && <p>{word}</p>}
            {translation && <p>{translation}</p>}
            {plural && <p>{plural}</p>}
        </div>
    </>
    )
}

export default Card;