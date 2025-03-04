import React from 'react';
import Slider from 'react-slick';
import './Home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true
    };

    return (
        <div className='hero-slider'>
            <Slider {...settings}>
                <div>
                    <img src="https://plus.unsplash.com/premium_photo-1670984940113-f3aa1cd1309a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D" 
                    alt="Restaurant 1" className="slide-image" />
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D" 
                    alt="Restaurant 2" className="slide-image" />
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1592417817038-d13fd7342605?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D" 
                    alt="Restaurant 3" className="slide-image" />
                </div>
            </Slider>
            <div className="hero-text">
                <h1>DineFinder - Your Ultimate Restaurant Guide & Booking App</h1>
                <p>Discover top dining spots effortlessly with DineFinder! Browse curated restaurant menus, find exclusive deals, check real-time opening hours, and reserve tables instantly. Get personalized recommendations, read authentic reviews, and share your favorite dining experiences with friends—all in one convenient platform.</p>
                <button className='btn'>Explore More</button>
            </div>
        </div>
    );
}

export default Hero