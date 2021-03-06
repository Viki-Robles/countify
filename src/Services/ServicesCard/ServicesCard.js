import React from "react";
import "./ServicesCard.css";

export default function ServicesCard({ title, details, picture }) {
    return (
        <div className="servicesCard-container" data-aos="fade-left">
            <h4 className="servicesCard-title">{title}</h4>
            <div className="servicesCard-picture">{picture}</div>
            <div className="servicesCard-details">{details}</div>
        </div>
    );
}