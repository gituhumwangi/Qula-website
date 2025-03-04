import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className='about'>
            <div className="about-letf">
                <img src="https://images.pexels.com/photos/914388/pexels-photo-914388.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="about-img"  className='about-img'/>
            </div>
            <div className="about-right">
                <h3>ABOUT US</h3>
                <p>At DineFinder is designed to simplify the way people discover and book restaurants. 
                   Our platform provides users with comprehensive restaurant details, including menus, special offers, and real-time availability.
                   We make dining out hassle-free by offering seamless table reservations, personalized recommendations, and a space for users to share their experiences. </p>
                <p>Whether you're looking for a fine dining experience, a casual eatery, or a hidden gem, DineFinder connects you with the best options in your area. Join us and make every dining experience effortless and enjoyable!</p>
            </div>
        </div>
    )
}

export default About