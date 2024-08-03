import React, {useEffect, useState} from "react";
import "./Card.css"

const Card = (props) => {
    
    const {word, translation, plural, fromItalian} = props;
    const [isFront, setIsFront] = useState(true);

    let front, back, frontLanguage;

    //change content
    if(fromItalian){
        front = [translation];
        back = [word, plural];
    }
    else{
        front = [word, plural];
        back = [translation];
    }

    //useEffect to upload states

    //set front language
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

    useEffect(()=>{setIsFront(true)}, [props]);

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