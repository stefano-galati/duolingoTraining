import React from "react";
import "./Button.css"

export default function Button(props){
    let {text, onClick} = props;

    return(
        <button className="deep button" onClick={onClick}>{text}</button>
    )
}