import React from "react";

const Toggle = ({fromItalian, setFromItalian}) => {
    console.log(fromItalian);

    return(
        <>  
            {/* () => inside of the onClick in order to avoid having it executed immediately */}
            <button onClick={() => setFromItalian(x => !x)}>{!fromItalian ? "From Italian" : "From German"}</button>
        </>
    )
}

export default Toggle;