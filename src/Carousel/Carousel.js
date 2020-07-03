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
        url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.e-analysis.gr%2F%25CE%25B5%25CF%2580%25CE%25B9%25CF%2587%25CE%25B5%25CE%25B9%25CF%2581%25CE%25AE%25CF%2583%25CE%25B5%25CE%25B9%25CF%2582%2F%25CE%25BB%25CE%25BF%25CE%25B3%25CE%25B9%25CF%2583%25CF%2584%25CE%25B9%25CE%25BA%25CE%25AE%2F&psig=AOvVaw0MAALHeM5P4O9a6fY2_itU&ust=1593855544134000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDh-ODksOoCFQAAAAAdAAAAABAD'
    }
]


export default class Carousel extends Component {
    render() {
        const settings = {
            dots: true,
            fade: true,
            speed: 500,
            slidesToShow: 3,
            arrows: true,
            slidesToScroll: 3,
            className: "slides"
        }
        return (
                <Slider {...settings}>
                    {photos.map((photo) => {
                        return (
                            <div className="carousel-container">
                                <div className="carousel-container-items">
                                    <h4>{photo.services}</h4>
                                    <img width="20%" src={photo.url} />
                                </div>
                            </div>
                        )
                    })}
                </Slider>
        );
    }
}