import React from 'react'
import { Link } from 'react-router-dom'

const SuggestionCard = ({name, image}) => {
    return (
        <div className="suggestion-card">
            <div className="suggestion-card--image"></div>
            <div className="suggestion-card--title"></div>
            <Link>See Product</Link>            
        </div>
    )
}

export default SuggestionCard
