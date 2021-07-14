import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
    return (
        <div className="hero">
            <div className="hero--image"></div>
            <div className="hero__text container">
                <div className="alert-text">new product</div>
                <div className="heading-text">XX99 Mark II Headphones</div>
                <div className="sub-heading-text">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast</div>
                <Link to={`/headphones/${2}`} className="btn">See Products</Link>
            </div>
        </div>
    )
}

export default HeroSection
