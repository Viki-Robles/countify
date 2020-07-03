import React from "react";
import NavBar from "../NavBar/NavBar";
import ServicesCards from "../Services/ServicesCards/ServicesCards";
import Team from "../Team/Team";
import MainText from "../MainText/MainText";
import Main from "../Main/Main";
import Carousel from "../Carousel/Carousel";

export default function Page() {
    return (
        <>
            <NavBar />
            <MainText />
            <Carousel/>
            <Main/>
            <ServicesCards />
            <Team />
            
        </>
    );
}