import React from "react";
import NavBar from "../NavBar/NavBar";
import ServicesCards from "../Services/ServicesCards/ServicesCards";
import Team from "../Team/Team";
import MainText from "../MainText/MainText";
import Main from "../Main/Main";
import Carousel from "../Carousel/Carousel";
import Footer from "../Footer/Footer";
import Hero from '../Hero/Hero';

export default function Page() {
    return (
        <>
            <NavBar />
            <MainText />
            <Hero/>
            <Main/>
            <ServicesCards />
            <Team />
            <Footer/>
        </>
    );
}