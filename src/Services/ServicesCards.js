import React from "react";
import getServicesCard from "./getServicesCard";
import ServicesCard from "./ServicesCard";

export default function ServicesCardS() {
    return (
        <>
        <h2 className="servicesCards-header">Υπηρεσίες</h2>
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
        </>
    );
}