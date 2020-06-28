import React from "react";
import getServicesCard from "../getServicesCard";
import ServicesCard from "../ServicesCard/ServicesCard";
import "./ServicesCards.css";

export default function ServicesCardS() {
    return (
        <>
            <h2 className="servicesCards-header">Υπηρεσίες</h2>
            <div className="servicesCards">
                {
                    getServicesCard().map(({ title, details, id, picture }) => (
                        <ServicesCard
                            key={id}
                            id={id}
                            title={title}
                            details={details}
                            picture={picture}
                        />
                    ))
                }
            </div>
        </>
    );
}