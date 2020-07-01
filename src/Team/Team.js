import React from "react";
import teampicture from "../Team/images/teampicture.jpeg";
import "./Team.css";

export default function Team() {
    return (
        <div className="team">
            <div className="team-container">
                <h2 className="team-title">Η ομάδα</h2>
                <img src={teampicture} className="team-picture" />
                <h3>CEO</h3>
                <h3>Αδαμάντιος Βασιλόπουλος</h3>
            </div>
        </div>
    );
}