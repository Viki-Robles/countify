import React from "react";
import NavBar from "../NavBar/NavBar";
import ServicesCards from "../Services/ServicesCards/ServicesCards";
import Team from "../Team/Team";
import MainText from "../MainText/MainText";
import Main from "../Main/Main";

export default function Page() {
    return (
        <>
            <NavBar />
            <MainText />
            <Main/>
            <ServicesCards />
            <Team />
        </>
    );
}