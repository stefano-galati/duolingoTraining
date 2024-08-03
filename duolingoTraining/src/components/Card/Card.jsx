import React, {useEffect, useState} from "react";
import "./Card.css"

const Card = (props) => {
    
    const {word, translation, plural, fromItalian} = props;
    const [isFront, setIsFront] = useState(true);

    let front, back, frontLanguage;

    if(fromItalian){
        front = [translation];
        back = [word, plural];
    }
    else{
        front = [word, plural];
        back = [translation];
    }

    //useEffect to upload states
    if(fromItalian){
        if(isFront)
            frontLanguage = "italian";
        else
            frontLanguage = "german"
    }
    else{
        if(isFront)
            frontLanguage = "german"
        else
            frontLanguage = "italian"
    }
    console.log("Front language: " + frontLanguage);
    
    //console.log(front);
    //console.log(back);
    console.log("deep card " + frontLanguage);

    return(
    <>
        <div className={"deep card " + frontLanguage} onClick={() => setIsFront(x => !x)}>
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