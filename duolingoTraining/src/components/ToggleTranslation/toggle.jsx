import React from "react";
import "./Toggle.css";
import "../Card/Card.css"

const Toggle = ({fromItalian, setFromItalian}) => {
    //console.log(fromItalian);

    return(
        <div className="toggle">  
            {/* () => inside of the onClick in order to avoid having it executed immediately */}
            <button className="deep button" onClick={() => setFromItalian(x => !x)}>{!fromItalian ? "From Italian" : "From German"}</button>
        </div>
    )
}

export default Toggle;