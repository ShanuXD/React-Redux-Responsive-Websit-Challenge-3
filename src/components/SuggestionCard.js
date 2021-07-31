import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import ProductList from "../Data";
import ImageData from "../images";

const SuggestionCard = ({name}) => {

    return (
        <div className="suggestion-card">
            <img
            className="item--image"
            alt={name}
            src={`${ImageData[name][0]}`}
            />
            <div className="suggestion-card--title">{name}</div>
            <Link to="/" className="btn">See Product</Link>            
        </div>
    )
}



export default SuggestionCard
