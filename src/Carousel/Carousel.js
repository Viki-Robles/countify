import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { Component } from "react";
import "./Carousel.css";
import payroll from "./images/payroll.png";
import accounting from "./images/accounting.png";
import development from "./images/development.png";
import consulting from "./images/consulting.png";
import taxes from "./images/taxes.png";
import hotel from "./images/hotel.png";
import ButtonDown from "../Buttons/ButtonDown";

const photos = [
    {
        name: 'photo1',
        services: 'Φοροτεχνικές',
        url: taxes
    },
    {
        name: 'photo2',
        services: 'Λογιστικές',
        url: accounting
    },
    {
        name: 'photo3',
        services: 'Συμβουλευτικές',
        url: consulting
    },
    {
        name: 'photo1',
        services: 'Μισθοδοσία',
        url: payroll
    },
    {
        name: 'photo2',
        services: 'Ανάπτυξη Επιχειρήσεων',
        url: development
    },
    {
        name: 'photo3',
        services: 'Ξενοδοχειακές',
        url: hotel
    }
]


export default class Carousel extends Component {
    render() {
        const settings = {
            infinite: true,
            dots: true,
            fade: true,
            speed: 500,
            slidesToShow: 3,
            arrows: true,
            slidesToScroll: 3,
            className: "slides"
        }
        return (
            <>
            <h4 className="carousel-header">Τι Υπηρεσίες Προσφέρουμε;</h4>
            <Slider {...settings}>
                {photos.map((photo) => {
                    return (

                        <div className="carousel-container" data-slick='{"slidesToShow": 4, "slidesToScroll": 4}'>
                            <div className="carousel-container-items">
                                <h4 className="carousel-container-title">{photo.services}</h4>
                                <img width="20%" src={photo.url} alt=""/>
                                <ButtonDown/>
                            </div>
                        </div>
                    )
                })}
            </Slider>
            </>

        );
    }
}