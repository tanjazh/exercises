import React from 'react'
import './ComponentsStyle.css'
import FiveStarRating from './FiveStarRating'

export default function TVShowDetail({ tvShow }) {
    const rating = tvShow.vote_average / 2
    return (
        <div>
            <div className='title'>{tvShow.name}</div>
            <div className='rating_container'>
                <FiveStarRating rating={rating} />
                <span className='rating'>{rating}/5</span>
            </div>
            <div className='overview'>{tvShow.overview}</div>
        </div>
    )
}
