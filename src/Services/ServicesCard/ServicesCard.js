import React from "react";
import "./ServicesCard.css";

export default function ServicesCard({ title, details, picture, icon }) {
    return (
        <div className="servicesCard-container">
            <h4 className="servicesCard-title">{title}</h4>
            <div className="servicesCard-picture">{picture}</div>
            <div className="servicesCard-details">{details}</div>
        </div>
    );
}