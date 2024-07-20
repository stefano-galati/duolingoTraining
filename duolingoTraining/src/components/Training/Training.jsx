import React from "react";
import { useState, useEffect } from "react";
import { realTranslations } from "../../assets/realTranslations";
import Card from "../Card/Card";

const Training = () => {
    const wordRegex = /^(.*)$/
    const wordAndPlural = /^(.*) *{(.*)}$/
    const wordAndTransRegex = /^(.*) *\((.*)\)$/
    const wordAndTransAndPluralRegex = /^(.*) *\((.*)\) *{(.*)}$/

    const transJSON = [];
    let matching;
    
    realTranslations.split("\n").forEach(x => {
        console.log(x);
        if(wordAndTransAndPluralRegex.test(x)){
            console.log("wordTransPlural")
            matching = x.match(wordAndTransAndPluralRegex);
            transJSON.push({word: matching[1], translation: matching[2], plural: matching[3]});
        }
        else if(wordAndTransRegex.test(x)){
            console.log("wordTrans")
            matching = x.match(wordAndTransRegex);
            transJSON.push({word: matching[1], translation: matching[2]});
        }
        else if(wordAndPlural.test(x)){
            console.log("wordPlural");
            matching = x.match(wordAndPlural);
            transJSON.push({word: matching[1], plural: matching[2]});
        }
        else if(wordRegex.test(x)){
            console.log("word")
            matching = x.match(wordRegex);
            transJSON.push({word: matching[1]});
        }

        //console.log(matching);

    });
    console.log(transJSON);

    const elem = Math.floor(Math.random() * transJSON.length);
    const {word, translation, plural} = transJSON[elem];

    return(
        <>
            <h1>HELLO!</h1>
            <Card word={word} translation={translation} plural={plural} />
        </>
    )
}

export default Training;