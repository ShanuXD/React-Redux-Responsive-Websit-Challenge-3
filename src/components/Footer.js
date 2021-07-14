import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="">
            <div className="footer container">
            <div className="footer__logo">
                <Link className="icon" to="/"></Link>
            </div>
            <ul className="footer__links">
                <li><Link className="footer--link" to="/">Home</Link></li>
                <li><Link className="footer--link" to="/headphones">Headphone</Link></li>
                <li><Link className="footer--link" to="/speakers">Speakers</Link></li>
                <li><Link className="footer--link" to="/earphones">Earphones</Link></li>
            </ul>
            <div className="footer__text">
                Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
            </div>
           
            <div className="footer__copyright">
                Copyright2021. All Rights Reserved
            </div>

            <ul className="footer__logos">
                <li className="logo--1"></li>
                <li className="logo--2"></li>
                <li className="logo--3"></li>
            </ul>

            </div>
        </footer>
    )
}

export default Footer
