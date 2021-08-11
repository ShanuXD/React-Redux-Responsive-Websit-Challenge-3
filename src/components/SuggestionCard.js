import React from 'react'
import { Link } from 'react-router-dom'
import ImageData from "../images";

const SuggestionCard = ({name, category, id}) => {

    return (
        <div className="suggestion-card">
            <img
            className="item--image"
            alt={name}
            src={`${ImageData[name][0]}`}
            />
            <div className="suggestion-card--title">{name}</div>
            <Link to={"/"+category+"/"+id} className="btn">See Product</Link>            
        </div>
    )
}



export default SuggestionCard
