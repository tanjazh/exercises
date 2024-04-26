import React from 'react'
import './ComponentsStyle.css'
import { COMPACT_IMG_COVER_BASE_URL } from '../api/Config'

const MAX_TITLE_LETTERS = 35

export default function TVShowListItem({ tvShow, onClick }) {
    const onClick_ = () => {
        onClick(tvShow)
    }
    return (
        <>
            <div onClick={onClick_} className='rec-container'>
                <img
                    alt={tvShow.name}
                    src={COMPACT_IMG_COVER_BASE_URL + tvShow.backdrop_path}
                    className='rec_img'
                />
                <div className='rec-title'>
                    {tvShow.name.length > MAX_TITLE_LETTERS ? tvShow.name.slice(0, MAX_TITLE_LETTERS) + "..."
                        : tvShow.name}
                </div>
            </div>
        </>


    )
}
