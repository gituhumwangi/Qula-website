import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className='about'>
            <div className="about-letf">
                <img src="https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=nadine-primeau--ftWfohtjNw-unsplash.jpg" 
                alt="about-img"  className='about-img'/>
            </div>
            <div className="about-right">
                <h3>ABOUT US</h3>
                <p>At Qula, we believe that fostering a culture of wellness begins with education, inspiration, and community.
                    Our platform is designed to provide personalized support, expert guidance, and a wealth of resources to help you make informed choices and achieve your wellness goals.
                    Whether you're seeking nutritious recipes, meal planning tips, or simply a supportive community to share your journey with, Qula is here to support you every step of the way.</p>
                <p>But Qula is more than just a platform—it's a vibrant community of like-minded individuals united by a shared commitment to wellness.
                    Our team of passionate experts is dedicated to providing you with the tools and knowledge you need to thrive, both in and out of the kitchen.</p>
                <p>Join us on this journey to a healthier, happier you. Together, let's embrace the power of good eating habits and inspire a world of wellness, one delicious bite at a time.</p>
            </div>
        </div>
    )
}

export default About