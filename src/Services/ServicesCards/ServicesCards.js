import React from "react";
import getServicesCard from "../getServicesCard";
import ServicesCard from "../ServicesCard/ServicesCard";
import "./ServicesCards.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function ServicesCardS() {
    useEffect(() => {
        AOS.init({ duration: 2000, delay: 450 });
      }, []);
    return (
        <>
            <h2 className="servicesCards-header" data-aos="fade-left">Υπηρεσίες<span>.</span></h2>
            <div className="servicesCards">
                {
                    getServicesCard().map(({ title, details, id, picture, icon }) => (
                        <ServicesCard
                            key={id}
                            id={id}
                            title={title}
                            details={details}
                            picture={picture}
                            icon={icon}
                        />
                    ))
                }
            </div>
        </>
    );
}