import { useHistory } from "react-router-dom";
import React from "react";

export default function ButtonDown() {
    const history = useHistory();

    function buttonDown() {
        return history.push("/ServicesCards");
    }

    return (
        <div className="buttonUp-wrapper">
            <button onClick={buttonDown}
                className="buttonUp">Περισσότερα</button>
        </div>
    );
}