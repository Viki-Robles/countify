import React from "react";
import NavBar from "../NavBar/NavBar";
import ServicesCards from "../Services/ServicesCards/ServicesCards";
import Team from "../Team/Team";
import MainText from "../MainText/MainText";

export default function Page() {
    return (
        <>
            <NavBar />
            <MainText />
            <ServicesCards />
            <Team />
        </>
    );
}