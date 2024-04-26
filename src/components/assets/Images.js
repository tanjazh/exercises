import React from 'react'

export function Image1({ imgSrc, alt }) {
    return (
        <div className='img-container'>
            <img src={imgSrc} alt={alt} />
        </div>
    )
}

