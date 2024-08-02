import React from "react";
import { useState, useEffect } from "react";
import { realTranslations } from "../../assets/realTranslations";
import Card from "../Card/Card";
import Toggle from "../ToggleTranslation/toggle";

const Training = () => {
    const wordRegex = /^(.*)$/
    const wordAndPlural = /^(.*) *{(.*)}$/
    const wordAndTransRegex = /^(.*) *\((.*)\)$/
    const wordAndTransAndPluralRegex = /^(.*) *\((.*)\) *{(.*)}$/

    const [transJSON, setTransJSON] = useState([]);
    const [currentWord, setCurrentWord] = useState({word: "", translation: "", plural: ""});
    const [fromItalian, setFromItalian] = useState(false);
    const [loading, setLoading] = useState(false);

    function changeWord(){
        let elem = Math.floor(Math.random() * transJSON.length);
        setCurrentWord(transJSON[elem]);
        console.log("Random element: "+elem);
        console.log(currentWord);
        console.log(transJSON.length);
    }
    
    useEffect(() => {
        let matching;
        let updatedTransJSON = [];
        setLoading(true);

        realTranslations.split("\n").forEach(x => {
            
            if(wordAndTransAndPluralRegex.test(x)){
                matching = x.match(wordAndTransAndPluralRegex);
                updatedTransJSON.push({word: matching[1], translation: matching[2], plural: matching[3]});
            }
            else if(wordAndTransRegex.test(x)){
                matching = x.match(wordAndTransRegex);
                updatedTransJSON.push({word: matching[1], translation: matching[2]});
            }
            else if(wordAndPlural.test(x)){
                matching = x.match(wordAndPlural);
                updatedTransJSON.push({word: matching[1], plural: matching[2]});
            }
            else if(wordRegex.test(x)){
                matching = x.match(wordRegex);
                updatedTransJSON.push({word: matching[1]});
            };
            console.log(updatedTransJSON);
        });
        setTransJSON(updatedTransJSON);
        
        //setTransJSON is async :(

        let elem = Math.floor(Math.random() * updatedTransJSON.length);
        setCurrentWord(updatedTransJSON[elem]);
        console.log("Random element: "+elem);
        console.log(currentWord);

        //setTransJSON is async :(

        console.log("End of useEffect");

    }, []);

    /*
    useEffect(() => {
        if(!loading)
            changeWord();
    }, [loading])
    */

    return(
        <>
            <h1>HELLO!</h1>
            <Card fromItalian={fromItalian} word={currentWord.word} translation={currentWord.translation} plural={currentWord.plural} />
            <Toggle fromItalian={fromItalian} setFromItalian={setFromItalian} />
            <button onClick={changeWord}>New</button>
        </>
    )
}

export default Training;