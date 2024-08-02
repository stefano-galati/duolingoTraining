import React, {useState} from "react";
import "./Card.css"

const Card = (props) => {
    
    const {word, translation, plural, fromItalian} = props;
    const [isFront, setIsFront] = useState(true);

    let front, back;

    if(fromItalian){
        front = [translation];
        back = [word, plural];
    }
    else{
        front = [word, plural];
        back = [translation];
    }

    //console.log(front);
    //console.log(back);

    return(
    <>
        <div className={"card " + fromItalian} onClick={() => setIsFront(x => !x)}>
            {isFront ? 
            front.map(x => <p>{x}</p>)
            :
            back.map(x => <p>{x}</p>)
            }
        </div>
    </>
    )
}

export default Card;