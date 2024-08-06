import React from "react";
import { useState, useEffect } from "react";
import { realTranslations } from "../../assets/realTranslations";
import Card from "../Card/Card";
import Toggle from "../ToggleTranslation/Toggle.jsx";
import Button from "../Button/Button";
import "./Training.css"

const Training = () => {
    const wordRegex = /^(.*)$/
    const wordAndPlural = /^(.*) *{(.*)}$/
    const wordAndTransRegex = /^(.*) *\((.*)\)$/
    const wordAndTransAndPluralRegex = /^(.*) *\((.*)\) *{(.*)}$/

    const [transJSON, setTransJSON] = useState([]);
    const [currentWord, setCurrentWord] = useState({word: "", translation: "", plural: ""});
    const [fromItalian, setFromItalian] = useState(false);
    //const [loading, setLoading] = useState(false);

    const [numCards, setNumCards] = useState(3);

    const [selectedCards, setSelectedCards] = useState([]);
    const [availableCards, setAvailableCards] = useState([]);

    const [numSets, setNumSets] = useState(1);
    const [chosenNumSet, setChosenNumSet] = useState(1);

    const minNum = 1, maxNum = 12;
    const minNumSets = 1, maxNumSets = 60;
    
    function changeWords(cards){
        let tempAvailableCards = [...cards];
        let tempSelectedCards = [];

        if(numCards >= minNum && numCards <= maxNum){
            for(let i=0; i<numCards && tempAvailableCards.length>0; i++){
                let index = Math.floor(Math.random() * tempAvailableCards.length);
                tempSelectedCards.push(tempAvailableCards[index]);
                tempAvailableCards.splice(index, 1);
            }
            
            console.log("tempSelectedCards");
            console.log(tempSelectedCards);
            console.log("tempAvailableCards");
            console.log(tempAvailableCards);
    
            setAvailableCards(tempAvailableCards);
            setSelectedCards(tempSelectedCards);
        }
        else{
            console.log("Not valid number");
        }
    }

    useEffect(() => {
        let matching;
        let updatedTransJSON = [];

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
            //console.log(updatedTransJSON);
        });
        setTransJSON(updatedTransJSON);
        
        changeWords(updatedTransJSON);

        //console.log("End of useEffect");

    }, []);

    /*
    useEffect(() => {
        if(!loading)
            changeWord();
    }, [loading])
    */

    return(
        <div id="training">
            <div className="flexContainer spaceFromAbove">
                <div className="cardContainer deep">
                    {selectedCards.map(x => 
                    <Card fromItalian={fromItalian} word={x.word} 
                        translation={x.translation} plural={x.plural}/>)}
                </div>
                <div className="flexContainer" id="rightSide">
                    <div className="buttonContainer">
                        <input type="number" className="deep number" 
                        onChange={(event) => setNumCards(event.target.value)} 
                        value={numCards} min={minNum} max={maxNum}></input>
                    </div>
                    <div className="buttonContainer">
                        <Toggle fromItalian={fromItalian} setFromItalian={setFromItalian} />
                    </div>
                    <div className="buttonContainer">
                        <Button onClick={() => changeWords(availableCards)} text="New" />
                    </div>
                    <div className="buttonContainer">
                        <Button onClick={() => {
                            changeWords(transJSON)
                            }} text="Restart" />
                    </div>
                    <div className="buttonContainer">
                    <div className="flexContainer deep buttonContainer" id="cardSets">
                        <div className="numberSubtitleContainer">
                            <input type="number" className="deep number" 
                            onChange={(event) => {setChosenNumSet(event.target.value)}} 
                            value={chosenNumSet} min={minNumSets} max={numSets}></input>
                            <p className="subtitle">Chosen</p>
                        </div>
                        
                        <div className="numberSubtitleContainer">
                            <input type="number" className="deep number" 
                            onChange={(event) => {setNumSets(event.target.value)}} 
                            value={numSets} min={minNumSets} max={maxNumSets}></input>
                            <p className="subtitle">#Sets</p>
                        </div>
                        
                        <Button text="Select" onClick={(event)=>{
                            if(numSets > maxNumSets)
                                setNumSets(maxNumSets);
                            else if(numSets < minNumSets)
                                setNumSets(minNumSets)
                            else if(chosenNumSet < minNumSets)
                                setChosenNumSet(minNumSets);
                            else if(chosenNumSet > maxNumSets)
                                setChosenNumSet(maxNumSets);
                            else{
                                let length = transJSON.length;
                                let delta = length / numSets;

                                changeWords(transJSON.slice(delta*(chosenNumSet-1),
                                 chosenNumSet<numSets ? delta*chosenNumSet : length));
                            }
                        }}></Button>
                    </div>
                    </div>
                    
                </div>
            </div>
            
            
        </div>
    )
}

export default Training;