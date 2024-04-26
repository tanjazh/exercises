import React from 'react'
import { StarFill, Star as StarEmpty, StarHalf, Star } from "react-bootstrap-icons"

export default function FiveStarRating({ rating }) {
    //declare star icon array
    const starlist = []
    //store number of filled stars
    const starFillCount = Math.floor(rating)
    //store if yes or no there is a half star
    const halfStarCount = (rating - parseInt(rating)) >= 0.5
    //push the filled star icon
    const emptyStarCount = 5 - starFillCount - (halfStarCount ? 1 : 0)

    //push half star icon, if needed
    for (let i = 0; i < starFillCount; i++) {
        starlist.push(<StarFill key={"star-filled" + i} />)
    }
    if (halfStarCount) {
        starlist.push(<StarHalf key={"half-star"} />)
    }
    //push the empty star icon
    for (let i = 0; i < emptyStarCount; i++) {
        starlist.push(<StarEmpty key={"star-empty" + i} />)
    }
    //render the star icon array
    return (
        <div>
            {starlist}
        </div>
    )
}
